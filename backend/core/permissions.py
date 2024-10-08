from rest_framework.permissions import BasePermission, SAFE_METHODS
from rest_framework.request import Request


class IsSuperUserOrReadOnly(BasePermission):
    def has_permission(self, request: Request, view):
        return bool(
            request.method in SAFE_METHODS or
            request.user and 
            request.user.is_staff and 
            request.user.is_superuser
        )
