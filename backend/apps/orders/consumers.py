from djangochannelsrestframework.generics import GenericAsyncAPIConsumer

from apps.orders.models import OrderModel
from apps.orders.serializers import OrderSerializer


class OrderConsumer(GenericAsyncAPIConsumer):
    queryset = OrderModel.objects.all()
    serializer_class = OrderSerializer

    async def send_order_notification(self, event):
        order = event['order']
        await self.send_json({
            'message': f"New order created: {order['id']}, total: {order['total_price']}"
        })
