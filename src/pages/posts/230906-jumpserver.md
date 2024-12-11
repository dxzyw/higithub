<img src="/assets/image/230906-jumpserver-1.png" style="max-width: 70%; height: auto;">
<small>22k star，最强开源堡垒机，强推</small>


最开始接触jumpserver已经是五年前了，最近又发布了最新的v3版本，迫不及待的就去体验了一波，真心不错，增加很多新的功能，操作真的丝滑，比起公司采购的上个世纪的堡垒机真心好用多了。

## 1 jumpserver简介

jumpserver是一款堡垒机你知道的，同时是符合4A规范的堡垒机，如果你要做等保，那么也是符合要求的，支持多因素认证，带有安全审计功能，最新版本还可以结束各类数据库，还可以接入k8s等。

最近装了一下V3版本，有个大的提升就是支持配置ansible playbook功能，常规的批量操作也做了升级。


![](/assets/image/230906-jumpserver-1.png)


看一下这个star上涨速度


![](/assets/image/230906-jumpserver-2.png)





## 2 安装

支持在线安装和离线安装，安装方式也是多种多样，直接去访问官网就好：

**https://www.jumpserver.org/**


![](/assets/image/230906-jumpserver-3.png)

下载离线包之后：

```
cd /opt
tar -xf jumpserver-offline-installer-v3.6.3-amd64.tar.gz
cd jumpserver-offline-installer-v3.6.3-amd64

# 根据需要修改配置文件模板, 如果不清楚用途可以跳过修改
cat config-example.txt

```

注：v3版本新增一个domain的配置，如果没有加对应配置的话，可能代理无法访问：

```
# 可信任 DOMAINS 定义,
# 定义可信任的访问 IP, 请根据实际情况修改, 如果是公网 IP 请改成对应的公网 IP,
# DOMAINS="demo.jumpserver.org"
# DOMAINS="172.17.200.191"
# DOMAINS="demo.jumpserver.org,172.17.200.191"
DOMAINS=

```
安装完成后，如下方式启动

```
cd jumpserver-offline-release-v3.6.3-amd64

# 启动
./jmsctl.sh start

# 停止
./jmsctl.sh down

# 卸载
./jmsctl.sh uninstall

# 帮助
./jmsctl.sh -h
```
通过浏览器访问即可：

```
地址: http://<JumpServer服务器IP地址>:<服务运行端口>
用户名: admin
密码: admin
```

github可以访问的直接到如下链接去下载就可以

**https://github.com/jumpserver/jumpserver**

github如果无法访问的话，可以后台直接私信

## 3 特点

一些功能是V3版本新加的，部分社区版还不支持


![](/assets/image/230906-jumpserver-4.gif)


支持资产丰富
- SSH: Linux / Unix / 网络设备 等；
- Windows: Web 方式连接 / 原生 RDP 连接；
- 数据库: MySQL / MariaDB / PostgreSQL / Oracle / SQLServer / ClickHouse 等；
- NoSQL: Redis / MongoDB 等；
- GPT: ChatGPT 等;
- 云服务: Kubernetes / VMware vSphere 等;
- Web 站点: 各类系统的 Web 管理后台；
- 应用: 通过 Remote App 连接各类应用。

产品特色：

- 开源: 零门槛，线上快速获取和安装；
- 无插件: 仅需浏览器，极致的 Web Terminal 使用体验；
- 分布式: 支持分布式部署和横向扩展，轻松支持大规模并发访问；
- 多云支持: 一套系统，同时管理不同云上面的资产；
- 多租户: 一套系统，多个子公司或部门同时使用；
- 云端存储: 审计录像云端存储，永不丢失； 


![](/assets/image/230906-jumpserver-5.png)



