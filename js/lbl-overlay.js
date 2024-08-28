const lbl_overlay_args = {
	r:    252,
	g:    131,
	b:    0,
	hi:   181, 
	lo:   22, 
	text: 'Loose Bit Labs'
};

const lbl_overlay = (args = {}) => {
	const overlay = document.getElementById('overlay');
	const context = overlay.getContext('2d');

	const sizing = () => {
		const w = overlay.width = window.innerWidth;
		const h = overlay.height = window.innerHeight;
		makeMask(w, h, context, args);//hi, lo, text);
	}

	window.addEventListener('resize', () => sizing());
	sizing();

	overlay.context = context;

	return overlay;
};

/* fill with black, draw text in white, white is more transparent than black */
const makeMask = (
		w, h, context, args = {}
) => {
	args = {...lbl_overlay_args, ...args};

	context.fillStyle = 'black';
	context.fillRect(0, 0, w, h);

	context.fillStyle = 'white'
	const font = Math.floor(w / 5.5)
	context.font = `bold ${font}px Sans-Serif`
	args.text.split(' ').forEach( (bit,i)=> {
		context.fillText(bit, font, font * (i+1) * .8778)
	})

	const imageData = context.getImageData(0, 0, w, h);
	for (let i = 0 ; i < w * h * 4 ; ) {
		const on = imageData.data[i] >33;
		imageData.data[i++] = on ? args.r : 0;
		imageData.data[i++] = on ? args.g : 0;
		imageData.data[i++] = on ? args.b : 0;
		imageData.data[i++] = on ? args.lo : args.hi;
	}
	context.putImageData(imageData, 0, 0)
};
