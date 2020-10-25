# melonjs-town-sample

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Description

![readme-image](./readme-image.png)

* sample project using [melonjs/boilerplate](https://github.com/melonjs/boilerplate)
* assets from [capsulemonsters/newbark](https://github.com/capsulemonsters/newbark)

## Installation

```
# clone this repository using HTTPS
git clone https://github.com/mqtsuo02/melonjs-town-sample.git

# move to the directory includes Dockerfile
cd melonjs-town-sample-master

# Build the Docker Image from Dockerfile
docker build -t game:1.0 ./

# Run the Container as a deamon (Port Forwarding)
docker run -p 8000:8000 -tid game:1.0 /bin/bash

# inspect the CONTAINER ID of this container
docker ps -a | grep seconds
(if you have already been running lots of containers,)
(docker ps -a | grep seconds) might help you well

# Enter the container specifying the CONTAINER ID
$ docker exec -ti {CONTAINER ID} bash

# install grunt at WORKDIR inside the container if you don't have
npm install -g grunt-cli

# npm install
npm install

# displayed by Web browser (localhost:8000)
grunt serve
```