<img src="/assets/image/250318-openmanus.png"/>

<small>35k star，3天2w冲到star，manus的开源替代品</small>


manus最近很火，但是一码难求，但github上已经有大佬开源了类似项目，并且开源后3天star暴涨！

### 简介
OpenManus 是一个无需邀请码即可实现创意和优化大语言模型（LLM）智能体的开源项目。这个项目由一群来自 UIUC 和 MetaGPT 的研究人员在短时间内开发完成，并持续迭代，以提供最佳使用体验。

### 功能特点
- **高效的强化学习优化**：专注于基于强化学习（如 GRPO）的方法来优化 LLM 智能体。
- **多种安装方式**：提供两种安装方式，确保用户可以根据需求选择最适合自己的方案。
- **灵活的配置**：支持配置使用的 LLM API，用户可以根据需要进行自定义设置。
- **快速启动**：只需一行命令即可运行 OpenManus，快速体验智能体的强大功能。
- **开源项目**：欢迎任何友好的建议和有价值的贡献，项目会根据社区成员的反馈不断迭代优化。

### 如何开始
1. **安装**：
   - **方式一：使用 conda**
     - 创建新的 conda 环境：```conda create -n open_manus python=3.12```
     - 激活环境：```conda activate open_manus```
     - 克隆仓库：```git clone https://github.com/mannaandpoem/OpenManus.git```
     - 进入目录并安装依赖：```cd OpenManus && pip install -r requirements.txt```

   - **方式二：使用 uv（推荐）**
     - 安装 uv（一个快速的 Python 包管理器）：```curl -LsSf https://astral.sh/uv/install.sh | sh```
     - 克隆仓库：```git clone https://github.com/mannaandpoem/OpenManus.git```
     - 创建并激活虚拟环境：```uv venv && source .venv/bin/activate```
     - 安装依赖：```uv pip install -r requirements.txt```

2. **配置**：
   - 在 `config` 目录创建 `config.toml` 文件，并添加 LLM API 密钥和自定义设置。

3. **快速启动**：
   - 运行命令：```python main.py```，通过终端输入你的创意。
   - 如需体验开发中版本，可运行：```python run_flow.py```。

开源地址：github.com/mannaandpoem/OpenManus


