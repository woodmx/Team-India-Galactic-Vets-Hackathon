from django.shortcuts import render
from rest_framework.renderers import JSONRenderer
from rest_framework.decorators import api_view
from django.http import HttpResponse, JsonResponse
from .models import Plant
from rest_framework import status
from rest_framework.response import Response
from .serializers import PlantSerializer
from dotenv import load_dotenv
import requests
import json
import os


load_dotenv()

TREFLE_KEY = os.getenv('TREFLE_KEY')

# Create your views here.

# trefle api
def trefle_api_use(request): 
    url = f'https://trefle.io/api/v1/plants?token={TREFLE_KEY}'
    try:
        response = requests.get(url)
        response.raise_for_status() #raise httperror for bad response
        return HttpResponse(response.content, content_type='applicaton/json')
    except requests.RequestException as e:
        return HttpResponse(f"Error: {e}", status=500)
        
# from db 
@api_view(['GET'])
def get_all_plants(request):
    plants = Plant.objects.all()
    ser_plants = PlantSerializer(plants, many=True)
    return Response(ser_plants.data)

get_all_plants.renderer_classes=[JSONRenderer]
