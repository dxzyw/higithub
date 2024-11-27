<img src="/assets/image/240320-cryptpad-2.png" style="max-width: 70%; height: auto;">
<small>5.1k star，推荐一款开源的，端到端加密的协作办公套件</small>


CryptPad是一个开源的协作办公套件，它提供端到端加密的协作工具。我们在本机通过docker-compose快速部署了一下，可以先看下效果：

![docker-compose](/assets/image/240320-cryptpad-1.png)

启动后访问3000端口，右下角可以切换语言，支持大部分语言：

![](/assets/image/240320-cryptpad-2.png)

你也可以去官网体验一些已经部署并开放的实例，部分会免费提供1G的免费空间。

也可以选择自己部署，方便可控。

![](/assets/image/240320-cryptpad-3.png)
这款软件的所有数据在发送到服务器和协作者之前都会在浏览器中加密。

即使服务器受到攻击，数据库中存储的也只是加密数据，对攻击者来说价值不大。

CryptPad的设计理念是尽可能减少对运营者暴露的数据量。

用户注册和账户访问基于用户名和密码派生出的加密密钥，因此服务器无需看到任何一个，并且您不需要担心它们是否被安全存储。

由于服务器上的代码仍然像加载任何其他网页一样从主机服务器加载，所以您仍然需要信任管理员保持服务器的安全并向您发送正确的代码。

CryptPad提供了各种协作工具，这些工具在浏览器中加密数据，然后再将其发送到服务器的协作者。

## 如何部署

前面已经有实例通过docker部署，docker部署方式及docker-compose文件可以在github中找到。

如Dockerfile、docker-compose.yml和docker-entrypoint.sh，都位于该存储库的根目录。

CryptPad还在Docker Hub上以AMD64和ARM64官方镜像的形式发布每个版本。

CryptPad的特点包括：

- **全套应用程序**：CryptPad提供了一个完整的办公套件，包括富文本、电子表格、代码/Markdown、看板、幻灯片、白板和表单等工具。
- **端到端加密**：所有数据都在用户的浏览器中加密，这意味着没有可读数据离开用户的设备。即使是服务管理员也无法看到文档或用户数据的内容。
- **私人协作**：CryptPad构建了团队驱动器、日历和共享等功能，以支持协作。它实时同步文档更改，同时保持加密。
- **完全开源**：CryptPad是免费软件。任何人都可以在个人或专业能力上托管平台。开发团队为即用型部署提供订阅和支持合同。



如下为github star数：

![](/assets/image/240320-cryptpad-4.png)

总的来说，CryptPad是一个强大的协作工具，它通过端到端加密保护用户数据的安全，同时提供了丰富的协作功能，使团队能够实时同步文档更改。

**开源地址：https://github.com/cryptpad/cryptpad**

**官网地址：https://cryptpad.org/instances/**

