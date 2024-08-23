const MAPPED = {
	face_mesh_workflow             : 'Face On or Off?',
	introducing_marvin_mcmarvelous : 'Robotic Jive-Bot',
	muscle_llm                     : 'Strongest LLM',
	flimflams                      : 'AI Chat Chain',
	piper_fork                     : 'Forking Piper!',

	scaletris                      : 'Yes, but is it web scale?',
	godot_pause_tutorial           : 'Pause on Godot',
	animation_dancing_coffee       : 'Dancing Coffee',
	animation_funny_horse          : 'Clip, clop, Hack!',
	animation_happy_hippy          : 'Like... whoa....',
	animation_gir_running          : "Galaxy's Incredible Runner!",
	animation_don_quixote          : 'Tilting at T-Rex',
	animation_cat_guy              : 'Not just a rat in a cage!',

	shadertoy                      : 'Visually Fragmented',
	shady_lady                     : 'Built from Bits and Pieces!',
	i_can_haz                      : 'Softly rendered',
	skeleton_limbo_a               : 'Going out on a limb',
	suro_imp_surge                 : 'Everything is just one thing',
};

const lbl = () => {
	lbl_setup_preview();
	lbl_setup_sidebar();
	lbl_iframe_pain();
};

const lbl_setup_preview = () => {
	const preview = document.querySelector('.preview');

	const hidePreview = (image) => hideElement(preview);
	const showPreview = (image) => {
		showElement(preview);
		preview.style.backgroundImage = `url("${image.src}")`
	};

	preview.addEventListener('click', hidePreview);

	for (const image of document.querySelectorAll('img')) {
		if (/pix\/icon/.test(image.src)) continue;
		image.addEventListener('click', () => showPreview(image));
	}

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') hidePreview();
	});
};

const lbl_setup_sidebar = () => {
	const left = document.querySelector('.left');

	let hot = null, ness = null;

	for (const section of document.querySelectorAll('div.section')) {
		const name = section.id.split('-').slice(1,4).join('_').toLowerCase();
		if (!(name in MAPPED)) {
			if ('overview' !== name) {
				console.error(`no mapping for section ${section.id}, using ${name}`);
			}
			continue;
		}
		const mapping = MAPPED[name];
		const div = document.createElement('div');
		div.appendChild(document.createTextNode(mapping));
		left.appendChild(div);
		hideElement(section);

		div.addEventListener('click', () => {
			if (hot) hideElement(hot);
			if (ness) ness.classList.remove('hot');
			showElement(section);
			div.classList.add('hot');
			hot = section;
			ness = div;
		});
	}
};

const lbl_iframe_pain = () => {
	/* the iframe loading time for embedded youtube content is brutal */
	for (const ipain of document.querySelectorAll('ipain')) {
		const iframe = document.createElement('iframe');
		const attributes = ipain.attributes;
		for (let i = 0; i < attributes.length; i++) {
			const attribute = attributes[i];
			iframe.setAttribute(attribute.name, attribute.value);
		}
		ipain.parentNode.replaceChild(iframe, ipain);
	}
};

const hideElement = (element) => element.style.display = 'none';
const showElement = (element) => element.style.display = 'block';
