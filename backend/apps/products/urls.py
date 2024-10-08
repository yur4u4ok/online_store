from django.urls import path

from apps.products.views import ProductsListView, ProductGetUpdateDestroyView


urlpatterns = [
    path('', ProductsListView.as_view(), name='list_products'),
    path('/<int:pk>', ProductGetUpdateDestroyView.as_view(), name='get_update_delete_product'),
]