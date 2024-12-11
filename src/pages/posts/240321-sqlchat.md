<img src="/assets/image/240321-sqlchat-2.png" style="max-width: 70%; height: auto;">
<small>非原 3.6k star，推荐一款基于聊天的sql客户端</small>


可以看下效果，开源地址再文末：

![文末有在线体验地址](/assets/image/240321-sqlchat-1.png)

![](/assets/image/240321-sqlchat-2.png)

![](/assets/image/240321-sqlchat-3.png)

## SQL Chat简介

SQL Chat是一个基于聊天的SQL客户端，它使用自然语言与数据库进行交流，实现查询、修改、添加和删除数据库的操作。

随着我们进入开发者工具2.0时代，利用聊天界面重建现有工具的机会巨大，SQL客户端也不例外。

与其在许多UI控件之间导航，使用基于聊天的界面更加直观。当然，前提是这种方式有效，而我们的目标就是提供这样的体验。

SQL Chat由Next.js构建，支持以下数据库，并将随时间增加更多：MySQL、PostgreSQL、MSSQL、TiDB。

如果您使用sqlchat.ai连接到您的数据库，您需要将0.0.0.0（允许所有连接）添加到数据库白名单IP中。

因为sqlchat.AI托管在Vercel上，使用动态IP。如果这是一个问题，请考虑下面的自托管选项。

## docker部署

自托管Docker的话，如果只是想为自己使用，提供以下选项

NEXTAUTH_SECRET、OPENAI_API_KEY

然后运行以下命令

```
docker run --name sqlchat --platform linux/amd64 --env NEXTAUTH_SECRET= \"$(openssl rand -hex 5)\"  --env OPENAI_API_KEY= <<YOUR OPENAI KEY>> -p 3000:3000 --hostname localhost sqlchat/sqlchat。

```
将任意字符串传递给NEXTAUTH_SECRET，否则next-auth会报错。如果要在同一主机上与数据库聊天，需要在数据库连接设置中使用host.docker.internal作为主机。

## 支持数据库

SQL Chat 是由 Next.js 构建的，它支持以下数据库，并将随着时间的推移支持更多:

- MySQL

- PostgreSQL

- MSSQL

- TiDB Cloud


![](/assets/image/240321-sqlchat-4.png)

![](/assets/image/240321-sqlchat-5.png)

**开源地址：https://github.com/sqlchat/sqlchat**

**在线体验地址：https://sqlchat.ai/**
