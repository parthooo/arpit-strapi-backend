#!/bin/bash
# stop_server.sh

# Change directory to where the server is running
cd /var/www/html

# Stop the server
pm2 delete strapi

