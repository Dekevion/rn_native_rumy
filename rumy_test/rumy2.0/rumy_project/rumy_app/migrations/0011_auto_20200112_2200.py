# Generated by Django 2.2 on 2020-01-12 22:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('rumy_app', '0010_auto_20200112_1921'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='usermodel',
            name='latitude',
        ),
        migrations.RemoveField(
            model_name='usermodel',
            name='longitude',
        ),
    ]