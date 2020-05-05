# Docker-Web-App
Example webapp with docker-compose networking nginx, react, express, redis, postgres, and a simple backend.

APP OVERVIEW:

Containers

nginx: router, routes requests to either react or express server.

client: react app client.  fib.js contains logic for routing requests.

server: express server:  index.js handles interacting and setup for redis and postgres services.

worker: naive backend: index.js interfaces with redis to listen for new requests.

The other containers are from docker-hub images for postgres and redis.

NOTES:

.travis.yml: contains information to fuzz test containers, then build and push images to docker hub.

docker-compose.yml: builds a development version of web app.

Dockerfile.dev files: development version of containers, maps to computer's source code for quick updates
