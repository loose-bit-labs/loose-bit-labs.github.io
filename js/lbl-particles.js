const TEXT = 'Loose Bit Labs'
const AREAS = {
	AI:     { color:[1,0,0], terms: 'Stable Diffusion, Automatic1111, ComfyUI, Bark, Whisper, MusicGen, Piper, Diffusers, CharacterGen, ollama, llamacpp, koboldcpp, muscleManLLM, Face Mesh Workflow, NLTK, Marvin McMarvelous, fLimfLaMs' },
	GAMING: { color:[0,1,0], terms: 'Blender, Godot, Animation, Mixamo, CharacterGen, Rigging, Character Design, Unreal Engine, Game Jams, Scaletris' },
	ETC:    { color:[0,0,1], terms: 'Blender, 3D Printing, GLSL, discordJS, Quest 3, ShaderToy, Software Rendering, Network, Scripting, i-can-haz-js3, suro-imp, wave function collapse, skeleton-limbo' },
	PRO:    { color:[1,1,0], terms: '25 Years Experience, Java, Node.js, Python, GoLang, C++, PHP, Spring, SpringMVC, JPA, RabbitMQ, JMS, JDBC, JNI, jUnit, JAXB, Maven, Lucene, FreeMarker, Swing, Docker, Vagrant, VirtualBox, RabbitMQ, ActiveMQ, Kafka, Terraform, EC2, Hadoop, OpenTSDB, Cassandra, Linux, Ubuntu, Debian, Bash, awk, make, jenkins, Confluence, git, maven, MediaWiki, Nginx, HTML, CSS, GraphViz, JavaScript, NoVNC, ExaBGP, MySQL, PostgreSQL, Oracle, DB2, Sybase, SQL Server, Lucene, JackRabbit (JCR), Hadoop, OpenTSDB, LDAP, Cassandra, Glassfish, Tomcat, Rhapsody, Jetty, NLTK' },
}

const GRAVITY = .44 
const COUNT = Math.floor(11 * 999)
const FPS = 17.71
const MX = {x:-999, y:-999, v:0}
const EPSILON = .003300

const lbl = () => {
	const overlay = document.getElementById('overlay')
	const particles = document.getElementById('particles')
	const overlayContext = overlay.getContext('2d')
	const particlesContext = particles.getContext('2d')
	particlesContext.txt = document.getElementById('lbl')

	for (const v of Object.values(AREAS)) {
		v.terms = v.terms.split(',').map(s => s.trim())
		v.terms.sort((a,b)=>.5 - Math.random())
	}

	particlesContext.overlay = overlay
	particlesContext.currentColor = randomPastelColor()
	particlesContext.nextColor = randomPastelColor()
	particlesContext.colorProgress = 0.01
	particlesContext.percent = 1
	particlesContext.hotness = {}
	particlesContext.yup = false
	particlesContext.start = now()

	const sizing = () => {
		const w = window.innerWidth
		const h = window.innerHeight
		overlay.width = w
		overlay.height = h
		particles.width = w
		particles.height = h
		makeMask(w, h, overlayContext)
	}

	let v = +1
	document.body.addEventListener('mousemove', (event) => micelyDone(v, event))
	document.body.addEventListener('blur', (event) => MX.x = MX.y = MX.v = -181)
	document.body.addEventListener('mousedown', () => {
		MX.v = v = -2.2
		particlesContext.yup = true
		couldBeGameOver(particlesContext)
	})
	document.body.addEventListener('mouseup', () => MX.v = v = +1.1)

	window.addEventListener('resize', () => sizing())
	sizing()

	draw(particlesContext)
};

const makeMask = (w, h, context) => {
	context.fillStyle = 'black'
	context.fillRect(0,0,w,h)

	context.fillStyle = 'white'
	const font = Math.floor(w / 5.5)
	context.font = `bold ${font}px Sans-Serif`
	TEXT.split(' ').forEach( (bit,i)=> {
		context.fillText(bit, font, font * (i+1) * .8778)
	})

	const imageData = context.getImageData(0, 0, w, h)
	for (let i = 0 ; i < w * h * 4 ; ) {
		const on = imageData.data[i]>33 /* white becomes transparent */
		const v = on ? 22 : 181
		imageData.data[i++] = on ? 252 : 0
		imageData.data[i++] = on ? 131 : 0
		imageData.data[i++] = on ? 0: 0
		imageData.data[i++] = v
	}
	context.putImageData(imageData, 0, 0)
}

const draw = (context) => {
	const w = window.innerWidth
	const h = window.innerHeight

	context.fillStyle = toRGBA([11,11,33])
	context.fillRect(0,0,w,h)

	context.percent *= ( 3 + context.percent ) * .25
	context.now = now()

	if (!context.yup && context.now - context.start > 3.3) {
		context.yup = true
		console.log('yowsa!')
		context.percent = .9
	}

	drawAreas(context)

	const font = Math.floor(w / 88.88)
	context.font = `bold ${font}px Sans-Serif`

	context.colorProgress *= 1.0501
	if (context.colorProgress>1) {
		context.currentColor = randomPastelColor()
		context.nextColor = randomPastelColor()
		context.colorProgress = 0.01
	}
	const color = context.currentColor.map((v,i) => Math.floor(
		v + context.colorProgress * (context.nextColor[i] - v )
	))
	const rgb = toRGBA(color)
	context.txt.style.color = rgb

	if (false && MX.x>0 && MX.x <w ) {
		context.strokeStyle = rgb
		context.lineWidth = .55
		line(context, MX.x, 0, MX.x, h)
		line(context, 0, MX.y, w, MX.y)
		circle(context, MX.x, Mx.y, w * .0110)
	}

	const bits = getBits(context, w, h)
	const threshold = bits.length * context.percent
	let index = 0
	for (const bit of bits) {
		if (++index > threshold) continue
		bit.update(GRAVITY, rgb)
		bit.draw()
	}

	const delay = 1001 / FPS
	setTimeout(() => requestAnimationFrame( () => draw(context) ), delay)
}

const drawAreas = (context) => {
	const alpha = 1 - context.percent
	if (alpha < EPSILON) {
		overlay.style.opacity = 1
		return
	}
	overlay.style.opacity = .11 + context.percent * .88

	const ratios = [6,5]
	const size = [window.innerWidth, window.innerHeight]
	const lil = size.map((v,i) => v / ( 3 + 2 * ratios[i]))
	const big = lil.map( (v,i) => v * ratios[i])
	
	const offsets = [
		[1 * lil[0] + 0 * big[0], 2 * lil[0] + 1 * big[0]], /* x,y */
		[1 * lil[1] + 0 * big[1], 2 * lil[1] + 1 * big[1]], /* x,y */
	]
	
	const positions = [[0,0], [1,0], [0,1], [1,1]]
		.map(o => [offsets[0][o[0]], offsets[1][o[1]]])

	Object.keys(AREAS).forEach((area,index) => {
		drawArea(context, alpha, area, positions[index++], big)
	})
}

// frq
const drawArea = (context, alpha, area, position, size) => {
	const color = AREAS[area].color

	const hot = gotMouse(position, size)
	context.hotness[area] = hot
	alpha *= hot ? 1 : .5
	context.fillStyle = toRGBA(color.map(v=>191*v), alpha)
	context.fillRect(position[0], position[1], size[0], size[1])

	const font = Math.floor(size[0] / 5.5)
	context.font = `bold ${font}px Sans-Serif`

	context.fillStyle = toRGBA(color.map(v=>212*v), alpha)

	const wz = [window.innerWidth, window.innerHeight]
	const side = wz.map((w,i)=> position[i] < w * .5)
	const textOffset = [
		side[0] ? 18.81 : size[0] - font * area.length * .77, 
		size[1] * (side[1] ? .11 : .94) + (side[1] ? font * .44 : 0)
	]

	const textPosition = textOffset.map((v,i) => position[i] + textOffset[i])
	context.fillText(area, textPosition[0], textPosition[1])

	/* let's get smol! */

	context.fillStyle = toRGBA(color.map(v=>255-212*v), alpha)
	context.fillStyle = toRGBA(color.map(v=>202-77*v), alpha)

	const smol = font * .252
	context.font = `bold ${smol}px Sans-Serif`

	const lul = size.map(v=>v * .44)
	const speed = hot ? .66 : .88
	const xo = side[0] ? 0 : size[0] * .1
	const yo = side[1] ? .626 : .48


	const inow = Math.floor(context.now * .5)
	const max = 7
	const terms = AREAS[area].terms
	for (let r = .44, i = 0 ; i < max ; i++, r *= .8) {
		const j = (i + inow) % terms.length;
		const term = terms[j]

		const f = (j % max) / max * 6.28
		const a = f + context.now * speed + j
		const ff = term.length * smol * .35
		const xf = Math.max(.5, 77 / ff) * 0 + .66

		const x = Math.cos(a) * size[0] * r * xf   +  position[0] + size[0] * .595 - ff - xo
		const y = Math.sin(a) * size[1] * r * .8   +  position[1] + size[1] * yo
		context.fillText(term, x, y)
	}
		
	return
/*
	let r = .44
	terms.forEach((term,i) => {
		r = Math.max(.1, r * .98)
		const f = i / terms.length * 6.28
		const a = f + context.now * speed
		const ff = term.length * smol * .35
		const xf = Math.max(.5, 77 / ff) * 0 + .66

		const x = Math.cos(a) * size[0] * r * xf   +  position[0] + size[0] * .595 - ff
		const y = Math.sin(a) * size[1] * r * .8   +  position[1] + size[1] * yo
		context.fillText(term, x, y)
	})
*/
}
		
const line = (context, x1, y1, x2, y2) => {
	context.beginPath()
	context.moveTo(x1, y1)
	.context.lineTo(x2, y2)
	context.closePath()
	context.stroke()
}

const circle = (context, x, y, r) => {
	context.beginPath();
	context.arc(x, y, r, 0, 2 * Math.PI );
	context.closePath()
	context.stroke();
}

const getBits = (context, w, h) => {
	if (!('lbl' in context)) context.lbl = makeBits(context, w, h);
	return context.lbl
}

const makeBits = (context, w, h) => {
	return new Array(COUNT).fill(33).map((_,i)=>makeBit(context, w, h, i))
}

const makeBit = (context, w, h, i) => {
	const bit = {}
	const m = .2992 * w;
	bit.reset = (first = true, color = 'white') => {
		bit.x = m + r() * w * .6886 - r() * w * .33
		bit.y = first ? r() * h : r() * h * -.33
		bit.color = color
		bit.dx = .11 * g()
		bit.dy = bit.y / 101
		bit.txt = TEXT[i%TEXT.length]
		return bit
	}
	bit.update = (gravity, color) => {
		bit.dy += gravity;
		bit.dx += .020 * g()

		const dmx = (bit.x-MX.x)
		const dmy = (bit.y-MX.y)
		const d = Math.max(1, dmx**2 + dmy**2)
		bit.dx += dmx / d * MX.v
		bit.dy += dmy / d * MX.v

		bit.x += bit.dx;
		bit.y += bit.dy;
		if (bit.y > h || (bit.x < 0 && bit.dx < 0) || (bit.x > w && bit.dx > 0)) {
			bit.reset(false, color)
		}
	}
	bit.draw = () => {
		context.fillStyle = bit.color
		context.fillText(bit.txt, bit.x, bit.y)
	}
	return bit.reset()
}

const randomPastelColor = (arrrrr = true ) => {
	const c = new Array(3).fill(128)
	for (let i = 0 ; i < 4 ; i++ ) {
		c[Math.floor(2.92*r())] += 64
	}
	return arrrrr ? c : "rgb(" + c.join(',') + ")";
}

const micelyDone = (v, event) => {
	MX.x = event.clientX; 
	MX.y = event.clientY; 
	MX.v = v * window.innerWidth * .0550
}

const couldBeGameOver = (context) => {
	for (const [k,v] of Object.entries(context.hotness)) {
		if (v) {
			const next = k.toLowerCase() + '.html'
			console.log(k, 'is so hot right now!')
			return document.location = next
		}
	}
	context.percent = context.percent < EPSILON ? 1 : .9
	return false
}

const gotMouse = (position, size) => {
	return true
		&& MX.x > position[0]
		&& MX.y > position[1]
		&& MX.x < position[0] + size[0]
		&& MX.y < position[1] + size[1]
}

const r = () => Math.random()
const g = () => Math.random() * 2 - 1
const now = () => new Date().getTime() / 1000.0
const toRGBA = (color, alpha=1) => ['rgba(', color.join(','), ',', alpha, ')'].join('')
