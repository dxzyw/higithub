<img src="/assets/image/240208-nginx-proxy-1.png" style="max-width: 70%; height: auto;">
<small>18.2k star，推荐一款开源的nginx配置图形管理系统</small>


### Nginx Proxy Manager 简介

Nginx Proxy Manager（NPM）是一个基于Nginx的代理服务器管理面板

旨在为需要快速、轻松部署反向代理的用户提供简便的图形界面。

这个项目通过Docker容器化技术实现了易于安装和配置的优势

使得即使是不具备深入Nginx配置经验的用户也能够轻松地设置反向代理、负载均衡、以及SSL证书。![](/assets/image/240208-nginx-proxy-1.png)


![](/assets/image/240208-nginx-proxy-2.png)


### 特点

1. **用户友好的图形界面**：NPM提供了一个直观的Web界面，用户可以通过几次点击完成复杂的Nginx代理设置。
2. **SSL证书自动化管理**：集成了Let's Encrypt，支持自动生成和续期SSL证书，简化了HTTPS部署的流程。
3. **负载均衡和反向代理**：轻松配置负载均衡器和反向代理，增强了网站的可用性和性能。
4. **访问控制和认证**：提供了基本的访问控制，包括客户端IP白名单和HTTP基本认证等功能。
5. **Docker支持**：通过Docker容器化部署，简化了安装和升级过程，确保了软件环境的一致性和隔离性。

![](/assets/image/240208-nginx-proxy-3.png)

![](/assets/image/240208-nginx-proxy-4.png)

![](/assets/image/240208-nginx-proxy-5.png)

![](/assets/image/240208-nginx-proxy-6.png)

### 快速使用

要开始使用Nginx Proxy Manager，你需要有一个运行Docker的环境。以下是基本的安装和配置步骤：

1. **安装Docker**：确保你的系统上安装了Docker和Docker Compose。
2. **下载NPM**：从GitHub克隆Nginx Proxy Manager的仓库或直接下载其Docker Compose文件。
3. **启动NPM**：在下载的Docker Compose文件所在目录下，运行`docker-compose up -d`命令来启动NPM服务。
4. **访问Web界面**：在浏览器中输入`http://<你的服务器IP>:81`访问NPM的Web管理界面。
5. **配置代理**：登录后，使用界面指引添加代理主机，配置你的域名、上游服务器等信息。
6. **设置SSL**：为你的域名启用SSL，可选择自动生成Let's Encrypt证书或上传自己的证书。
7. **高级设置**：根据需要，配置负载均衡、访问控制等高级功能。

通过上述步骤，即使是初次接触Nginx的用户也能够快速上手Nginx Proxy Manager，轻松管理和配置代理服务器。

NPM的出现极大地降低了Nginx配置的复杂性，使得更多用户能够利用Nginx的强大功能。




![](/assets/image/240208-nginx-proxy-7.png)
