from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework.permissions import AllowAny

from apps.products.models import ProductModel
from apps.products.filters import ProductFilter
from apps.products.serializers import ProductSerializer

from core.permissions import IsSuperUserOrReadOnly


class ProductsListView(ListAPIView):
    """
    Get all products
    """
    queryset = ProductModel.objects.all()
    serializer_class = ProductSerializer
    permission_classes = (AllowAny,)
    filterset_class = ProductFilter


class ProductGetUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    """
    Get, update or delete product by id
    (update and delete only for superuser)
    """
    queryset = ProductModel.objects.all()
    serializer_class = ProductSerializer
    permission_classes = (IsSuperUserOrReadOnly,)
