<img src="/assets/image/250509-docker_flare.png"/> 

<small>2k star,干净！高效！nas用户进</small>

### 假如你是一名个人用户或开发者，你是否遇到过以下问题？
- 书签太多，难以管理，找起来费劲？
- 现有的导航页臃肿复杂，不符合你的需求？
- 想要一个美观、轻量且高效的个人导航页，但又不想配置繁琐的数据库？

那么，Flare 也许就是你需要的解决方案。

---

## Flare 简介
Flare 是一款轻量、快速、美观的个人导航页面，非常适用于 HomeLab 或其他注重私密的场景。它无任何数据库依赖，应用数据完全透明开放，100% 属于用户自己。此外，它支持在线编辑，内置 **6,000+** Material Design Icons，可以轻松打造专属的个性化导航页。

Flare 不仅支持 **x86** 设备，还兼容常见的 **ARM** 架构（ARM32v6、ARM32v7、ARM64v8）。在资源消耗方面，它表现出色：
- **CPU 占用低于 1%**
- **内存占用小于 30MB**
- **Docker 镜像体积小于 10MB**

---

## 主要功能特点
1. **轻量高效**
   - 无需数据库依赖，直接使用 YAML 配置书签和应用数据
   - 应用启动后自动创建配置文件，降低使用门槛

2. **资源占用低**
   - 运行在几乎任何设备上，甚至一台搭载 2015 年 S805 芯片的 ARM 盒子
   - 低 CPU 及内存占用，可持续流畅运行

3. **在线编辑与帮助功能**
   - 提供 `/editor` 在线编辑页面，实现随时随地修改书签
   - `/help` 页面集合所有内置工具，方便快速查找

4. **界面美观**
   - 内置 **6,000+** Material Design Icons，确保导航页统一美观
   - 默认免登录模式，适合本地或 HomeLab 场景

5. **多种部署方式**
   - 支持 Docker 及 **docker-compose** 轻松安装
   - 可与 **Traefik** 结合使用，提高访问管理能力

---

## 如何快速开始？
只需两步即可使用 Flare：

### **1. 下载**
你可以使用 Git 或直接下载 ZIP 文件：
```sh
git clone https://github.com/soulteary/docker-flare.git
cd docker-flare
```
`app/*yml` 目录包含你的书签和应用数据，可以根据需求调整。

### **2. 启动**
如果你习惯使用 Docker，可执行以下命令：
```sh
# 使用最新镜像
docker pull soulteary/flare
docker run --rm -it -p 5005:5005 -v `pwd`/app:/app soulteary/flare
```
或者使用指定版本：
```sh
docker pull soulteary/flare:0.5.1
docker run --rm -it -p 5005:5005 -v `pwd`/app:/app soulteary/flare:0.5.1
```
如果你偏好使用 **docker-compose**，则只需运行：
```sh
docker-compose up -d
```
启动后，访问 `http://localhost:5005` 即可进入 Flare 的导航界面。

---

## 结语
Flare 是一款极简但强大的个人导航页面，专为追求高效和美观的用户打造。它不仅功能丰富，而且资源消耗极低，无需数据库，完全自主控制数据。如果你想拥有一个符合个人需求的定制导航页，不妨试试 Flare，相信它会让你的浏览体验更加顺畅！
