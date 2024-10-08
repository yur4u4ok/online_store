from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from apps.categories.models import CategoryModel
from apps.products.models import ProductModel
from apps.categories.serializers import CategorySerializer
from apps.products.serializers import ProductSerializer

from core.permissions import IsSuperUserOrReadOnly


class CategoryListCreateView(ListCreateAPIView):
    """
    Get and create categories
    (create only for superuser)
    """
    queryset = CategoryModel.objects.all()
    serializer_class = CategorySerializer
    permission_classes = (IsSuperUserOrReadOnly,)


class CategoryGetUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    """
    Get, update or delete category by id
    (update and delete only for superuser)
    """
    queryset = CategoryModel.objects.all()
    serializer_class = CategorySerializer
    permission_classes = (IsSuperUserOrReadOnly,)


class CategoryListCreateProductView(ListCreateAPIView):
    """
    Get and create products by category id
    (create only for superuser)
    """
    serializer_class = ProductSerializer
    permission_classes = (IsSuperUserOrReadOnly,)

    def get_queryset(self):
        return ProductModel.objects.select_related('category').filter(category__pk=self.kwargs['pk'])

    def perform_create(self, serializer):
        category = CategoryModel.objects.get(pk=self.kwargs['pk'])
        serializer.save(category=category)
