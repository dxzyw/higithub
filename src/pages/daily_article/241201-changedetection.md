<img src="/assets/image/241201-changedetection.png">

<small>19.9k star,真厉害了！一个开源的网站变化检测工具</small>

你中意一款商品蛮久了，但是价格比你预期要高，你一直在观望，但是突然有一天，你发现价格降了，你是不是会立马下单？

肉眼的观察毕竟是有限的，而changedetection.io则可以帮你解决这个问题。

## 关于changedetection.io

changedetection.io 是一个开源的网站变化检测工具，它可以帮助你监控网站的变化，并及时通知你。

它可以监控

- 产品或者服务的价格变化
- 缺货商品补货通知
- 网站内pdf内容的变化，甚至是变化的时间
- 某款软件的更新日志
- 等等

它的一些主要特征：

- 支持多种网站类型，包括电商、新闻、软件更新等。
- 支持多种通知方式，包括邮件、短信、微信等。
- 支持多种监控方式，包括定时监控、实时监控等。
- 支持多种数据存储方式，包括数据库、文件等。 


官方是需要付费使用的

![](/assets/image/241201-changedetection-1.png)

但是你可以自己在本地部署，它支持docker部署，如果你有nas那就简单了，下面一条命令就可以完成部署

```
$ docker run -d --restart always -p "127.0.0.1:5000:5000" -v datastore-volume:/datastore --name changedetection.io dgtlmoon/changedetection.io
```

如果你习惯使用docker-compose方式，那可以参考如下：

docker-compose.yml文件如下：

```
version: '3.2'
services:
    changedetection:
      image: ghcr.io/dgtlmoon/changedetection.io
      container_name: changedetection
      hostname: changedetection
      volumes:
        - changedetection-data:/datastore
      ports:
        - 5000:5000
      restart: unless-stopped
volumes:
  changedetection-data:
```

然后执行如下命令即可：

```
$ docker compose up -d
```

当然了如果你熟悉python，你也可以自己部署，项目地址：https://github.com/dgtlmoon/changedetection.io




