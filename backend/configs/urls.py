from django.urls import path, include


urlpatterns = [
    path('api/auth', include('apps.auth.urls')),
    path('api/products', include('apps.products.urls')),
    path('api/categories', include('apps.categories.urls')),
    path('api/orders', include('apps.orders.urls')),
]
