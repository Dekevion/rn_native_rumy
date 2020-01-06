from django.contrib import admin
from .models import UserModel, CoordinatesModel

# Register your models here.
admin.site.register(UserModel)
admin.site.register(CoordinatesModel)
