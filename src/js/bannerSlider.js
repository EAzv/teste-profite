/**
 * Classe para tratar do slider no banner principal
 */
export default function bannerSlider (element)
{
	var inWrap, slides, wrapHeight, wrapWidth;

	var currentSlide = 0;

	//
	var setupBoxSize = function (slide, index) {
		slide.style['top']    = `${0}px`;
		slide.style['left']   = `${(wrapWidth*index)-(wrapWidth*currentSlide)}px`;
		slide.style['width']  = `${wrapWidth}px`;
		slide.style['height'] = `${wrapHeight}px`;
	};

	//
	var setupBoxNavCounter = function (num) {
		var _html = '';
		var _counter = element.querySelector('div[data-boxnavcounter]') || element.appendChild(document.createElement('div'));
		_counter.setAttribute('data-boxnavcounter', true);

		for (let i=0; i < num; i++)
			_html += ` <span class="${i==currentSlide?'curr':''}" ><i></i></span> `;
		_counter.innerHTML = _html;
	};

	// preenche o background calculando o tamanho proporcional da imagem redimencionada
	var setupBackground = function (image) {
		var size = {'width': 0, 'height': 0, '_width': image.naturalWidth, '_height': image.naturalHeight};

		while (size.width <= wrapWidth || size.height <= wrapHeight) // NAI = AI / LI * NLI
			size.height = size._height / size._width * (size.width += 1);

		image.style['top']    = `${0}px`;
		image.style['left']   = `${0}px`;
		image.style['width']  = `${size.width}px`;
		image.style['height'] = `${size.height}px`;
	};

	var _prevSlider = function () {
		currentSlide--;
		if (currentSlide < 0)
			currentSlide = slides.length-1;
		inWrap.setAttribute('data-counter', currentSlide);
		mainSetup();
	};

	var _nextSlider = function () {
		currentSlide++;
		if (currentSlide > slides.length-1)
			currentSlide = 0;
		inWrap.setAttribute('data-counter', currentSlide);
		mainSetup();
	};

	//
	var mainSetup = function () {
		inWrap = element.getElementsByTagName('ul')[0];
		slides = element.getElementsByTagName('li');
		wrapHeight = parseInt(element.offsetHeight);
		wrapWidth = parseInt(element.offsetWidth);
		currentSlide = inWrap.getAttribute('data-counter') || 0;

		for (let slide of slides) {
			let index = index +1 || 0;
			setupBoxSize(slide, index);
			setupBackground(slide.getElementsByTagName('img')[0]);
		}
		setupBoxNavCounter(slides.length);
	}

	//
	var setupEvents = function () {
		let touchstartX = 0;
		let touchendX = 0;

		element.addEventListener('touchstart', (event) => {
			touchstartX = event.changedTouches[0].screenX;
		}, false);

		element.addEventListener('touchend', (event) => {
			touchendX = event.changedTouches[0].screenX;

			if (touchendX < touchstartX)
				_nextSlider();
			else if (touchendX > touchstartX)
				_prevSlider();

			touchstartX = 0;
			touchendX = 0;
		}, false);
	};



	mainSetup();
	setupEvents();
}
