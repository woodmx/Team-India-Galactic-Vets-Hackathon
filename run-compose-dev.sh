export SECRET_KEY=abc123
export DEBUG=True
export DB_NAME=interstellar_greenhouse_db
export DB_USER=postgres
export DB_PASS=postgres


COMPOSE_DOCKER_CLI_BUILD=0 DOCKER_BUILDKIT=0 docker compose -f docker-compose.dev.yml up -d --build

# make sure the postgres container is ready, then run migrations
sleep 10
docker exec team-india-galactic-vets-hackathon-api-1 python /src/manage.py makemigrations 
docker exec team-india-galactic-vets-hackathon-api-1 python /src/manage.py migrate
docker exec team-india-galactic-vets-hackathon-api-1 python /src/manage.py loaddata crops_data
