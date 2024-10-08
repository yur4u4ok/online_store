from rest_framework.serializers import ModelSerializer, RelatedField

from apps.products.models import ProductModel

from core.dataclasses.category_dataclass import Category


class CategoryRelatedFieldSerializer(RelatedField):
    def to_representation(self, value: Category):
        return {'id': value.id, 'name': value.name}


class ProductSerializer(ModelSerializer):
    category = CategoryRelatedFieldSerializer(read_only=True)

    class Meta:
        model = ProductModel
        fields = ('id', 'name', 'description', 'price', 'category')
