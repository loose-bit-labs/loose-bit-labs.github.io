const lbl = () => {
	const preview = document.querySelector('.preview');

	const show = (image) => {
		preview.style.display = 'block';
		preview.style.backgroundImage = `url("${image.src}")`
	};
	const hide = (image) => {
		preview.style.display = 'none';
	};

	preview.addEventListener('click', hide);

	for (const image of  document.querySelectorAll('img')) {
		if (/pix\/icon/.test(image.src)) continue;
		image.addEventListener('click', () => show(image));
	}


	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') hide();
	});
};
