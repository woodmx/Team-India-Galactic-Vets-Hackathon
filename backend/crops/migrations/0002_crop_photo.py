# Generated by Django 5.0.6 on 2024-05-19 08:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crops', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='crop',
            name='photo',
            field=models.URLField(default=''),
            preserve_default=False,
        ),
    ]
