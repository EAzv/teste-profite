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

	// prepara os marcadores de slide
	var setupBoxNavCounter = function (num) {
		var _html = '';
		var _count_wrap = element.querySelector('div[data-boxnavcounter]') || element.appendChild(document.createElement('div'));

		if (!_count_wrap.getAttribute('data-boxnavcounter'))
			_count_wrap.setAttribute('data-boxnavcounter', 0);

		_count_wrap.setAttribute('class', 'markers');

		for (let i=0; i < num; i++)
			_html += ` <span class="${i==currentSlide?'curr':''}" data-countnum="${i}"></span> `;
		_count_wrap.innerHTML = _html;

		//aplica eventos aos marcadores
		for (let _c_elm of _count_wrap.getElementsByTagName('span'))
			_c_elm.addEventListener('click', (event) => {
				inWrap.setAttribute('data-counter', event.target.dataset.countnum);
				mainSetup();
			}, true);
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
		currentSlide = parseInt(currentSlide)-1;
		if (currentSlide <= -1)
			currentSlide = slides.length-1;
		inWrap.setAttribute('data-counter', currentSlide);
		mainSetup();
	};

	var _nextSlider = function () {
		currentSlide = parseInt(currentSlide)+1;
		if (currentSlide >= slides.length)
			currentSlide = 0;
		inWrap.setAttribute('data-counter', currentSlide);
		mainSetup();
	};

	// define as variáveis e os métodos recorrentes
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

		// adicionar  eventos as setas
		element.querySelectorAll('div.arrows span')[0].addEventListener('click', event => _prevSlider(), true);
		element.querySelectorAll('div.arrows span')[1].addEventListener('click', event => _nextSlider(), true);

		// caso a janela seja redimencionada
		window.addEventListener('resize', event => mainSetup());
	};



	mainSetup();
	setupEvents();
}
