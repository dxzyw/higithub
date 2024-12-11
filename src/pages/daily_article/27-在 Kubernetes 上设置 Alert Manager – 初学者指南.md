<img src="/assets/image/k8s.png" style="max-width: 70%; height: auto;">
<small>【运维干货分享】在 Kubernetes 上设置 Alert Manager – 初学者指南</small>

![](image-82.png)

AlertManager 是一个开源告警系统，可与 Prometheus Monitoring 系统配合使用。此博客是 Prometheus Kubernetes 教程系列的一部分。

在我们之前的文章中，我们研究了以下内容。

- 在 Kubernetes 上设置 Prometheus
- 设置 Kube 状态指标
  
在本指南中，我将介绍 Alert Manager 设置及其与 Prometheus 的集成。

注意：在本指南中，所有 Alert Manager Kubernetes 对象都将在名为 monitoring 的命名空间中创建。如果你使用其他命名空间，则可以在 YAML 文件中替换它。

## Kubernetes 上的 Alertmanager

Alert Manager 设置具有以下关键配置。

- AlertManager 配置的config map映射
- AlertManager 告警模板的config map
- Alert Manager Kubernetes 部署
- Alert Manager 服务访问 Web UI。

## 重要设置说明

你应该已经设置并启动运行了一个有效的 Prometheus。

Prometheus 的config.yaml中应具有正确的Alert manager 服务端点（如下所示），以将警报发送到Alert manager 。

注意：如果你正在关注我的关于Kubernetes 上的 Prometheus 设置的教程，则不必添加以下配置，因为它是Prometheus configmap的一部分。

```
alerting:
   alertmanagers:
      - scheme: http
        static_configs:
        - targets:
          - "alertmanager.monitoring.svc:9093"
```

根据您的需要，所有警报规则都必须存在于 Prometheus 配置中。它应该作为Prometheus 配置映射的一部分创建，并使用名为prometheus.rules的文件，并按以下方式添加到config.yaml中。

```
rule_files:
      - /etc/prometheus/prometheus.rules
```

Alert manager 警报可以根据你在 Prometheus 上收到的指标编写。

要接收警报电子邮件，您需要在Alert manager config.yaml （smarthost 参数）中拥有有效的 SMTP 主机。您可以根据需要在警报模板配置图中自定义电子邮件模板。我们在本指南中提供了通用模板。

让我们开始设置。

## Alertmanager Kubernetes 清单
本教程中使用的所有 Kubernetes 清单都可以在此 Github 链接中找到。

使用以下命令克隆 Github 存储库。
```
git clone https://github.com/bibinwilson/kubernetes-alert-manager.git
```
## Alert manager 的 config map

Alert Manager 从 config.yaml 文件中读取其配置。它包含告警模板路径、电子邮件和其他告警接收配置的配置。

在此设置中，我们使用电子邮件和 Slack Webhook 接收器。你可以从此处查看所有受支持的警报接收器。

创建一个名为 AlertManagerConfigmap.yaml 的文件并复制以下内容。

```
kind: ConfigMap
apiVersion: v1
metadata:
  name: alertmanager-config
  namespace: monitoring
data:
  config.yml: |-
    global:
    templates:
    - '/etc/alertmanager/*.tmpl'
    route:
      receiver: alert-emailer
      group_by: ['alertname', 'priority']
      group_wait: 10s
      repeat_interval: 30m
      routes:
        - receiver: slack_demo
        # Send severity=slack alerts to slack.
          match:
            severity: slack
          group_wait: 10s
          repeat_interval: 1m
 
    receivers:
    - name: alert-emailer
      email_configs:
      - to: demo@devopscube.com
        send_resolved: false
        from: from-email@email.com
        smarthost: smtp.eample.com:25
        require_tls: false
    - name: slack_demo
      slack_configs:
      - api_url: https://hooks.slack.com/services/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sz4Qk
        channel: '#devopscube-demo'
```        
让我们使用 kubectl 创建配置映射。
```
kubectl create -f AlertManagerConfigmap.yaml
```

## 警报模板的config map

我们需要为我们使用的所有接收者（电子邮件、Slack 等）提供警报模板。Alert manager 将动态替换这些值，并根据模板向接收者发送警报。你可以根据需要自定义这些模板。

创建一个名为 的文件并从此文件链接 ==> Alert Manager Template YAML 中复制内容AlertTemplateConfigMap.yaml

使用 kubectl 创建 configmap。
```
kubectl create -f AlertTemplateConfigMap.yaml
```
## 创建 Deployment
在此部署中，我们将挂载我们创建的两个配置映射。

创建一个名为 Deployment.yaml 的文件，其中包含以下内容。

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: alertmanager
  namespace: monitoring
spec:
  replicas: 1
  selector:
    matchLabels:
      app: alertmanager
  template:
    metadata:
      name: alertmanager
      labels:
        app: alertmanager
    spec:
      containers:
      - name: alertmanager
        image: prom/alertmanager:latest
        args:
          - "--config.file=/etc/alertmanager/config.yml"
          - "--storage.path=/alertmanager"
        ports:
        - name: alertmanager
          containerPort: 9093
        resources:
            requests:
              cpu: 500m
              memory: 500M
            limits:
              cpu: 1
              memory: 1Gi
        volumeMounts:
        - name: config-volume
          mountPath: /etc/alertmanager
        - name: templates-volume
          mountPath: /etc/alertmanager-templates
        - name: alertmanager
          mountPath: /alertmanager
      volumes:
      - name: config-volume
        configMap:
          name: alertmanager-config
      - name: templates-volume
        configMap:
          name: alertmanager-templates
      - name: alertmanager
        emptyDir: {}
```        
使用 kubectl 创建Alert manager 部署。
```
kubectl create -f Deployment.yaml
```
## 创建 Alert Manager 服务端点

我们需要使用 NodePort 或 Load Balancer 公开Alert manager ，以便访问 Web UI。Prometheus 将使用内部服务终端节点与Alert manager 通信。

创建包含以下内容的 Service.yaml 文件。
```
apiVersion: v1
kind: Service
metadata:
  name: alertmanager
  namespace: monitoring
  annotations:
      prometheus.io/scrape: 'true'
      prometheus.io/port:   '9093'
spec:
  selector: 
    app: alertmanager
  type: NodePort  
  ports:
    - port: 9093
      targetPort: 9093
      nodePort: 31000
```      
使用 kubectl 创建服务。
```
kubectl create -f Service.yaml
```
现在，你将能够在 Node Port 上访问 Alert Manager。例如31000

http://35.114.150.153:31000

![](image-83.png)