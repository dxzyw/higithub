<img src="/assets/image/240623-coolify-1.png">
<small>24.6k star</small>

## Coolify项目介绍

Coolify是一个开源且可自托管的平台，旨在为开发者提供一个类似Heroku、Netlify或Vercel的替代方案。它允许用户在自己的硬件上管理服务器、应用程序和数据库，只需SSH连接即可。无论是VPS、裸机服务器还是树莓派，Coolify都能够胜任。
![alt text](/assets/image/240623-coolify-4.png)

![alt text](/assets/image/240623-coolify-5.png)

## coolify可以做什么？

Coolify是一个功能丰富的工具，它允许用户在自己的服务器上部署和管理各种应用程序和服务。以下是Coolify可以完成的一些主要内容：

- **应用程序部署**：Coolify支持部署静态网站、NodeJS、Svelte、React、Vue、Next、Nuxt、Astro、PHP、Rust等多种类型的应用程序。它提供了自动反向代理和免费SSL证书，使部署过程变得无忧无虑。
- **数据库支持**：Coolify可以一键部署MongoDB、MySQL、PostgreSQL、CouchDB、RedisDB等数据库实例，无论是本地还是通过互联网都可以轻松使用。
- **服务器兼容性**：Coolify可以在任何服务器上运行，包括个人服务器、VPS、树莓派等。只要有SSH连接，就可以将Coolify部署到所选的硬件上。
- **自托管云**：Coolify提供了自托管云的能力，这意味着用户可以在自己的服务器上创建和管理一个私有云环境。这为用户提供了数据隐私和完全的数据控制权。
- **成本效益**：与传统的云服务提供商相比，Coolify可以帮助用户节省成本。一旦超出免费层，云服务提供商的费用可能会迅速累积，而使用Coolify则可以有效控制这些开销。
- **易于使用**：Coolify拥有一个简单易用的用户界面，使得管理服务器和应用程序变得轻松。用户不需要进行复杂的配置，即可开始部署和管理资源。


## 功能特点

- **多语言兼容性**：Coolify支持多种编程语言和框架，可以部署静态网站、API、后端、数据库、服务等各种类型的应用程序。
- **多服务器部署**：用户可以将资源部署到任何服务器，包括个人服务器、VPS、树莓派、EC2、DigitalOcean、Linode、Hetzner等，只需要SSH连接。
- **推送即部署**：现代开发中，Git集成已成为标准。Coolify提供了与GitHub、GitLab、Bitbucket、Gitea等托管和自托管平台的集成⁹。
- **免费SSL证书**：Coolify自动设置并续订Let's Encrypt SSL证书，为自定义域名提供安全保障。
- **自动数据库备份**：数据会自动备份到任何S3兼容的解决方案中，出现问题时可以轻松恢复。
- **Webhooks集成**：可以将Coolify集成到CI/CD流水线中，或使用Github Actions、Gitlab CI、Bitbucket Pipelines等工具创建自定义集成。
- **强大的API**：Coolify提供了强大的API，使用户能够自动化部署、管理资源，并与现有工具集成。
- **协作**：用户可以与团队成员共享项目，并协同工作。还可以为每个成员控制权限和角色。
- **Pull Request部署**：自动部署新提交和Pull Request，以便快速审查贡献，加速团队合作。
- **服务器自动化**：一旦服务器连接，Coolify将自动处理多项任务，让用户专注于代码。
- **监控和通知**：Coolify会监控部署、服务器、磁盘使用等，并在出现问题时通过Discord、Telegram、电子邮件等渠道通知用户。

## 快速开始

要开始使用Coolify，用户可以选择云服务或自托管两种方式。云服务是最简单的开始方式，用户可以将自己的服务器带到托管的Coolify实例中。自托管版本提供了所有功能，但用户需要自行维护Coolify及所有相关服务。

如果你本地有windows docker-desktop环境，那么也可以先做个测试

- 从代码中找到docker-compose.windows.yml及.env.windows-docker-desktop.example
- .env.windows-docker-desktop.example改名为.env
- 部署及启动：docker-compose -f docker-compose.windows.yml  up -d
![alt text](/assets/image/240623-coolify.png)

启动后访问本地8080，会跳转注册：

![alt text](/assets/image/240623-coolify-1.png)

![](/assets/image/240623-coolify-2.png)


常规安装Coolify的步骤如下：

1. 确保SSH已启用，并且可以从本地机器通过root用户连接到服务器。
2. 确保服务器上安装了curl命令。
3. 在服务器上执行以下命令进行安装：
   ```bash
   curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
   ```
4. 安装完成后，可以通过服务器的`http://<ip>:8000`端口访问Coolify的用户界面。

Coolify的设计理念是提供一个无供应商锁定的环境，即使用户决定停止使用Coolify，也能继续管理运行中的资源。这为开发者提供了更大的灵活性和控制权，使其成为一个值得尝试的自托管解决方案。

>传送门：https://github.com/coollabsio/coolify
>
>官网：https://coolify.io/
![alt text](/assets/image/240623-coolify-3.png)