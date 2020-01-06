from rest_framework import viewsets

from .models import UserModel, CoordinatesModel
from .serializers import UserSerializer, CoordinatesSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = UserModel.objects.all()

    serializer_class = UserSerializer


class CoordinatesViewSet(viewsets.ModelViewSet):
    queryset = CoordinatesModel.objects.all()

    serializer_class = CoordinatesSerializer
