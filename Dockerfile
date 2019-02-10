FROM node:latest

COPY . ~/app

WORKDIR /root/app

ENV ACCESS_TOKEN=9c1b105d0bd2904a64a806f19b391d14be48233b
ENV PORT=3001

EXPOSE 3001

WORKDIR /root/app

# CMD /bin/bash -c 'ls'

# RUN /bin/bash -c 'npm install'

# RUN "npm" "install"

# CMD [ "node" "index.js" ]