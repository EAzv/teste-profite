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

