<img src="/assets/image/240818-karpenter.png">
<small>6.4k star,开源的kubernetes节点自动缩放器</small>

### Karpenter: AWS Kubernetes Node Autoscaler

Karpenter 是一个开源的 Kubernetes 节点自动扩展器，旨在提高灵活性、性能和简化操作。它由 AWS 提供支持，专为优化 Kubernetes 集群的工作负载而设计。本文将介绍 Karpenter 的基本概念、快速入门指南以及其主要特点。

![](/assets/image/240818-karpenter.png)

#### 工具简介

Karpenter 通过监控 Kubernetes 调度器标记为不可调度的 Pod，评估调度约束（如资源请求、节点选择器、亲和性、容忍度和拓扑扩展约束），并根据这些需求自动配置节点。当节点不再需要时，Karpenter 还会自动移除这些节点，从而提高资源利用率和降低成本¹。

Karpenter 的设计目标是提供一种灵活、高效且易于使用的节点自动扩展解决方案。与传统的 Kubernetes 集群自动扩展器相比，Karpenter 提供了更高的性能和更简单的配置方式¹。

#### 如何快速开始

要快速开始使用 Karpenter，可以按照以下步骤进行：

1. **安装 Karpenter**：
   首先，确保您的 Kubernetes 集群已经配置好，并且您有足够的权限进行操作。然后，使用以下命令安装 Karpenter：

   ```bash
   kubectl apply -f https://github.com/aws/karpenter/releases/latest/download/karpenter.yaml
   ```

2. **配置 AWS 提供商**：
   Karpenter 需要与 AWS 集成，以便自动配置和管理节点。您需要创建一个 IAM 角色，并为其分配必要的权限。以下是一个示例 IAM 角色策略：

   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Action": [
           "ec2:DescribeInstances",
           "ec2:RunInstances",
           "ec2:TerminateInstances",
           "ec2:CreateTags",
           "ec2:DescribeTags"
         ],
         "Resource": "*"
       }
     ]
   }
   ```

   创建 IAM 角色后，您需要将其 ARN 添加到 Karpenter 的配置中：

   ```yaml
   apiVersion: v1
   kind: ConfigMap
   metadata:
     name: karpenter
     namespace: karpenter
   data:
     aws: |
       clusterName: your-cluster-name
       clusterEndpoint: your-cluster-endpoint
       instanceProfile: your-instance-profile
       region: your-region
   ```

3. **创建 Provisioner**：
   Provisioner 是 Karpenter 的核心组件之一，它定义了节点的配置和调度策略。以下是一个示例 Provisioner 配置：

   ```yaml
   apiVersion: karpenter.sh/v1alpha5
   kind: Provisioner
   metadata:
     name: default
   spec:
     cluster:
       name: your-cluster-name
       endpoint: your-cluster-endpoint
     requirements:
       - key: "node.kubernetes.io/instance-type"
         operator: In
         values: ["m5.large", "m5.xlarge"]
     limits:
       resources:
         cpu: "1000"
         memory: "1000Gi"
     provider:
       instanceProfile: your-instance-profile
       subnetSelector:
         karpenter.sh/discovery: your-cluster-name
       securityGroupSelector:
         karpenter.sh/discovery: your-cluster-name
   ```

4. **部署工作负载**：
   部署您的工作负载，并观察 Karpenter 如何根据需求自动扩展和缩减节点。例如，您可以部署一个简单的 Nginx 应用：

   ```yaml
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: nginx
   spec:
     replicas: 10
     selector:
       matchLabels:
         app: nginx
     template:
       metadata:
         labels:
           app: nginx
       spec:
         containers:
           - name: nginx
             image: nginx
             ports:
               - containerPort: 80
   ```

#### 主要特点

Karpenter 具有以下几个主要特点：

1. **灵活性**：
   Karpenter 支持多种调度约束和策略，包括资源请求、节点选择器、亲和性、容忍度和拓扑扩展约束。用户可以根据具体需求自定义节点配置和调度策略¹。

2. **高性能**：
   Karpenter 通过优化节点配置和调度算法，提高了节点的利用率和调度效率。与传统的 Kubernetes 集群自动扩展器相比，Karpenter 能够更快速地响应工作负载的变化¹。

3. **简化操作**：
   Karpenter 提供了简单易用的配置方式，用户只需定义 Provisioner 和相关配置，即可实现自动扩展和缩减节点。无需复杂的配置和管理¹。

4. **成本优化**：
   通过自动移除不再需要的节点，Karpenter 帮助用户降低了资源成本。它能够根据工作负载的需求动态调整节点数量，避免资源浪费¹。

5. **多云支持**：
   虽然 Karpenter 主要由 AWS 提供支持，但它也支持其他云提供商，如 Azure。用户可以根据需要选择不同的云提供商进行集成²。

总之，Karpenter 是一个功能强大且易于使用的 Kubernetes 节点自动扩展器，适用于各种规模的 Kubernetes 集群。通过灵活的配置和高效的调度算法，Karpenter 帮助用户优化资源利用率，降低成本，并简化操作流程。

¹: [GitHub - aws/karpenter-provider-aws](https://github.com/aws/karpenter-provider-aws)
²: [GitHub - kubernetes-sigs/karpenter](https://github.com/kubernetes-sigs/karpenter)


