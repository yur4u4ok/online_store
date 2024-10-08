from django.db.models import Sum

from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync

from rest_framework import status
from rest_framework.response import Response
from rest_framework.generics import ListCreateAPIView

from apps.products.models import ProductModel
from apps.orders.models import OrderModel, OrderItem
from apps.orders.serializers import OrderSerializer, ProductIDListSerializer

from core.services.email_service import EmailService


class ListCreateOrdersView(ListCreateAPIView):
    """
    Get and create orders for logined user
    """

    serializer_class = OrderSerializer

    def get_queryset(self):
        return OrderModel.objects.filter(user=self.request.user)

    def post(self, *args, **kwargs):
        data = self.request.data
        
        serializer = ProductIDListSerializer(data=data)
        serializer.is_valid(raise_exception=True)

        products_ids = serializer.data['product_ids']
        products = ProductModel.objects.filter(id__in=products_ids)
        total_price = products.aggregate(total_price=Sum('price'))['total_price']

        order = OrderModel.objects.create(user=self.request.user, total_price=total_price)
        serializer = OrderSerializer(order)

        order_items = [OrderItem(order=order, product=product) for product in products]
        OrderItem.objects.bulk_create(order_items)

        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)(
            "order_notifications",
            {
                "type": "send_order_notification",
                "order": {
                    "id": serializer.data['id'],
                    "total_price": total_price,
                }
            }
        )

        EmailService.make_order(user=self.request.user, order_id=serializer.data['id'])
        return Response(serializer.data, status=status.HTTP_201_CREATED)
