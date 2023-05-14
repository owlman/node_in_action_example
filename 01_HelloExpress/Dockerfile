# 声明当前镜像的基础镜像
FROM node:17.5.0
# 在当前镜像所实例化的容器中创建一个目录
RUN mkdir -p /home/Service
# 将新建的目录设定为容器的工作目录
WORKDIR /home/Service
# 设置将当前目录拷贝到容器工作目录
COPY ./ /home/Service
# 安装项目依赖与 PM2 进程管理器
RUN npm install pm2 --global  \
        && npm install
# 设置应用程序使用的端口
EXPOSE 3000
# 设置用于启动应用程序的命令
CMD pm2 start index.js --no-daemon
