#!/bin/bash

# Navigate to the build directory of the application
cd /var/www/html/

# Start the server using serve
# export NODE_ENV=production

pm2 start npm --name "strapi" -- start --production npm start