<img src="/assets/image/230808-kubesphere-1.png" style="max-width: 70%; height: auto;">
<small></small>

13.1k，推荐一款开源容器调度平台，适合开发、测试、运维

## 1  简介
KubeSphere 是一个用于云原生应用管理的分布式操作系统，使用 Kubernetes 作为内核。它提供了一个即插即用的架构，允许第三方应用程序无缝集成到其生态系统中。

KubeSphere 也是一个多租户容器平台，具有全栈自动化 IT 操作和简化的 DevOps 工作流。

它提供了开发人员友好的向导 Web UI，帮助企业构建一个更健壮、功能更丰富的平台，其中包括企业 Kubernetes 策略所需的大多数常见功能


![](/assets/image/230808-kubesphere-1.png)


## 2 安装

访问如下地址就好：
**https://www.kubesphere.io/zh/devops/**

使用截图：

![](/assets/image/230808-kubesphere-2.png)

![](/assets/image/230808-kubesphere-3.png)

![](/assets/image/230808-kubesphere-4.png)

提供了demo可以体验：

![](/assets/image/230808-kubesphere-5.png)


![](/assets/image/230808-kubesphere-6.png)

## 3 软件特性或亮点
- 🕸 部署 Kubernetes 集群 支持在任何基础设施上部署 Kubernetes，支持在线安装和离线安装，


- 🔗 Kubernetes 多集群管理
  提供集中控制平台来管理多个 Kubernetes 集群，支持将应用程序发布到跨不同云供应商的多个 k8s 集群上。

- 🤖 Kubernetes DevOps
  提供基于 GitOps 的 CD 方案，底层支持 Argo CD，可实时统计 CD 状态。结合主流 CI 引擎 Jenkins，让 DevOps 更加易用。
- 🔎 云原生可观测性
  支持多维度监控、事件和审计日志；内置多租户日志查询和收集，告警和通知，

- 🧩 基于 Istio 的微服务治理
  为分布式微服务应用程序提供细粒度的流量管理、可观测性和服务跟踪，支持可视化的流量拓扑，

- 💻 应用商店
  为基于 Helm 的应用程序提供应用商店，并在 Kubernetes 平台上提供应用程序生命周期管理功能，

- 💡 Kubernetes 边缘节点管理
  基于kubeEdge实现应用与工作负载在云端与边缘节点的统一分发与管理，解决在海量边、端设备上完成应用交付、运维、管控的需求，

- 📊 多维度计量与计费
  提供基于集群与租户的多维度资源计量与计费的监控报表，让 Kubernetes 运营成本更透明，
  

- 🗃 支持多种存储和网络解决方案 支持 GlusterFS、CephRBD、NFS、LocalPV ，并提供多个 CSI 插件对接公有云与企业级存储。提供 Kubernetes 在裸机、边缘和虚拟化中的负载均衡器实现 OpenELB提供网络策略和容器组 IP 池管理，支持 Calico、Flannel、Kube-OVN。

- 🏘 多租户与统一鉴权认证
  提供统一的认证鉴权与细粒度的基于角色的授权系统，支持对接 AD/LDAP 。

- 🧠 GPU 工作负载调度与监控
  支持可视化创建 GPU 工作负载，支持 GPU 监控，同时还支持对 GPU 资源进行租户级配额管理。

## 4 架构 
KubeSphere 使用松散耦合的架构，将前端与后端分开。外部系统可以通过 REST API 访问后端的组件。
![](/assets/image/230808-kubesphere-7.png)



>注：如需转载，须保留文首公众号名片，其它行为一律视为非授权转载。