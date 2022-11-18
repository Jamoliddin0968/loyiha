from distutils.command import upload

from unicodedata import category
from django.db import models

class Atribut(models.Model):
    name = models.CharField(blank=True , max_length= 150)
    price = models.IntegerField()
    like_count = models.IntegerField()
    photo = models.ImageField(
        upload_to = 'media/images',
    )
    category = models.ForeignKey("Category" , on_delete=models.CASCADE)
    
    def __str__(self):
        return self.name
    
    def skidka_price(self):
        return self.price*0.8
    
    
class Category(models.Model):
    name = models.CharField( max_length= 150)
    
    def __str__(self):
        return self.name
    
class Ads(models.Model):
    photo = models.ImageField(upload_to="media/ads")
    enabled = models.BooleanField()
