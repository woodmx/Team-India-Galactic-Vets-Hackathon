#!/bin/sh
# The Dockerhub account where the images are stored
export DOCKERHUB_UNAME=successphil

# These environment variables come from command line arguments.
# They are consumed by the docker-compose file.
export SECRET_KEY=$SECRET_KEY
export DEBUG=$DEBUG
export POSTGRES_DB=$POSTGRES_DB
export POSTGRES_USER=$POSTGRES_USER
export POSTGRES_PASSWORD=$POSTGRES_PASSWORD
export NEW_VERSION=$NEW_VERSION

docker-compose -f docker-compose.prod.yml build --no-cache
docker-compose -f docker-compose.prod.yml up -d

# make sure the postgres container is ready, then run migrations
sleep 10 
docker exec team-india-galactic-vets-hackathon-api-1 python /src/manage.py makemigrations 
docker exec team-india-galactic-vets-hackathon-api-1 python /src/manage.py migrate
docker exec team-india-galactic-vets-hackathon-api-1 python /src/manage.py loaddata crops_data