<img src="/assets/image/k8s.png" style="max-width: 70%; height: auto;">
<small>【运维干货分享】如何在 Kubernetes 上设置 Kube 状态指标</small>
在这篇博客中，我们将了解什么是 Kube 状态指标及其在 Kubernetes 上的设置。本博客是 Prometheus kubernetes 设置教程系列的一部分。

## 什么是 Kube 状态指标？
Kube 状态指标是一项与 Kubernetes API 服务器通信的服务，以获取有关所有 API 对象（如 deployment、pod、daemonsets、Statefulsets 等）的所有详细信息。

它主要以 Prometheus 格式生成指标，具有与 Kubernetes API 一样的稳定性。总的来说，它提供了你无法直接从原生Kubernetes监控组件获取的kubernetes对象和资源指标。

Kube 状态指标服务公开/metrics URI 上的所有指标。 Prometheus可以抓取 Kube 状态指标公开的所有指标。

以下是你可以从 Kube 状态指标中获得的一些重要指标。

- 节点状态、节点容量（CPU 和内存）
- 副本集合规性（每个deployment的副本的所需/可用/不可用/更新状态）
- Pod 状态（等待、正在运行、就绪等）
- Ingress 指标
- PV、PVC 指标
- Daemonset & Statefulset 指标。
- 资源请求和限制。
- Job & Cronjob指标


## Kube 状态指标设置
Kube 状态指标以公共 Docker 镜像的形式提供。你必须部署以下 Kubernetes 对象，Kube 状态指标才能正常工作。

-  Service Account
- 集群角色 – 用于访问所有 Kubernetes API 对象的 kube 状态指标。
- Cluster Role Binding （集群角色绑定） – 将服务账户与集群角色绑定。
- Kube State Metrics deployment
- Service – 公开指标
  
上述所有 Kube 状态指标对象都将部署在命名空间中kube-system

让我们部署组件。所有部署对象都可以在 Github 中找到。你也可以在官方 repo 中找到相同的部署对象。

步骤1：克隆 Github 存储库
```
git clone https://github.com/devopscube/kube-state-metrics-configs.git
```
步骤2： 通过指向克隆的目录来创建所有对象。
```
kubectl apply -f kube-state-metrics-configs/
```
步骤3：使用以下命令检查部署状态。
```
kubectl get deployments kube-state-metrics -n kube-system
```
## kube 状态指标 Prometheus 配置
所有 Kube 静态指标都可以从 URI 上的 Kube 状态服务终端节点获取。/metrics

此配置可以作为 Prometheus 作业配置的一部分添加。你需要将以下作业配置添加到 Prometheus 配置中，以便 Prometheus 抓取所有 Kube 状态指标。

注意：如果你遵循了我的 prometheus 指南，则不必添加此抓取配置。它已经是 prometheus 配置的一部分。部署 kube 状态指标后，你应该会看到目标状态 “up”。

如果你有以下
```
- job_name: 'kube-state-metrics'
  static_configs:
    - targets: ['kube-state-metrics.kube-system.svc.cluster.local:8080']
```
![](image-81.png)