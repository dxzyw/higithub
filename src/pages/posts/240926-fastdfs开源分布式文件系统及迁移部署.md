
<small></small>
背景是这样的：最近在做机房迁移，其中涉及到一套古早的fastdfs系统，当时部署的同事已经不在了，也没有交接文档，但是必须做迁移，坑的是这活落到我的头上了，虽然几年前接触过fasdfs，但早就不用了啊，现在要不是用minio，要不用的是云上的OSS等。

这篇文章记录下，如何部署新的fastdfs及如何做文件迁移及验证。

### 什么是 FastDFS？

FastDFS是一个开源的分布式文件系统，旨在提供高性能的文件存储和访问解决方案。它最初由淘宝开发，并已成为开源社区的一部分。FastDFS具有以下主要特点：

1. **高性能：** FastDFS被设计成能够快速处理大量文件的系统。它具有低延迟和高吞吐量，使其成为存储和检索文件的理想选择。

2. **可扩展性：** FastDFS可以轻松扩展以满足不断增长的存储需求。通过添加更多的存储服务器，可以实现水平扩展。

3. **简单部署：** FastDFS的部署相对简单，因此用户可以快速开始使用。它的架构清晰，易于管理。

4. **开源：** FastDFS是一个开源项目，因此用户可以免费使用它，同时也可以根据需要进行自定义修改。

### FastDFS 架构

FastDFS的架构非常简单，由以下几个关键组件组成：

1. **Tracker Server：** Tracker服务器是FastDFS的管理节点，用于协调存储服务器的操作。它负责跟踪存储服务器的状态和文件位置。

2. **Storage Server：** 存储服务器是实际存储文件的节点。FastDFS可以有多个存储服务器，每个服务器负责存储一部分文件。

3. **Client：** 客户端是用户或应用程序与FastDFS交互的接口。客户端通过Tracker服务器查找文件并与存储服务器通信以上传、下载或删除文件。

### FastDFS 迁移部署的过程

#### 步骤 1：准备环境

在开始迁移部署之前，首先要确保你已经准备好了合适的环境。这包括：

- 一组新的服务器用于FastDFS存储节点。
- 适当的网络连接，确保存储节点可以相互通信。
- 同版本的FastDFS软件包。

先挂盘，可以按照如下操作：

```
fdisk -l 
echo "n 
p 
1 
t 
8e 
p 
w 
" | fdisk /dev/vdc 
pvcreate /dev/vdc1 && vgcreate lrGroup /dev/vdc1 && lvcreate -l +100%FREE -n lv_ky lrGroup && mkfs -t xfs /dev/lrGroup/lv_ky && mkdir /data && mount /dev/lrGroup/lv_ky /data 
```
解压安装包到/data
```
cd /data/
tar -xvf fastdfs-5.11.tar.gz 
tar -zxvf fastdfs-nginx-module-1.20.tar.gz 
tar -zxvf libfastcommon-1.0.39.tar.gz 
tar -xzvf nginx-1.22.0.tar.gz 
```

依赖nginx，所以需要提前部署好nginx,需要加载fastdfs模块

```
mv nginx-1.22.0 nginx_src 
cp fastdfs-nginx-module-1.20 nginx_src/ 
ls 
cp -r fastdfs-nginx-module-1.20 nginx_src/ 
cd nginx_src 
cd fastdfs-nginx-module-1.20 
cd src 
cp /data/conf/config ./ 
yum install pcre-devel zlib zlib-devel openssl openssl-devel -y 
cd ../.. 
./configure --prefix=/data/nginx --add-module=fastdfs-nginx-module-1.20/src/ 
```

修改nginx配置文件

```
user  root;
worker_processes  1;
events {
    worker_connections  1024;
}
http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;
    server {
        listen       38080;
        server_name  localhost;
        location / {
            root   html;
            index  index.html index.htm;
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
        location /group1/M00 {
                root /data/fastdfs/data/;
                ngx_fastdfs_module;
        }
    }
}
```

启动nginx 

```
/data/nginx/sbin/nginx
```
#### 步骤 2：安装和配置 Tracker 服务器


在新的环境中安装并配置Tracker服务器。这是FastDFS的管理节点，负责跟踪存储服务器的状态和文件位置。配置文件通常位于 `/etc/fdfs/tracker.conf`。


```
cd libfastcommon-1.0.39 
yum -y install gcc gcc-c++ 
./make.sh 
./make.sh install 
cd ../fastdfs-5.11 
yum install -y perl 
./make.sh 
./make.sh install 
ll /usr/bin|grep fdfs 
mkdir -p /data/fastdfs/{client,data,logs}
echo "service fdfs_trackerd start" |tee -a /etc/rc.d/rc.local
cp ./conf/* /etc/fdfs/ 
```
**修改tracker配置文件**

```
#cat /etc/fdfs/
disabled=false
bind_addr=
port=22122
connect_timeout=30
network_timeout=60
base_path=/data/fastdfs
max_connections=256
accept_threads=1
work_threads=4
min_buff_size = 8KB
max_buff_size = 128KB
store_lookup=2
store_group=group2
store_server=0
store_path=0
download_server=0
reserved_storage_space = 10%
log_level=info
run_by_group=
run_by_user=
allow_hosts=*
sync_log_buff_interval = 10
check_active_interval = 120
thread_stack_size = 64KB
storage_ip_changed_auto_adjust = true
storage_sync_file_max_delay = 86400
storage_sync_file_max_time = 300
use_trunk_file = false 
slot_min_size = 256
slot_max_size = 16MB
trunk_file_size = 64MB
trunk_create_file_advance = false
trunk_create_file_time_base = 02:00
trunk_create_file_interval = 86400
trunk_create_file_space_threshold = 20G
trunk_init_check_occupying = false
trunk_init_reload_from_binlog = false
trunk_compress_binlog_min_interval = 0
use_storage_id = false
storage_ids_filename = storage_ids.conf
id_type_in_filename = ip
store_slave_file_use_link = false
rotate_error_log = false
error_log_rotate_time=00:00
rotate_error_log_size = 0
log_file_keep_days = 0
use_connection_pool = false
connection_pool_max_idle_time = 3600
http.server_port=38080
http.check_alive_interval=30
http.check_alive_type=tcp
http.check_alive_uri=/status.html
```
**启动**

```
service fdfs_trackerd start 
```

#### 步骤 3：安装和配置 Storage 服务器

安装并配置存储服务器，这是实际存储文件的地方。每个存储服务器都需要一个唯一的`storage.conf`配置文件。确保在新环境中创建一个存储服务器群集。

```
echo "service fdfs_storaged start" |tee -a /etc/rc.d/rc.local 
```

修改配置文件

```
# cat torage.conf
disabled=false
group_name=group1
bind_addr=
client_bind=true
port=23000
connect_timeout=30
network_timeout=60
heart_beat_interval=30
stat_report_interval=60
base_path=/data/fastdfs
store_path0=/data/fastdfs
max_connections=10
buff_size = 256KB
accept_threads=1
work_threads=4
disk_rw_separated = true
disk_reader_threads = 1
disk_writer_threads = 1
sync_wait_msec=50
sync_interval=0
sync_start_time=00:00
sync_end_time=23:59
write_mark_file_freq=500
store_path_count=1
subdir_count_per_path=256
tracker_server=ip1:22122,ip222122
log_level=info
run_by_group=
run_by_user=
allow_hosts=*
file_distribute_path_mode=0
file_distribute_rotate_count=100
fsync_after_written_bytes=0
sync_log_buff_interval=10
sync_binlog_buff_interval=10
sync_stat_file_interval=300
thread_stack_size=512KB
upload_priority=10
if_alias_prefix=
check_file_duplicate=0
file_signature_method=hash
key_namespace=FastDFS
keep_alive=0
use_access_log = false
rotate_access_log = false
access_log_rotate_time=00:00
rotate_error_log = false
error_log_rotate_time=00:00
rotate_access_log_size = 0
rotate_error_log_size = 0
log_file_keep_days = 0
file_sync_skip_invalid_record=false
use_connection_pool = false
connection_pool_max_idle_time = 3600
http.domain_name=
http.server_port=38080
```
**启动**
```
service fdfs_storaged start 
```
#### 步骤 4：配置 Client 客户端

在迁移的环境中配置FastDFS客户端，以便与新的Tracker和Storage服务器进行通信。更新客户端的配置文件，以使用新的Tracker服务器的地址。

```
#cat client.conf

connect_timeout=30
network_timeout=60
base_path=/data/fastdfs/client
tracker_server=ip1:22122,ip2:22122
log_level=info
use_connection_pool = false
connection_pool_max_idle_time = 3600
load_fdfs_parameters_from_tracker=false
use_storage_id = false
storage_ids_filename = storage_ids.conf
http.tracker_server_port=38080

```

修改mod_fastdfs.conf配置文件

```
#include http.conf
connect_timeout=2
network_timeout=30
base_path=/tmp
load_fdfs_parameters_from_tracker=true
storage_sync_file_max_delay = 86400
use_storage_id = false
storage_ids_filename = storage_ids.conf
tracker_server=ip1:22122,ip2:22122
storage_server_port=23000
group_name=group1
url_have_group_name = true
store_path_count=1
store_path0=/data/middleware/fastdfs
log_level=info
log_filename=
response_mode=proxy
if_alias_prefix=
flv_support = true
flv_extension = flv
group_count = 0
```

#### 步骤 5：迁移数据

现在，你需要迁移原始FastDFS环境中的所有数据到新的环境。这可能涉及将文件从旧的存储服务器复制到新的存储服务器。

将旧服务器data目录打包：

```
cd /data/fastdfs/

zip -r data.zip ./data

#scp到新的节点

```
**新节点如下操作**

```
cd /data/fastdfs

cp data/*.dat . 
mv data data-bak

unzip data.zip

cp *.dat ./data

cd ./data/sync

# 修改mark文件
mv 10.255.220.101_23000.mark newip_23000.mark

```
重启服务
```
service fdfs_trackerd restart 
service fdfs_storaged restart
```

#### 步骤 6：测试和验证

在完成数据迁移后，确保一切正常工作。测试文件的上传、下载和删除功能以确保系统正常运行。

#### 步骤 7：监控和维护

建立监控机制以跟踪FastDFS集群的性能和健康状况。定期维护存储服务器和Tracker服务器，确保它们保持最新状态。

### FastDFS 的最佳实践

在使用FastDFS时，有一些最佳实践可以帮助你提高系统的性能和可靠性：

1. **备份和恢复策略：** 确保实施了数据备份和恢复策略，以防止数据丢失。

2. **安全性：** 保护Tracker和Storage服务器，确保只有授权用户可以访问。

3. **监控和警报：** 使用监控工具来跟踪性能指标并设置警报，以及时发现和解决问题。

4. **定期维护：** 定期检查和维护存储服务器，确保它们处于最佳状态。

### 结论

FastDFS是一个强大的开源分布式文件系统，适用于需要高性能、可扩展性和简单部署的文件存储和访问解决方案。通过遵循上述迁移部署过程和最佳实践，你可以轻松地将FastDFS引入你的环境，并有效地管理文件。在数字化时代，一个可靠的文件系统对于企业的成功至关重要，FastDFS为此提供了一个出色的解决方案。