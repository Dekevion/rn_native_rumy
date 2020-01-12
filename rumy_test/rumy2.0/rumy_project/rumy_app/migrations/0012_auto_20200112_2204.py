# Generated by Django 2.2 on 2020-01-12 22:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rumy_app', '0011_auto_20200112_2200'),
    ]

    operations = [
        migrations.AddField(
            model_name='usermodel',
            name='latitude',
            field=models.DecimalField(decimal_places=10, default=0, max_digits=10),
        ),
        migrations.AddField(
            model_name='usermodel',
            name='longitude',
            field=models.DecimalField(decimal_places=10, default=0, max_digits=10),
        ),
    ]
