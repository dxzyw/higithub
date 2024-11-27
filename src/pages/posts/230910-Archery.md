<img src="/assets/image/230910-Archery-1.png" style="max-width: 70%; height: auto;">
<small>5.1k star，强大、功能全、开源的SQl审核平台，推荐！！！</small>


## 1 Archery简介

**Archery**是一款开源的sql审核平台，支持大部分数据库，功能比较齐全

如下为该平台支持的功能清单

功能清单
====

| 数据库        | 查询 | 审核 | 执行 | 备份 | 数据字典 | 慢日志 | 会话管理 | 账号管理 | 参数管理 | 数据归档 |
|------------| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MySQL      | √ | √ | √ | √ | √ | √ | √ | √ | √ | √ |
| MsSQL      | √ | × | √ | × | √ | × | × | × | × | × |
| Redis      | √ | × | √ | × | × | × | × | × | × | × |
| PgSQL      | √ | × | √ | × | × | × | × | × | × | × |
| Oracle     | √ | √ | √ | √ | √ | × | √  | × | × | × |
| MongoDB    | √ | √  | √  | × | × | × | √  | √ | × | × |
| Phoenix    | √ | ×  | √  | × | × | × | × | × | × | × |
| ODPS       | √ | ×  | ×  | × | × | × | × | × | × | × |
| ClickHouse | √ | √  | √  | × | × | × | × | × | × | × |
| Cassandra  | √ | ×  | √  | × | × | × | × | × | × | × |


![](/assets/image/230910-Archery-1.png)

如果想要简单体验的话，可以到如下去体验：

**https://demo.archerydms.com/login/**

账号：archer	密码：archer	


## 2 安装

### Docker
#### 准备运行配置
具体可参考：https://github.com/hhyo/Archery/tree/master/src/docker-compose

#### 启动
下载 [Releases](https://github.com/hhyo/archery/releases/)文件，解压后进入docker-compose文件夹

```bash
#启动
docker-compose -f docker-compose.yml up -d

#表结构初始化
docker exec -ti archery /bin/bash
cd /opt/archery
source /opt/venv4archery/bin/activate
python3 manage.py makemigrations sql
python3 manage.py migrate

#数据初始化
python3 manage.py dbshell<sql/fixtures/auth_group.sql
python3 manage.py dbshell<src/init_sql/mysql_slow_query_review.sql

#创建管理用户
python3 manage.py createsuperuser

#重启服务
docker restart archery

#日志查看和问题排查
docker logs archery -f --tail=10
logs/archery.log
```

#### 访问
http://127.0.0.1:9123/

手动安装
===============
[部署说明](https://github.com/hhyo/archery/wiki/manual)

运行测试
===============
```
python manage.py test -v 3
```

依赖清单
===============
### 框架
- [Django](https://github.com/django/django)
- [Bootstrap](https://github.com/twbs/bootstrap)
- [jQuery](https://github.com/jquery/jquery)
### 前端组件
- 菜单栏 [metisMenu](https://github.com/onokumus/metismenu)
- 主题 [sb-admin-2](https://github.com/BlackrockDigital/startbootstrap-sb-admin-2)
- 编辑器 [ace](https://github.com/ajaxorg/ace)
- SQL美化 [sql-formatter](https://github.com/zeroturnaround/sql-formatter)
- 表格  [bootstrap-table](https://github.com/wenzhixin/bootstrap-table)
- 表格编辑  [bootstrap-editable](https://github.com/vitalets/x-editable)
- 下拉菜单 [bootstrap-select](https://github.com/snapappointments/bootstrap-select)
- 文件上传 [bootstrap-fileinput](https://github.com/kartik-v/bootstrap-fileinput)
- 时间选择  [bootstrap-datetimepicker](https://github.com/smalot/bootstrap-datetimepicker)
- 日期选择  [daterangepicker](https://github.com/dangrossman/daterangepicker)
- 开关  [bootstrap-switch](https://github.com/Bttstrp/bootstrap-switch)
- Markdown展示  [marked](https://github.com/markedjs/marked)
### 服务端
- 队列任务 [django-q](https://github.com/Koed00/django-q)
- MySQL Connector [mysqlclient-python](https://github.com/PyMySQL/mysqlclient-python)
- MsSQL Connector [pyodbc](https://github.com/mkleehammer/pyodbc)
- Redis Connector [redis-py](https://github.com/andymccurdy/redis-py)
- PostgreSQL Connector [psycopg2](https://github.com/psycopg/psycopg2)
- Oracle Connector [cx_Oracle](https://github.com/oracle/python-cx_Oracle)
- MongoDB Connector [pymongo](https://github.com/mongodb/mongo-python-driver)
- Phoenix Connector [phoenixdb](https://github.com/lalinsky/python-phoenixdb)
- ODPS Connector [pyodps](https://github.com/aliyun/aliyun-odps-python-sdk)
- ClickHouse Connector [clickhouse-driver](https://github.com/mymarilyn/clickhouse-driver)
- SQL解析/切分/类型判断 [sqlparse](https://github.com/andialbrecht/sqlparse)
- MySQL Binlog解析/回滚 [python-mysql-replication](https://github.com/noplay/python-mysql-replication)
- LDAP [django-auth-ldap](https://github.com/django-auth-ldap/django-auth-ldap)
- 序列化 [simplejson](https://github.com/simplejson/simplejson)
- 时间处理 [python-dateutil](https://github.com/paxan/python-dateutil)
### 功能依赖
- 可视化 [pyecharts](https://github.com/pyecharts/pyecharts)
- MySQL审核/执行/备份 [goInception](https://github.com/hanchuanchuan/goInception)|[inception](https://github.com/hhyo/inception)
- MySQL索引优化 [SQLAdvisor](https://github.com/Meituan-Dianping/SQLAdvisor)
- SQL优化/压缩 [SOAR](https://github.com/XiaoMi/soar)
- My2SQL [my2sql](https://github.com/liuhr/my2sql)
- 表结构同步 [SchemaSync](https://github.com/hhyo/SchemaSync)
- 慢日志解析展示 [pt-query-digest](https://www.percona.com/doc/percona-toolkit/3.0/pt-query-digest.html)|[aquila_v2](https://github.com/thinkdb/aquila_v2)
- 大表DDL [gh-ost](https://github.com/github/gh-ost)|[pt-online-schema-change](https://www.percona.com/doc/percona-toolkit/3.0/pt-online-schema-change.html)
- MyBatis XML解析 [mybatis-mapper2sql](https://github.com/hhyo/mybatis-mapper2sql)
- RDS管理 [aliyun-openapi-python-sdk](https://github.com/aliyun/aliyun-openapi-python-sdk)
- 数据加密 [django-mirage-field](https://github.com/luojilab/django-mirage-field)



## 3 特点

- sql审核

![](/assets/image/230910-Archery-2.png)

- sql查询


在线查询模块适用于简单的SQL查询和日常问题排查，通过工作流控制查询权限的申请和审核，并强制对SQL语句进行改写以限制最大查询数量，同时记录所有的查询日志方便审计。基于目前的定位，查询功能现不能很好的支持大数据量的检索和导出操作

- sql优化

采用percona-toolkit的pt_query_digest收集慢日志，在系统中进行展示，并且支持一键获取优化建议