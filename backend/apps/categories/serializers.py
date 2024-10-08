from rest_framework.serializers import ModelSerializer

from apps.categories.models import CategoryModel


class CategorySerializer(ModelSerializer):
    class Meta:
        model = CategoryModel
        fields = ('id', 'name')
