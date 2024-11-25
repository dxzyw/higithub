<img src="/assets/image/240814-pgbackweb-1.png">
<small>开源！免费！PG Back Web2.0,轻松备份 PostgreSQL！</small>

PG Back Web是一个带有web界面的PostgreSQL备份工具，目前发布了最新的2.0版本，之前仅支持使用S3作为备份存储，新版本支持本地存储

界面如下：

![](/assets/image/240814-pgbackweb.png)

项目地址：https://github.com/eduardolat/pgbackweb

## PG Back Web简介

PG Back Web 不仅仅是一个备份工具，它更多是关注到数据的安全与可用，而且带有web界面，可以更加轻松友好的完成数据备份。

该工具采用go语言完成

## PG Back Web功能特点

- 该工具设计之初就考虑到了提供给不同用户使用，包括开发、DBA、运维
- 更加高效，支持自动执行备份，无需手动执行
- 开箱即用，没有复杂的配置需要学习
- 界面很简洁，甚至新手不是DBA都可以快速上手操作
- 备份监控：使用执行日志可视化备份的状态。
-  即时下载和恢复：在需要时直接从Web界面恢复和下载备份。
-  多版本支持：兼容 PostgreSQL 13、14、15、16。
  
##  部分使用截图

![](/assets/image/240814-pgbackweb-1.png)
![](/assets/image/240814-pgbackweb-2.png)
![](/assets/image/240814-pgbackweb-3.png)

## PG Back Web如何部署安装

支持docker部署，可以如下操作，部分根据需要调整

```
services:
  pgbackweb:
    image: eduardolat/pgbackweb:latest
    ports:
      - "8085:8085" # Access the web interface at http://localhost:8085
    volumes:
      - ./backups:/backups # If you only use S3 destinations, you don't need this volume
    environment:
      PBW_ENCRYPTION_KEY: "my_secret_key"
      PBW_POSTGRES_CONN_STRING: "postgresql://postgres:password@postgres:5432/pgbackweb?sslmode=disable"
    depends_on:
      postgres:
        condition: service_healthy

  postgres:
    image: postgres:16
    environment:
      POSTGRES_USER: postgres
      POSTGRES_DB: pgbackweb
      POSTGRES_PASSWORD: password
    ports:
      - "5432:5432"
    volumes:
      - ./data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 5s
      timeout: 5s
      retries: 5
```


