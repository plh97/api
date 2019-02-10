docker run \
--rm -it \
--name api2 \
-p 3002:3001 \
-v $(pwd):/root/app \
-w /root/app \
api:latest \
bash