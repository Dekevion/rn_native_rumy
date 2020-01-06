# Generated by Django 2.2 on 2020-01-06 02:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rumy_app', '0004_auto_20200103_1236'),
    ]

    operations = [
        migrations.CreateModel(
            name='CoordinatesModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('latitude', models.DecimalField(decimal_places=8, default=0, max_digits=10)),
                ('longitude', models.DecimalField(decimal_places=8, default=0, max_digits=10)),
            ],
        ),
        migrations.RemoveField(
            model_name='usermodel',
            name='latitude',
        ),
        migrations.RemoveField(
            model_name='usermodel',
            name='longitude',
        ),
    ]
