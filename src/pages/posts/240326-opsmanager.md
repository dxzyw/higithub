<img src="/assets/image/240326-opsmanager-1.png" style="max-width: 70%; height: auto;">
<small>3.2k star，推荐一款开源python写的自动化运维平台</small>


感兴趣的可以去体验下demo，文末有具体地址：


![](/assets/image/240326-opsmanager-1.png)

### OpsManage简介
OpsManage是一个自动化运维平台

简单试用了一下，常规的功能都是有的，挺适合小公司的，如果你有一定的开发能力，还可以自己完善一下。

功能挺齐全的，有cmdb功能，支持简单的发布动作，计划任务等。

### 主要功能
- **代码部署**: 支持自动化的代码部署流程，是通过ansible实现的，这也是大部分devops工具会使用到的，可以提高软件发布的速度和可靠性。
- **应用部署**: 不知道现在还有没有纯手工去发布的情况，如果通过自动化流程部署应用，可以确保应用的一致性和稳定性，避免人工出现的问题。
- **计划任务**: 如果你有些日产的定时任务需要去跑，可以管理和调度定时任务，确保任务按计划执行。
- **设备资产管理**: cmdb功能，在需要的时候，真的很重要。提供资产管理功能，帮助团队跟踪和管理其硬件和软件资产。

### 快速开始
1. **环境要求**: 确保你的系统满足OpsManage的环境要求，包括Python 3.6、CentOS 6+、Ansible 2.6+等。
2. **安装依赖**: 安装所需的依赖项，如Python、MySQL、Redis等。
这里如果想快速实践可以通过docker快速启动这些中间件，如下：
```
version: '3'
services:
  mysql:
    image: mysql:5.6
    container_name: mysql
    environment:
      PREFER_HOST_MODE: hostname
      MYSQL_ROOT_PASSWORD: 123456
      MYSQL_DATABASE: nacos
      TZ: Asia/Shanghai
    volumes:
      - ./data:/var/lib/mysql # 数据缓存到本地
      - ./init:/docker-entrypoint-initdb.d # 数据初始化脚本目录
    ports:
      - 3307:3306
    restart: always
    networks:
      - opsnetwork # 指定网络
  rabbitmq:
    image: rabbitmq:3.8.4-management # 支持管理面板的消息队列
    container_name: rabbitmq
    environment:
      RABBITMQ_DEFAULT_USER: guest
      RABBITMQ_DEFAULT_PASS: guest
    ports:
      - "5672:5672"
      - "15672:15672" # RabbitMQ Dashboard 端口
    volumes:
      - ./rabbitmqdata:/var/lib/rabbitmq # 持久化
    networks:
      - opsnetwork
  redis:
    image: redis:3.2
    container_name: redis
    restart: always
    environment:
      TZ: Asia/Shanghai
    ports:
      - "6380:6379"
    command: redis-server --requirepass 123456
    networks:
      - opsnetwork
    volumes:
      - ./redisdata:/data # 持久化    
      
networks:
  opsnetwork: 
    driver: bridge
  
```
上面有个init初始化脚本：
```
-- init.sql


create database opsmanage DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
ALTER USER 'root'@'%'  IDENTIFIED WITH mysql_native_password BY '123456';
```
3. **配置数据库**: 创建并配置OpsManage所需的数据库。
```
python3 manage.py makemigrations account
python3 manage.py makemigrations wiki
python3 manage.py makemigrations orders
python3 manage.py makemigrations navbar
python3 manage.py makemigrations databases
python3 manage.py makemigrations asset
python3 manage.py makemigrations deploy
python3 manage.py makemigrations cicd
python3 manage.py makemigrations sched
python3 manage.py makemigrations apply
python3 manage.py migrate
python3 manage.py createsuperuser
```
4. **启动服务**: 部署python3.6环境，根据需要的模块安装，也可以去参考作者给出的安装步骤，可以选择快速启动服务，也可以用作者提供的supervisord方式启动。

```
# 启动Celery Worker - Default Queue
nohup /usr/local/python3/bin/celery -A OpsManage worker --loglevel=info -E -Q default -n worker-default@%%h &

# 启动Celery Worker - Ansible Queue
nohup /usr/local/python3/bin/celery -A OpsManage worker --loglevel=info -E -Q ansible -n worker-ansible@%%h &

# 启动Celery Beat
nohup /usr/local/python3/bin/celery -A OpsManage beat --loglevel=info --scheduler django_celery_beat.schedulers:DatabaseScheduler &

# 启动Django应用
nohup /usr/local/python3/bin/python3 manage.py runserver 0.0.0.0:9080 --http_timeout 1200 7
```

![](/assets/image/240326-opsmanager-2.png)

5. **打开OpsManage**: 启动后，需要配置对应的nginx，然后访问。

nginx配置可以参考作者给出的配置



![](/assets/image/240326-opsmanager-3.png)

**demo：http://42.194.214.22:8000/ demo/demo**

**开源地址：https://github.com/welliamcao/OpsManage**