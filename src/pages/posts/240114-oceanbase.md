<img src="/assets/image/240114-oceanbase-1.png" style="max-width: 70%; height: auto;">
<small>6.6k star，推荐一款开源的国产的原生分布式数据库</small>



![](/assets/image/240114-oceanbase-1.png)

OceanBase 是一个开源的分布式关系型数据库，由阿里巴巴和蚂蚁集团自主研发，具有金融级的高可用、高性能、高扩展和低成本等特点。OceanBase 在 GitHub 上的项目地址是**https://github.com/oceanbase/oceanbase**。

本文将介绍 OceanBase 与 MySQL 的比较，以及如何从 MySQL 迁移数据到 OceanBase，以及如何快速使用 OceanBase。

## OceanBase 与 MySQL 的比较

OceanBase 与 MySQL 的主要区别在于 OceanBase 是一个原生的分布式数据库，而 MySQL 是一个单机数据库。

OceanBase 可以利用普通的 PC 服务器组成数据库集群，实现数据的水平切分和复制，从而提供线性的扩展能力和高可用性。

OceanBase 的存储引擎采用了 LSM-Tree 的架构，通过读写分离和增量合并的方式，提高了写入性能和存储效率。OceanBase 还支持多租户隔离，可以在一个集群中服务多个不同的业务场景。

OceanBase 兼容 MySQL 的大部分功能和语法，包括数据类型、SQL 语法、存储过程、触发器、函数、视图等。

OceanBase 还支持一级分区和模板化或非模板化的二级分区，可以完全取代 MySQL 常用的分库分表方案。

OceanBase 还提供了一些超越 MySQL 的特性，如分析（窗口）函数、JSON 数据类型、空间数据类型等。

OceanBase 与 MySQL 的性能对比， OceanBase 在 TPC-C 基准测试中创造了 4200 万次/秒处理峰值的行业纪录，远超 MySQL 的性能。

# 如何从 MySQL 迁移数据到 OceanBase

OceanBase 提供了一个数据迁移工具社区版（OMS），可以实现从 MySQL 到 OceanBase 的一站式数据传输和同步。

OMS 支持全量迁移和增量迁移两种模式，可以根据用户的需求选择合适的迁移策略。OMS 还提供了一个可视化的管理控制台，可以方便地创建和管理数据源、迁移任务、同步任务等。


## 如何快速使用 OceanBase

要快速使用 OceanBase，首先需要安装 OceanBase 数据库。OceanBase 提供了多种安装方式，包括 Docker 安装、二进制包安装、源码编译安装等。

其中 Docker 安装是最简单和快速的方式，只需要几条命令就可以启动一个 OceanBase 集群。

安装好 OceanBase 数据库后，就可以通过客户端工具连接到 OceanBase 集群，并执行 SQL 语句进行数据操作。

OceanBase 支持多种客户端工具，包括命令行工具 obclient、图形化工具 OB Studio、开发者中心 OBDC 等。

其中 obclient 是最基础的客户端工具，可以通过 obclient -h <ip> -P <port> -u <user> -p <password> 命令连接到 OceanBase 集群，并执行 SQL 语句。。

除了 obclient 外，还可以使用其他兼容 MySQL 协议的客户端工具连接到 OceanBase 集群，如 MySQL Workbench、Navicat 等。
  
  只需要在客户端工具中配置好 OceanBase 集群的 IP、端口、用户名、密码等信息，就可以像操作 MySQL 一样操作 OceanBase。

## 总结

OceanBase 是一个开源的分布式关系型数据库，具有金融级的高可用、高性能、高扩展和低成本等特点。
  
  OceanBase 兼容 MySQL 的大部分功能和语法，可以方便地从 MySQL 迁移数据到 OceanBase，并使用各种客户端工具快速使用 OceanBase。OceanBase 是一个值得尝试和使用的数据库产品。
