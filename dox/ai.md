# Overview 

Here are a number of different AI related projects and experiments. 
Some of the projects are still private repositories I'm working towards making public.
There's quite a back log to catch up on, so please be patient!

A lot of the verbiage is PHI3 spew. Though generated on the project documentation it is definitely state-of-the-art if you catch my drift.
I've tried to correct some of the more glarings, but this is only meant as an overview in any case. Please consult each project for more accurate documentation.

---

# Face Mesh Workflow with Depth Estimation using MediaPipe, Zoe, and Midas
<img src="pix/ss/face-mesh-workflow.png" class="right"/>

This workflow leverages [MediaPipe](https://ai.google.dev/edge/mediapipe/solutions/guide) to detect faces in images while integrating depth estimations from both [Zoe](https://github.com/isl-org/ZoeDepth) and [Midas](https://github.com/isl-org/MiDaS). The workflow is designed for ease of use with a simple interface, allowing users to upload an image and view the detected face along with its depth estimation in 3D.

## HuggingFace Demo

The live demo is available on [HuggingFace.co](https://huggingface.co/spaces/verkaDerkaDerk/face-mesh-workflow).

## Features of This Workflow

- **Face Detection**: MediaPipe is used to detect faces in an uploaded image, providing facial landmarks and pose information.
- **Depth Estimation Integration**: The workflow allows combining depth estimations from Zoe or Midas with the detected face's 3D model for a comprehensive visualization of both facial features and their spatial orientation.
- **Adjustable Spinning Direction**: Due to differences in Y axis orientations between this setup and Blender, you can spin the 3D view as needed (usually counterclockwise) by adjusting the display settings or modifying image preprocessing steps if necessary.

---

# Introducing Marvin-McMarvelous: The Robotic Jive-Bot

[Marvin-McMarvelous on Github](https://github.com/vgvm-lbl/marvin-mcmarvelous)

Meet Marvin McMarvelous, the innovative robotic jive-bot designed to seamlessly blend AI technology with a touch of humor. This state-of-the-art bot offers an exciting range of capabilities that will surely leave you impressed. Let's take a closer look at how Marvin McMarvelous brings these features to life:

<img src="pix/mcm.png" class="right"/>

**Features & Functionalities:**

1. **Wake Word Detection:** Marvin-McMarvelous is programmed to wake up and perform tasks upon recognizing the designated "wake word," which defaults to "marvin." However, you can customize your preferred wake word using --wake_words option in the command line.
2. **Text-to-Speech Transformation:** Once activated, Marvin McMarvelous converts text inputs into spoken audio using whisper-style voice synthesis for a more engaging user experience.
3. **LLM Interaction:** This bot can directly interact with large language models (LLMs) by sending requests and receiving responses that are read aloud via the text-to-speech feature, enabling smooth conversations with AI systems.
4. **Image Generation:** Marvin McMarvelous is equipped to send LLM prompts to a text-to-image bot, displaying compelling visuals based on your inputs and requests.
5. **Customizable Listening Options:** You can leverage the power of Hugging Face's audio course by incorporating their wake word detection techniques into Marvin McMarvelous for enhanced listening capabilities.

## Configuration & Setup

To get the most out of Marvin-McMarvelous, follow these steps:

1. **Installation & Environment Preparation:** Ensure you have the recommended setup using pyenv and Python version 3.10.10 or higher, along with essential dependencies like Tkinter. You can use the provided installation commands to set up your virtual environment and install the required packages.
2. **LLM Integration:** Ollama, a highly-rated LLM service, serves as Marvin McMarvelous' go-to for generating responses based on user inputs. Be sure to configure it by adjusting its host entry (``aid`` variable) and pointing the URL to ``http://aid:11434/api/generate``.
3. **TTS & TTI Bot Integration:** Marvin McMarvelous also features Piper for text-to-speech conversion, enabling it to convert inputs into whispered audio. Additionally, Automatic1111 is utilized as a stable diffusion web UI to generate images based on LLM prompts.
4. **Customization:** To fine-tune your Marvin McMarvelous experience, you can override system prompts with the ``--system`` flag or leverage additional customizations like --wake_words and dynamic prompting capabilities for a more personalized user journey.

## Embrace More Marvelousness!

As an AI-driven jive-bot, Marvin McMarvelous offers limitless possibilities in terms of engagement and interaction. Whether you're interested in image generation or simply want to experience the wonders of modern technology firsthand, this innovative creation is here to delight and amaze users with its seamless blend of artificial intelligence, natural language processing, and human-like conversational abilities.

So, get ready to join Marvin McMarvelous on an exciting journey into the world of advanced AI jive-bots!

https://github.com/vgvm-lbl/marvin-mcmarvelous/blob/main/

---

# Muscle LLM
<img src="pix/mm-00026-350228160.png" class="right"/>

Originally I was missing the character MuscleMan from binging the Regular show, so I wanted to try to recreate him using a local LLM. The results was [Muscle LLM](https://github.com/luckybit4755/muscleLLM/blob/main/). Though I was never able to full get the conversational history (RAG) working as I wanted it was still a pretty fun experiment. 

Join the thrilling world of LangChain and LlamaCpp as we embark on a journey to unlock the potentials of AI conversations with our small experiment. Our innovative project combines two distinct personalities, Muscle Man and AI Assistant, in order to explore the contextual capabilities and document-based features of LangChain.

If you're passionate about advancing conversational technologies or simply want to contribute ideas for enhancing our experiment, we warmly welcome your participation! Let us collectively push boundaries and discover new horizons through this collaborative endeavor.

In the spirit of exploration, we currently feature two personalities in Muscle Man and AI Assistant roles. Interested individuals can participate by submitting their ideas or suggestions for improvement using one of the following commands:

1. `./muscleLLM.py -m models/StableBeluga-13B-GGML/stablebeluga-13b.ggmlv3.q2_K.bin` 
   Using llama.cpp and installing dependencies from requirements.txt

2. `./muscleLLM.py -m [yada-yada] -p ai`
   Installing the necessary components using pip, followed by a change in CMake arguments to enable GPU support for LlamaCpp (optional)

3. `./muscleLLM.py -k http://localhost:5001/`
   Running Muscle Man with an external context store and Kolboldcpp integration

The experiment also provides the ability to run locally using a GGML model, as shown by the example below:

```bash
./muscleLLM.py -m starling-lm-7b-alpha.Q8_0.gguf -p starling --llama_cpp_max_tokens 2048 --http 13031
```

Here's a glimpse of the exciting ideas that could elevate our experiment to new heights:

1. Research Assistant: Create an AI persona who acts as a research assistant, helping participants explore various topics and providing knowledge-based assistance while maintaining contextual awareness using LangChain's capabilities.
2. Multi-Actor Stories: Develop an immersive multi-actor storytelling experience where Muscle Man, the AI Assistant, and other unique personas interact to create dynamic narratives with evolving plotlines. This would allow participants to contribute their creativity in shaping these interactive tales while exploring LangChain's features further.

---

# fLimfLaMs
<img src="./pix/ss/labotami-vr-date-night-a1111.png" class="right"/>

Though [fLimfLaMs on Github](https://github.com/luckybit4755/fLimfLaMs), it is currently going thru some cleanup and refactoring but should be available soon. It uses DiscordJS and is probably the AI tool that I personally get the most use of out. 

It provides a simple mechansims to translate formm text-to-image-to-text-speech or whatever else I want to do at the time. At this point it still feels pretty unique and I really want to get it out there so others can enjoy this what of playing with local AI and even integrate remote APIs for AI or traditional types of service such as search, geolocation, weather, and pretty everything the web has to offer up for mostly fee.

Are you ready to dive deep into the world of local artificial intelligence (AI) like never before? Introducing fLimfLaMs, your ultimate gateway to a vast array of innovative and interactive experiences. This cutting-edge tool, currently undergoing an essential cleanup and refactoring process on GitHub, harnesses the power of DiscordJS while incorporating various local and remote AI models.

Imagine seamlessly transforming text into captivating images or mesmerizing audio—fLimfLaMs makes it all possible with its unique mechanisms that support a wide range of functionalities, from converting text to image (and vice versa), generating speech and even integrating various traditional services such as search engines, geolocation tools, weather forecasts, and more.

Throughout this exciting journey, fLimfLaMs has evolved beyond its initial purpose of being a Discord bot for local LLM (Language Learning Models). The project now offers access to an extensive range of locally running AI models along with various remote APIs that broaden the horizons and capabilities.

Here's what you can expect from fLimfLaMs:

1. Automatic1111: Transform text into stunning images or vice versa, unlocking your imagination in an instant!
2. Ollama: Combine the magic of text-to-text and image-to-image capabilities for a truly unique experience!
3. Bark: Bring your thoughts to life with high-quality audio generated from any text input.
4. Piper: Experience speech that sounds as natural as human conversation, thanks to our state-of-the-art text-to-speech model.
5. Whisper: Convert spoken words into accurate transcriptions—no typing required!
6. Grok: Get your answers with ease using a versatile text-to-text tool that covers various subjects and queries.
7. Google: Search the web like never before, effortlessly accessing information in multiple languages.
8. Weather.gov: Discover weather updates based on your GPS location or enter specific addresses for personalized forecasts.
9. Wikipedia: Quench your thirst for knowledge with an easy-to-use search function that uncovers a wealth of information right at your fingertips!

All the AI models and APIs are easily accessible through Discord, offering you complete flexibility to create unique interactions among them. By configuring each bot via bots.json files, users can effortlessly tailor their experiences based on individual preferences and requirements.

With fLimfLaMs, you have the opportunity to embark on a remarkable journey through local AI and its limitless potential. Whether it's for personal or professional use, this revolutionary tool is designed to provide an unparalleled level of convenience and immersive experiences that are hard to resist!

Stay tuned as we continue our efforts in improving fLimfLaMs—soon you can start exploring the vast possibilities it has to offer. Join us on this adventure, where creativity meets innovation, and together, let's shape a future defined by local AI!

---
# Piper (fork)

https://github.com/luckybit4755/piper/tree/http-server-json-response

[Piper](https://github.com/luckybit4755/piper/tree/http-server-json-response) is an exceptional text-to-speech (TTS) model that has been meticulously optimized for performance on Raspberry Pi 4 devices, seamlessly integrating with your fLimfLaMs ecosystem. By expanding its capabilities to support JSON request and response formats based on the Content-Type header, we've enabled a more versatile interaction style, allowing users to specify voice characteristics directly within their requests.

In addition, we have refined the TTS engine by modifying the voice loading process, thereby facilitating dynamic selection of voices in real-time and enhancing user experience. This adjustment allows for greater flexibility as it accommodates various language accents or speech styles to suit different users' needs. 

Furthermore, we have taken strides towards more robust text processing by incorporating the Natural Language Toolkit (NLTK), a powerful Python library that empowers Piper with advanced natural language understanding and improved handling of extended passages of text. This integration ensures uninterrupted speech generation even for longer runs, significantly enhancing its reliability and efficiency in delivering richer auditory experiences without encountering performance limitations or crashes.




