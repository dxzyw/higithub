<img src="/assets/image/230907-夜莺监控(nightingale" style="max-width: 70%; height: auto;">
<small>如果你目前有监控系统，那么夜莺可以作为补充，如果正在寻着新的监控系统，那么夜莺绝对是不错的选择。</small>


其实在openfalcon时代就开始关注滴滴开源的这款监控系统了，后来V5版本推出后，立马就替换了原来之前的zabbix，并且把线上的promethtus接入了夜莺。

可以看下之前的文章记录：


## 1 nightingale简介

目前最新的夜莺已经是V6版本，在功能上、部署方式等都做了全面的提升，使用很舒服，功能很齐全，还新增了日志的接入，虽然开源版本目前还不支持日志关键字告警，但是基础功能也能解决很多问题了。

在最初的V6推出的时候就有不部署，但目前是6.1版本，功能更加稳定，如果没有自己一套监控，建议agent也直接用它们家的，最开始用的开源的telegraf，做了改进，功能上更加强大。


![](/assets/image/230907-夜莺监控(nightingale),最强开源监控系统，推荐！-1.png)

**建议**：

你在使用prometheus+alertmanager告警的话，可以直接接入，然后使用夜莺用来告警，很丝滑

也可以直接使用夜莺自己的agent采集数据，完整使用夜莺功能，因为我们内部有很多自己暴露的mertic，所以强依赖prometheus，目前只用夜莺作为告警渠道。



## 2 安装

**可以去 https://flashcat.cloud/download/nightingale/ 找最新版本的包，文档里的包地址可能已经不是最新的了**

```
# 创建个 n9e 的目录，后面把 n9e 相关的文件解压到这里
mkdir -p /opt/n9e && cd /opt/n9e

# 下载 n9e 发布包，amd64 是 x84 的包，下载站点也提供 arm64 的包，如果需要其他平台的包则要自行编译了
tarball=n9e-v6.0.1-linux-amd64.tar.gz
urlpath=https://download.flashcat.cloud/${tarball}
wget -q $urlpath || exit 1

# 解压缩发布包
tar zxvf ${tarball}

# 解压缩之后，可以看到 n9e.sql 是建表语句，导入数据库
mysql -uroot -p1234 < n9e.sql

# 启动 n9e，先使用 nohup 简单测试，如果需要 systemd 托管，请自行准备 service 文件
nohup ./n9e &> n9e.log &

# 检查 n9e.log 是否有异常日志，检查端口是否在监听，正常应该监听在 17000
ss -tlnp|grep 17000
```

![安装架构](/assets/image/230907-夜莺监控(nightingale),最强开源监控系统，推荐！-2.png)


github可以访问的直接到如下链接去下载就可以

**https://github.com/ccfos/nightingale/blob**

github如果无法访问的话，可以后台直接私信

## 3 nightingale特点

Nightingale：开源监控系统的全方位解析


## 1. 统一接入各种时序库

Nightingale的强大之处之一在于其能够统一接入各种时序库。它支持对接多种流行的时序数据库，包括Prometheus、VictoriaMetrics、Thanos、Mimir、M3DB等，实现了时序数据的集中存储和管理。这一特性使得Nightingale能够在一个平台上汇总来自不同数据源的监控数据，为用户提供了全面的监控视图，帮助他们更好地理解和管理他们的系统。

## 2. 专业告警能力

告警是监控系统中至关重要的一环，而Nightingale在这方面表现得尤为出色。它内置支持多种告警规则，用户可以根据自己的需求定制告警策略。不仅如此，Nightingale还支持多种通知媒介，使用户可以通过多种方式接收告警通知，包括邮件、短信、Slack等。此外，Nightingale还提供了告警屏蔽、告警抑制、告警自愈、告警事件管理等高级功能，帮助用户更好地管理和响应告警。

## 3. 高性能可视化引擎

监控数据的可视化是监控系统的重要组成部分，Nightingale内置了一个高性能的可视化引擎，支持多种图表样式，用户可以根据自己的需求创建各种仪表盘和图表。此外，Nightingale还内置了众多Dashboard模板，用户可以轻松地应用它们，也可以导入Grafana模板，实现开箱即用。这一功能的开源协议商业友好，使得用户可以更灵活地定制和扩展他们的监控仪表盘。

## 4. 无缝搭配Flashduty

Nightingale与Flashduty的结合为用户提供了更强大的告警管理能力。通过与Flashduty的集成，Nightingale可以实现告警的聚合、认领、升级、排班等高级功能，确保告警处理不遗漏，减少不必要的打扰，更好地协同团队的工作。这一无缝搭配为用户提供了更加完善的监控和告警解决方案。

## 5. 支持所有常见采集器

Nightingale支持多种常见的数据采集器，包括Categraf、telegraf、grafana-agent、datadog-agent等。这意味着用户可以使用他们熟悉的采集器来收集监控数据，无需额外的学习和配置。Nightingale的灵活性使得用户可以监控几乎所有类型的数据，确保他们对系统的全面掌控。

## 6. 一体化观测平台

Nightingale从v6版本开始支持接入ElasticSearch和Jaeger数据源，实现了日志、链路和指标多维度的统一可观测。这意味着用户可以在一个平台上同时查看日志、链路追踪和性能指标，帮助他们更好地理解系统的运行状况，快速定位问题并做出相应的优化和改进。

总结起来，Nightingale作为一款开源监控系统，不仅提供了统一接入各种时序库、专业的告警能力、高性能的可视化引擎、无缝搭配Flashduty、支持所有常见采集器和一体化的观测平台等多种强大功能，还具备了高度的可扩展性和灵活性，使其成为监控系统领域的翘楚。无论是小型团队还是大型企业，Nightingale都能够满足他们的监控需求，帮助他们更好地管理和维护他们的系统，确保其稳定运行和高效运维。如果您正在寻找一款功能强大的监控系统，不妨考虑Nightingale，它将为您的监控工作带来全新的体验和便利。
