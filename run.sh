docker run \
--rm -it \
--name api \
-d \
-p 3001:80 \
-v $(pwd):/root/app \
-w /root/app \
pengliheng/react:latest