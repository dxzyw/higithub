<img src="/assets/image/240705-docker-data-1.png">
<small>如何修改docker默认数据目录</small>

docker默认的数据目录为/var/lib/docker，其实就是根目录下，我们这边有些老系统最初是研发自己玩的，有次找了过来，说系统访问有问题了，截了个图一看认证有问题，连接redis异常，上服务器一看，磁盘满了，而且是根路径满了，再一看为啥满，docker用的是默认数据目录。

于是就有了这篇文章。

虽然生产这样的案例很少，但确实有

强烈建议，在最开始用docker的时候，就修改下默认的数据目录，如果你已经发生了文章开头提到的，那么也不要慌，还有救。

## docker数据目录

如果是第一次安装 Docker，直接在安装过程中设置数据目录是一个明智的选择。这样做可以避免将来需要迁移数据的麻烦，并且可以确保您的 Docker 安装从一开始就符合您的存储需求和组织标准。

**在 Docker 安装过程中设置数据目录**

1. **设置数据目录**：在 `daemon.json` 文件中，指定数据存储位置的目录路径。例如：

   ```json
   {
     "data-root": "/desired/path/docker"
   }
   ```

   这里的 `/desired/path/docker` 应该替换为您想要的路径。

2. **验证安装**：使用以下命令验证 Docker 是否正确安装，并且数据目录设置正确。

   ```bash
   docker info | grep "Data root"
   ```

通过以上步骤，您可以确保 Docker 在安装时就配置了正确的数据目录。

## 磁盘根目录已满，如何调整

![99%](/assets/image/240705-docker-data.png) 


**Docker 数据目录的重要性**

Docker 数据目录，包括所有容器、镜像、卷和网络的信息。随着时间的推移，这个目录可能会变得非常大，特别是当您频繁地拉取和构建镜像时。如果您的根分区空间有限，这可能会导致问题，因为 Docker 占用了大量的磁盘空间。

**更改 Docker 数据目录**

更改 Docker 数据目录的步骤取决于您使用的 Docker 版本。对于 17.06 或更高版本，您可以通过编辑 `/etc/docker/daemon.json` 文件来更改数据目录。对于旧版本，您需要在启动 Docker 守护进程时使用 `-g` 选项。

**步骤 1：停止 Docker 服务**

在进行任何更改之前，首先停止 Docker 服务以避免任何潜在的数据损坏。

```bash
sudo systemctl stop docker
```

**步骤 2：创建新的数据目录**

选择一个新的位置来存储 Docker 数据，并创建必要的目录结构。

```bash
sudo mkdir -p /new/path/docker
```

**步骤 3：配置 Docker 守护进程**

根据您的 Docker 版本，编辑 `/etc/docker/daemon.json` 或 `/etc/default/docker` 文件，指定新的数据目录。

**对于 Docker 17.06 或更高版本：**

在 `/etc/docker/daemon.json` 中添加或修改以下内容：

```json
{
  "data-root": "/new/path/docker"
}
```

**对于旧版本的 Docker：**

在 `/etc/default/docker` 中添加或修改 `DOCKER_OPTS`：

```bash
DOCKER_OPTS="-g /new/path/docker"
```

**步骤 4：迁移现有数据**

使用 `rsync` 命令将现有的 Docker 数据从旧位置复制到新位置。

```bash
sudo rsync -aqxP /var/lib/docker/ /new/path/docker
```

![sync数据](/assets/image/240705-docker-data-1.png)



**步骤 5：重启 Docker 服务**

完成配置和数据迁移后，重新加载系统配置并启动 Docker 服务。

```bash
sudo systemctl daemon-reload
sudo systemctl start docker
```

**验证更改**

使用 `docker info` 命令确认数据目录已更改。

```bash
docker info | grep "Data root"
```

**结论**

更改 Docker 数据目录是一个简单的过程，但需要谨慎执行以避免数据丢失。

确保在进行更改之前备份您的数据，并在停止 Docker 服务时进行操作。这样，您就可以确保 Docker 的运行不会受到影响，同时也能更好地管理您的磁盘空间。





