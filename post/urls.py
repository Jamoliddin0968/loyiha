from django.urls import path 

from .views import postListView

urlpatterns = [
    path('',postListView.as_view()),
]
