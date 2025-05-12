<img src="/assets/image/250510-DockFlare.png"/> 

<small>开源新货！如果你玩docker，那么这货会让你打开新的世界</small>

**假如你是一名开发者或运维人员，需要将Docker容器应用公开访问，但手动配置Cloudflare Tunnel繁琐、易出错，怎么办？DockFlare可以帮你解决这个问题！**

### **DockFlare简介**
DockFlare是一款自动化工具，专为简化Cloudflare Tunnel的管理而设计。它通过监听Docker容器事件，自动配置Cloudflare Tunnel的入口规则，让您的服务能够便捷、安全地暴露在公网，而无需手动设置Cloudflare。

### **DockFlare的功能特点**
1. **自动管理Cloudflare Tunnel**
   - 负责创建或使用已有的Cloudflare Tunnel，并自动获取Tunnel ID与Token。
   - 部署并管理`cloudflared`代理，使其正常运行。

2. **动态入口管理**
   - 通过Docker标签配置公开访问规则，例如`hostname`、`service`等，自动更新Cloudflare Tunnel的配置。

3. **多域名支持**
   - 允许同一容器映射多个域名，并针对每个域名指定不同的目标服务和区域配置。

4. **优雅的规则删除**
   - 容器停止时，系统可设定一定的延迟时间再移除入口规则，防止误删。

5. **状态持久化**
   - 在`state.json`中保存管理的规则，确保在重启后能够保持一致。

6. **优化的同步机制**
   - 确保Docker容器、存储的状态以及Cloudflare配置保持一致，并防止API请求过载。

7. **实时日志与Web UI**
   - 提供可视化仪表盘，包括Tunnel状态、代理控制及入口规则管理。
   - 通过Server-Sent Events (SSE) 实时查看日志，掌握最新动态。

### **如何快速开始**
DockFlare的部署非常简单，只需几个步骤即可完成：

1. **安装Docker与Docker Compose**
   - 确保本地已安装Docker和Docker Compose。

2. **准备Cloudflare账户**
   - 需要Cloudflare API Token（具备`Zone:DNS:Edit`和`Account:Cloudflare Tunnel:Edit`权限）。
   - 获取Cloudflare的Account ID和Zone ID。

3. **使用Docker Compose启动DockFlare**
   - 创建`docker-compose.yml`文件：
     ```yaml
     version: '3.8'
     services:
       dockflare:
         image: alplat/dockflare:stable
         container_name: dockflare
         restart: unless-stopped
         ports:
           - "5000:5000"
         env_file:
           - .env
         volumes:
           - /var/run/docker.sock:/var/run/docker.sock:ro
           - dockflare_data:/app/data
         networks:
           - cloudflare-net
     volumes:
       dockflare_data:
     networks:
       cloudflare-net:
     ```
   - 创建`.env`文件并填入Cloudflare信息：
     ```
     CF_API_TOKEN=你的Cloudflare_API_Token
     CF_ACCOUNT_ID=你的Cloudflare_Account_ID
     CF_ZONE_ID=你的Cloudflare_Zone_ID
     TUNNEL_NAME=你的Tunnel名称
     ```

4. **启动DockFlare**
   - 在终端运行：
     ```
     docker compose up -d
     ```
   - 访问Web UI：打开 `http://localhost:5000`。

5. **给容器添加标签**
   - 例如，为一个Nginx容器添加标签，使其能够通过Cloudflare Tunnel公开访问：
     ```yaml
     services:
       nginx:
         image: nginx:latest
         labels:
           cloudflare.tunnel.enable: "true"
           cloudflare.tunnel.hostname: "my-service.example.com"
           cloudflare.tunnel.service: "http://nginx:80"
     ```

至此，你的应用已经通过DockFlare自动配置Cloudflare Tunnel，并能够安全地在公网访问。DockFlare的自动化能力极大减少了手动配置的麻烦，让运维更高效、更可靠。现在，快来试试吧！ 🚀
