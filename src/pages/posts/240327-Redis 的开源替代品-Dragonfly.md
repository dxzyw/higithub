<img src="/assets/image/240327-Redis 的开源替代品-Dragonfly-1.png" style="max-width: 70%; height: auto;">
<small>23.1k star，推荐一款开源的redis替代品，全世界最快的数据库？</small>


完全兼容redis或者memcached的api，无需修改代码，官方给出的性能参数强于redis

![](/assets/image/240327-Redis 的开源替代品-Dragonfly-1.png)

## Dragonfly简介

DragonflyDB是一个现代的内存数据存储工具，它完全兼容Redis和Memcached API。

DragonflyDB采用了多线程、无共享架构，实现了在单个实例上支持数百万QPS的能力，并且与Redis相比，性能提升了25倍。

**功能特性**:
- **性能**: 每个实例数百万QPS
- **高命中率**: 独特的缓存算法提供更高的命中率
- **低尾延迟**: 一致的低于1ms的P99延迟
- **可伸缩性**: 简单的垂直扩展，支持TB级工作负载
- **效率**: 更好的内存利用率，降低硬件成本
- **简易性**: 兼容Redis/Memcached API，无需更改代码即可迁移

**与Redis的对比**:
DragonflyDB与Redis相比，在吞吐量、延迟和内存利用率方面都有显著提升。

DragonflyDB的多线程架构允许更有效的垂直扩展，避免了水平扩展和集群管理的复杂性。

在性能测试中，DragonflyDB的吞吐量是Redis的30倍，同时P99延迟仅增加约0.2ms。


![](/assets/image/240327-Redis 的开源替代品-Dragonfly-2.png)


**快速部署使用**:
要快速部署DragonflyDB，您可以选择以下几种方法：
- 使用Docker安装DragonflyDB
```
docker run --network=host --ulimit memlock=-1 docker.dragonflydb.io/dragonflydb/dragonfly
```
使用方式与redis一致

```
# Connect to Dragonfly using `redis-cli`:
$> redis-cli -p 6379

# Start to interact with Dragonfly:
127.0.0.1:6379> SET hello world
OK
127.0.0.1:6379> KEYS *
1) “hello”
127.0.0.1:6379> GET hello
world
```
- 使用Docker Compose安装DragonflyDB
```
# Download Official Dragonfly Docker Compose File
wget https://raw.githubusercontent.com/dragonflydb/dragonfly/main/contrib/docker/docker-compose.yml

# Launch the Dragonfly Instance
docker compose up -d

# Confirm image is up
docker ps | grep dragonfly
# ac94b5ba30a0   docker.dragonflydb.io/dragonflydb/dragonfly   "entrypoint.sh drago…"   45 seconds ago   Up 31 seconds         0.0.0.0:6379->6379/tcp, :::6379->6379/tcp   docker_dragonfly_1

# Log follow the dragonfly container
docker logs -f docker_dragonfly_1
```
- 安装DragonflyDB Kubernetes Operator
- 使用Helm Chart在Kubernetes上安装
- 从二进制文件安装

```
wget https://dragonflydb.gateway.scarf.sh/latest/dragonfly-x86_64.tar.gz

tar -xvf dragonfly-x86_64.tar.gz
mv dragonfly-x86_64 dragonfly

./dragonfly --logtostderr

## 带参数使用

dragonfly --logtostderr --requirepass=youshallnotpass --cache_mode=true -dbnum 1 --bind localhost --port 6379  --snapshot_cron "*/30 * * * *" --maxmemory=12gb --keys_output_limit=12288 --dbfilename dump.rdb
```

DragonflyDB专为云环境优化，支持x86_64和arm64架构，并在多个云平台上进行了持续测试，以确保兼容性和性能。



![](/assets/image/240327-Redis 的开源替代品-Dragonfly-3.png)

**开源地址：https://github.com/dragonflydb/dragonfly**

**官网地址：https://www.dragonflydb.io/**