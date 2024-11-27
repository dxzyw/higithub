<img src="/assets/image/240704-sql-studio-1.png">
<small>1.4k star，开源，网页版小工具推荐！</small>

今天推荐一款可以在网页上打开的，sqllite数据库浏览器

效果如下：
![demo](/assets/image/240704-sql-studio.png)
![demo2](/assets/image/240704-sql-studio-1.png)
![tables](/assets/image/240704-sql-studio-2.png)

>开源及demo地址在文末

## sql-studio简介

这是一款纯Web化的SQL开发工具，它允许您从单一应用程序同时连接多个数据库，包括 SQLite，libSQL，PostgreSQL，MySQL和DuckDB 等，可以在浏览器端打开。

## SQL Studio特点：

1. **单一二进制文件，一键启动**：SQL Studio 是一个单一的二进制文件，您只需运行一个命令即可启动它，无需复杂的安装过程。
2. **多数据库支持**：您可以连接到多种数据库，包括 SQLite、libSQL、PostgreSQL、MySQL 和 DuckDB。
3. **功能丰富**：SQL Studio 提供了概览页面，显示常见元数据；表格页面，包含每个表的元数据，包括磁盘使用量；自定义查询页面，让您更灵活地访问数据库。
4. **快速部署**：您可以通过预构建的二进制文件快速安装 SQL Studio，支持 MacOS、Linux 和 Windows。
5. **Web访问**：安装后，您可以通过浏览器访问 SQL Studio，无需本地安装客户端。

![查询界面](/assets/image/240704-sql-studio-4.png)

## SQL Studio部署及使用

### mac或者linux安装

```
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/frectonz/sql-studio/releases/download/0.1.16/sql-studio-installer.sh | sh
```
### windows下安装
```
powershell -c "irm https://github.com/frectonz/sql-studio/releases/download/0.1.16/sql-studio-installer.ps1 | iex"
```

如果要链接本地的sqllite文件，可以如下方式
```
sql-studio sqlite [sqlite_db]
```

如果是远程方式连接，可以如下：
```
sql-studio libsql [url] [auth_token]
```

链接MySQL可以如下方式：
```
sql-studio mysql [url]
```

>开源地址：
>
>demo体验

![github-star](/assets/image/240704-sql-studio-3.png)