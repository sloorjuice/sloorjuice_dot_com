#!/bin/bash

set -e

echo "Starting update ... "

#git pull origin main

npm install

npm run build

sudo systemctl restart sloorjuice_dot_com.service