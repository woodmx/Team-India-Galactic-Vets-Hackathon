# utils.py
import os
import requests
from plant_app.models import Plant
from django.core.exceptions import ObjectDoesNotExist
from dotenv import load_dotenv

load_dotenv()
TREFLE_KEY = os.getenv('TREFLE_KEY')

# originally meant to use this, had a bug, just now found it but already have other solutions in place
def fetch_and_save_plant_data():
    url = f'https://trefle.io/api/v1/species/search?q=cocos&token={TREFLE_KEY}'

    try:
        response = requests.get(url)
        response.raise_for_status() # Raise HTTPError for bad responses (4xx and 5xx)

        json_response = response.json()
        filtered_data = []

        for item in json_response['data']:
            filtered_item = {
                'common_name': item.get('common_name'),
                'slug': item.get('slug'),
                'ph_maximum': item.get('main_species', {}).get('growth', {}).get('ph_maximum'),
                'ph_minimum': item.get('main_species', {}).get('growth', {}).get('ph_minimum'),
                'light': item.get('main_species', {}).get('growth', {}).get('light'),
                'atmospheric_humidity': item.get('main_species', {}).get('growth', {}).get('atmospheric_humidity'),
            }
            filtered_data.append(filtered_item)

            try:
                # Create or update the object
                plant, created = Plant.objects.update_or_create(
                    slug=filtered_item['slug'],
                    defaults={
                        'common_name': filtered_item['common_name'],
                        'ph_maximum': filtered_item['ph_maximum'],
                        'ph_minimum': filtered_item['ph_minimum'],
                        'light': filtered_item['light'],
                        'atmospheric_humidity': filtered_item['atmospheric_humidity']
                    }
                )
            except Exception as e:
                print(f"Error saving plant data: {e}")

    except requests.RequestException as e:
        print(f"Error fetching plant data: {e}")
