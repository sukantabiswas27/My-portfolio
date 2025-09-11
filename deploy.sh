#!/bin/bash

# Stop the running container (if exists)
echo "Stopping existing container..."
docker stop my-portfolio 2>/dev/null

# Remove the stopped container (if exists)
echo "Removing existing container..."
docker rm my-portfolio 2>/dev/null

# Build the Docker image
echo "Building the Docker image..."
docker build -t my-portfolio .

# Run the new container
echo "Starting new container..."
docker run -d -p 3027:80 --name my-portfolio my-portfolio:latest

echo "Deployment complete. my-portfolio is running on port 3027."
