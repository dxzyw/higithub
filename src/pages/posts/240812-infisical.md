<img src="/assets/image/240812-infisical-1.png">
<small>绝无仅有！好用的开源工具推荐</small>

各位程序员，你们日常配置文件中的密码是如何配置的？

明文？或是自己加解密？

今天推荐一个开源密码管理平台，开发人员可以使用它来集中管理他们的应用程序配置和密钥，如 API 密钥和数据库凭据，以及管理他们的内部 PKI。此外，开发人员使用 Infisical 来防止机密泄露到 git，并在开发人员之间安全地共享机密。

>项目地址：https://github.com/Infisical/infisical 

![](/assets/image/240812-infisical.png)

## 项目简介

Infisical 是开源密钥管理平台，管理和同步你的密钥，一定程度上方式密钥泄露。

这款软件的作者是想让任何开发人员都可以更加轻松的满足安全要求。

## 如何安装

 ![](https://img.shields.io/github/downloads/Infisical/infisical/total?style=flat-square)

安装方式简单，如下操作：

```
git clone https://github.com/Infisical/infisical && cd "$(basename $_ .git)" && cp .env.example .env && docker compose -f docker-compose.prod.yml up
```
然后可以通过http://localhost:80 访问

在使用 Infisical 管理密钥的顶部，您还可以扫描文件、目录和 git 存储库中的 140+ 密钥类型。

要扫描完整的 git 历史记录,可以执行：

```
infisical scan --verbose
```

## 功能特点

- 仪表盘，可以设置不同的项目及环境，方便管理
- 不同语言的客户端sdk提供，可以给不同用户配置不同应用的密码获取权限
- 支持终端命令行访问，提供了大部分系统的命令支持
- api支持，用于对 Infisical 中的机密、用户、项目和任何其他资源执行 CRUD 操作
- 与ansible可以集成
- 支持管理K8s密钥
- 对密码管理支持版本控制可根据时间节点恢复
- 基于角色的访问控制，用于在 Infisica 中的任何资源上创建权限集，并将这些权限集分配给用户或计算机身份。 
![](/assets/image/240812-infisical-1.png)

## star数

 ![](https://img.shields.io/github/stars/Infisical/infisical?style=flat-square)

 目前该项目获得了14k star！