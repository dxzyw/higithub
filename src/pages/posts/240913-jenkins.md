<img src="/assets/image/240913-jenkins-1.png" style="max-width: 70%; height: auto;">
<small>23.6k star，devops工具之jenkins，为什么建议用docker作为agent</small>


在云原生时代jenkins虽然用的比较少，或者说有了蛮多新的替代品，但依旧有很多公司在使用，今天主要介绍下如何使用docker作为jenkins的agent快速部署。

Jenkins是一个开源的自动化服务器，主要用于持续集成和持续交付（CI/CD）的场景。它使用Java编写，提供了大量的插件来支持构建、部署和自动化任何项目。

**Jenkins的特点包括**：
- **跨平台**：支持所有主流操作系统。
- **插件丰富**：拥有超过1000个插件，可以与多种开发、测试和部署工具集成。
- **易于安装和配置**：提供了用户友好的Web界面。
- **可扩展性**：可以通过插件扩展其功能。
- **分布式构建**：可以轻松地在多台机器上分配工作。

##  为什么使用docker作为jenkins的agent

在Jenkins中，**agent** 是指一个可以在远程或本地机器上运行的Jenkins节点。它是一个独立的进程，负责执行由Jenkins控制器分配的构建任务。

**Agent的主要作用包括：**
- **分布式构建**: 通过在不同的机器上运行多个agent，Jenkins可以并行执行多个构建任务，从而提高构建效率和速度。
- **环境隔离**: 不同的agent可以设置在不同的环境中，例如不同的操作系统或具有不同工具和配置的环境，这样可以确保构建在特定的环境下运行。
- **负载均衡**: Jenkins控制器可以根据每个agent的负载和可用资源，智能地分配构建任务，实现负载均衡。

**配置agent的方式**:
- **静态agent**: 通过Jenkins界面手动添加和配置agent。
- **动态agent**: 使用如Kubernetes或Docker等技术，可以动态创建和销毁agent，以适应构建任务的需求。

**使用docker作为agent的优势**

Jenkins 使用 Docker 作为 Agent 可以带来多方面的优势，这些优势不仅能够提升开发和部署的效率，还能增强系统的灵活性和可扩展性。

使用 Docker 作为 Jenkins Agent 可以带来环境一致性、快速启动和销毁、资源隔离和安全性、易于扩展和维护、灵活性和可移植性、减少配置和依赖管理、支持多种类型的项目以及优化资源利用等多方面的优势。


## jenkins快速部署及配置docker作为agent

![](/assets/image/240913-jenkins-1.png)


```
version: '3'

services:
  jenkins-compose:
    image: jenkins/jenkins
    privileged: true
    user: root
    ports:
     - "9004:8080"
     - "50000:50000"
    volumes:
     - /var/run/docker.sock:/var/run/docker.sock
     - /usr/bin/docker:/usr/bin/docker
     - /usr/lib64/libltdl.so.7:/usr/lib/x86_64-linux-gnu/libltdl.so.7
     - /data/jenkins/jenkins-compose:/var/jenkins_home
```


![](/assets/image/240913-jenkins-2.png)

docker logs 可以查看初始密码

![](/assets/image/240913-jenkins-3.png)

插件可以后面根据需要去自行安装，

![](/assets/image/240913-jenkins-4.png)

这里选择了默认推荐的插件
![](/assets/image/240913-jenkins-5.png)

然后是用户配置页面

![](/assets/image/240913-jenkins-6.png)

新建任务，建议大家直接使用流水线形式

![](/assets/image/240913-jenkins-7.png)

我们pipeline脚本直接使用远程仓库的内容


![](/assets/image/240913-jenkins-8.png)

```
pipeline {
  agent {
    docker { image 'node:16-alpine' }
  }
  stages {
    stage('Test') {
      steps {
        sh 'node --version'
      }
    }
  }
}
```

![](/assets/image/240913-jenkins-9.png)

在开始构建前，我们需要先装个插件，插件装好后，需要重启！！


![](/assets/image/240913-jenkins-10.png)

然后去构建，查看日志，可以看到已经在拉镜像了，这里只是一个简单的示例，实际使用过程中可能需要更多命令。


![](/assets/image/240913-jenkins-11.png)


