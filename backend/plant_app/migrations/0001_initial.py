# Generated by Django 5.0.6 on 2024-05-19 05:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Plant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('plant_name', models.CharField()),
                ('image_url', models.TextField()),
                ('ph_max', models.DecimalField(decimal_places=2, max_digits=4)),
                ('ph_min', models.DecimalField(decimal_places=2, max_digits=4)),
                ('atmospheric_humidity', models.IntegerField()),
            ],
        ),
    ]