<img src="/assets/image/240801-git-credential-1.png">
<small>6.4k star，开发者，开箱即用，推荐！</small>

git应该是开发人员日常用到最多的工具了，今天推荐的这款开源工具就是用于管理git凭据的。

日常用到的gitlab、github、bitbucket都是支持的。

完美解决平时远程操作git仓库遇到的登陆和认证失败的问题。

## git-credential-manager简介

git-credential-manager是一个安全、跨平台的 Git 凭据存储，可对 GitHub、Azure Repos 和其他流行的 Git 托管服务进行身份验证。

![demo](/assets/image/240801-git-credential.png)

>项目地址：github.com/git-ecosystem/git-credential-manager 

Git Credential Manager (GCM) 是一个基于.NET构建的安全Git 凭据助手，可在 Windows、macOS 和 Linux 上运行。它旨在为每个主要源代码控制托管服务和平台提供一致且安全的身份验证体验，包括多因素身份验证。

## git-credential-manager如何安装使用

### macos

```
brew install --cask git-credential-manager
```

其它环境可以直接到releases中下载：

![install](/assets/image/240801-git-credential-1.png)

一旦安装并配置完毕，Git Credential Manager 就会被 Git 隐式调用。您无需执行任何特殊操作，并且 GCM 不适合由用户直接调用。例如，当推送 ( git push ) 到Azure DevOps 、 Bitbucket或GitHub时，将自动打开一个窗口并引导您完成登录过程。 

（对于每个 Git 主机，此过程看起来会略有不同，甚至在某些情况下，无论您连接到本地还是云托管的 Git 主机。）同一存储库中的后续 Git 命令将重新使用现有凭据或GCM 在有效期间一直存储的令牌。

## git-credential-manager有哪些特点？


- 支持GitHub 的双因素身份验证支持
- 可快速在各个环境中安装及卸载
- 支持gitlab的双因素验证
- 支持基本的http身份验证
