from django.urls import path

from apps.categories.views import CategoryListCreateView, CategoryGetUpdateDestroyView, CategoryListCreateProductView


urlpatterns = [
    path('', CategoryListCreateView.as_view(), name='list_create_categories'),
    path('/<int:pk>', CategoryGetUpdateDestroyView.as_view(), name='get_update_delete_categories'),
    path('/<int:pk>/products', CategoryListCreateProductView.as_view(), name='get_create_product'),

]