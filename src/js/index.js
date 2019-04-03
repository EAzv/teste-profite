/*
 * teste-profite
 */


/**
 * Classe para cuidar do preenchimento das listas de produtos
 */
class LoadProducts
{
	constructor (_address, _element)
	{
		this._address = _address; // url do arquivo json de produtos
		this._element = _element; // elemento que receberá a lista processada

		// template padrão para os itens da listagem
		this._defaultWrapper = (product) => `<div>${product.toString()}</div>`;
	}


	_parse (list) {
		var html = '';
		for(let item of list)
			html += this._wrapper(item);
		this._element.innerHTML = html;
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
}


/*
 * Método inicial
 */
(function () {

	let primeirosProdutos = new LoadProducts(
		'../../produtos.json',
		document.querySelector('[data-primeirosProdutos]')
	);

	// executa o carregamento da lista e passa um template para os itens
	primeirosProdutos.process((produto) => `
			<div>
				<img src="images/products/${produto.image}">
				<h1>${produto.title}</h1>
				<h2>por R$ ${produto.price}</h2>
				<span>${produto.note}</span>
			</div>
		`);
})();




