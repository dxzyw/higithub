<img src="/assets/image/250610-VideoLingo.png"/> 

<small>13.2k star,nb！视频创作者必备神器</small>

**假如你是一名视频内容创作者，想要在全球范围内分享你的作品，你可能会遇到以下问题：字幕翻译质量参差不齐，传统字幕工具难以对齐和分割，甚至无法提供高质量的配音。那么，如何解决这些问题？——答案是 VideoLingo，一款专为视频字幕翻译、对齐和配音打造的 AI 工具，让你的视频拥有 Netflix 级的字幕和音效。**

### **VideoLingo 简介**
VideoLingo 是一款一站式视频翻译、本地化和配音工具，旨在提供高质量、流畅且自然的字幕翻译，同时消除生硬的机器翻译和多行字幕的问题。它还能生成符合 Netflix 标准的单行字幕，并添加高质量的 AI 配音，让不同语言的观众都能轻松理解你的内容。

### **主要功能特点**
1. **自动视频下载**：支持使用 yt-dlp 直接下载 YouTube 视频，无需繁琐操作。
2. **精准字幕识别**：基于 WhisperX 技术，提供单词级别的字幕识别，减少错漏。
3. **智能字幕分割**：AI 驱动的 NLP 技术优化字幕分割，使字幕更易读且符合影视标准。
4. **术语定制**：支持用户自定义术语库，并结合 AI 生成，使翻译更加连贯。
5. **三步高质量翻译**：采用“翻译 - 反思 - 适配”策略，确保字幕流畅度和准确性。
6. **高级配音支持**：结合 GPT-SoVITS、Azure、OpenAI 等技术，实现智能配音，使视频更加生动。
7. **一键启动与处理**：通过 Streamlit UI 提供友好的用户界面，只需一键即可开始字幕处理。
8. **多语言支持**：涵盖英语、俄语、法语、德语、西班牙语、日语、中文等多种语言，满足全球用户需求。
9. **详细日志与进度恢复**：记录处理过程，确保中断后可无缝继续任务。

### **如何快速开始**
VideoLingo 采用简洁的安装流程，让用户能够快速上手：
1. **安装必要工具**：
   - Windows 用户需要安装 CUDA Toolkit 12.6 和 CUDNN 9.3.0，并配置环境变量。
   - 所有系统均需安装 FFmpeg，用于视频处理。

2. **下载代码**：
   ```sh
   git clone https://github.com/Huanshere/VideoLingo.git
   cd VideoLingo
   ```

3. **安装依赖**（需 Python 3.10）：
   ```sh
   conda create -n videolingo python=3.10.0 -y
   conda activate videolingo
   python install.py
   ```

4. **启动应用**：
   ```sh
   streamlit run st.py
   ```

或者，你也可以使用 Docker 进行安装：
```sh
docker build -t videolingo .
docker run -d -p 8501:8501 --gpus all videolingo
```

### **结语**
在全球化时代，语言不应成为知识传播的障碍。VideoLingo 通过 AI 赋能，让字幕翻译和配音更智能、更精准，使视频创作者能够跨越语言界限，与世界分享自己的作品。如果你正在寻找高质量的视频字幕处理工具，不妨试试 VideoLingo，开启你的全球化内容创作之旅！
