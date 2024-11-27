<img src="/assets/image/240916-linkding.png">
<small>5.7k star,极简的浏览器书签管理平台</small>

![](/assets/image/240916-linkding.png)

### Linkding：自托管书签管理器

#### 软件简介

Linkding 是一个自托管的书签管理器，旨在提供一个简洁、快速且易于设置的解决方案。它的名字来源于“link”（链接）和德语中的“ding”（东西），意为管理链接的工具。


Linkding 通过 Docker 容器运行，支持多种平台，包括 ARM 平台，使其可以在 Raspberry Pi 上运行。它默认使用 SQLite 数据库，也支持 PostgreSQL。

#### 功能特点

Linkding 提供了一系列强大的功能，帮助用户高效管理书签：

1. **简洁的用户界面**：Linkding 的界面设计简洁，优化了可读性，用户可以轻松浏览和管理书签。
2. **标签管理**：用户可以使用标签对书签进行分类和组织，方便查找和管理。
3. **批量编辑**：支持批量编辑书签，节省时间和精力。
4. **Markdown 笔记**：用户可以为书签添加 Markdown 格式的笔记，记录重要信息。
5. **稍后阅读**：提供稍后阅读功能，用户可以将感兴趣的内容保存下来，稍后再阅读。
6. **分享书签**：用户可以与其他用户或访客分享书签，方便协作和交流。
7. **自动获取网站信息**：Linkding 会自动获取书签网站的标题、描述和图标，提升用户体验。
8. **网站归档**：支持将网站归档为本地 HTML 文件或存档到互联网档案馆，确保信息的长期保存。
9. **书签导入导出**：支持以 Netscape HTML 格式导入和导出书签，方便数据迁移。
10. **渐进式 Web 应用（PWA）**：Linkding 可以安装为 PWA，提供类似原生应用的体验。
11. **浏览器扩展**：提供 Firefox 和 Chrome 浏览器扩展，以及书签工具，方便快速添加书签。
12. **单点登录（SSO）**：支持通过 OIDC 或认证代理进行单点登录，提升安全性和便捷性。
13. **REST API**：提供 REST API，方便开发第三方应用。
14. **管理面板**：提供用户自助服务和原始数据访问的管理面板。

#### 快速开始

要快速开始使用 Linkding，可以按照以下步骤进行设置：

1. **安装 Docker**：首先，确保系统上已安装 Docker。可以参考 [Docker 官方文档](https://docs.docker.com/get-docker/) 进行安装。

2. **拉取 Linkding 镜像**：在终端中运行以下命令，拉取 Linkding 的 Docker 镜像：
   ```bash
   docker pull sissbruecker/linkding:latest
   ```

3. **运行 Linkding 容器**：使用以下命令运行 Linkding 容器：
   ```bash
   docker run -d --name linkding -p 9090:9090 sissbruecker/linkding:latest
   ```

4. **访问 Linkding**：在浏览器中打开 `http://localhost:9090`，即可访问 Linkding 的用户界面。

5. **配置反向代理（可选）**：如果需要通过域名访问 Linkding，可以配置反向代理。以下是使用 Nginx 作为反向代理的示例配置：
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:9090;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }
   }
   ```

6. **用户设置**：首次访问 Linkding 时，需要创建一个管理员账户。按照页面提示完成账户创建后，即可开始添加和管理书签。

7. **浏览器扩展**：安装 Linkding 的浏览器扩展，方便快速添加书签。可以在 [Firefox 附加组件](https://addons.mozilla.org/en-US/firefox/addon/linkding/) 或 [Chrome 网上应用店](https://chrome.google.com/webstore/detail/linkding/) 中搜索并安装 Linkding 扩展。

8. **导入书签**：如果有现有的书签数据，可以通过 Linkding 的导入功能，将书签导入到 Linkding 中。支持 Netscape HTML 格式的书签文件。

9. **探索更多功能**：Linkding 提供了丰富的功能，用户可以在使用过程中探索和体验。例如，使用标签对书签进行分类，添加 Markdown 笔记，归档重要网站等。

#### 结语

Linkding 是一个功能强大且易于使用的自托管书签管理器，适合个人和团队使用。通过 Docker 容器运行，用户可以在多种平台上轻松部署和管理 Linkding。

其丰富的功能和简洁的界面，使得书签管理变得更加高效和便捷。如果你正在寻找一个可靠的书签管理解决方案，不妨试试 Linkding。

