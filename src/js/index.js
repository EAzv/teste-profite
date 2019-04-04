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
	// configura o slider no banner principal
	setupSlider(
		document.getElementById('banner_slider')
	);

	// prepara a lista de produtos em destaque
	let primeirosProdutos = new LoadProducts(
		'../../produtos.json',
		document.querySelector('[data-primeirosProdutos]')
	);

	// executa a exibição da lista passando um template para os itens
	primeirosProdutos.process((produto) => `
			<div>
				${produto.off?'<div class="off">Off</div>':''}
				<img src="images/products/${produto.image}">
				<h1>${produto.title}</h1>
				<del>de R$ ${produto.old_price}</del>
				<h2>por R$ ${produto.price}</h2>
				<span>${produto.note}</span>
				<button>Comprar</button>
			</div>
		`);
})();


//
window.isMobile = function ()
{
	if (window.document.body.offsetWidth > 812)
		return false;
	return true;
}

