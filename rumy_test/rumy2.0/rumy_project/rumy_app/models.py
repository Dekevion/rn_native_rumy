from django.db import models


# Create your models here.
class UserModel(models.Model):
    username = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=50)


    def __str__(self):
        return f'Username: {self.username} Password: {self.password}'


class CoordinatesModel(models.Model):
    latitude = models.DecimalField(max_digits=10, decimal_places=8, default=0)
    longitude = models.DecimalField(max_digits=10, decimal_places=8, default=0)

    def __str__(self):
        return f'Latitude: {self.latitude} Longitude: {self.longitude}'
