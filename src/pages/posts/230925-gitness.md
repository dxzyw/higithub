
<small>28.8k star，开源devops平台gitness，代码管理、持续交付、持续集成平台，推荐！！</small>


# Gitness: 一个开源的代码托管和持续集成平台

在现代软件开发中，源代码管理和持续集成是不可或缺的组成部分。但是，许多开发人员和团队常常陷入使用多个工具和服务的困境，这导致了复杂的工作流程、集成问题和安全风险。

此外，许多现有解决方案要么价格昂贵，要么缺乏必要的功能，要么过于臃肿难以维护。然而，现在有一个全新的解决方案，它是免费的、开源的，旨在提供一站式的源代码管理和持续集成平台——Gitness。

## Gitness简介

Gitness是一个轻量级、超快速的代码托管和持续集成服务，它是在 [Drone](https://drone.io) 基础上构建的。

它的目标是为开发人员和团队提供一个无缝集成的平台，以简化工作流程、提高协作效率、确保代码安全性，同时消除了需要使用多个不同工具的烦恼。Gitness以其出色的性能、易用性和强大的功能而脱颖而出。

## 功能亮点

### 1. 卓越的协作与速度

Gitness通过自动化状态检查和强制评审人员的方式推动协作式代码审查，从而加速团队合作并确保代码质量。

### 2. 强化的安全性

通过分支保护规则和健全的用户访问管理，Gitness促进了安全的代码管理，最大限度地减少了与未经检查的更改相关的风险。

### 3. 高效的代码管理

Gitness集成了基于人工智能的语义搜索功能，使开发人员能够快速浏览和理解代码库，从而加快了开发和调试的速度。

### 4. 自动化的持续集成

每次代码更改都会触发自动化的持续集成管道，通过缓存优化性能，减少手动干预，并确保一致的构建和测试过程。

### 5. 简便的迁移过程

Gitness提供了简单的迁移过程，使开发人员能够轻松迁移他们的现有存储库和管道，包括来自GitHub和GitLab等平台的存储库。这个自动化的迁移确保了平滑的过渡，让开发人员在几分钟内就能开始利用Gitness的优势。

## 如何开始使用Gitness

### 使用Docker

你可以使用Docker来轻松地运行Gitness。首先，确保你已经安装了Docker。然后，运行以下命令来启动Gitness容器：

```shell
docker run \
  -p 3000:3000 \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v /tmp/gitness:/data \
  harness/gitness:latest
```

一旦容器运行起来，你就可以在浏览器中访问 `localhost:3000` 来开始使用Gitness。

### 先决条件

为了使用Gitness，你需要安装最新版本的Node.js和Go版本1.19或更高版本。还需要安装以下Go程序并确保将GOPATH的bin目录添加到你的PATH中：

- 安装protobuf
  - 检查是否已安装protobuf：`protoc --version`
  - 如果版本与v3.21.11不同，请运行：`brew unlink protobuf`
  - 获取v3.21.11：`curl -s https://raw.githubusercontent.com/Homebrew/homebrew-core/9de8de7a533609ebfded833480c1f7c05a3448cb/Formula/protobuf.rb > /tmp/protobuf.rb`
  - 安装它：`brew install /tmp/protobuf.rb`
  - 检查版本：`protoc --version`
- 安装protoc-gen-go和protoc-gen-go-rpc：
  - 安装protoc-gen-go v1.28.1：`go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.28.1`
  - 安装protoc-gen-go-grpc v1.2.0：`go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2.0`

### 构建和运行

Gitness支持所有Go支持的操作系统和架构，这意味着你可以在本地构建和运行系统，不需要Docker容器。要启

动服务器，请运行以下命令：

```shell
./gitness server .local.env
```

一旦服务器启动，你就可以通过浏览器访问 `localhost:3000` 来使用用户界面。

## 用户界面和Swagger

Gitness包括一个完整的用户界面，用于与系统进行交互。当你运行应用程序时，可以通过浏览器访问用户界面，地址是 `http://localhost:3000`。

此外，Gitness还包括一个Swagger规范，用于定义API。你可以通过访问 `http://localhost:3000/swagger` 来查看Swagger规范。

## 自动生成Gitness API客户端

Gitness的用户界面使用自动生成的API客户端。当你添加新的REST API时，确保更新用户界面使用的自动生成客户端代码。

要重新生成代码，请执行以下步骤：

1. 运行本地的Gitness实例，包含最新的更改。
2. 从 `http://localhost:3000/openapi.yaml` 获取最新的OpenAPI规范并存储在 `web/src/services/code/swagger.yaml` 中。
3. 最新的API更改现在应该反映在 `web/src/services/code/index.tsx` 中。

## REST API

Gitness的REST API规范可在Swagger中查看。为了进行测试，建议使用默认用户admin执行操作，你可以使用PAT（Personal Access Token）来进行身份验证。以下是一些常用操作的示例：

```shell
# 登录（用户：admin，密码：changeit）
./gitness login

# 生成PAT（有效期1年）
./gitness user pat "my-pat-uid" 2592000
```

然后，你可以将生成的PAT作为Authorization头部的一部分，与Postman或curl一起使用来执行API请求。

## 命令行界面

Gitness还包括一些基本的命令行工具，用于开发和运行服务。请注意，必须在执行命令之前启动服务器。

以上是关于Gitness的简要介绍，它提供了开源的、全面的解决方案，旨在改进软件开发工作流程、提高协作效率、增强安全性，同时减少开发人员的工作负担。作为一个全新的解决方案，Gitness正在取得巨大的进展，成为开发人员和团队的首选工具。

要了解更多信息和开始使用Gitness，请访问 [Gitness官网](https://gitness.com)。

## 结语

Gitness代表了现代软件交付的未来，它为开发人员提供了一个功能强大、易于使用的平台，使他们能够更快地交付高质量的软件。Harness将继续致力于推动创新，赋予开发人员更多的工具，以提高他们的工作效率和代码质量。

希望这篇文章能帮助你更好地了解Gitness以及如何开始使用它。如果你是一位开发人员，那么Gitness可能是你工作中不可或缺的伙伴。
