from django.db import models


class Crop (models.Model):
    name = models.CharField()
    binomial_name = models.CharField()
    description = models.CharField()
    sunlight = models.CharField()
    sowing_method = models.CharField()
    photo = models.URLField()
    
    
    
    