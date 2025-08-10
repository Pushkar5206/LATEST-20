#!/bin/bash

# Install surge globally if not installed
npm install -g surge

# Build the project
npm run build:client

# Create a simple 200.html file for SPA routing
cp dist/spa/index.html dist/spa/200.html

# Deploy to surge.sh
echo "Deploying to Surge.sh..."
cd dist/spa
surge . --domain ignite-track-app.surge.sh

echo "Deployment complete! Your app is available at: https://ignite-track-app.surge.sh"
