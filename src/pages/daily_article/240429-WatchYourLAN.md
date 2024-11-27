<img src="/assets/image/240429-WatchYourLAN-1.png" style="max-width: 70%; height: auto;">
<small>1.1k star,开源免费，推荐个强大的小工具</small>


如果你想要查看你局域网里面设备情况，你会怎么查看？

今天推荐一款轻量级的小工具，就可以实现快速查看你的局域网情况

> 开源地址在文末，其它问题可留言


![](/assets/image/240429-WatchYourLAN-1.png)


## WatchYourLAN 简介

WatchYourLAN是一款轻量级的IP扫描器，可以快速发现和管理你本地网络的设备。会有一个直观的web页面，可以浏览、识别、监控和管理连接你的设备。


## WatchYourLAN 特点

* **网络扫描:** WatchYourLAN 可以扫描您的本地网络并识别所有连接的设备，包括 IP 地址、MAC 地址、主机名、制造商等信息。
* **Web 界面:** WatchYourLAN 提供了一个易于使用的 Web 界面，可让您轻松查看扫描结果并管理您的设备。
* **设备信息:** WatchYourLAN 提供有关每个设备的详细信息，包括 IP 地址、MAC 地址、主机名、制造商、操作系统、端口信息等。
* **设备状态监控:** WatchYourLAN 可以监控设备状态，并通知您网络上的任何新设备或更改。
* **设备分组:** WatchYourLAN 允许您根据 IP 地址范围、MAC 地址、制造商、操作系统等条件对设备进行分组。
* **设备搜索:** WatchYourLAN 提供了一个搜索功能，可让您快速找到特定的设备。
* **设备导出:** WatchYourLAN 可以将扫描结果导出为 CSV 或 JSON 格式。

##  WatchYourLAN 部署

docker快速部署

```
docker run --name wyl \
	-e "IFACE=$YOURIFACE" \
	-e "TZ=$YOURTIMEZONE" \
	--network="host" \
	-v $DOCKERDATAPATH/wyl:/data \
    aceberg/watchyourlan
```

也可以通过docker-compose方式部署

```
version: "3"
services:
  node-bootstrap:
    image: aceberg/node-bootstrap
    restart: unless-stopped
    ports:
    - 8850:8850
  wyl:
    image: aceberg/watchyourlan
    network_mode: "host"      
    restart: unless-stopped
    command: "-n http://YOUR_IP:8850"   # put your server IP or DNS name here
    depends_on:
      - node-bootstrap
    volumes:
    - ~/.dockerdata/wyl:/data
    environment:
      TZ: Asia/Novosibirsk              # required: needs your TZ for correct time
      IFACE: "enp4s0"                   # required: 1 or more interface
      DBPATH: "/data/db.sqlite"         # optional, default: /data/db.sqlite
      GUIIP: "0.0.0.0"                  # optional, default: localhost
      GUIPORT: "8840"                   # optional, default: 8840
      TIMEOUT: "120"                    # optional, time in seconds, default: 60
      SHOUTRRR_URL: ""                  # optional, set url to notify
      THEME: "darkly"                   # optional
      IGNOREIP: "no"                    # optional
```


**开源地址：https://github.com/aceberg/WatchYourLAN**