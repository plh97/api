docker run \
--rm -it \
--name api \
-d \
-p 3001:3001 \
-e PORT=3001 \
-v $(pwd):/root/app \
-w /root/app \
pengliheng/react:latest