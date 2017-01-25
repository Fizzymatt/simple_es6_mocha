FROM alpine:3.4
MAINTAINER Fizzymatt


RUN apk add --update nodejs \
    && npm install -g mocha


# set the WORKING DIRECTORY
WORKDIR /usr/src
