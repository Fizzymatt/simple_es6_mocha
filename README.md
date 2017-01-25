# simple_es6_mocha
A simple example of using Mocha to test ES6 classes with imported dependencies


## Instructions

### Running with Docker

- Clone the repo
- Navigate to the **project root** and open a terminal
- Run the following command to **build the Docker image**
```
docker build -t node-mocha:latest .
```
- Run the following commands to **build and run the Mocha tests**
```
docker run --rm -v ${PWD}/source:/usr/src -it node-mocha:latest ash -c "npm install; npm run test;"
```

When you're done, you can remove the Docker image with
```
docker rmi node-mocha:latest
```

### Running locally (without Docker)

- Install **NodeJs** (this was tested on v6.7.0) and **NPM**
- Clone the repo
- Navigate to the **source** directory and open a terminal
- Run the following commands to **install NPM dependencies**
```
npm install
npm install -g mocha
```
- Run the following command to **run the Mocha tests**
```
npm run test
```
