/**
 * Classe para cuidar do preenchimento das listas de produtos
 */
export default class LoadProducts
{
	constructor (_address, _element)
	{
		this._address = _address; // url do arquivo json de produtos
		this._element = _element; // elemento DOM que receberá a lista processada

		// template padrão para os itens da listagem
		this._defaultWrapper = (product) => `<div>${product.toString()}</div>`;
	}


	/**
	 */
	_parse (list) {
		var html = '';
		for(let item of list)
			html += `<li>${this._wrapper(item)}</li>`;
		this._element.innerHTML = `<ul>${html}</ul>`;
		this.setupBoxes();
		this.setupSwipeEvents();
	}

	/**
	 * processa
	 */
	process (template)
	{
		this._wrapper = template || this._defaultWrapper; // se não for definido um template padrão para os itens da lista

		fetch(this._address) // busca a lista
		 .then(response => response.json()) // retornar como json
		 .then(result => this._parse(result))
		 .catch(err => console.error('Fail:', err));
	}

	/**
	 * prepara as caixas
	 */
	setupBoxes ()
	{
		var cwrap = this._element.querySelector('div[data-counter]') || this._element.appendChild(document.createElement('div'));
		var curr  = cwrap.getAttribute('data-counter') || 0;
		var wrap  = this._element.getElementsByTagName('ul');
		var cards = this._element.getElementsByTagName('li');
		var fullW = this._element.offsetWidth-1;
		var ncols = isMobile()? 2: 4;
		var cardW = (fullW/ncols-1);

		for (let card of cards) {
			let index = index +1 || 0;
			card.style.width = cardW+'px';
			card.style.left = ((cardW*index)-(cardW*curr))+'px';
		}

		var _count_html = '';
		cwrap.setAttribute('data-counter', curr);

		for (let i=0; i <= (cards.length-1); i++)
			_count_html += `<span class="${i==curr?'curr':''}" data-countnum="${i}"></span>`;
		cwrap.innerHTML = _count_html;

		//aplica eventos aos marcadores
		for (let cwrap_elm of cwrap.getElementsByTagName('span'))
			cwrap_elm.addEventListener('click', (event) => {
				this._element.querySelector('div[data-counter]')
				 .setAttribute('data-counter', event.target.dataset.countnum);
				this.setupBoxes();
			}, true);


		// prepara as setas e seus eventos
		var arrows = this._element.querySelector('div.arrows');
		if (!arrows){
			arrows = this._element.appendChild(document.createElement('div'));
			arrows.setAttribute('class', 'arrows');
			arrows.innerHTML = `<span></span> <span></span>`;
			arrows.querySelectorAll('span')[0].addEventListener('click', event => this._setSlider(-1), true);
			arrows.querySelectorAll('span')[1].addEventListener('click', event => this._setSlider(1), true);
		}
	}

	/**
	 */
	_setSlider (n = 0)
	{
		var _cwrap = this._element.querySelector('div[data-counter]');
		var curr = _cwrap.getAttribute('data-counter') || 0;

		curr = parseInt(curr) + parseInt(n);
		_cwrap.setAttribute('data-counter', curr);

		this.setupBoxes();
	}

	/**
	 * prepara os eventos
	 */
	setupSwipeEvents ()
	{
		let touchstartX = 0;
		let touchendX = 0;

		this._element.addEventListener('touchstart', (event) => {
			touchstartX = event.changedTouches[0].screenX;
		}, false);

		this._element.addEventListener('touchend', (event) => {
			touchendX = event.changedTouches[0].screenX;

			if (touchendX < touchstartX)
				this._setSlider(1);
			else if (touchendX > touchstartX)
				this._setSlider(-1);

			touchstartX = 0;
			touchendX = 0;
		}, false);
	}
}

