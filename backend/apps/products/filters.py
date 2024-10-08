from django_filters import rest_framework as filters


class ProductFilter(filters.FilterSet):
    price_lt = filters.NumberFilter('price','lt')
    price_gt = filters.NumberFilter('price','gt')
    name = filters.CharFilter('name','icontains')
    order = filters.OrderingFilter(
        fields=(
            'id',
            'price'
        )
    )
