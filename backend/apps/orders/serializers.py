from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from rest_framework.exceptions import ValidationError

from apps.orders.models import OrderModel, OrderItem
from apps.products.models import ProductModel


class OrderSerializer(ModelSerializer):
    class Meta:
        model = OrderModel
        fields = ('id', 'user', 'created_at', 'total_price')
        read_only_fields = ('id', 'user', 'created_at', 'total_price')


class OrderItemSerializer(ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ['id', 'order', 'product']


class ProductIDListSerializer(serializers.Serializer):
    product_ids = serializers.ListField(
        child=serializers.IntegerField(),
        allow_empty=False
    )

    def validate_product_ids(self, value):
        products = ProductModel.objects.filter(id__in=value)
        
        if len(products) != len(value):
            existing_ids = set(products.values_list('id', flat=True))
            missing_ids = [prod_id for prod_id in value if prod_id not in existing_ids]
            raise ValidationError(f"Invalid product IDs: {missing_ids}")
        
        return value
