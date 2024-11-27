<img src="/assets/image/240114-knadh-listmonk-1.png" style="max-width: 70%; height: auto;">
<small>12.6k star，推荐一款开源的邮件列表和营销平台</small>


可以看下界面效果：

![](/assets/image/240114-knadh-listmonk-1.png)

listmonk是一个**高性能**的、**开源**的邮件营销平台，它让你能够轻松地管理邮件订阅者、创建和发送**各种类型**的邮件、分析营销**效果**。

你可以查看邮件的**打开率**、**点击率**、**退订率**等指标，优化你的营销策略。它支持自托管，只需要一个Postgres数据库，就可以在任何地方运行。

无论你是个人还是企业，都可以使用listmonk来进行邮件营销。

listmonk的功能特点有：

- 管理多个单选和双选的邮件列表，每个订阅者可以有自定义的JSON属性。
- 使用SQL表达式查询和分割订阅者。
- 使用快速的批量导入器（每秒约10k条记录）或使用HTTP/JSON API或直接操作简单的表结构来集成外部的CRM和订阅者数据库。
- 使用预定义的模板发送任意的事务性消息给订阅者。可以发送电子邮件、短信、Whatsapp消息或通过Messenger接口发送任何类型的消息。
- 提供简单的分析和可视化功能。也可以使用外部的可视化程序轻松地连接到数据库。
- 使用Go模板语言创建强大的、动态的电子邮件模板。在主题行和内容中使用模板表达式、逻辑和100多个函数。
- 在一个所见即所得的编辑器中编写HTML电子邮件，或使用Markdown、原始的语法高亮的HTML或纯文本。
- 多线程、高吞吐量、多SMTP的电子邮件队列。通过滑动窗口速率限制来进行细粒度的控制。
- 占用极少的CPU和内存资源，可以在任何地方运行。唯一的依赖是一个Postgres（⩾ 12）数据库。
- 使用媒体管理器在服务器的文件系统、Amazon S3或任何S3兼容的（Minio）后端上传电子邮件活动的图片。
- 可扩展性。连接HTTP webhooks来发送短信、Whatsapp、FCM通知或任何类型的消息。
- 隐私。允许订阅者永久地将自己加入黑名单、导出所有的数据，并一键清除所有的数据。

要快速开始使用listmonk，你可以按照以下步骤：

- 下载二进制文件：Darwin Freebsd Linux Netbsd Openbsd Windows
- 运行`./listmonk --new-config`来生成`config.toml`文件。编辑该文件。
- 运行`./listmonk --install`来设置Postgres数据库（⩾ v9.4）或`--upgrade`来升级现有的数据库。
- 运行`./listmonk`并访问`http://localhost:9000`


![](/assets/image/240114-knadh-listmonk-2.png)


