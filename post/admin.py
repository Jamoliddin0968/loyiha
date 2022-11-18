from unicodedata import category
from django.contrib import admin

# Register your models here.
from .models import Category , Atribut , Ads
admin.site.register(Category)
admin.site.register(Ads)
admin.site.register(Atribut)