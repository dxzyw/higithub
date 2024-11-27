<img src="/assets/image/240228-酷炫的linux系统web管理平台-1.png" style="max-width: 70%; height: auto;">
<small></small>

3.5k star，推荐一款实用炫酷的Linux系统Web管理平台

可以先看下效果图，首页是这样的，可以调节为暗黑模式，支持中文，可以设置。

![](/assets/image/240228-酷炫的linux系统web管理平台-1.png)

![暗黑模式](/assets/image/240228-酷炫的linux系统web管理平台-2.png)

# Webmin：一个基于 Web 的 Unix 系统管理工具

这款工具适合linux初学者，尤其是不需要对linux具体深入的用户，在使用起来很方便。

Webmin 就是类似windows的控制面板，通过简单易用的 Web 界面，管理你的 Linux 服务器。

除了常规的主机配置外如用户、用户组、磁盘等，还可以创建文件、文件夹，一些常规的服务也可以通过web界面配置如 Web，FTP,Email 和数据库。

Webmin 可以修改配置文件如：/etc/passwd，从而可以让你从控制台或远程管理你的系统。


![](/assets/image/240228-酷炫的linux系统web管理平台-3.png)

![](/assets/image/240228-酷炫的linux系统web管理平台-4.png)


## Webmin 的功能特点

- 支持大部分linux系统，如：Red Hat Enterprise Linux, Alma, Rocky, Oracle, CentOS Stream, Fedora, Debian, Ubuntu, Kali, Solaris, FreeBSD 等。

- Webmin 提供了超过 100 个分模块，用于管理不同的服务和应用，有主模块为 Webmin、System、Servers、Tools、Networking、Hardware 和 Cluster

- Webmin 支持多语言界面，你可以根据你的偏好选择你的语言。支持中文，可以通过配置调整。

- Webmin 支持多用户和多角色管理，你可以为不同的用户或组分配不同的权限和模块。你也可以使用 LDAP 或 NIS 来认证用户。

- Webmin 支持 SSL 加密，你可以使用自签名或 Let's Encrypt 证书来保护你的 Webmin 连接。你也可以使用双因素认证来增加安全性。

- Webmin 支持主从模式，你可以使用 Webmin Cluster 模块来管理多个 Webmin 服务器，实现配置的同步和分发。

- Webmin 支持主题和皮肤，你可以根据你的喜好选择你的界面风格。Webmin 默认使用的主题是 Authentic，它是一个现代化，响应式，美观的主题。
![](/assets/image/240228-酷炫的linux系统web管理平台-5.png)

![](/assets/image/240228-酷炫的linux系统web管理平台-6.png)


## 如何快速安装使用 Webmin

Webmin 的安装和使用非常简单，你可以按照以下步骤进行：

- 首先，你需要确保你的服务器已经安装了 Perl 5.8 或更高版本，以及一些必要的 Perl 模块，如 Net::SSLeay，Authen::PAM，IO::Tty 等。你可以使用你的系统的包管理器来安装这些依赖。

- 然后，你可以使用 Webmin 提供的 setup-repos.sh 脚本来配置 Webmin 的仓库，这样你就可以方便地安装和更新 Webmin。你可以使用以下命令来执行这个脚本：

```bash
curl -o setup-repos.sh https://raw.githubusercontent.com/webmin/webmin/master/setup-repos.sh
sh setup-repos.sh
```

- 接着，你可以使用你的系统的包管理器来安装 Webmin。例如，如果你使用的是 RHEL 或其衍生系统，你可以使用以下命令来安装 Webmin：

```bash
dnf install webmin
```

如果你使用的是 Debian 或其衍生系统，你可以使用以下命令来安装 Webmin：

```bash
apt-get install webmin --install-recommends
```

- 最后，你可以通过浏览器访问 https://<Your-Server-IP>:10000 来登录 Webmin。
  
  你需要使用你的系统的 root 用户名和密码来登录。
  
  你也可以创建其他的 Webmin 用户和角色来管理你的服务器。你可以在 Webmin Configuration 模块中修改 Webmin 的设置，如语言，主题，端口，证书，用户，模块等。
![](/assets/image/240228-酷炫的linux系统web管理平台-7.png)

  
![](/assets/image/240228-酷炫的linux系统web管理平台-8.png)


## 总结

Webmin 是一个强大而灵活的系统管理工具，它可以让你轻松地管理你的 Linux 服务器。
  
  你可以使用 Webmin 来配置和控制各种服务和应用，以及管理用户，文件，安全等。
  
  Webmin 有着友好的 Web 界面，支持多语言，多用户，多角色，SSL，主从等功能。
  

![](/assets/image/240228-酷炫的linux系统web管理平台-9.png)

