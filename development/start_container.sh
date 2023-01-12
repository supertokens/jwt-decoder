docker run -d \
    --restart=always \
    --name jwt-decoder \
    --label name=jwt-decoder \
    --label type=app \
    --label mode=development \
    --volume /home/ubuntu/jwt-decoder/app:/home/app \
    --publish 10000:3000 \
    jwt-decoder