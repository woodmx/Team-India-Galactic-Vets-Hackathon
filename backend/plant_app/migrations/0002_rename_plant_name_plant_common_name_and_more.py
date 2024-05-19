# Generated by Django 5.0.6 on 2024-05-19 08:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('plant_app', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='plant',
            old_name='plant_name',
            new_name='common_name',
        ),
        migrations.RenameField(
            model_name='plant',
            old_name='ph_max',
            new_name='ph_maximum',
        ),
        migrations.RenameField(
            model_name='plant',
            old_name='ph_min',
            new_name='ph_minimum',
        ),
        migrations.AddField(
            model_name='plant',
            name='light',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='plant',
            name='slug',
            field=models.CharField(default='plant slug'),
            preserve_default=False,
        ),
    ]
