#!/bin/bash

# any future command that fails will exit the script
set -e
docker stop rahmen
docker rm rahmen
docker run -dti --network rahmen_net --name rahmen $IMAGE_TAG