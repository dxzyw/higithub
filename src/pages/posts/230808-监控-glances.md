<img src="/assets/image/230808-监控-glances-1.png" style="max-width: 70%; height: auto;">
<small>23.3k star,推荐一款实用工具-glances</small>


## 1  简介
这是一款Python语言写的多平台终端Web监控系统支持RESTful及RESTful-API，可以看作是htop的升级款，top的高配版

![](/assets/image/230808-监控-glances-1.png)


## 2 安装

github可以访问的直接到如下链接去下载就可以，目前支持GNU/Linux、BSD、Mac OS 和 Windows 操作系统

**https://github.com/nicolargo/glances**

github如果无法访问的话，可以后台直接私信

如果有python环境的话，直接通过pip安装，更加快捷

如下可以安装完整版本：
```
pip install --user 'glances[all]'
```

## 3 软件特性或亮点

- 监控项多，包括如下：
  - CPU（中央处理器、内存、负载、进程列表、网络接口、磁盘I/O、中断请求（IRQ）/RAID、传感器、文件系统（和文件夹）、Docker、监控、警报、系统信息、正常运行时间、快速查看（CPU、内存、负载）
- 用Python编写的Glances几乎可以在任何平台上运行：GNU/Linux，FreeBSD，OS X和Windows。
- Glances包括一个XML-RPC服务器和一个RESTful JSON API，可以被另一个客户端软件使用。
- 手头没有终端？使用内置的 Web UI 并从任何设备监控您的系统。
- 将所有系统统计信息导出到CSV，InfluxDB，Cassandra，OpenTSDB，StatsD，ElasticSearch甚至RabbitMQ。Glances还提供了专用的Grafana仪表板。

## 4 软件使用截图

![](/assets/image/230808-监控-glances-2.png)

![](/assets/image/230808-监控-glances-3.png)

![](/assets/image/230808-监控-glances-4.png)

![](/assets/image/230808-监控-glances-5.png)

更多使用方法可以参考如下文档：

> https://glances.readthedocs.io/en/latest/cmds.html

>注：如需转载，须保留文首公众号名片，其它行为一律视为非授权转载。