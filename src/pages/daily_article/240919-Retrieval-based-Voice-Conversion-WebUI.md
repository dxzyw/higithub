<img src="/assets/image/240919-Retrieval-based-Voice-Conversion-WebUI.png">
<small>22.6k star,开箱即用的 AI 变声器</small>

![](/assets/image/240919-Retrieval-based-Voice-Conversion-WebUI.png)

**Retrieval-based Voice Conversion WebUI** 是一个基于 VITS（Variational Inference Text-to-Speech）的开源语音转换框架。该项目旨在提供一个易于使用的界面，使用户能够快速实现高质量的语音转换。通过利用先进的语音处理算法和机器学习模型，用户可以将一种语音转换为另一种语音，同时保持高保真度和自然度。

### 功能特点

1. **高效的语音转换**：利用 VITS 模型，能够实现高质量的语音转换，减少音调泄漏问题。
2. **实时变声**：支持实时语音转换，延迟低至 90ms（取决于硬件支持）。
3. **多种加速支持**：支持 Nvidia、AMD 和 Intel 显卡加速，提升处理速度。
4. **易于训练**：即使在较差的显卡上也能快速训练模型，推荐使用 10 分钟以上的低噪音语音数据。
5. **模型融合**：通过 ckpt 处理标签下的 ckpt 合并功能，可以改变音色。
6. **人声伴奏分离**：内置 UVR5 模型，能够快速分离人声和伴奏。
7. **高音提取算法**：采用 InterSpeech2023-RMVPE 算法，防止静音问题，效果显著优于 Crepe_full。
8. **易于使用的 WebUI**：提供直观的用户界面，简化操作流程。
9. **丰富的预训练模型**：使用 VCTK 开源数据集中的近 50 小时高质量音频进行预训练，未来还会加入更多高质量的授权歌曲数据集。

### 如何快速开始

#### 环境准备

1. **安装 Python 3.8 或更高版本**：
   ```bash
   sudo apt-get update
   sudo apt-get install python3.8
   ```

2. **安装 PyTorch 相关依赖**：
   ```bash
   pip install torch torchvision torchaudio
   ```

   对于不同的显卡架构，可能需要指定对应的 CUDA 版本。例如：
   ```bash
   pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu117
   ```

3. **安装其他依赖**：
   ```bash
   pip install -r requirements.txt
   ```

#### 下载和运行

1. **克隆项目仓库**：
   ```bash
   git clone https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI.git
   cd Retrieval-based-Voice-Conversion-WebUI
   ```

2. **下载预训练模型**：
   根据需要下载适合的预训练模型，并放置在指定目录中。例如：
   ```bash
   wget https://huggingface.co/lj1995/VoiceConversionWebUI/resolve/main/RVC1006Nvidia.7z
   ```

3. **运行 WebUI**：
   ```bash
   python app.py
   ```

#### 使用指南

1. **上传音频文件**：在 WebUI 界面中，选择需要转换的音频文件。
2. **选择预训练模型**：从下拉菜单中选择合适的预训练模型。
3. **调整参数**：根据需要调整转换参数，如音调、响度等。
4. **开始转换**：点击“开始转换”按钮，等待处理完成后下载转换后的音频文件。

### 总结

Retrieval-based Voice Conversion WebUI 是一个功能强大且易于使用的语音转换工具。通过其高效的语音处理算法和直观的用户界面，用户可以快速实现高质量的语音转换。无论是用于实时变声还是离线处理，该工具都能提供卓越的性能和灵活性。如果你对语音转换技术感兴趣，不妨试试这个开源项目，体验其强大的功能和便捷的操作。

