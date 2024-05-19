from django.urls import path
from .views import  get_all_plants
from . import views

urlpatterns = [
    path('all_plants/', views.get_all_plants, name='all_plants')
]