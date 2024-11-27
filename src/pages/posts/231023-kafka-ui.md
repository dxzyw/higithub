<img src="/assets/image/231023-kafka-ui-1.gif" style="max-width: 70%; height: auto;">
<small>7.1k star，推荐一款好用的kafka管理工具，已开源</small>



![](/assets/image/231023-kafka-ui-1.gif)


Kafka UI是一个开源的Web UI，用于管理Apache Kafka集群。Apache Kafka是一个开源的分布式事件流平台，可以用于高性能的数据流水线，流式分析，数据集成和关键业务应用。

Kafka UI可以让用户通过一个简单的界面来监控和管理他们的Kafka集群，主题，分区，生产者和消费者。它还可以让用户浏览，发送和接收消息，创建和配置主题，以及使用不同的编码和解码方式。

要使用Kafka UI，你需要先安装并运行它。你可以通过Docker或者自己构建来运行Kafka UI。 你还需要配置你的Kafka集群的连接信息，以及其他可选的设置，如认证，序列化插件等。


### 1. 多集群管理

UI for Apache Kafka可以在一个地方同时监控和管理所有的Kafka集群，让你的操作变得更加集中和高效。

### 2. 性能监控与指标仪表板

它提供了一个轻量级的仪表板，让你可以追踪关键的Kafka指标，包括经纪人（Brokers）、主题（Topics）、分区（Partitions）、生产（Production）和消费（Consumption）。

### 3. Kafka Brokers与Kafka Topics的可视化

通过UI for Apache Kafka，你可以清晰地查看Kafka Brokers的分配情况，包括主题和分区的分配，以及控制器（Controller）的状态。同时，你也可以直观地了解到Kafka Topics的分区数量、复制状态和自定义配置。

### 4. 消费者群组的管理

该工具使得查看每个分区的停留偏移（parked offsets）和合并偏移（combined and per-partition lag）变得十分容易。你可以直接从Kafka Topics跳转到相关的消费者（Consumer），或者反之，为了更方便地导航。

### 5. 浏览消息

通过UI for Apache Kafka，你可以轻松地浏览消息，支持JSON、纯文本和Avro编码。这使得你能够直接在界面上查看消息内容，方便快捷。

### 6. 动态主题配置

你可以通过该工具创建和配置新的主题，设置动态配置，而无需深入命令行。这大大简化了主题管理的复杂性，提高了效率。

### 7. 安全性与权限管理

UI for Apache Kafka提供了可配置的身份验证方式，包括Github、Gitlab和Google OAuth 2.0，保障你的安全。此外，它还支持基于角色的访问控制，使你可以精确地管理用户对UI的权限。

### 8. 数据遮蔽

在消息中遮蔽敏感数据，确保安全性的同时，也方便了对数据的管理。

### 9. 完善的Schema Registry支持

UI for Apache Kafka支持Avro®、JSON Schema和Protobuf schemas。你可以轻松地在Schema Registry中为主题添加模式，实现Avro和Protobuf编码消息的发送。

### 10. 易于安装和使用

你可以选择使用预构建的Docker镜像，或者自行构建。通过简单的几条命令，你就可以在本地或云端轻松运行UI for Apache Kafka。而其直观的用户界面和丰富的功能，使得Kafka集群管理变得轻而易举。



## 如何快速开始？
直接docker启动即可

```
docker run -it -p 8080:8080 -e DYNAMIC_CONFIG_ENABLED=true provectuslabs/kafka-ui
```
### 结语

UI for Apache Kafka是由开源社区提供的免费工具，由Provectus进行精心策划和支持。它将始终保持免费和开源，没有任何付费功能或订阅计划。如果你需要Kafka专家的帮助，Provectus提供专业的服务，帮助你设计、构建、部署和管理Apache Kafka集群和流应用程序。

无论你是一位开发人员，还是一个运维专家，UI for Apache Kafka都将成为你不可或缺的工具。它的强大功能和友好界面，将帮助你更轻松地管理和监控Apache Kafka集群，让你专注于业务逻辑的开发，而不是繁琐的运维工作。立即尝试UI for Apache Kafka，体验高效、便捷的Kafka集群管理！