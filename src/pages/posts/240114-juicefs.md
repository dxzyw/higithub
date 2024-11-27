<img src="/assets/image/240114-juicefs-1.png" style="max-width: 70%; height: auto;">
<small>9k star，推荐一款开源的分布式文件系统，很强大！（附案例JuiceFS + MinIO + SQLite + Kubernetes）</small>


像使用本地存储一样高效使用海量云端存储。
![](/assets/image/240114-juicefs-1.png)

JuiceFS 是一个开源的分布式文件系统，它可以将任何对象存储作为后端，提供 POSIX 兼容的接口，支持多种云环境和协议，适用于大数据、人工智能、自动驾驶、基因测序等**海量数据**存储需求。

## JuiceFS 的功能特点有：

- 弹性伸缩：容量自动伸缩，满足所有业务需求，无需提前规划
- 高可用性：元数据服务跨可用区部署，保证数据的强一致性和高可靠性
- 高性能：利用缓存和压缩技术，提升数据的读写速度和效率
- 兼容性：完全兼容 POSIX、HDFS 和 S3 协议，支持多种语言和工具集，方便数据迁移和共享
- 经济实惠：按需付费，无需任何预投资或额外成本
- 兼容已有的工具集，轻松访问数据。JuiceFS 可以用像本地磁盘一样的方式使用，也可以通过 HDFS 或 S3 的客户端访问，无需修改现有的应用代码。
- 为云环境设计，支持多云和跨云。JuiceFS 可以部署在公有云、私有云或混合云中，支持多种对象存储服务，如  Alibaba OSS, Tencent COS 等。JuiceFS 还可以在不同的云平台和地区的主机上挂载读写，实现数据的跨云共享。
- 搞定百亿文件管理挑战。JuiceFS 专为大数据场景设计，如自动驾驶、推荐引擎、基因测序等，可以高效地管理和计算上百亿个文件，支持数 PB 级别的存储容量。
- 为开发者设计，使用简单。JuiceFS 提供了简单的命令行工具和 API，可以轻松地创建、挂载和管理文件系统，无需复杂的配置和维护。JuiceFS 还提供了 Kubernetes 的 CSI 驱动，可以在 Kubernetes 集群中使用 JuiceFS 作为持久化存储。

## JuiceFS 的最简安装部署步骤如下：

- 下载 JuiceFS 客户端，并安装到本地
- 使用 `juicefs format` 命令创建一个 JuiceFS 文件系统，指定对象存储和 redis 作为后端`juicefs format redis://localhost:6379/1 s3://mybucket/myjfs`
- 使用 `juicefs mount` 命令挂载 JuiceFS 文件系统到本地目录，或者使用 `juicefs gateway` 命令启动一个 S3 网关 `juicefs mount redis://localhost:6379/1 /mnt/juicefs`
- 使用本地文件系统或 S3 客户端访问 JuiceFS 文件系统，享受云存储的便利

## 实际使用案例：JuiceFS + MinIO + SQLite + Kubernetes

上述sqllite可以替换为（Redis、MySQL、TiKV、SQLite ）
上述minio可以替换为（S3、OSS、COS、EOS等云存储）

接入k8s有两种方式，可以直接使用CSI驱动，也可以直接使用hostPath 方式挂载 JuiceFS。

可以参考以下步骤：

- 在 Kubernetes 集群中的每个节点上安装 JuiceFS 客户端，如前面所述。
- 在 Kubernetes 集群中的每个节点上创建一个本地目录，用于挂载 JuiceFS 文件系统，如 `/mnt/juicefs`。
- 在 Kubernetes 集群中的每个节点上执行 `juicefs mount` 命令，将 JuiceFS 文件系统挂载到本地目录，如 `juicefs mount minio://mybucket/myjfs redis://myredis:6379/1 /mnt/juicefs`。
- 创建一个 PersistentVolume，指定 hostPath 类型和本地目录，如 `/mnt/juicefs`。
- 创建一个 PersistentVolumeClaim，指定和 PersistentVolume 匹配的存储类和容量，如 `juicefs-hostpath-sc` 和 `10Pi`。
- 创建一个 Deployment，指定使用 JuiceFS 的 PersistentVolumeClaim 作为卷，挂载到容器中，如 `/data`。
- 在容器中使用 SQLite 创建和访问数据库文件。

但也有一些需要注意的点：


![](/assets/image/240114-juicefs-2.png)




