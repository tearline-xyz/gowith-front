#!/bin/bash

# 构建项目
pnpm run build

# 构建 Docker 镜像
docker build -t gowith-front .

# 停止并删除旧容器
docker stop gowith-front-container || true
docker rm gowith-front-container || true

# 运行新容器
docker run -d -p 80:80 --name gowith-front-container gowith-front

echo "Depoly successful, please visit http://localhost"