<img src="/assets/image/230816-zadig云原生devops-1.png" style="max-width: 70%; height: auto;">
<small>https://github.com/koderover/zadig</small>

2.4k star，推荐一款云原生、分布式、面向开发、运维的自动化部署工具


## 1  简介

Zadig 是 KodeRover 公司基于 Kubernetes 自主设计、研发的开源分布式持续交付 (Continuous Delivery) 产品

具备灵活易用的高并发工作流、面向开发者的云原生环境、高效协同的测试管理、强大免运维的模板库、客观精确的效能洞察以及云原生 IDE 插件等重要特性，为工程师提供统一的协作平面。

Zadig 内置了 K8s YAML、Helm Chart、主机等复杂场景最佳实践，适用大规模微服务、高频高质量交付等场景。

目标是通过云原生技术的运用和工程产品赋能，打造极致、高效、愉悦的开发者工作体验，让工程师成为企业创新的核心引擎。


![](/assets/image/230816-zadig云原生devops-1.png)


## 2 安装及使用

### 安装部署

#### 前置条件
一台至少配置为 4 核 8 G 可联网的 Linux 主机，或一个标准的 1.16.0 及以上版本的 Kubernetes 集群。

可以通过如下三种模式安装，具体可以参考如下链接：

**https://docs.koderover.com/zadig/Zadig%20v1.18.0/quick-start/try-out-install/**

1. All in One 一键安装
```
export IP=<IP> # 主机 IP，用于访问 Zadig 系统
export PORT=<PORT> # 随机填写 30000 - 32767 区间的任一端口，如果安装过程中，发现端口占用，换一个端口再尝试
curl -SsL https://download.koderover.com/install?type=all-in-one | bash
```
2. 基于现有 Kubernetes 安装

```
export IP=<IP> # 集群任一节点公网 IP，用于访问 Zadig 系统
export PORT=<PORT> # 随机填写 30000 - 32767 区间的任一端口，如果安装过程中，发现端口占用，换一个端口再尝试
curl -SsL https://download.koderover.com/install?type=standard| bash
```
3. 基于 Helm 命令安装

### 使用体验

官方提供了很多最佳实践案例可以作为参考：

**https://docs.koderover.com/zadig/Zadig%20v1.18.0/bestpractice/**


![](/assets/image/230816-zadig云原生devops-2.png)

#### 使用现有主机+zadig自动化交付

1. 配置主机信息

![](/assets/image/230816-zadig云原生devops-3.png)


2. 配置项目
进入 Zadig 系统，点击新建项目 -> 填写项目名称 vm-microservice-demo -> 选择主机项目 -> 点击立即创建 -> 点击下一步。


![](/assets/image/230816-zadig云原生devops-4.png)

![](/assets/image/230816-zadig云原生devops-5.png)


3. 配置服务及加入运行环境


![](/assets/image/230816-zadig云原生devops-6.png)
点击向导的下一步，这时，Zadig 会根据你的配置，创建两套环境以及自动化工作流。继续点击下一步 -> 完成结束项目向导。

![](/assets/image/230816-zadig云原生devops-7.png)

4. 运行工作流


![](/assets/image/230816-zadig云原生devops-8.png)


5. 自动触发工作流

![](/assets/image/230816-zadig云原生devops-9.png)

6. Im通知


![](/assets/image/230816-zadig云原生devops-10.png)


## 3 软件特性或亮点

- 灵活易用的高并发工作流

简单配置，可自动生成高并发工作流，多个微服务可并行构建、并行部署、并行测试，大大提升代码验证效率。自定义的工作流步骤，配合人工审核，灵活且可控的保障业务交付质量。

- 面向开发者的云原生环境

分钟级创建或复制一套完整的隔离环境，应对频繁的业务变更和产品迭代。基于全量基准环境，快速为开发者提供一套独立的自测环境。一键托管集群资源即可轻松调试已有服务，验证业务代码。
- 高效协同的测试管理

便捷对接 Jmeter、Pytest 等主流测试框架，跨项目管理和沉淀 UI、API、E2E 测试用例资产。通过工作流，向开发者提供前置测试验证能力。通过持续测试和质量分析，充分释放测试价值。
- 强大免运维的模板库

跨项目共享 K8s YAML 模板、Helm Chart 模板、构建模板等，实现配置的统一化管理。基于一套模板可创建数百微服务，开发工程师少量配置可自助使用，大幅降低运维管理负担。
- 客观精确的效能洞察

全面了解系统运行状态，包括集群、项目、环境、工作流，关键过程通过率等数据概览。提供项目维度的构建、测试、部署等客观的效能度量数据，精准分析研发效能短板，促进稳步提升。
- 云原生 IDE 插件

开发者无需平台切换，在 VScode IDE 中即可获得 Zadig 产品核心能力。编写代码后，无需打包镜像，即可一键热部署到自测环境，快速完成自测、联调和集成验证，开发效率倍增。

