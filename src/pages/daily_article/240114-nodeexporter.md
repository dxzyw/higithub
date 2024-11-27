<img src="/assets/image/240114-nodeexporter-1.png" style="max-width: 70%; height: auto;">
<small></small>

最近安全基线修改了生产所有用户密码的过期时间，但devops中应用部署用户如果过期的话会影响到实际部署。

另外就是最近发现青藤云agent在root密码过期的情况下也会发生定时任务执行失败，无法拉起agent进程的情况。

基于上述就想着监控下用户过期时间，看了下目前node_exporter并没有相关的监控项，就想着搞一下，如果有其它的监控项，也可以如此做。

告警效果图：

![](/assets/image/240114-nodeexporter-1.png)


## 如何使用 node_exporter 和 Prometheus 监控 Linux 主机上账户密码的过期时间

### 前言

在 Linux 系统中，每个账户都有一个过期日期，表示该账户在什么时候会失效，无法再登录系统。这个过期日期可以通过 `chage` 命令来查看或修改。例如，如果想要查看账户名为 user 的过期日期，可以执行如下命令：

```bash
chage -l user
```

输出结果类似于：

```bash
Last password change                                    : Apr 01, 2023
Password expires                                        : Feb 28, 2024
Password inactive                                       : never
Account expires                                         : Apr 30, 2023
Minimum number of days between password change          : 0
Maximum number of days between password change          : 99999
Number of days of warning before password expires       : 7
```

其中，`Password expires` 项就是账户的过期日期，如果为 `never`，表示该账户永不过期。

监控 Linux 主机上账户的过期时间，可以帮助我们及时发现和处理一些潜在的安全风险，比如及时删除或禁用一些不再使用的账户，或者提醒一些即将过期的账户及时续期，以免影响正常的业务运行。

本文将介绍如何使用 node_exporter 和 Prometheus 来监控 Linux 主机上账户的过期时间，并实现可视化和告警的功能。

### node_exporter 简介

node_exporter 是一个用于暴露 *NIX 主机指标的 Exporter，比如采集 CPU、内存、磁盘等信息。它是 Prometheus 生态中的一个重要组件，可以让 Prometheus 通过 HTTP 接口来抓取主机的各种指标数据，然后进行分析、展示和告警。

node_exporter 支持使用 textfile 收集器来添加用户自定义的度量指标，只要将度量指标和值按照 Prometheus 规范的格式输出到指定位置且以 .prom 后缀文件保存，textfile 收集器会自动读取指定目录下所有以 .prom 结尾的文件，并提取所有格式为 Prometheus 的指标暴露给 Prometheus 来抓取。

### 配置 node_exporter

如果已经现有nide_exporter的话，可以直接使用

为了使用 node_exporter 来监控 Linux 主机上账户的过期时间，我们需要做以下几个步骤：

- 下载并安装 node_exporter
- 编写一个脚本来获取账户的过期时间，并将其写入到 .prom 文件中
- 配置 node_exporter 的 textfile 收集器
- 启动 node_exporter

#### 下载并安装 node_exporter

首先，我们需要从官方网站下载 node_exporter 的二进制文件，根据我们的操作系统和架构选择合适的版本。例如，如果我们的系统是 Linux x86_64，可以执行如下命令：

```bash
# 下载 node_exporter 1.2.2 版本
wget https://github.com/prometheus/node_exporter/releases/download/v1.2.2/node_exporter-1.2.2.linux-amd64.tar.gz
# 解压文件
tar xvfz node_exporter-1.2.2.linux-amd64.tar.gz
# 进入目录
cd node_exporter-1.2.2.linux-amd64
```

然后，我们可以将 node_exporter 的二进制文件复制到 `/usr/local/bin` 目录下，方便执行：

```bash
# 复制文件
sudo cp node_exporter /usr/local/bin
# 赋予执行权限
sudo chmod +x /usr/local/bin/node_exporter
```

#### 编写一个脚本来获取账户的过期时间，并将其写入到 .prom 文件中

接下来，我们需要编写一个脚本来获取账户的过期时间，并将其写入到 .prom 文件中，供 node_exporter 的 textfile 收集器读取。我们可以使用任何我们熟悉的编程语言来编写这个脚本，只要保证输出的格式符合 Prometheus 的规范。例如，我们可以使用 bash 来编写这个脚本，如下所示：

```bash
#!/bin/bash
# 定义一个用户列表，用空格分隔
user_list="user1 user2 user3"
# 定义一个输出文件的路径
output_file="/var/lib/node_exporter/user_expire.prom"
# 清空输出文件的内容
echo "" > $output_file
# 遍历用户列表
for user in $user_list; do
  # 获取账户名为 user 的过期时间
  user_expire_date=$(chage -l $user | grep "Password expires" | cut -d: -f2)
  # 如果账户永不过期，返回 -1
  if [ "$user_expire_date" = " never" ]; then
    user_expire_seconds=-1
  else
    # 否则，将过期日期转换为秒
    user_expire_seconds=$(date -d "$user_expire_date" +%s)
  fi
  # 将结果追加到输出文件中，指标名为 user_expire_seconds_user
  echo "user_expire_seconds_$user $user_expire_seconds" >> $output_file
done
```

这个脚本的功能是：

- 定义一个用户列表，表示我们想要监控的账户名，用空格分隔
- 定义一个输出文件的路径，表示我们想要将指标数据写入到哪个 .prom 文件中，这个路径需要和 node_exporter 的 textfile 收集器的目录一致
- 清空输出文件的内容，避免重复或过期的数据
- 遍历用户列表，对每个用户执行以下操作：
    - 使用 `chage -l` 命令获取账户的过期日期
    - 如果账户永不过期，返回 -1
    - 否则，将过期日期转换为秒，表示距离 1970-01-01 00:00:00 UTC 的秒数
    - 将结果追加到输出文件中，指标名为 user_expire_seconds_user，其中 user 是账户名，值为过期时间的秒数

我们可以将这个脚本保存为 `user_expire.sh`，并赋予执行权限：

```bash
# 赋予执行权限
chmod +x user_expire.sh
```

然后，我们可以手动执行这个脚本，或者使用 crontab 定时执行这个脚本，以保证输出文件中的数据是最新的。例如，我们可以每分钟执行一次这个脚本，可以编辑 crontab 文件，添加如下内容：

```bash
# 编辑 crontab 文件
crontab -e
# 添加如下内容，表示每分钟执行一次 user_expire.sh 脚本
* * * * * /path/to/user_expire.sh
```

#### 配置 node_exporter 的 textfile 收集器

接着，我们需要配置 node_exporter 的 textfile 收集器，让它能够读取我们生成的 .prom 文件中的指标数据。我们可以在 node_exporter 的启动参数中指定 --collector.textfile.directory=/var/lib/node_exporter/ 目录，表示 textfile 收集器会读取该目录下的所有 .prom 文件。注意，这个目录需要和我们的输出文件的路径一致。

#### 启动 node_exporter

最后，我们可以启动 node_exporter，让它开始暴露主机的指标数据，包括我们自定义的账户过期时间指标。我们可以执行如下命令：

```bash
# 启动 node_exporter，指定 textfile 收集器的目录
node_exporter --collector.textfile.directory=/var/lib/node_exporter/
```

这样，我们就可以启动 node_exporter，让它开始暴露主机的指标数据，包括我们自定义的账户过期时间指标。我们可以执行如下命令：

```bash
# 启动 node_exporter，指定 textfile 收集器的目录
node_exporter --collector.textfile.directory=/var/lib/node_exporter/
```

这样，我们就完成了 node_exporter 的配置和启动，接下来，我们需要配置 Prometheus 来抓取 node_exporter 的指标数据，并实现可视化和告警的功能。

![](/assets/image/240114-nodeexporter-2.png)


