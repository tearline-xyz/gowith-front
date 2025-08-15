#!/bin/bash


pnpm run build


docker build -t gowith-front .


docker stop gowith-front-container || true
docker rm gowith-front-container || true


docker run -d -p 80:80 --name gowith-front-container gowith-front

echo "Depoly successful, please visit http://localhost"