from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserModel, CoordinatesModel


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ['id', 'name', 'password']
        # extra_kwargs = {'password': {'write_only': True, 'required': True}}


class CoordinatesSerializer(serializers.ModelSerializer):
    class Meta:
        model = CoordinatesModel
        fields = ['id', 'latitude', 'longitude']
