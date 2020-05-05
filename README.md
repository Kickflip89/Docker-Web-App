# Docker-Web-App
Example webapp with docker-compose networking nginx, react, express, redis, postgres, and a simple backend.  To setup a development environment, simply clone the repository and run $docker-compose up --build.  The development web app can be found on localhost:3050.  The app is quite basic and requires a refresh to display results after submitting on the form, it's more of a proof-of-concept for docker-izing services.

APP OVERVIEW:

Containers

nginx: router, routes requests to either react or express server.

client: react app client.  fib.js contains logic for routing requests.

server: express server:  index.js handles interacting and setup for redis and postgres services.

worker: naive backend: index.js interfaces with redis to listen for new requests.

The other containers are from docker-hub images for postgres and redis.

NOTES:

.travis.yml: contains information to fuzz test containers, then build and push images to docker hub after pull requests are created.  Interfaces with Travis-CI

docker-compose.yml: builds a development version of web app.

Dockerfile.dev files: development version of containers, maps to computer's source code for quick updates
