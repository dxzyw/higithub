<img src="/assets/image/240628-pocketbase-1.png">
<small>35.5k star，开箱即用的一款go语言后端项目</small>

开源、go语言、后端、单个文件，当这写关键词组合在一起的时候，这就不是一个简单的项目了，但是它有确实做到了简单，将整个后端以单个文件提供服务。

如果你是go语言学习者，那么这个项目值得学习。

如果你司正在有做saas服务的需求，那么这个后端项目可以直接拿过来使用。

![pocketbase](/assets/image/240628-pocketbase.png)

## pocketbase简介
PocketBase是一个开源的Go后端框架，它以单个文件的形式提供了一个实时的后端服务。这个框架特别适合于快速开发小型到中型的Web应用和移动应用。它的设计哲学是简单性和易用性，使得开发者能够专注于他们的产品而不是后端的复杂性。

![demo](/assets/image/240628-pocketbase-1.png)

## pocketbase有哪些特点？
- **嵌入式数据库**：PocketBase使用SQLite作为其嵌入式数据库，支持实时订阅功能，这意味着客户端可以实时接收数据更新。
- **文件和用户管理**：它内置了文件和用户管理功能，允许开发者轻松地处理用户认证和授权。
- **管理仪表板**：提供了一个方便的管理仪表板用户界面，使得管理数据和用户变得简单直观。
- **REST-ish API**：PocketBase提供了一个简单的REST风格API，使得与前端的集成变得轻松。
- **扩展性**：通过JavaScript VM插件，开发者可以使用JavaScript来扩展PocketBase的功能。

## pocketbase如何快速开始

1. **下载和安装**：从GitHub的Releases页面下载适合您平台的预构建可执行文件。
   ![install](/assets/image/240628-pocketbase-2.png)
2. **运行服务**：解压下载的文件，并在解压目录中运行`./pocketbase serve`命令来启动服务。
3. **自定义应用**：您可以使用PocketBase作为一个Go库来构建您自己的定制应用。以下是一个最小示例：

```go
package main

import (
    "log"
    "net/http"
    "github.com/labstack/echo/v5"
    "github.com/pocketbase/pocketbase"
    "github.com/pocketbase/pocketbase/apis"
    "github.com/pocketbase/pocketbase/core"
)

func main() {
    app := pocketbase.New()
    app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
        // 添加新的"GET /hello"路由到应用路由器(echo)
        e.Router.AddRoute(echo.Route{
            Method: http.MethodGet,
            Path:   "/hello",
            Handler: func(c echo.Context) error {
                return c.String(200, "Hello world!")
            },
            Middlewares: []echo.MiddlewareFunc{
                apis.ActivityLogger(app),
            },
        })
        return nil
    })

    if err := app.Start(); err != nil {
        log.Fatal(err)
    }
}
```

4. **初始化依赖**：运行`go mod init myapp && go mod tidy`来初始化依赖。
5. **启动应用**：运行`go run main.go serve`来启动应用。
6. **构建可执行文件**：运行`CGO_ENABLED=0 go build`来构建一个静态链接的可执行文件，然后使用`./myapp serve`来启动创建的可执行文件。

## 总结
PocketBase是一个强大而灵活的后端框架，它通过简化后端开发流程，使得开发者能够快速地构建和部署应用。无论您是在寻找一个轻量级的后端解决方案，还是需要一个可扩展的平台来构建复杂的应用，PocketBase都能够满足您的需求。

>官网：https://pocketbase.io/
>
>开源地址：https://github.com/pocketbase/pocketbase

