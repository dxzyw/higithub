<img src="/assets/image/240823-crawlee.png">
<small>14.4k star,提供一种浏览器自动化的新方式</small>

### Crawlee：强大的网页抓取和浏览器自动化工具

![](/assets/image/240823-crawlee.png)

#### 工具简介

Crawlee 是一个由 Apify 开发的网页抓取和浏览器自动化库，专为 Node.js 环境设计，支持 JavaScript 和 TypeScript。它旨在帮助开发者构建可靠的爬虫，能够从网站提取数据并存储为各种格式，如 HTML、PDF、JPG、PNG 等。Crawlee 兼容多种浏览器自动化工具，包括 Puppeteer、Playwright、Cheerio、JSDOM 和原生 HTTP 请求，支持无头和有头模式，并提供代理轮换功能¹。

#### 如何快速开始

##### 安装

要开始使用 Crawlee，首先需要确保系统中安装了 Node.js 16 或更高版本。然后，可以通过以下命令安装 Crawlee：

```bash
npm install crawlee
```

如果需要使用 Playwright 进行浏览器自动化，还需要安装 Playwright：

```bash
npm install playwright
```

##### 创建爬虫项目

使用 Crawlee CLI 是最快速的入门方式。以下是创建一个新爬虫项目的步骤：

1. 使用 Crawlee CLI 创建项目：

    ```bash
    npx crawlee create my-crawler
    ```

2. 进入项目目录并启动爬虫：

    ```bash
    cd my-crawler
    npm start
    ```

##### 手动创建爬虫

如果你更喜欢手动添加 Crawlee 到现有项目，可以参考以下示例代码：

```javascript
import { PlaywrightCrawler, Dataset } from 'crawlee';

const crawler = new PlaywrightCrawler({
    async requestHandler({ request, page, enqueueLinks, log }) {
        const title = await page.title();
        log.info(`Title of ${request.loadedUrl} is '${title}'`);
        await Dataset.pushData({ title, url: request.loadedUrl });
        await enqueueLinks();
    },
    headless: true, // 设置为 false 可以看到浏览器窗口
});

await crawler.run(['https://example.com']);
```

#### 功能特点

1. **多浏览器支持**：Crawlee 支持 Puppeteer、Playwright、Cheerio、JSDOM 和原生 HTTP 请求，提供灵活的浏览器自动化选项¹。

2. **无头和有头模式**：可以选择无头模式以提高性能，或有头模式以便调试和开发¹。

3. **代理轮换**：内置代理轮换功能，帮助爬虫规避反爬虫机制，提高抓取成功率¹。

4. **数据存储**：支持将抓取的数据存储为 JSON、CSV 等格式，方便后续处理和分析¹。

5. **高效抓取**：Crawlee 提供高效的抓取机制，能够快速抓取大量网页内容，同时保持人类行为特征，降低被检测到的风险¹。

6. **丰富的配置选项**：可以根据项目需求调整 Crawlee 的各项配置，满足不同场景的抓取需求¹。

7. **社区支持**：作为一个开源项目，Crawlee 拥有活跃的社区和丰富的文档资源，开发者可以方便地获取帮助和分享经验¹。

#### 结论

Crawlee 是一个功能强大且灵活的网页抓取和浏览器自动化工具，适用于各种数据抓取和自动化任务。无论是初学者还是经验丰富的开发者，都可以通过 Crawlee 快速构建高效、可靠的爬虫项目。如果你正在寻找一个强大的抓取工具，不妨试试 Crawlee。

¹: [Crawlee GitHub 页面](https://github.com/apify/crawlee)

