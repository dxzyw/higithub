<img src="/assets/image/230811-yearing-1.png" style="max-width: 70%; height: auto;">
<small>7.8k star,推荐一款实用工具，sql审计平台yearing</small>


如果说公司没有统一的sql审计平台，如果说作为DBA或者运维你平时需要协助研发执行很多sql脚本， 那么这款工具建议你看下，虽然有企业版，但是开源版本已经足够使用了，可以很大程度的减轻工作量，而且相对规范化。

## 1 yearing简介

yearing是一款面向DBA和开发人员的MySQL语句/查询审计工具。该工具可本地部署,对用户隐私严格保密,提供了一个简单高效的MySQL审计平台。

yearing通过拦截数据库的查询请求,自动记录执行过的SQL语句、文本、调用方信息等,并将审计结果存储在安全的本地数据库中。用户可通过简洁清晰的Web界面,对这些历史SQL进行查看和分析。

相较于其他MYSQL审计工具,yearing具有部署简单、资源消耗低、使用方便的特点。它专为DBA、运维和开发人员设计,可以快速建立MYSQL查询审计体系,提高数据库安全运维水平。

正如前面所说，如果你需要快速的建立一套有效sql审计、sql查询平台，那么yearing可以作为你的备选方案之一。


![](/assets/image/230811-yearing-1.png)


![](/assets/image/230811-yearing-2.png)



## 2 如何安装呢？

很简单

下载好对应的包之后，修改配置文件，然后启动

```
#设置配置文件
vim config.toml
#初始化数据
./Yearning install
#运行
./Yearning run 
```

安装包可以到如下地址获取。

github可以访问的直接到如下链接去下载就可以，目前支持linux版本

**https://github.com/cookieY/Yearning/releases/tag/v3.1.6.2**

github如果无法访问的话，可以后台直接私信

如果说你需要docker环境部署启动的话，也可以

```
## 初始化数据库
docker run --rm -it -p8000:8000 -e SECRET_KEY=$SECRET_KEY -e MYSQL_USER=$MYSQL_USER -e MYSQL_ADDR=$MYSQL_ADDR -e MYSQL_PASSWORD=$MYSQL_PASSWORD -e MYSQL_DB=$Yearning_DB yeelabs/yearning "/opt/Yearning install"
## 必须在启动容器中初始化数据库
docker run -d -it -p8000:8000 -e SECRET_KEY=$SECRET_KEY -e MYSQL_USER=$MYSQL_USER -e MYSQL_ADDR=$MYSQL_ADDR -e MYSQL_PASSWORD=$MYSQL_PASSWORD -e MYSQL_DB=$Yearning_DB yeelabs/yearning
```

## 3 yearing有哪些值得关注的点


### 自动sql检测

SQL语句检测功能根据预定义的规则和语法进行测试

可以设置预定义的规则来检查SQL语句是否符合特定的编码标准已符合最佳实践或安全要求。


![](/assets/image/230811-yearing-3.png)

### SQL 语法高亮及自动联想

SQL语法高亮显示和自动完成功能，以增强用户体验并提高查询编写效率。

SQL语法高亮显示帮助用户直观地区分SQL查询的不同部分，如关键字、表名、列名和操作符。这使得阅读和理解查询结构变得更加容易。

![](/assets/image/230811-yearing-4.png)

### 工单/查询 审计

支持对用户订单/查询语句进行审计

通过审计特性，可以跟踪和记录所有的查询操作，包括数据源、数据库、敏感字段的处理等。这样可以确保查询操作符合规定，并允许跟踪查询历史。


![](/assets/image/230811-yearing-5.png)

