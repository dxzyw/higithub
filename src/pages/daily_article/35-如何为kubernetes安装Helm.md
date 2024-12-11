<img src="/assets/image/k8s.png" style="max-width: 70%; height: auto;">
<small>【运维干货分享】如何为kubernetes安装Helm</small>

![](image-124.png)

本文介绍了安装 Helm 和安装 Helm Chart 的步骤，用于在 Kubernetes 集群上管理和部署应用程序。

## Helm 先决条件
在开始 helm 设置之前，你应该具备以下条件。

- 正在运行的 Kubernetes 集群。
- Kubernetes 集群 API 端点应该可以从你运行 helm 的计算机访问。
- 使用 kubectl 对集群进行身份验证，它应该具有 cluster-admin 权限。
### 方法 1：使用脚本安装 Helm
如果你要在本地工作站或服务器中设置测试环境，我建议使用此方法。对于项目要求，请按照下一节中介绍的特定版本的二进制安装进行操作。

注意： 你正在运行的工作站应将 kubectl 上下文设置为要使用 Helm 管理的集群。

步骤1：下载最新的 Helm 安装脚本。
```
curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3
```
步骤2：向下载的脚本添加执行权限。
```
chmod +x get_helm.sh
```
步骤3：执行安装脚本。此脚本将自动为你的系统找到正确的二进制文件。
```
./get_helm.sh
```
步骤4：通过执行 helm 命令验证 helm 安装。
```
helm
```
### 方法 2：从 Binary 安装 Helm 3
对于可以在所有环境中安装特定版本的 Helm 的项目要求，建议使用此方法。

例如，如果你使用 Jenkins 进行 Helm 部署，请确保运行 Helm 命令的 Jenkins 代理已为 kubectl 配置了管理员权限。

步骤1： 前往 Github helm 发布页面并复制所需版本的 Linux amd64 链接。

Helm 安装二进制文件 - 发布页
步骤2： 使用 wget 下载二进制文件。
```
wget -O helm.tar.gz https://get.helm.sh/helm-v3.13.0-rc.1-linux-amd64.tar.gz
```
步骤3： 解压缩下载的文件。
```
tar -zxvf helm.tar.gz
```
步骤4：将 helm 可执行文件移动到 bin 目录。
```
sudo mv linux-amd64/helm /usr/local/bin/helm
```
步骤5：通过执行 helm 命令进行验证。
```
helm
```
### 方法 3：从 Package Manager 安装 Helm
对于 Mac，
```
brew install helm
```
对于 Debian/Ubuntu，
```
curl https://baltocdn.com/helm/signing.asc | gpg --dearmor | sudo tee /usr/share/keyrings/helm.gpg > /dev/null
sudo apt-get install apt-transport-https --yes
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/helm.gpg] https://baltocdn.com/helm/stable/debian/ all main" | sudo tee /etc/apt/sources.list.d/helm-stable-debian.list
sudo apt-get update
sudo apt-get install helm
```
对于 Windows，

#### For Scoop
```
scoop install helm
```
#### For Chocolatey
```
choco install kubernetes-helm
```
## 升级 Helm 可执行文件
如果你使用的是旧版本的 helm 并且想要将其升级到最新版本，则可以根据操作系统类型使用以下步骤。

对于 MAC，
```
brew update
brew upgrade helm
```
对于 Linux，

以下脚本将获取最新版本并对其进行升级。
```
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
```
对于 Windows，
```
choco upgrade kubernetes-helm
```
升级后，使用以下命令检查版本。
```
helm version
```
## 添加稳定的 Helm 仓库
Helm 仓库包含由社区开发和维护的稳定 helm chart。

现在，添加用于安装稳定 Chart 的公共稳定版 helm 存储库。
```
helm repo add stable https://charts.helm.sh/stable
```
你可以使用 search 命令搜索可用chart。例如，如果要在 Kubernetes 上设置 Jenkins，可以使用以下命令搜索 Jenkins chart。
```
helm search repo jenkins
```
或者，你可以通过 artifacthub.com 搜索稳定的社区chart。在这里，你可以找到许多社区贡献的 helm chart。

## 搜索 Helm chart
安装并验证 Helm chart
为了验证 helm 设置，让我们使用 Artifacthub 中提供的 helm chart设置 Nginx 入口控制器。

步骤1：首先添加 nginx-ingress helm 存储库。
```
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
```
步骤2：更新 chart 存储库。
```
helm repo update
```
步骤3：让我们安装一个稳定的 Nginx Chart 并测试设置。入口控制器部署在默认命名空间中。
```
helm install ingress-controller ingress-nginx/ingress-nginx
```
这是自定义版本名称。你可以提供你喜欢的名称。ingress-controller

步骤4：现在，使用以下命令检查 Ingress helm 部署的状态。它应显示部署的状态。
```
helm ls
```
或者，你可以使用 kubectl 命令检查默认命名空间中的 Ingress 部署。
```
kubectl get deployments
```
步骤4：现在，要在验证后删除部署，你只需使用其版本名称卸载部署即可。
```
helm uninstall ingress-controller
```
## 结论
在本文中，我们了解了如何安装 Helm、安装 chart 存储库和验证示例 Helm 部署。

当你将 helm 用于项目用例时，建议你使用安全团队批准的容器映像创建自己的 helm chart。

如果你在项目环境中使用社区 Helm Chart，请确保将社区 docker 镜像替换为自定义构建的镜像。

接下来，查看有关如何创建 Helm chart的综合初学者指南。它使用分步指南介绍了 helm chart开发及其最佳实践。