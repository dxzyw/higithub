<img src="/assets/image/240723-bunkerweb-1.png">
<small>4.9k star,下一代开源WAF，可无缝集成docker、k8s</small>

这是一个基于nginx的web服务器，可以无缝集成到你现有的环境中(Linux，Docker，Swarm，Kubernetes)，除了可以在命令行界面操作，也提供了web ui界面可以操作。

![bunkerweb](/assets/image/240723-bunkerweb.png)

## bunkerweb简介

BunkerWeb是下一代开源Web应用程序防火墙（WAF），传统意义上的waf是在web服务器前面增加防护设施。

这款开源产品是基于nginx直接改造的web服务器，使得默认情况下，你的web服务就是安全的。

如果你想体验一下它的waf防护功能，在官网提供了测试页面

![test waf](/assets/image/240723-bunkerweb-1.png)

## bunkerweb功能特点

- 快速使用，可以与你现有的环境，快速集成，不管你是常规的使用linux，还是使用docker或者是k8s，都提供方案可以快速接入
- 配置简单，支持一定的自定义设置
- 开箱即用，不修改任何配置的情况下，默认提供最低的安全防护
- 带有酷炫的web配置界面，相比于命令行，配置更加便捷
- 带有插件系统，可以根据需要配置其它功能

## bunkerweb的安全功能

- HTTPS支持透明的Let's Encrypt自动化
- 最先进的网络安全：HTTP安全头，防止泄漏，TLS加固，...
- 基于HTTP状态码自动禁止奇怪行为
- 为客户端应用连接和请求限制
- 等等

## bunkerweb如何安装使用

如果你是linux 环境，debian环境

```
#安装nginx
sudo apt update && \
sudo apt install -y nginx=1.26.1-2~$(lsb_release -cs)
#开启web配置
export UI_WIZARD=1
# 安装BunkerWeb
curl -s https://repo.bunkerweb.io/install/script.deb.sh | sudo bash && \
sudo apt update && \
sudo -E apt install -y bunkerweb=1.5.8

sudo apt-mark hold nginx bunkerweb
#配改配置
#修改如下：
/etc/bunkerweb/variables.env
```
然后可以启动

systemctl restart bunkerweb

如果你是docker环境，可以直接采用官网提供的dockerfile文件启动
![docker](/assets/image/240723-bunkerweb-2.png)

>开源地址：https://github.com/bunkerity/bunkerweb


