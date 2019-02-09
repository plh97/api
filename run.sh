docker run \
--rm -it \
--name api \
-d \
-p 3001:3001 \
-e ACCESS_TOKEN=0c64fce23c766040c3e512132acb5cf9e74a9acc \
-e PORT=3001 \
-v $(pwd):/root/app \
-w /root/app \
pengliheng/react:latest