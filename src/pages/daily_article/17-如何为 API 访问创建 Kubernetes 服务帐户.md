<img src="/assets/image/k8s.png" style="max-width: 70%; height: auto;">
<small>【运维干货分享】如何为 API 访问创建 Kubernetes 服务帐户</small>

![](image-84.png)

本教程将指导你完成创建服务帐户、角色和角色绑定的过程，以便对 kubernetes 集群进行 API 访问

允许 API 访问 Kubernetes 集群的最佳和推荐方法是通过遵循最低权限 （PoLP） 原则的服务账户。

## 使用案例
以下是用于外部 API 访问的 Kubernetes 服务账户的示例使用案例。

- 允许第三方监控工具访问 Kubernetes 数据
- 外部应用程序访问 kubernetes 资源。
现在，你为什么需要此访问权限？

让我们以 Prometheus 监控堆栈为例。

Prometheus 需要对集群 API 的读取权限，才能从指标服务器获取信息、读取 Pod 等。

部署 Prometheus 时，你需要将集群读取权限添加到部署 Prometheus Pod 的默认服务账户。这样，Prometheus Pod 就可以获得对集群资源的读取访问权限。

## 使用服务帐户设置 Kubernetes API 访问
按照以下步骤使用服务账户设置 API 访问。

注意：如果你在 Google Cloud 上使用 GKE，则可能需要运行以下两个命令，以将 cluster-admin 访问权限添加到你的用户帐号，以便与你的 gcloud 用户创建角色和角色绑定。
```
ACCOUNT=$(gcloud info --format='value(config.account)')
kubectl create clusterrolebinding owner-cluster-admin-binding \
    --clusterrole cluster-admin \
    --user $ACCOUNT

```
### 第 1 步：在命名空间中创建服务账户
出于演示目的，我们将在自定义命名空间而不是默认命名空间中创建服务帐户。

创建devops-tools命名空间。
```
kubectl create namespace devops-tools
```
在devops-tools命名空间中创建一个名为“ api-service-account ”的服务帐户
```
kubectl create serviceaccount api-service-account -n devops-tools
```
或使用以下清单。
```
cat <<EOF | kubectl apply -f -
apiVersion: v1
kind: ServiceAccount
metadata:
  name: api-service-account
  namespace: devops-tools
EOF
```
### 步骤 2：创建集群角色
假设服务账户需要访问整个集群资源，我们将创建一个具有允许访问权限列表的集群角色。

创建使用以下清单文件命名的 clusterRole。api-cluster-role
```
cat <<EOF | kubectl apply -f -
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: api-cluster-role
  namespace: devops-tools
rules:
  - apiGroups:
        - ""
        - apps
        - autoscaling
        - batch
        - extensions
        - policy
        - rbac.authorization.k8s.io
    resources:
      - pods
      - componentstatuses
      - configmaps
      - daemonsets
      - deployments
      - events
      - endpoints
      - horizontalpodautoscalers
      - ingress
      - jobs
      - limitranges
      - namespaces
      - nodes
      - pods
      - persistentvolumes
      - persistentvolumeclaims
      - resourcequotas
      - replicasets
      - replicationcontrollers
      - serviceaccounts
      - services
    verbs: ["get", "list", "watch", "create", "update", "patch", "delete"]
EOF
```
上述 YAML 声明具有对所有集群资源的完全访问权限和绑定到 “” 的角色。ClusterRoleapi-service-account

不建议在没有任何要求的情况下创建具有所有集群组件访问权限的服务账户。

要获取可用 API 资源的列表，请执行以下命令。
```
kubectl api-resources
```
### 步骤 3：创建 CluserRole 绑定
现在我们有了 ClusterRole 和服务账户，需要将它们映射在一起。

使用RoleBinding将cluster-api-role绑定到api-service-account
```
cat <<EOF | kubectl apply -f -
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: api-cluster-role-binding
subjects:
- namespace: devops-tools 
  kind: ServiceAccount
  name: api-service-account 
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: api-cluster-role 
EOF
```
### 第 4 步：使用 kubectl 验证服务帐户访问权限
为了验证 clusterrole 绑定，我们可以使用can-i命令来验证 API 访问（假设服务帐户位于特定命名空间中）。

例如，以下命令检查devops-tools命名空间中的api-service-account是否可以列出 pod。
```
kubectl auth can-i get pods --as=system:serviceaccount:devops-tools:api-service-account
```
下面是另一个示例，用于检查服务帐户是否有权删除部署。
```
kubectl auth can-i delete deployments --as=system:serviceaccount:devops-tools:api-service-account
```
### 第 5 步：使用 API 调用验证服务账户访问权限
要将服务账户用于 HTTP 调用，你需要将令牌与服务账户关联。

首先，获取与api-service-account关联的秘密名称
```
kubectl get serviceaccount api-service-account  -o=jsonpath='{.secrets[0].name}' -n devops-tools
```
使用 secret 名称获取 base64 解码的令牌。它将在 API 调用中用作持有者令牌。
```
kubectl get secrets  <service-account-token-name>  -o=jsonpath='{.data.token}' -n devops-tools | base64 -D
```
例如
```
kubectl get secrets  api-service-account-token-pgtrr  -o=jsonpath='{.data.token}' -n devops-tools | base64 -D
```
获取集群终端节点以验证 API 访问。以下命令将显示集群终端节点 （IP、DNS）。
```
kubectl get endpoints | grep kubernetes
```
现在，你拥有集群终端节点和服务账户令牌，可以使用 CURL 或 postman 应用程序测试 API 连接。

例如，使用curl列出集群中的所有命名空间。在Authorization: Bearer部分之后使用令牌。

```
curl -k  https://35.226.193.217/api/v1/namespaces -H "Authorization: Bearer eyJhbGcisdfsdfsdfiJ9.eyJpc3MiOisdfsdfVhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3sdf3BhY2UiOiJkZWZhdWx0Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZWNyZXQubmFtZSI6ImFwaS1zZXJ2aWNlsdfglkjoer876Y3BmNWYiLsdfsdfRlbTpzZXJ2aWNlYWNjb3VudDpkZWZhdWx0OmFwaS1zZXJ2aWNlLWFjY291bnQifQ.u5jgk2px_lEs3f5e5lh_UfS40fndtDKMTY5UvsdfrtsuhtgjrUj-ezrRXeLS8SLOae4DuOGGGbInSg_gIo6oO7bLHhCixWOBJNOA5gzrLVioof_kHDR8gH5crrsWoR-GSSsdfgsdfg6fA_LDOqdxzqMC0WlXt6tgHfrwIHerPPvkI6NWLyCqX9tn_akpcihd-bL6GwOKlph17l_ND710FnTkE7kBfdXtQWWxaPPe06UEmoKK9t-0gsOCBxJxViwhHkvwqetr987q9enkadfgd_2cY_CA"
```
如果也可以在 postman 中尝试相同的 API 调用。

![](image-85.png)

我们创建的 ClusterRole 也可以附加到 pods/deployments。

你还可以使用令牌登录到 Kubernetes 控制面板。

## 结论
使用 Kubernetes 服务账户从第三方应用程序进行 API 访问时，请确保仅向服务账户添加所需的角色。

此外，切勿将 clusterRole 附加到默认服务账户，因为 Pod 默认获取默认服务账户。这意味着命名空间中的所有 Pod 都可以访问 clusterRole。

此外，使用 Hashicorp vault 等机密管理工具来存储、检索和共享机密令牌。