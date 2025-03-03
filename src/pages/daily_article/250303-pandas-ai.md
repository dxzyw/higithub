<img src="/assets/image/250303-pandas-ai.png"/>

<small>17.2k star,很好用，值得一试的开源工具</small>


PandaAI 是一个 Python 平台，使用户能够以自然语言询问数据。这个项目旨在帮助非技术用户更自然地与数据交互，同时也为技术用户在处理数据时节省时间和精力。其核心功能是将数据分析变得对话化，让用户可以轻松与其数据库或数据湖（如 SQL、CSV、Parquet）互动。PandaAI 通过利用大语言模型（LLM）和检索增强生成（RAG）技术，实现了这一目标。

### 平台特点

- **对话式数据分析**：PandaAI 使得用户能够通过自然语言查询数据，并生成相应的答案和数据可视化。
- **多数据框支持**：用户可以传递多个数据框，并提出涉及多个数据框的问题。
- **数据可视化**：平台支持生成图表，用户可以用自然语言命令生成如直方图等图表。
- **Docker 沙箱**：PandaAI 可以在 Docker 沙箱中运行，提供了一个安全隔离的环境来执行代码，从而降低恶意攻击的风险。

### 开始使用

PandaAI 兼容 Jupyter 笔记本、Streamlit 应用等，可以轻松与这些平台集成使用。用户可以通过几行代码加载数据并在平台上进行推送，随后团队成员可以通过平台使用自然语言查询这些数据。

**安装方法**：
- 使用 pip 安装：`pip install "pandasai>=3.0.0b2"`
- 使用 poetry 安装：`poetry add "pandasai>=3.0.0b2"`

**示例代码**：

```python
import pandasai as pai

# 示例数据框
df = pai.DataFrame({
    "country": ["United States", "United Kingdom", "France", "Germany", "Italy", "Spain", "Canada", "Australia", "Japan", "China"],
    "revenue": [5000, 3200, 2900, 4100, 2300, 2100, 2500, 2600, 4500, 7000]
})

# 设置 API 密钥
pai.api_key.set("your-pai-api-key")

# 询问问题
df.chat('Which are the top 5 countries by sales?')
```

总之，PandaAI 通过将数据分析变得对话化，为用户提供了一个更加自然和高效的与数据互动的方式.

