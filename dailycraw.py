import asyncio
from crawl4ai import AsyncWebCrawler
from flask import Flask, jsonify

# 定义要抓取的 AI 资讯网站列表
AI_NEWS_SITES = [
    "https://techcrunch.com/tag/artificial-intelligence/",
    "https://venturebeat.com/category/ai/",
    "https://www.aitrends.com/",
    "https://www.technologyreview.com/topic/artificial-intelligence/",
    "https://towardsdatascience.com/",
    "https://theaigroup.com/",
    "https://openai.com/blog/",
    "https://ai.googleblog.com/",
    "https://blogs.nvidia.com/blog/category/ai/",
    "https://aiweekly.co/",
    "https://www.kdnuggets.com/",
    "https://www.datasciencecentral.com/",
    "https://thegradient.pub/",
    "https://www.alignmentforum.org/",
    "https://arxiv.org/archive/cs"
]

app = Flask(__name__)
news_data = []

async def fetch_news(url):
    async with AsyncWebCrawler(verbose=True) as crawler:
        result = await crawler.arun(url=url)

        if result.success:
            # 提取标题、简介和链接
            # 这里假设你已经知道如何从 result.cleaned_html 中提取这些信息
            # 你可能需要使用 BeautifulSoup 或其他解析库来解析 HTML
            # 下面是一个示例，具体的选择器需要根据实际网站结构调整
            title = "提取的标题"  # 替换为实际提取的标题
            summary = "提取的简介"  # 替换为实际提取的简介
            link = url  # 来源链接

            news_data.append({
                "title": title,
                "summary": summary,
                "link": link
            })
            print(f"抓取成功: {url}")
        else:
            print(f"抓取失败: {url}")

async def main():
    tasks = [fetch_news(url) for url in AI_NEWS_SITES]
    await asyncio.gather(*tasks)

@app.route('/api/news', methods=['GET'])
def get_news():
    return jsonify(news_data)

if __name__ == "__main__":
    # 启动爬虫并抓取数据
    asyncio.run(main())
    # 启动 Flask 服务器
    app.run(debug=True, host='0.0.0.0', port=5000)
