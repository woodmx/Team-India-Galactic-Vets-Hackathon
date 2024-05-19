# Import necessary modules
import json
from django.core.management.base import BaseCommand
from plant_app.models import Plant  # Import your Plant model

# Define the command class
class Command(BaseCommand):
    help = 'Seed the database with plant data from JSON file'

    # Define handle method to execute the command
    def handle(self, *args, **kwargs):
        # Path to your JSON file
        json_file = '/home/neka/projects/fall-in-hackathon-5-2024/Team-India-Galactic-Vets-Hackathon/backend/plant_app/fixtures/plants.json'

        # Open and load the JSON file
        with open(json_file, 'r') as f:
            plant_data = json.load(f)

        # Loop through the plant data and save to the database
        for plant in plant_data:
            # Create a new Plant object
            new_plant = Plant(
                common_name=plant['common_name'],
                slug=plant['slug'],
                image_url=plant['image_url'],
                ph_maximum=plant['growth']['ph_maximum'],
                ph_minimum=plant['growth']['ph_minimum'],
                light=plant['growth']['light'],
                atmospheric_humidity=plant['growth']['atmospheric_humidity']
            )
            # Save the new plant object to the database
            new_plant.save()

        # Print success message
        self.stdout.write(self.style.SUCCESS('Successfully seeded database with plant data'))
