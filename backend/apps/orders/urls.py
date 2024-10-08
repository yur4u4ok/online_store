from django.urls import path

from apps.orders.views import ListCreateOrdersView


urlpatterns = [
    path('', ListCreateOrdersView.as_view(), name='list_create_orders')
]