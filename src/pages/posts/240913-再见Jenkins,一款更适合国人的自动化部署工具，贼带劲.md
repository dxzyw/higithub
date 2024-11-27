<img src="/assets/image/240913-再见Jenkins,一款更适合国人的自动化部署工具，贼带劲-1.png" style="max-width: 70%; height: auto;">
<small></small>

## 关于建木

“建木”是上古先民崇拜的一种圣树，传说建木是沟通天地人神的桥梁。伏羲、黄帝等众帝都是通过这一神圣的梯子上下往来于人间天庭。《淮南子·墬形训》亦曰：“建木在都广，众帝所自上下。日中无景，呼而无响，盖天地之中也。”

为此项目命名为“建木”，希望本项目也可以成为不同业务场景下系统间相互沟通的桥梁。

建木是一个面向DevOps领域的极易扩展的开源无代码(图形化)/低代码(GitOps)工具。可以帮助用户轻松编排各种DevOps流程并分发到不同平台执行。

## 在线体验

- 地址： https://www.gitlink.org.cn/jianmu/demo/devops

- 账号： jianmu

- 密码： jianmu.dev

点击登录，输入账号密码即可在线体验


![](/assets/image/240913-再见Jenkins,一款更适合国人的自动化部署工具，贼带劲-1.png)


### 体验说明

建木作为第三方工具与代码库GitLink集成，为GitLink提供DevOps引擎。 我们提前为大家准备了GitLink体验账号和一些流程示例，无须将建木安装部署在本地，登录账号即可快速体验流程编排。

## 如何部署
目前支持两种方式安装部署建木，大家根据需要任选其一即可

### 资源和系统要求
操作系统
Ubuntu 21.04 (推荐) 或 macOS Monterey

建议配置
CPU：2C
内存：8GB
磁盘：100GB
部署方式一：docker-compose部署
软件版本要求#
推荐使用Ubuntu 21.04系统安装，如CentOS 7可参考
Docker 19.30以上，官方安装手册
Docker-Compose 1.29.2以上，官方安装手册
部署方式#
下载docker-compose.yml
```
wget https://gitee.com/jianmu-dev/jianmu-deploy/raw/master/docker-compose.yml
```
启动
```
docker-compose up -d
```
访问http://localhost，默认用户名密码为admin/123456。

部署方式二：k8s部署#
软件版本要求#
Kubernetes 1.18以上, 官方安装手册
部署方式#
下载kubernetes.yaml
```
wget https://gitee.com/jianmu-dev/jianmu-deploy/raw/master/kubernetes.yaml
```
启动
```
kubectl apply -f kubernetes.yaml
```
访问node节点ip:30180，默认用户名密码为admin/123456，使用详见hello项目使用。

## 建木初体验
通过示例项目hello jianmu体验建木图形化流程编排，完成你的第一个建木流程。

### 操作步骤
1、打开建木图形化编排。

![](/assets/image/240913-再见Jenkins,一款更适合国人的自动化部署工具，贼带劲-2.png)



2、在左侧节点菜单中找到git clone和shell节点并拖拽到右侧画布上，鼠标移入到git clone拖动连接shell节点。

![](/assets/image/240913-再见Jenkins,一款更适合国人的自动化部署工具，贼带劲-3.png)



3、点击git clone节点，在右侧参数抽屉中找到git地址，粘贴克隆地址：https://gitee.com/jianmu-dev/jianmu.git。


![](/assets/image/240913-再见Jenkins,一款更适合国人的自动化部署工具，贼带劲-4.png)


4、点击shell节点，在右侧参数抽屉中选择docker镜像alpine:3.16.0。


![](/assets/image/240913-再见Jenkins,一款更适合国人的自动化部署工具，贼带劲-5.png)


5、新增环境变量。点击shell节点右侧参数抽屉中的添加环境变量+。输入变量名，点击变量值右侧参数按钮，可以选择对应的参数（只有和上游节点连接后才能选择参数）。


![](/assets/image/240913-再见Jenkins,一款更适合国人的自动化部署工具，贼带劲-6.png)


完整环境变量定义示例：

![](/assets/image/240913-再见Jenkins,一款更适合国人的自动化部署工具，贼带劲-7.png)



6、在shell节点右侧参数抽屉中的脚本中输入以下echo命令，执行后的日志中会输出这里定义的环境变量。 脚本示例：
```
echo Hello 建木
echo 目录: ${DIR}
echo 分支: ${BRANCH}
echo 标签: ${TAG}
echo id: ${COMMIT_ID}
```
![](/assets/image/240913-再见Jenkins,一款更适合国人的自动化部署工具，贼带劲-8.png)


7、编辑项目名，选择组名后保存并返回。



![](/assets/image/240913-再见Jenkins,一款更适合国人的自动化部署工具，贼带劲-9.png)

8、找到刚新建的hello jianmu，手动触发这个流程。


![](/assets/image/240913-再见Jenkins,一款更适合国人的自动化部署工具，贼带劲-10.png)


9、点击流程名称，进入流程详情页。


![](/assets/image/240913-再见Jenkins,一款更适合国人的自动化部署工具，贼带劲-11.png)


10、等待执行结束查看shell节点日志即可。


![](/assets/image/240913-再见Jenkins,一款更适合国人的自动化部署工具，贼带劲-12.png)


### 展示效果

![](/assets/image/240913-再见Jenkins,一款更适合国人的自动化部署工具，贼带劲-13.png)


## 总结

如果你熟悉了jenkins的操作，实际没有必要切换，在一些功能上建木有些欠缺的，但如果准备做自己的devops平台，或者目前并没有自己发布平台，那么建木确实可以作为参考，在一些功能配置上，更加适合国人使用，也更加简洁。
