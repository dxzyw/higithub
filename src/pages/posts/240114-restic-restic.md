<img src="/assets/image/240114-restic-restic-1.gif" style="max-width: 70%; height: auto;">
<small>22.4k star，推荐一款强大的、开源的备份工具</small>


可以看下使用效果：
![](/assets/image/240114-restic-restic-1.gif)

restic是一款专为备份而设计的开源工具，它让您可以无需繁琐的配置，就能轻松地备份和恢复您的重要数据

# restic：一款快速、安全、高效的备份程序

## 软件简介

restic是一款开源的备份工具，它可以将本地文件备份到多种不同的后端仓库，如本地目录、SFTP服务器，或者S3兼容的对象存储服务。

restic使用快照和数据去重技术，以及复杂的索引机制，让您可以快速地恢复数据，同时占用最小的存储空间。

一个restic仓库可以包含一个或多个主机的快照，因为主机信息也存储在快照索引中。

restic还使用加密算法来保证您的数据的机密性和完整性，即使您的备份数据存储在不可信的环境中，也不会被泄露或篡改。

## 功能特点

restic具有以下几个主要的功能特点：

- **易用性**：备份数据应该是一个无障碍的过程，否则您可能会忽略它。
- **速度**：使用restic备份数据的速度应该只受限于您的网络或硬盘带宽，这样您可以每天备份您的文件。
- **可验证性**：比备份更重要的是恢复，所以restic让您可以轻松地验证所有的数据都可以恢复。restic还提供了一些命令来检查仓库的完整性和一致性。
- **安全性**：restic使用加密算法来保证您的数据的机密性和完整性。
- **高效性**：restic使用数据去重技术来减少存储空间的占用。

## 如何quickstart

要使用restic，您需要先安装restic，然后初始化一个仓库，然后就可以开始备份和恢复数据了。下面是一些简单的步骤：

### 安装restic

Redhat/CentOS

```bash
sudo yum install restic
```


### 配置restic

为了简化restic的使用，最好将您需要的restic环境变量定义在一个文件中，例如`/etc/restic-env`。

这样就不需要每次运行restic时都传递每个参数了。例如，如果您要使用Backblaze B2作为存储后端，您可以这样定义环境变量：

```bash
export AWS_ACCESS_KEY_ID=<B2_KEY_ID>
export AWS_SECRET_ACCESS_KEY=<B2_ApplicationKey>
export RESTIC_REPOSITORY="s3:s3.us-west-002.backblazeb2.com/s3restic2023"
export RESTIC_PASSWORD_FILE=/etc/restic-password
```

然后`/etc/restic-password`文件中可以包含一行密码，如：

```bash
mYsEcureP@$$word
```

为了保护restic文件的安全，您可以只让root或者您创建的用户可以看到这些文件：

```bash
chown root:root /etc/restic-env
chown root:root /etc/restic-password
chmod 700 /etc/restic-env
chmod 700 /etc/restic-password
```

在运行任何restic命令之前，我们需要加载环境变量，使用这个命令：

```bash
source /etc/restic-env
```

这个命令也可以添加到您的登录配置文件中（例如`~.bashrc`），这样restic变量就总是定义好了。

### 初始化仓库

加载环境变量后，我们就可以初始化一个仓库了，使用这个命令：

```bash
source /etc/restic-env
restic -r s3:s3.us-west-002.backblazeb2.com/s3restic2023 init
```

这个命令会在指定的存储后端创建一个restic仓库，您需要输入您的密码来加密仓库。

### 备份数据

初始化仓库后，我们就可以开始备份数据了，使用这个命令：

```bash
restic -r s3:s3.us-west-002.backblazeb2.com/s3restic2023 backup /home/user
```

这个命令会将`/home/user`目录下的所有文件备份到仓库中，您可以根据您的需要指定其他的目录或文件。



![](/assets/image/240114-restic-restic-2.png)

**开源地址：https://github.com/restic/restic**

**官网地址：https://restic.net/**
