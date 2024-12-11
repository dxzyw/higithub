<img src="/assets/image/k8s.png" style="max-width: 70%; height: auto;">
<small>【运维干货分享】创建kubernetes-yaml的简单方法</small>

![](image-71.png)

在此博客中，你将学习快速创建 Kubernetes YAML 清单以在 Kubernetes 上测试和部署应用程序的简单方法。

使用 kubernetes 时，一个常见的事情是，每当我们想部署测试 pod、部署或任何其他对象时，我们往往会搜索 Kubernetes YAML 文件。谁想写 YAML 文件的每一行，对吧？

让我们看看一些 Kubernetes 技巧，以简化 YAML 创建过程。


## 使用 Kubernetes 扩展自动生成 YAML
创建 Kubernetes YAML 的最简单方法之一是使用 Visual Studio kubernetes 扩展。

安装 Kubernetes VS code 扩展，它将有助于为大多数 kubernetes 对象开发 k8s 清单。它还支持将应用程序部署到本地和远程 k8s 集群。

你所要做的就是开始键入 Object name（对象名称），它将自动为你填充选项。然后，根据你的选择，它将为你自动生成基本的 YAML 结构，如下图所示。

![](ks-extension.gif)

此扩展支持 Pod、Deployment、Statefulset、Replicationset、持久卷 （PV）、持久卷声明 （PVC） 等的 YAML 生成。

## 使用 Kubectl 试运行创建 YAML 清单
你可以使用kubectl命令式命令创建清单。有一个名为--dry-run的标志可以帮助您创建整个清单模板。

此外，你无法使用试运行创建所有 Kubernetes 资源 YAML。例如，你无法使用试运行创建 Statefulset 或持久卷。


## kubectl YAML 试运行示例

让我们看一下使用试运行生成 YAML 并将其写入输出文件的示例。

### 创建 Pod YAML

创建一个名为myapp的 pod YAML，它使用镜像nginx:latest 。
```
kubectl run mypod --image=nginx:latest \
            --labels type=web \
            --dry-run=client -o yaml > mypod.yaml
```
### 创建 Pod 服务 YAML
为暴露 NodePort 的 Pod Service 生成 YAML。这仅在你有一个正在运行的 Pod 时有效。

```
kubectl expose pod mypod \
    --port=80 \
    --name mypod-service \
    --type=NodePort \
    --dry-run=client -o yaml > mypod-service.yaml
```
### 创建 NodePort 服务 YAML

创建端口30001的服务类型nodeport ，并在端口80上将服务映射到 pod TCP 端口。

```
kubectl create service nodeport mypod \
    --tcp=80:80 \
    --node-port=30001 \
    --dry-run=client -o yaml > mypod-service.yaml
```
### 创建Deployment  YAML
创建用于部署mydeployment NodePort 服务 YAML，服务端口为8080

```
kubectl create deployment mydeployment \
    --image=nginx:latest \
    --dry-run=client -o yaml > mydeployment.yaml
```
### 创建 Deployment Service YAML
使用 service port 创建 NodePort 服务 YAML 进行部署mydeployment8080
```
kubectl expose deployment mydeployment \
    --type=NodePort \
    --port=8080 \
    --name=mydeployment-service \
    --dry-run=client -o yaml > mydeployment-service.yaml
```
### 创建作业 YAML
使用nginx映像创建名为myjob作业。
```
kubectl create job myjob \
    --image=nginx:latest \
    --dry-run=client -o yaml
```
### 创建 Cronjob YAML

使用nginx映像和玉米计划创建一个名为mycronjob的 cronjob

```
kubectl create cj mycronjob \
    --image=nginx:latest \
    --schedule="* * * * *" \
    --dry-run=client -o yaml
```

我已经给出了通用的 YAML 示例。你可以进一步更改参数并根据你的要求使用它们。

### kubectl & dry run 别名
为了加快速度，你可以在 或 for 命令中设置别名，如下所示。这样你就不必每次都打字。~/.bashrc~/.zshrckubectlkubectl

```
alias k=kubectl
```

你还可以为 kubectl 试运行参数设置别名，如下所示。
```
alias kdr='kubectl --dry-run=client -o yaml'
```
你可以按如下方式执行该命令。
```
kdr run web --image=nginx:latest > nginx.yaml
```
## 结论
在这篇博客中，我们了解了快速创建 Kubernetes YAML 的方法。此外，命令式命令在 kubernetes 认证考试中非常有用。