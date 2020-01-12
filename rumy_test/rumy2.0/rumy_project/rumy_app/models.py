from django.db import models


# Create your models here.
class UserModel(models.Model):
    name = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=50)


    def __str__(self):
        return f'Username: {self.name} Password: {self.password}'


class CoordinatesModel(models.Model):
    latitude = models.DecimalField(max_digits=15, decimal_places=12, )
    longitude = models.DecimalField(max_digits=15, decimal_places=12, )

    def __str__(self):
        return f'Latitude: {self.latitude} Longitude: {self.longitude}'
