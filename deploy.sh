#!/usr/bin/env bash

# PROJECT_NAME="Name or your frontend project, for example movie --> folder you created under /var/www"
# DROPLET_URL="URL for your droplet"
echo -n "please enter the project name as it appears on the server in /var/www/"
read -r 
PROJECT_NAME=CA2
echo -n "www.akenfelt.dk"
read -r
DROPLET_URL=157.230.125.27

echo "##############################"
echo "Building the frontend project"
echo "##############################"
npm run build

echo "##############################"
echo "Deploying Frontend project..."
echo "##############################"

scp -r ./build/* root@157.230.125.27:/var/www/CA2