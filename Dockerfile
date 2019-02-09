FROM node

COPY . ~/app

WORKDIR /root/app

EXPOSE 3001

CMD [ "yarn" ]