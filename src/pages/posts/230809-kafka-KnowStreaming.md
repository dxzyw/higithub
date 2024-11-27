<img src="/assets/image/230809-kafka-KnowStreaming-1.png" style="max-width: 70%; height: auto;">
<small>6.3k star，推荐一款云原生工具，knowStreaming</small>

## 1  简介
云原生时代的kafka管理平台


![](/assets/image/230809-kafka-KnowStreaming-1.png)


一站式云原生实时流数据平台，通过0侵入、插件化构建企业级Kafka服务，极大降低操作、存储和管理实时流数据门槛

Know Streaming是一套云原生的Kafka管控平台，脱胎于众多互联网内部多年的Kafka运营实践经验，专注于Kafka运维管控、监控告警、资源治理、多活容灾等核心场景。

在用户体验、监控、运维管控上进行了平台化、可视化、智能化的建设，提供一系列特色的功能，极大地方便了用户和运维人员的日常使用，让普通运维人员都能成为Kafka专家。

## 2 安装

github可以访问的直接到如下链接

**https://github.com/didi/KnowStreaming**

github如果无法访问的话，可以后台直接私信

可以脚本一键安装

```
# 在服务器中下载安装脚本, 该脚本中会在当前目录下，重新安装MySQL。重装后的mysql密码存放在当前目录的mysql.password文件中。
wget https://s3-gzpu.didistatic.com/pub/knowstreaming/deploy_KnowStreaming-3.0.0-beta.1.sh

# 执行脚本
sh deploy_KnowStreaming.sh

# 访问地址
127.0.0.1:8080
```

## 3 软件特性或亮点
- 👀  零侵入、全覆盖

  - 无需侵入改造 Apache Kafka ，一键便能纳管 0.10.x ~ 3.x.x 众多版本的Kafka，包括 ZK 或 Raft 运行模式的版本，同时在兼容架构上具备良好的扩展性，帮助您提升集群管理水平；
- 🌪️  零成本、界面化

  - 提炼高频 CLI 能力，设计合理的产品路径，提供清新美观的 GUI 界面，支持 Cluster、Broker、Zookeeper、Topic、ConsumerGroup、Message、ACL、Connect 等组件 GUI 管理，普通用户5分钟即可上手；
- 👏  云原生、插件化

  - 基于云原生构建，具备水平扩展能力，只需要增加节点即可获取更强的采集及对外服务能力，提供众多可热插拔的企业级特性，覆盖可观测性生态整合、资源治理、多活容灾等核心场景；
- 🚀  专业能力

  - 集群管理：支持一键纳管，健康分析、核心组件观测 等功能；
  - 观测提升：多维度指标观测大盘、观测指标最佳实践 等功能；
  - 异常巡检：集群多维度健康巡检、集群多维度健康分 等功能；
  - 能力增强：集群负载均衡、Topic扩缩副本、Topic副本迁移 等功能；
  
## 4 使用

### 1 接入集群


![](/assets/image/230809-kafka-KnowStreaming-2.png)

### 2  新增topic


![](/assets/image/230809-kafka-KnowStreaming-3.png)

### 3 cluster集群健康检查


![](/assets/image/230809-kafka-KnowStreaming-4.png)




>注：如需转载，须保留文首公众号名片，其它行为一律视为非授权转载。