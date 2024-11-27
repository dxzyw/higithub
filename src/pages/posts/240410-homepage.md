<img src="/assets/image/240410-homepage-1.png" style="max-width: 70%; height: auto;">
<small>15.4k star，推荐一款开源、自托管的极简导航页</small>


> 开源地址在文末


![](/assets/image/240410-homepage-1.png)

**Homepage** 是一个高度可定制的主页（或启动页/应用程序仪表板），它集成了 Docker 和服务 API。这个项目是开源的，可以在 GitHub 上找到。

### 软件简介
Homepage 提供了一个现代化、全静态、快速、安全且完全代理的应用程序仪表板。

它支持超过 100 种服务的集成，并提供多种语言的翻译。用户可以通过 YAML 文件或通过 docker 标签发现轻松配置。

### 功能特点
- **快速**：网站在构建时静态生成，以实现即时加载时间。
- **安全**：所有后端服务的 API 请求都是代理的，从而隐藏了您的 API 密钥。
- **全面**：为 AMD64、ARM64、ARMv7 和 ARMv6 构建的镜像。
- **国际化**：支持超过 40 种语言。
- **服务和网页书签**：在主页上添加自定义链接。
- **Docker 集成**：容器状态和统计信息。通过标签自动发现服务。
- **服务集成**：支持超过 100 个第三方服务，包括所有流行的 starr 应用程序和大多数流行的自托管应用程序。
- **信息和实用工具小部件**：天气、时间、日期、搜索等。

### 如何快速部署

可以使用docker compose方式部署，如下：

```
version: "3.3"
services:
  homepage:
    image: ghcr.io/gethomepage/homepage:latest
    container_name: homepage
    environment:
      PUID: 1000 -- optional, your user id
      PGID: 1000 -- optional, your group id
    ports:
      - 3000:3000
    volumes:
      - /path/to/config:/app/config # Make sure your local config directory exists
      - /var/run/docker.sock:/var/run/docker.sock:ro # optional, for docker integrations
    restart: unless-stopped
```


![](/assets/image/240410-homepage-2.png)
