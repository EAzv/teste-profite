define(["./loadProducts.js"], function (_loadProducts) {
  "use strict";

  _loadProducts = _interopRequireDefault(_loadProducts);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  /*
   * teste-profite
   * arquivo principal
   */

  /*
   * Método inicial
   */
  (function () {
    var primeirosProdutos = new _loadProducts["default"]('../../produtos.json', document.querySelector('[data-primeirosProdutos]')); // executa o carregamento da lista e passa um template para os itens

    primeirosProdutos.process(function (produto) {
      return "\n\t\t\t<div>\n\t\t\t\t<img src=\"images/products/".concat(produto.image, "\">\n\t\t\t\t<h1>").concat(produto.title, "</h1>\n\t\t\t\t<h2>por R$ ").concat(produto.price, "</h2>\n\t\t\t\t<span>").concat(produto.note, "</span>\n\t\t\t</div>\n\t\t");
    });
  })();
});