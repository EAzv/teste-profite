/*
 * teste-profite
 * arquivo principal
 */

import LoadProducts from "./loadProducts.js";
import setupSlider from "./bannerSlider.js";

/*
 * Método inicial
 */
(function ()
{
	//
	setupSlider(
		document.getElementById('banner_slider')
	);

	//
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




