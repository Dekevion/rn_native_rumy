from rest_framework import routers
from .models import UserModel
from .api import UserViewSet, CoordinatesViewSet
from django.urls import path, include
from . import views

router = routers.DefaultRouter()

router.register('user', UserViewSet)
router.register('coordinate', CoordinatesViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('user_verify/', views.client_to_server, name='verify')
]
