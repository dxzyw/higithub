<img src="/assets/image/250126-supabase.png"/>

<small>76.4k star,一周搭建可支撑百万用户的项目，开源firebase替代Supabase</small>

hello，大家好啊!今天是周日，你是还在公司上班，还是在路上，或者已经回家了。

今天这篇文章，介绍一个真香项目-Supabase

如果你的老板让你一周内开发一套后管系统，要求用到postgres库，还得有身份认证功能，并且可以提供丰富的api供外部调用，可以存储文件，而且该项目前景远大，你得支撑百万级别的用户访问。

你会怎么办？

好办!Subabase就是做这个的，并且还很成熟，单单github就有76k的star。


![](https://files.mdnice.com/user/56774/2371b685-3a43-49a6-b5da-636aff481814.png)

## Supabase简介

Supabase 是一个开源平台，提供全套的后端服务，包括 Postgres 数据库、实时功能、身份验证、存储和边缘函数，帮助开发者快速构建和扩展应用。
![](https://files.mdnice.com/user/56774/ec54859b-83cf-45fd-9159-7e8f12ea3fbf.png)


## Supabase功能介绍

### 整体架构

它目前架构中包含了Postgres、Realtime、PostgREST、GoTrue、pg_graphql等

![](https://files.mdnice.com/user/56774/c27e2fe9-b211-40c2-bdc0-a50fa9520888.png)


### 数据库

supabase是基于postgres的，以目前最完善、安全的数据库作为支撑。

而该项目的最大特点在于支持实时监控数据的变化并且更新，就算你不是很懂数据库，借助该项目可以像管理表格一样管理数据库。

优化的查询性能和高并发处理能力，适用于大规模应用。

每个项目都是一个完整的 Postgres 数据库，具有postgres级别的访问权限。


### 用户管理

Supabase Auth可以很轻松的实现身份认证和授权，并且支持现有的一些社交平台的认证

可以提供客户端的SDK及api接口

### API

关于API我认为它最大的亮点在于可以根据数据架构自动生成REST API

Supabase 会根据数据库架构自动生成 RESTful API，开发者无需编写任何代码即可通过浏览器直接连接数据库

API 设计为保留尽可能多的 Postgres 功能，包括基本的 CRUD 操作、深层次的表/视图关系、Postgres 视图和函数等


## 自托管，docker快速启动

1. **准备工作**：
   - 确保系统已安装 Git 和 Docker。

2. **安装和运行 Supabase**：
   ```bash
   # 获取代码
   git clone --depth 1 https://github.com/supabase/supabase

   # 进入 docker 文件夹
   cd supabase/docker

   # 复制环境变量文件
   cp .env.example .env

   # 拉取最新镜像
   docker compose pull

   # 启动服务（后台运行）
   docker compose up -d
   ```

![](https://files.mdnice.com/user/56774/478e503e-91a0-46e5-bd29-16e127fb3eb4.png)

3. **访问 Supabase Studio**：
   - 通过 API 网关访问 Supabase Studio，默认端口为 8000。
   - 默认用户名：`supabase`
   - 默认密码：`this_password_is_insecure_and_should_be_updated`

![](https://files.mdnice.com/user/56774/2fded505-4e8c-4898-988e-d703143302a8.png)

4. **访问 API**：
   - REST API: `http://<your-ip>:8000/rest/v1/`
   - Auth API: `http://<your-domain>:8000/auth/v1/`
   - Storage API: `http://<your-domain>:8000/storage/v1/`
   - Realtime API: `http://<your-domain>:8000/realtime/v1/`

5. **访问 Edge Functions**：
   - Edge Functions 存储在 `volumes/functions` 目录下。
   - 默认函数示例：`http://<your-domain>:8000/functions/v1/hello`

6. **访问 Postgres**：
   - 使用 Supavisor 连接池管理数据库连接。
   - 会话连接示例：
     ```bash
     psql 'postgres://postgres.your-tenant-id:your-super-secret-and-long-postgres-password@localhost:5432/postgres'
     ```

7. **更新服务**：
   - 更新 docker-compose 文件中的版本号，然后运行以下命令：
     ```bash
     docker compose pull
     docker compose up -d
     ```

8. **安全配置**：
   - 生成并更新 API 密钥和其他重要的环境变量。
   - 更新 Dashboard 的默认用户名和密码。

9. **重启服务**：
   ```bash
   docker compose down
   docker compose up -d
   ```

地址：https://github.com/supabase/supabase

