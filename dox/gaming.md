# Overview 

Here are a number of different Gaming and characters desigin and animation work I've done.
Some of the projects are still private repositories I'm working towards making public.
There's quite a back log to catch up on, so please be patient!

# Scaletris
<img src="https://img.itch.zone/aW1nLzE0MTkyOTQ0LnBuZw==/347x500/wEDNFN.png" class="right"/>
Scaletris is a classic single player reaction game where you advance levels and earn points by scaling objects to match them with their pair. Loosely inspired by Tetris, Scaletris, instead of rotating and positioning the objects, you scale them up or down to match identical pairs. The levels progress in difficulty by requiring more matched pairs, faster-falling objects, and having an increased number of sizes available (from two up to five sizes in the Classic style).

Scaletris comes in two play styles: Classic and Quest!

Classic mode focuses on the core mechanics and each level is based on a different concept of "Scale", as outlined in the game challenge. Each level has a special bonus object which matches the level background. These bonus objects must be collected in a special area on the right hand side of the play field, underneath the score board. Collect enough of them and earn a bonus level. Collecting only one costs you a life and you get to replay the level. Don't collect any and the game is over!

Quest mode introduces red enemy blocks and green ally blocks. Matching allies will remove one enemy block from the play area. The bonus item is always a yellow block with a pouch full of jingly coins! Collect 3 of them and earn a bonus level, there is no penalty for not collecting them.

In both modes, successfully clearing a bonus level will earn you an extra life (up to 5) which lets you replay failed levels.

Beware! If you run out of lives, the game is over!

Scaletris is on [GitHub](https://loose-bit-labs.itch.io/scaletris) as well as on [itch.io](https://loose-bit-labs.itch.io/scaletris)

<ipain width="640" height="360" src="https://www.youtube.com/embed/kdW7b2cVJ74" title="Scaletris: Github Game Off 2023 Submission" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></ipain>

# Cyberpunk Assassin Girl Project: AI Character Generation Workflow

## Introduction

[Page](http://www.loose-bit-labs.com/cyberpunk-girl-character-gen-demo/)
[GitHub](https://github.com/loose-bit-labs/cyberpunk-girl-character-gen-demo/)
[Live Demo](https://www.loose-bit-labs.com/cyberpunk-girl-character-gen-demo/godot/CybergirlCharacterGenDemo.html)

Inspired by a project that came across Reddit that generates 3D characters from example images. Let's embark on an exciting journey of creating a cyberpunk assassin girl character using Stable Diffusion for model generation, followed by animation via Mixamo and integration into the Godot game engine. The final result showcases impressive potential even though it's currently at a slightly lower resolution.

<a href="https://github.com/zjp-shadow/CharacterGen/"><img width="60%" src="images/cpg00-cgen.png"/></a>

Please see [credits](CREDITS.md) for details.

<ipain width="1280" height="720" src="https://www.youtube.com/embed/W3163_qOPcE" title="Cyberpunk Assassin Girl Project: AI Character Generation Workflow" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Overview 

1. Initial character from stable diffusion [text-to-image](stable-diffusion/step1)
2. Refine the pose uing [image-to-image](stable-diffusion/step2)
3. Generate the 3D Model using [CharacterGen](https://github.com/zjp-shadow/CharacterGen/)
4. Cleanup in Blender and export as FBX
5. Animate with Mixamo
6. Combined the animations in Blender and export as GLB
7. Create [Godot Demo](godot/CybergirlCharacterGenDemo.html)

## Step-by-Step Process

### 1. Initial Image Generation with Stable Diffusion

Imagine an example image of a character, and create a stable diffusion prompt for 3D model generation.

```Stable Diffusion Prompt: "Full front view  view of a cyberpunk assassin girl in a ((t-pose)) on a (solid black  background), full body"```

<img width="60%" src="stable-diffusion/step1/00006-2072363650.png"/>

### 2. Refine Initial Image with Stable Diffusion

Iterate through rerolls to achieve a suitable starting pose for the generated character model using Stable Diffusion or an alternate technique if needed.

<img width="60%" src="stable-diffusion/step1/00019-2772004405.png"/>

### 3. Generate the 3D Model using CharacterGen

The character generation itself was super fast and it looks pretty good.
<img width="60%" src="images/cpg01-cgen.png"/>

### 4. Cleanup and FBX Export
<img width="33%" src="images/cpg-non-manifold.png" style="float:right"/>
- Decimate the high-poly count model in Blender for better performance during animation exporting while maintaining an appealing look.
- Refine the character focusing on removing unwanted elements such as the tail.

<img width="40%" src="images/cpg02-high-poly.png"/>
<img width="40%" src="images/cpg03-decimate.png"/>

Another quirk to the model is that it is in multiple sections! Happily this didn't impact the downstream activities


### 5. Animate the Character with Mixamo

<img width="60%" src="images/cpg04-mixamo.png"/>

### 6. Combine the Animations in Blender into NLA strips and re-export to GBL

<img width="60%" src="images/cpg05-nla.png"/>

### 7. Godot demo of the character.

<img width="60%" src="images/cpg06-godot.png"/>

## Results & Future Improvements

The final character generation and animation process resulted in an impressive cyberpunk assassin girl model, despite the initial lower resolution. The project holds great promise for future iterations with higher-resolution models and more refined animations.

The [CharacterGen](https://github.com/zjp-shadow/CharacterGen/) project has a lot more to it than explored here. It's also interesting to imagine more fully automated workflows.

Bonus [timeline-for-shotcut.py](bin/timeline-for-shotcut.py) can be used to export timeline for clips in playlists in Shotcut MLT files.

# Godot Pause Tutorial

<ipain width="640" height="360" src="https://www.youtube.com/embed/0NqQ0zllK3I" title="Godot 4: Simple Pause for 3d Game" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></ipain>

# Animation: Dancing Coffee Cup

<ipain width="315" height="560" src="https://www.youtube.com/embed/PftWBxlNBZQ" title="Dancing Coffee Cup Groove Time! #3danimation #blender #coffee #dancing" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></ipain>


# Animation: Funny Horse Gallop

<ipain width="315" height="560" src="https://www.youtube.com/embed/EbgexNfJ2O0" title="My Bouncy Ass!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></ipain>

# Animation: Happy Hippy

<ipain width="315" height="560" src="https://www.youtube.com/embed/o7KW_wnSeIw" title="Happy Hippy Hopping #animation #blender #3danimation #cartoon #art #digitalart" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></ipain>

# Animation: Gir Running

Bit of fan art of the character Gir from Invader Zim.

<ipain width="874" height="360" src="https://www.youtube.com/embed/EQaUg2VvIAQ?list=PL32_6I2y037N-18COJqOCPHi3Om2rydm-" title="Gir Naruto Run" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></ipain>

# Animation: Don Quixote Dino Rider

<ipain width="874" height="360" src="https://www.youtube.com/embed/_ia5vAHhVko?list=PL32_6I2y037N-18COJqOCPHi3Om2rydm-" title="Quixotic Dino Charge" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></ipain>

# Animation: Cat Guy on Treadmill

<ipain width="874" height="360" src="https://www.youtube.com/embed/S6Sew_dZgfQ?list=PL32_6I2y037N-18COJqOCPHi3Om2rydm-" title="Cat Stuck on the Tread Mill #animation #blender #3danimation #art #cartoon #digitalart" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></ipain>


