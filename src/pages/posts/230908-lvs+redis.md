
<small>还是迁移的事</small>
# Redis主从架构和高可用性实现

## 引言

在当今的应用程序中，高可用性和性能是至关重要的。本文将介绍如何使用Redis主从架构和Linux虚拟服务器（LVS）实现高可用性，同时还会详细介绍最近完成的Redis集群迁移部署的过程。

## 什么是Redis？

Redis是一个开源的内存数据库，它被广泛用于缓存和数据存储。它以其出色的性能和灵活的数据结构支持而闻名，因此被许多大规模应用程序广泛使用。

## Redis主从架构

Redis采用了主从复制的架构，这是一种实现高可用性和横向扩展的方式。在Redis主从架构中，有一个主服务器和多个从服务器，主服务器用于写入操作，从服务器用于读取操作。这可以提高性能和数据冗余。

### 主服务器

主服务器接收客户端的写入请求，并将这些请求复制到从服务器。它负责数据的写入和维护。

### 从服务器

从服务器复制主服务器的数据，并用于读取操作。如果主服务器发生故障，从服务器可以升级为主服务器，以保持高可用性。

## Redis高可用性

高可用性是确保系统在面临故障时仍然可用的能力。使用Redis主从架构，可以实现高可用性。但为了进一步提高可用性，我们可以引入Linux虚拟服务器（LVS）。

### Linux虚拟服务器（LVS）

LVS是一个用于负载均衡的Linux内核模块。我们这里用到的是实现主从切换，当主服务redis异常时，可以切换从服务器变为主服务器。

## 最近的迁移部署过程

### 迁移计划

在介绍Redis主从架构和LVS之后，让我们回顾一下最近的Redis集群迁移部署过程。在迁移之前，我们制定了详细的迁移计划和测试流程。

### 数据备份

首先，我们对现有的Redis集群进行了数据备份。这是确保在迁移期间不会丢失任何数据的关键步骤。我们使用了Redis的快照功能来创建数据备份。

### redis部署

在备份完成后，我们进行了网络切换。我们将流量从旧的Redis集群切换到新的Redis集群，同时引入了LVS以实现负载均衡。这个过程需要谨慎地调整网络配置，以确保平滑切换。

redis部署很简单，直接编译安装就好，因为我们是迁移，所以直接把老的包拿过来用即可

主redis配置文件
```
# cat redis.conf
daemonize yes
pidfile "/var/run/redis.pid"
port 16465
timeout 300
tcp-keepalive 60
loglevel notice
logfile "/data/log/redis.log"
databases 16

stop-writes-on-bgsave-error no
rdbcompression yes
rdbchecksum yes
dbfilename "dump.rdb"
dir "/data/datafile"

masterauth "password"
slave-serve-stale-data yes
slave-read-only yes
repl-ping-slave-period 10
repl-timeout 600
repl-disable-tcp-nodelay no
repl-backlog-size 64mb
repl-backlog-ttl 3600
slave-priority 100
requirepass "password"
maxmemory 10000000000
maxmemory-policy noeviction
appendonly no
appendfsync everysec
no-appendfsync-on-rewrite no
auto-aof-rewrite-percentage 100
auto-aof-rewrite-min-size 64mb
lua-time-limit 5000
slowlog-log-slower-than 20000
slowlog-max-len 128
notify-keyspace-events ""
hash-max-ziplist-entries 512
hash-max-ziplist-value 64
set-max-intset-entries 512
zset-max-ziplist-entries 128
zset-max-ziplist-value 64
activerehashing yes
client-output-buffer-limit normal 0 0 0
client-output-buffer-limit slave 8gb 4gb 600
client-output-buffer-limit pubsub 32mb 8mb 60
aof-rewrite-incremental-fsync yes
lazyfree-lazy-expire yes
lazyfree-lazy-server-del yes
slave-lazy-flush yes
aof-use-rdb-preamble yes
maxclients 4064

```
从redis配置文件会多一行
```
slaveof 主ip 16465
```

启动Redis

```
 /data/redis/bin/redis-server /data/redis/conf/redis.conf
```
查看info信息，确认主可以连接到从库


### lvs部署及配置

keepalive可以直接yum安装

然后修改keepalived配置文件

```
# cat /etc/keepalived/keepalived.conf 
global_defs {   

        router_id LVS_DEVEL
        script_user root
        enable_script_security    
}

vrrp_script chk_16465 {
        script "/var/keepalived/scripts/redis_check.sh password 16465"
        interval 1
        weight -20
        rise 3
        fall 3
}

vrrp_instance redis_6465 {
        state BACKUP
        interface bond1
        virtual_router_id 52
        priority 90
        advert_int 1
        authentication {
                auth_type PASS
                auth_pass 1111
        }
        virtual_ipaddress {
                vip
        }
        track_script {
                chk_16465
        }
        notify_master "/var/keepalived/scripts/redis_master.sh  password 16465"
        notify_backup "/var/keepalived/scripts/redis_slave.sh  password 16465 masterip  "
        notify_fault "/var/keepalived/scripts/redis_falut.sh"
        notify_stop "/var/keepalived/scripts/redis_stop.sh"
}

```

如果是主的话，需要对应修改如下：

```
state MASTER
priority 100
```

其中涉及到几个脚本，如下：

```
#cat /var/keepalived/scripts/redis_check.sh 
#!/bin/bash
CMD_RES=`/paic/redis/4.0.10/bin/redis-cli -a $1 -p $2 PING 2>/dev/null`
LOG_FILE="/var/keepalived/logs/redis-state.log"
if [ "$CMD_RES"x == "PONG"x ]; then :
   echo "[CHECK] `date`, SUCCESS" >> $LOG_FILE 2>&1
    exit 0
else
    echo "[CHECK] `date`, ERROR" >> $LOG_FILE 2>&1
    exit 1
fi

# cat /var/keepalived/scripts/redis_master.sh 
#!/bin/bash
CMD="/paic/redis/4.0.10/bin/redis-cli"
LOG_FILE="/var/keepalived/logs/redis-change.log"
echo "[MASTER] `date`" >> $LOG_FILE
echo "Run SLAVEOF NO ONE cmd" >> $LOG_FILE
$CMD -a $1 -p $2 SLAVEOF NO ONE >> $LOG_FILE 2>&1

#cat /var/keepalived/scripts/redis_slave.sh 
#!/bin/bash
CMD="/paic/redis/4.0.10/bin/redis-cli"
LOG_FILE="/var/keepalived/logs/redis-change.log"
echo "[BACKUP] `date`" >> $LOG_FILE
echo "Being slave wait to sync data" >> $LOG_FILE
sleep 1  
echo "Run SLAVEOF cmd" >> $LOG_FILE
$CMD -a $1 -p $2 SLAVEOF $3 $2 >> $LOG_FILE  2>&

#cat /var/keepalived/scripts/redis_falut.sh 
#!/bin/bash
LOG_FILE="/var/keepalived/logs/redis-state.log"
echo "[FAULT] `date`" >> $LOG_FILE
```

### 测试

迁移完成后，我们进行了一系列测试，以确保新的Redis集群能够正常工作。我们模拟了各种故障情况，以验证高可用性配置的有效性。

当把主的redis进程kiil掉后，可以看到虚拟ip转移到从机上，通过redis-cli链接后，从redis可以正常写，并且角色转换为了master。



## 结论

通过使用Redis主从架构和Linux虚拟服务器，我们成功地实现了高可用性和性能扩展。最近的Redis集群迁移部署过程也顺利完成，我们现在拥有一个稳定和可靠的Redis环境，满足了我们应用程序的需求。

Redis的强大性能和高可用性使其成为许多应用程序的首选数据库引擎。希望本文对您理解Redis主从架构、高可用性和迁移部署过程有所帮助。
