from django.core import validators as V
from django.db import models

from apps.categories.models import CategoryModel


class ProductModel(models.Model):
    class Meta:
        db_table = 'products'
    
    name = models.CharField(max_length=50)
    description = models.TextField()
    price = models.IntegerField(validators=[V.MinValueValidator(0)])
    category = models.ForeignKey(CategoryModel, on_delete=models.CASCADE, related_name='product')
