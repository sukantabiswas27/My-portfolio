#!/bin/bash
docker stop my-portfolio
docker rm my-portfolio
docker build -t my-portfolio .
docker run -d -p 3027:80 --name my-portfolio my-portfolio:latest
