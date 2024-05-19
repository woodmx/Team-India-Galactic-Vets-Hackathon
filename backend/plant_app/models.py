from django.db import models

# Create your models here.
class Plant(models.Model):
    slug = models.CharField()
    common_name = models.CharField()
    image_url = models.TextField()
    ph_maximum = models.DecimalField(max_digits=4, decimal_places=2, default=0)
    ph_minimum = models.DecimalField(max_digits=4, decimal_places=2, default=0)
    light = models.IntegerField(null=True)
    atmospheric_humidity = models.IntegerField(null=True)

    def __str__(self):
        return self.common_name
    