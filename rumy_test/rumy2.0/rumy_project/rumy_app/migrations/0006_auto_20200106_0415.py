# Generated by Django 2.2 on 2020-01-06 04:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rumy_app', '0005_auto_20200106_0244'),
    ]

    operations = [
        migrations.AlterField(
            model_name='coordinatesmodel',
            name='latitude',
            field=models.DecimalField(decimal_places=10, default=0, max_digits=10),
        ),
        migrations.AlterField(
            model_name='coordinatesmodel',
            name='longitude',
            field=models.DecimalField(decimal_places=10, default=0, max_digits=10),
        ),
    ]
