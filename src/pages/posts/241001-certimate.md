<img src="/assets/image/241001-certimate-1.png">
<small>开源、自建，网站与ssl证书管理</small>

**Certimate** 是一款开源的 SSL 证书管理工具，旨在简化 SSL 证书的申请、部署和续期流程。它特别适合需要管理多个域名证书的用户，如中小企业或个人项目。以下是该工具的主要特点和快速部署方法：

### 主要功能：
1. **自动化管理**：Certimate 可全自动完成 SSL 证书的申请、部署和续期，避免手动操作的繁琐。适合频繁续期的域名，确保证书始终有效。
2. **私有部署**：该工具不提供 SaaS 服务，用户数据完全保存在自己服务器上，确保隐私与安全。此外，其二进制文件和 Docker 镜像打包过程透明，基于 GitHub Actions 自动化构建。
3. **多平台支持**：Certimate 支持多个 DNS 和托管服务商，包括阿里云、腾讯云和 Cloudflare，方便用户跨平台部署 SSL 证书。
4. **自动续期功能**：在证书即将过期的 10 天前，Certimate 会自动申请新证书并进行部署，避免证书过期带来的网站停机风险。
5. **开源透明**：Certimate 完全开源，用户可自行审计或根据需求定制功能，提升安全性和适用性。

### 快速部署方法：
1. **二进制文件安装**：
   - 从 [GitHub Releases 页面](https://github.com/usual2970/certimate) 下载预编译的二进制文件。
   - 解压并运行命令：
     ```bash
     ./certimate serve
     ```
2. **Docker 部署**：
   - 使用 Docker Compose 进行安装：
     ```bash
     git clone git@github.com:usual2970/certimate.git
     cd certimate/docker
     docker compose up -d
     ```
3. **源代码安装**：
   - 通过源代码安装：
     ```bash
     git clone git@github.com:usual2970/certimate.git
     cd certimate
     go run main.go serve
     ```

安装完成后，可在浏览器中访问 `http://127.0.0.1:8090` 进入 Certimate 管理界面，使用默认的管理员账号登录。

更多详情请查看 Certimate 官方文档(https://github.com/usual2970/certimate)
![](/assets/image/241001-certimate-1.png)
![](/assets/image/241001-certimate-2.png)
![](/assets/image/241001-certimate-3.png)
![](/assets/image/241001-certimate-4.png)

![](/assets/image/241001-certimate.png)

### **域名管理与配置：**

1. **域名注册：**
   在 Certimate 中，用户可以为特定域名申请 SSL 证书。首先，用户需要在 Certimate 的管理界面中输入域名信息，包括域名名称和 DNS 服务提供商的授权信息。这一步用于证明用户对该域名的所有权。

2. **DNS 服务商授权：**
   Certimate 支持多个 DNS 服务商，如阿里云、腾讯云和 Cloudflare 等。为申请 SSL 证书，Certimate 会通过自动添加一个 TXT 记录的方式进行 DNS 验证，来证明域名的所有权。用户只需在 Certimate 的后台中填写 DNS 服务商的 API 凭证（例如 Access Key ID 和 Secret），其余操作由 Certimate 自动完成

3. **SSL 证书申请：**
   在配置好域名并验证所有权后，Certimate 会通过与证书颁发机构（CA）的 API 交互，自动发起 SSL 证书申请。申请过程中所需的域名、授权信息等内容由 Certimate 自动提交。

4. **目标平台部署：**
   证书申请完成后，Certimate 可以将 SSL 证书自动部署到指定的平台。用户可以选择将证书部署到 CDN（例如阿里云、腾讯云等）或其他服务器上。用户只需在 Certimate 中提供相应平台的部署凭证，工具便会将证书自动推送至相应的服务。

### **Certimate 的工作流程：**

Certimate 的工作流程围绕自动化管理 SSL 证书生命周期展开，包括以下几个步骤：

1. **域名配置**：
   用户在 Certimate 界面中输入域名和 DNS 服务商的授权信息，以及目标平台的部署授权信息。

2. **SSL 证书申请与获取**：
   Certimate 自动向证书颁发机构（CA）发起 SSL 证书的申请请求，通常通过 DNS 验证来确保域名的合法性（Certimate 会自动添加 TXT 记录）。

3. **证书存储与跟踪**：
   Certimate 会存储证书的详细信息，包括证书内容、私钥和到期时间。工具每天会检查证书的有效期，并在证书快到期时自动进行续期申请。

4. **自动续期**：
   Certimate 会在证书到期前 10 天自动进行续期，确保用户的网站不会因为证书到期而出现访问问题。

5. **部署**：
   Certimate 自动将证书部署到用户指定的平台，例如阿里云或腾讯云的 CDN 服务，或通过 SSH 部署到服务器上，确保整个服务基础设施的证书安全性和有效性