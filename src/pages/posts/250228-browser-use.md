<img src="/assets/image/250228-browser-use.png"/>

<small>32.7k star, 让AI接管你的浏览器！5秒完成1小时工作</small>

你是否曾在浏览器自动化中遇到过这样的问题：复杂的网页、频繁的API变动让你头痛不已？或者，你的AI项目总是卡在浏览器控制上，进展缓慢？又或者，你只是想让你的AI代理更加智能、高效？无论是哪种情况，我们都有一个完美的解决方案—Browser Use。

**项目简介：**
Browser Use 是一个强大而便捷的工具，它能让AI代理轻松控制浏览器，打破传统方法的种种限制。无论是获取网页信息、自动化浏览器操作，还是与复杂的网页进行交互，Browser Use 都能胜任。

**特点：**
1. **易于使用**：只需几行代码，你的AI代理就能在浏览器中如鱼得水。
2. **强大的任务执行力**：可以自动执行各种复杂任务，例如添加购物车、提交表单、生成文档等。
3. **快速集成**：支持多种模型和API，适应不同项目需求。
4. **互动式测试**：提供UI界面和实例代码，方便快速验证和测试。

**如何快速开始：**
1. 安装必要的依赖：
   ```bash
   pip install browser-use
   playwright install
   ```

2. 配置你的AI代理：
   ```python
   from langchain_openai import ChatOpenAI
   from browser_use import Agent
   import asyncio
   from dotenv import load_dotenv

   load_dotenv()

   async def main():
       agent = Agent(
           task="在Reddit搜索‘browser-use’，点击第一个帖子并返回第一个评论。",
           llm=ChatOpenAI(model="gpt-4o"),
       )
       result = await agent.run()
       print(result)

   asyncio.run(main())
   ```

3. 添加API密钥：
   在你的.env文件中添加你要使用的API密钥，例如：
   ```
   OPENAI_API_KEY=你的API密钥
   ```

通过使用 Browser Use，你可以大幅度简化和加速浏览器自动化过程，让你的AI项目更加高效和强大。赶快试试吧！
