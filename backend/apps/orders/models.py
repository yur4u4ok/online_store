from django.contrib.auth import get_user_model
from django.db import models

from apps.products.models import ProductModel

UserModel = get_user_model()


class OrderModel(models.Model):
    class Meta:
        db_table = 'orders'
    
    user = models.ForeignKey(UserModel, on_delete=models.CASCADE, related_name='order')
    created_at = models.DateTimeField(auto_now_add=True)
    total_price = models.IntegerField()
    

class OrderItem(models.Model):
    order = models.ForeignKey(OrderModel, on_delete=models.CASCADE)
    product = models.ForeignKey(ProductModel, on_delete=models.CASCADE)
