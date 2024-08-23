# Overview

Here are some odds and ends relation to various topics such as 3d printing, modeling, GLSL, Quest 3, graphics and animation. 
Many of the repositories are still private but they will be public soon. There's really a lot more I want to add here as well.

# ShaderToy
<img src="pix/ss/shader-toy-lattice.png" class="right"/>

Here is a bit about my trip down the [GLSL rabbit hole](https://www.shadertoy.com/view/DtX3W4).

Diving deep into the world of visualizations, I discovered fascinating ways to create captivating color palettes for Mandelbrot plots by delving into Inigo Quilez's insightful article [on color palettes](https://iquilezles.org/articles/palettes/). This exploration unexpectedly led me down the mesmerizing path of GLSL and ShaderToy, unraveling a whole new dimension of creativity.

My passion for visual and auditory representations has driven me to explore diverse techniques using various parameters, allowing us to express complex mathematical concepts through stunning visuals, immersive animations, and evocative creations.

These captivating images showcase intricate arrangements of colored shapes to create unique visual effects. By manipulating parameters such as shininess and material properties, we can experiment with different appearances, from shimmering metallic surfaces (shiny) to subdued matte textures (matte).

Dive into the captivating world of inverse kinematics with our GLSL Shadertoy implementation inspired by Andreas Aristidou's FABRIK algorithm, unleashing endless possibilities for dynamic animation and movement. Discover a "quick" yet powerful approach to harnessing this fascinating technique that will elevate your digital creations to new heights of realism and interactivity. Let the magic unfold as you bring life and motion into your projects like never before!

# Shady Lady
Shady Lady is also on [GitHub](https://github.com/luckybit4755/shady-lady).

After doing a bit of fragment shaders on [ShaderToy][https://www.shadertoy.com/] I started to get quite a clutter of utility code and boilerplate. This lead me to create a project to organize and combine them which I named "Shady Lady"


1. Enabling the inclusion of GLSL code - This will facilitate more efficient development by eliminating redundant lines of code (copy-paste mess) and promoting clean, maintainable code.
2. Providing extensibility for interaction with JavaScript and GLSL - By fostering seamless integration between these two languages, developers can take full advantage of their capabilities while working within a single platform.
3. Creating an intuitive and straightforward model to handle WebGL boilerplate - This will streamline the setup process and enable novice programmers to quickly grasp the basics of graphics programming using GLSL ES 3.0.

Currently, the project is still in its early stages with a prototype available at [demo.html](https://luckybit4755.github.io/shady-lady/demo.html). This demonstration provides an initial glimpse of the potential capabilities that this revamped environment could offer to developers.

As I progress and build upon this project, providing comprehensive documentation will be essential for supporting fellow coders who wish to utilize it in their future projects. By sharing detailed information about its functionality and usage guidelines, I can ensure a smooth transition from the current state of my work to an advanced development environment that fulfills the goals outlined above.

In other news, while unrelated, here's a fun link featuring aircraft photography: [Aircraft Image](https://www.398th.org/Images/Images_Aircraft_B-17/Images/42-97385_3O-X_SHADY_LADY.jpg)


# I can Haz JS3
<img src="https://github.com/luckybit4755/i-can-haz-js3/raw/master/images/EIVufW0.png" class="right"/>
This is a software renderer I was working on in Javascript. You can find it on [GitHub](https://github.com/luckybit4755/i-can-haz-js3)

Unleash your creativity with i-can-haz-js3, a unique 3D rendering engine designed for software enthusiasts and hobbyist developers! This lightweight JavaScript project takes inspiration from the innovative six-dimensional Bresenham implementation by ProyectosRoboticos. With its focus on xyz + texture space dimensions, i-can-haz-js3 offers a distinctive approach to 3D rendering that will intrigue and challenge you as you bring your visions to life.

Although the code style may appear quirky at first glance, it's steeped in an older programming tradition - one that has been largely abandoned by modern developers. This project showcases a blend of classic techniques with contemporary JavaScript capabilities, making for an intriguing and somewhat unconventional experience as you navigate the source code to create your own 3D worlds.

Please note that i-can-haz-js3 is still in developmental stages, so some features may seem a bit "nuts" at first glance. However, this experimental nature only adds to its charm and potential for growth as you contribute or collaborate with the community of 3D coding enthusiasts!

Embrace your inner artist and dive into i-can-haz-js3's unique world of 3D rendering, where innovation meets unconventional design - it's sure to challenge you while providing an exciting opportunity for personal growth as a developer.


# Skeleton Limbo: A 2d Animation Studio
<img src="pix/ss/skeleton-limbo-example.png" class="right"/>
Skeleton Limbo is on [GitHub](https://github.com/luckybit4755/skeleton-limbo)

Welcome to "Skeleton Animation Studio," a state-of-the-art platform that brings your skeletal animations to life! Our vision is to create an immersive and versatile animation studio, with a strong focus on both 2D and potential future expansion into the realm of 3D.

In its current phase, our demo model provides users with essential tools for creating captivating skeletal animations. Using intuitive controls like arrow keys, letters, and mouse interactions, you can manipulate your models by adjusting keyframes, modifying opacity, pausing the animation, toggling length constraints or locking joints. The console logs your model's progress, making it an excellent tool for debugging or simply monitoring your work as it unfolds.

As we continue to improve our project, you can expect several upgrades in line with our initial plan:
1. A more robust background setup and additional features like locking, constraints toggling, and a demo interface inspired by the prototype's capabilities (poc).
2. The ability to import/export skeletons using JSON files for easy data management, alongside local storage functionality to ensure your work is accessible anytime, anywhere.
3. Decoupling the timeline from skeleton structures to create more flexibility and abstraction in our animation workflow.
4. Introduction of scenes with their individual timelines allowing a more organized project structure while maintaining ease-of-use for animators.
5. Organizing scene sequences into movies, enabling easy editing, sharing, or exporting as per user requirements.
6. Exporting our creations to GLSL (OpenGL Shading Language) for positional graphics and supporting background images.
7. Integrating video support with a focus on creating captivating visuals using scenes tied together by their respective frames, perfect for advanced rotoscoping techniques.
8. Future plans include extending our capabilities into 3D animation while maintaining the strong foundation of skeletal animations we have developed so far.

To bring your vision to life on "Skeleton Animation Studio," you will need a web server like Apache or http-server for running JavaScript modules, and access to Mocap systems such as those from CMU's Center for Automated Detection of Manipulated Media (http://mocap.cs.cmu.edu/) or Ohio State University Motion Analysis Lab's mocap system (https://accad.osu.edu/research/motion-lab/mocap-system-and-data).

By joining our project, you'll not only contribute to a cutting-edge animation studio but also have access to an


# Suro-imp: Surge Routine Implosion
<img src="pix/ss/suro-imp-text0.png" class="right"/>
Surge Routine Implosion is on [GitHub](https://github.com/luckybit4755/suro-imp)

Introducing Surge Routine Implosion: an innovative and versatile toolkit designed to revolutionize your creative process! Our cutting-edge wave function collapse algorithms are specifically crafted for a wide range of applications, including 2D and 3D representations across various dimensional rule sets.

Immerse yourself in the limitless possibilities by exploring our intuitive example code that seamlessly integrates with image tile sets. Our comprehensive tools enable you to create stunningly detailed tile sets directly from images – a game-changer for digital artists, designers and developers alike.

But Surge Routine Implosion doesn't stop there; we invite you to delve deeper into the abstract realm by experimenting with unique concepts like neighboring height difference to create mesmerizing 2D and 3D height maps. Whether for visual effects, game development or simply enhancing your creative output, our toolkit caters to all levels of expertise – from beginners eagerly exploring their craft to seasoned professionals seeking that extra edge in their projects.

Crafting this masterpiece with Node.js ensures cross-platform compatibility and the seamless integration into your existing workflows. The result? A user experience like no other, as you unlock endless potential for innovation and imagination!

Step out of the ordinary and join our community of creators who are already using Surge Routine Implosion daily to elevate their work to new heights – literally! Embrace this exceptional toolkit today and witness how it transforms your projects, making them standout works that will leave a lasting impression on everyone who experiences them.

Surge Routine Implosion also provides mechanism to infer rule from examples just using text:
```
const txt = `
x                      ┌───┐   x
x        ┌─┐           └───┘   x
x  ┌─┐   └─┘   ┌──┐     ┌───┐  x
x  │ │         │  │     └───┘  x
x  └─┘   ┌─┐   └──┘            x
x        │ └─┐    ┌───┐        x
x        └───┘    └───┘        x
x                              x`;
const rules = Ruler.fromTextMap(txt);
const smasher = new Smasher(rules);
while(true) {
	try {
		const map = smasher.createMap([10,60]);
		Smasher.printTiles(map, (t)=> t.hasValue() ? rules.tiles[t.value] : '\u001B[41m?\u001B[0m');
		break;
	} catch(e){} /* as is typical, generation can and does fail! */
}
```
