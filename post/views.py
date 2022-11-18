from unicodedata import category
from django.shortcuts import render
from .models import Category , Atribut , Ads
from django.views.generic import  ListView , TemplateView

import random

category_id = 5
electronics_id = 4
tehnique_id = 6


class postListView(ListView):
    template_name = 'index.html'
    model = Atribut
    
    def get_context_data(self, **kwargs):
        products = list(Atribut.objects.all())
        context = super().get_context_data(**kwargs)
        context['all'] = Atribut.objects.all()
        context["ads"] = Ads.objects.filter(enabled = True)
        context["telephone"] = Atribut.objects.filter(category = category_id)
        context["electronics"] = Atribut.objects.filter(category = electronics_id)
        context["tehnique"] = Atribut.objects.filter(category = tehnique_id)
        context["random"] = random.sample(products, 5)
        return context
    
    
    
    
    