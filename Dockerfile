FROM node

COPY . /root/api

WORKDIR /root/api

ENV ACCESS_TOKEN=9c1b105d0bd2904a64a806f19b391d14be48233b

ENV PORT=3001

EXPOSE 3001

# WORKDIR /root/api

RUN npm install yarn -g

RUN yarn

CMD yarn run start