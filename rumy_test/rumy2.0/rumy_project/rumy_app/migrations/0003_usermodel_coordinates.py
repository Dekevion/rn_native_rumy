# Generated by Django 2.2 on 2020-01-03 12:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rumy_app', '0002_auto_20191224_1224'),
    ]

    operations = [
        migrations.AddField(
            model_name='usermodel',
            name='coordinates',
            field=models.DecimalField(decimal_places=6, default=0, max_digits=10),
        ),
    ]
