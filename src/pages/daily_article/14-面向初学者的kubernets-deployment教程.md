<img src="/assets/image/k8s.png" style="max-width: 70%; height: auto;">
<small>【运维干活分享】面向初学者的kubernets-deployment教程</small>

![](image-44.png)

本 Kubernetes Deployment教程指南将通过 Nginx 示例Deployment解释 Kubernetes YAML 规范中的关键概念。

## 介绍

在 Kubernetes 中，Pod 是Deployment在集群中的基本单元。Kubernetes Deployment是 Pod 的抽象层。Deployment对象的主要用途是将Deployment配置中声明的资源保持其所需状态。Deployment配置可以是 yaml 或 json。

### 需要了解的关键事项

- 一个 Deployment 可以调度多个 Pod。Pod 作为一个单元无法自行扩展。
- Deployment 表示具有一组 POD 的单个用途。
- 单个 POD 可以有多个容器，单个 POD 中的这些容器共享相同的 IP，并且可以使用 localhost 地址相互通信。
- 要访问具有一个或多个 POD 的 Deployment，你需要使用标签和选择器将 Kubernetes Service 终端节点映射到 Deployment。
- Deployment应仅包含无状态服务。任何需要状态管理的应用程序都应该Deployment为 Kubernetes StatefulSet。

### Deployment YAML：

Kubernetes Deployment Yaml 包含以下主要规格。

- apiVersion
- kind
- metadata
- spec
  
现在让我们详细看看每个规范。

注意：在 Kubernetes 中，所有持久化都定义为一个对象。示例：Deployments, services, Replica Set, Configmap, Jobs等

### apiVersion

这指定了 Kubernetes Deployment对象的 API 版本。它因每个 Kubernetes 版本而异。

如何使用正确的 API 版本： Kubernetes 包含三个 API 版本。

- Alpha：这是早期的候选版本。它可能包含 bug，并且不能保证将来会正常工作。例：scalingpolicy.kope.io/v1alpha1
- Beta：API 在 Alpha 测试后即成为 beta 版本。它将持续开发和测试，直到它变得稳定。Beta 版本很可能会进入 Kubernetes 主要 API。batch/v1beta1
- stable：不包含 alpha 和 beta 的 API 属于稳定类别。建议在生产系统中仅使用稳定版本。例：apps/v1

这些 API 可以属于不同的 API 组。

下面显示了 Kubernetes 版本 1.10.6 中来自不同 API 组的 Kubernetes API 示例列表。Deployment 对象属于 API 组。你可以使用 kubectl 代理在 http://localhost:8001/ 上列出这些 API。apps
```
{
  "paths": [
    "/api",
    "/api/v1",
    "/apis",
    "/apis/",
    "/apis/admissionregistration.k8s.io",
    "/apis/admissionregistration.k8s.io/v1beta1",
    "/apis/apiextensions.k8s.io",
    "/apis/apiextensions.k8s.io/v1beta1",
    "/apis/apiregistration.k8s.io",
    "/apis/apiregistration.k8s.io/v1",
    "/apis/apiregistration.k8s.io/v1beta1",
    "/apis/apps",
    "/apis/apps/v1",
    "/apis/apps/v1beta1",
    "/apis/apps/v1beta2",
    "/apis/authentication.k8s.io",
    "/apis/authentication.k8s.io/v1",
    "/apis/authentication.k8s.io/v1beta1",
    "/apis/authorization.k8s.io",
    "/apis/authorization.k8s.io/v1",
    "/apis/authorization.k8s.io/v1beta1",
    "/apis/autoscaling",
    "/apis/autoscaling/v1",
    "/apis/autoscaling/v2beta1",
    "/apis/batch",
    "/apis/batch/v1",
    "/apis/batch/v1beta1",
    "/apis/certificates.k8s.io",
    "/apis/certificates.k8s.io/v1beta1",
    "/apis/cloud.google.com",
    "/apis/cloud.google.com/v1beta1",
    "/apis/extensions",
    "/apis/extensions/v1beta1",
    "/apis/metrics.k8s.io",
    "/apis/metrics.k8s.io/v1beta1",
    "/apis/networking.k8s.io",
    "/apis/networking.k8s.io/v1",
    "/apis/policy",
    "/apis/policy/v1beta1",
    "/apis/rbac.authorization.k8s.io",
    "/apis/rbac.authorization.k8s.io/v1",
    "/apis/rbac.authorization.k8s.io/v1beta1",
    "/apis/scalingpolicy.kope.io",
    "/apis/scalingpolicy.kope.io/v1alpha1",
    "/apis/storage.k8s.io",
    "/apis/storage.k8s.io/v1",
    "/apis/storage.k8s.io/v1beta1"
    ]
}
```

### kind 

Kind 描述要创建的对象/资源的类型。在我们的例子中，它是一个 deployment 对象。以下是 Kubernetes 支持的对象/资源的主要列表。
```
componentstatuses
configmaps
daemonsets
deployments
events
endpoints
horizontalpodautoscalers
ingress
jobs
limitranges
namespaces
nodes
pods
persistentvolumes
persistentvolumeclaims
resourcequotas
replicasets
replicationcontrollers
serviceaccounts
services
```
## metadata

它是一组用于唯一标识 Kubernetes 对象的数据。以下是可以添加到对象的关键元数据。
```
labels
name
namespace
annotations
```

让我们看一下每种元数据类型

- labels：主要用于对Deployment对象进行分组和分类的键值对。它适用于使用选择器对对象进行分组和映射。例如，kubernetes 服务使用其选择器中的 Pod 标签将流量发送到正确的 Pod。我们将在服务创建部分看到有关标签和选择器的更多信息。
- Name：表示要创建的 Deployment 的名称。
- Namespace：要在其中创建Deployment的命名空间的名称。
- Annotations：键值对（如标签），但用于不同的使用案例。你可以向注释添加任何信息。例如，你可以有一个 annotation like，外部源将能够找到具有此 annotation 的所有对象以抓取其指标。没有此注释的对象将被省略。 "monitoring" : "true
还有其他系统生成的元数据（如 UUID、时间戳、资源版本等）会添加到每个Deployment中。

示例元metadata：

```
metadata:
  name: resource-name
  namespace: deployment-demo
  labels:
    app: web
    platform: java
    release: 18.0
  annotations:
    monitoring: true
    prod: true
```

### spec

在 spec 下，我们声明我们想要拥有的对象的期望状态和特征。例如，在 Deployment Spec 中，我们将指定副本数、镜像名称等。Kubernetes 将确保 spec 下的所有声明都达到所需的状态。

spec 有三个重要的子字段。

- 副本：它将确保 Pod 的数量始终为Deployment运行。例
```
spec:
  replicas: 3
```

- 选择器：它定义与要管理的 Pod 匹配的标签。例
```
selector:
    matchLabels:
      app: nginx
```

- 模板：它有自己的元数据和规范。spec 将包含 Pod 应该具有的所有容器信息。容器映像信息、端口信息、ENV 变量、命令参数等。例
```
template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - image: nginx
          name: nginx
```
## Kubernetes 示例Deployment

由于我们已经了解了基础知识，因此让我们从一个示例Deployment开始。我们将在本节中执行以下操作。

- 创建命名空间
- 创建 Nginx Deployment
- 创建 Nginx 服务
- 暴露和访问 Nginx 服务

注意：我们在此示例中执行的操作很少可以仅使用 kubectl 执行，而无需 YAML 声明。但是，我们将 YAML 规范用于所有操作，以便更好地理解它。

### 练习文件夹

要开始练习，请创建一个名为 deployment-demo 的文件夹，并将 cd 放入该文件夹。在此文件夹中创建所有练习文件。
```
mkdir deployment-demo && cd deployment-demo
```
### 创建 Namespace

让我们创建一个名为 namespace.yaml 文件的 YAML 来创建命名空间。

```
apiVersion: v1
kind: Namespace
metadata:
  name: deployment-demo
  labels:
    apps: web-based
  annotations:
    type: demo
```

使用 kubectl 命令创建命名空间。

```
kubectl create -f namespace.yaml
```

等效的 kubectl 命令
```
kubectl create namespace deployment-demo
```

### 将资源配额分配给 Namespace

现在，让我们为新创建的命名空间分配一些资源配额限制。这将确保Deployment在此命名空间中的 Pod 消耗的系统资源不会超过资源配额中提到的系统资源。

创建名为 resourceQuota.yaml 的文件。以下是资源配额 YAML 内容。

```
apiVersion: v1
kind: ResourceQuota
metadata:
  name: mem-cpu-quota
  namespace: deployment-demo
spec:
  hard:
    requests.cpu: "4"
    requests.memory: 8Gi
    limits.cpu: "8"
    limits.memory: 16Gi
```

### 使用 YAML 创建资源配额。

```
kubectl create -f resourceQuota.yaml
```

现在，我们来描述命名空间，以检查是否已将资源配额应用于 deployment-demo 命名空间。

```
kubectl describe ns deployment-demo
```

输出应如下所示。

```
Name:         deployment-demo
Labels:       apps=web-based
Annotations:  type=demo
Status:       Active

Resource Quotas
 Name:            mem-cpu-quota
 Resource         Used  Hard
 --------         ---   ---
 limits.cpu       0     2
 limits.memory    0     2Gi
 requests.cpu     0     1
 requests.memory  0     1Gi
```

### 创建 Deployment

我们将使用公共 Nginx 镜像进行此Deployment。

创建名为 deployment.yaml 的文件，并将以下 YAML 复制到该文件中。

注意：此Deployment YAML 包含我们上面讨论的最少必需信息。你可以根据需要在Deployment YAML 中设置更多规范。

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx
  labels:
    app: nginx
  namespace: deployment-demo
  annotations:
    monitoring: "true"
spec:
  replicas: 1
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - image: nginx
        name: nginx
        ports:
        - containerPort: 80
        resources:
          limits:
            memory: "2Gi"
            cpu: "1000m"
          requests: 
            memory: "1Gi"
            cpu: "500m"
```

在容器下，我们定义了其资源限制、请求和容器端口（在 Dockerfile 中公开的一个端口）。

使用 kubectl 创建Deployment

```
kubectl create -f deployment.yaml
```

### 检查Deployment

```
kubectl get deployments -n deployment-demo
```

即使我们添加了最少的信息，但在Deployment后，Kubernetes 会向Deployment中添加更多信息，例如 resourceVersion、uid、status 等。

你可以通过使用 kubectl 命令以 YAML 格式描述Deployment来检查它。

```
kubectl get deployment nginx -n deployment-demo  --output yaml
```

### 创建 Service 并公开 Deployment

现在我们已经有一个正在运行的Deployment，我们将创建一个指向 nginx Deployment的 NodePort （ 30500） 类型的 Kubernetes 服务。使用 NodePort，你将能够在端口 30500 上访问所有 kubernetes 节点上的 Nginx 服务。

创建一个名为 service.yaml 的文件，并复制以下内容。

```
apiVersion: v1
kind: Service
metadata:
  labels:
    app: nginx
  name: nginx
  namespace: deployment-demo
spec:
  ports:
  - nodePort: 30500
    port: 80
    protocol: TCP
    targetPort: 80
  selector:
    app: nginx
  type: NodePort
```

Service 是解释标签和选择器的最佳示例。在这个服务中，我们有一个带有 “app” = “nginx” 标签的选择器。使用此功能，该服务将能够将 nginx Deployment中的 Pod 与Deployment匹配，并且 Pod 具有相同的标签。因此，所有传入 nginx 服务的请求都将自动发送到 nginx Deployment。

让我们使用 kubectl 命令创建服务。
```
kubectl create -f service.yaml
```
你可以查看使用 kubectl 命令创建的服务。
```
kubectl get services  -n deployment-demo
```
现在，你将能够在端口 30500 上访问任何一个 kubernetes 节点 IP 上的 nginx 服务

例如
```
http://35.134.110.153:30500/
```