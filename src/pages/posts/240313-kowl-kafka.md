<img src="/assets/image/240313-kowl-kafka-1.png" style="max-width: 70%; height: auto;">
<small>推荐一款开源的kafka管理工具，可查看kafka消息</small>


在日常的开发过程中，不知道你有没有需求需要查看kafka传输的消息具体内容，常规操作或许需要通过登服务器用命令查看，但是并不直观，而且不能准确的找到需要的内容。

今天推荐的这款kafka管理工具，可以快速通过web页面查看kafka消息，当然一些常规的管理功能也具备。

### kowl工具简介

Kowl是一个面向开发者友好的UI，用于轻松管理您的Kafka工集群。

它提供了一个简单、交互式的方法，让您能够清晰地看到您的主题、屏蔽数据、管理消费者群组，并通过时间旅行调试来探索实时数据。

### kowl特点
- **消息查看器**：通过临时查询和动态过滤器，在我们的消息查看器中探索您的主题消息。使用JavaScript函数过滤消息，找到您想要的任何消息。支持的编码包括：JSON、Avro、Protobuf、XML、MessagePack、文本和二进制（十六进制视图）。除了Protobuf，使用的编码会被自动识别。
- **消费者群组**：列出所有活跃的消费者群组及其活跃的群组偏移量，编辑群组偏移量（按群组、主题或分区）或删除消费者群组。
- **主题概览**：浏览您的Kafka主题列表，检查它们的配置、空间使用情况，列出单个主题的所有消费者，或查看分区详情（如低水位和高水位标记、消息计数等），从git仓库嵌入主题文档等。

### 快速开始

我们这里新建一个单点的kafka体验下，想要测试的可以简单看下：

完整的compose文件
```
version: "3"
services:
  kafka:
    image: bitnami/kafka:latest
    ports:
      - 9092:9092
    environment:
      - KAFKA_CFG_NODE_ID=0
      - KAFKA_CFG_PROCESS_ROLES=controller,broker
      - KAFKA_CFG_LISTENERS=PLAINTEXT://:9092,CONTROLLER://:9093
      - KAFKA_CFG_LISTENER_SECURITY_PROTOCOL_MAP=CONTROLLER:PLAINTEXT,PLAINTEXT:PLAINTEXT
      - KAFKA_CFG_CONTROLLER_QUORUM_VOTERS=0@kafka:9093
      - KAFKA_CFG_CONTROLLER_LISTENER_NAMES=CONTROLLER

  kowl:
    image: rsmnarts/kowl
    ports:
      - 8082:8080
    environment:
      - KAFKA_BROKERS=kafka:9092
    depends_on:
      - kafka
```

这里使用dockge管理
![](/assets/image/240313-kowl-kafka-1.png)

启动完成后，浏览器访问：127.0.0.1:8082，页面首页如下：

![](/assets/image/240313-kowl-kafka-2.png)

新建一个kafka topic

![](/assets/image/240313-kowl-kafka-3.png)

刷新页面

然后我们模拟生产一条消息


![](/assets/image/240313-kowl-kafka-4.png)

可以看到这边topic中是有消息的

![](/assets/image/240313-kowl-kafka-5.png)



kowl为数据流管理提供了一个清晰、直观的用户界面，使得开发者能够更加高效地工作。

