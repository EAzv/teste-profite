define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  /**
   * Classe para cuidar do preenchimento das listas de produtos
   */
  var LoadProducts =
  /*#__PURE__*/
  function () {
    function LoadProducts(_address, _element) {
      _classCallCheck(this, LoadProducts);

      this._address = _address; // url do arquivo json de produtos

      this._element = _element; // elemento DOM que receberá a lista processada
      // template padrão para os itens da listagem

      this._defaultWrapper = function (product) {
        return "<div>".concat(product.toString(), "</div>");
      };
    }
    /**
     */


    _createClass(LoadProducts, [{
      key: "_parse",
      value: function _parse(list) {
        var html = '';
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;
            html += this._wrapper(item);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        this._element.innerHTML = html;
      }
      /**
       * processa
       */

    }, {
      key: "process",
      value: function process(template) {
        var _this = this;

        this._wrapper = template || this._defaultWrapper; // se não for definido um template padrão para os itens da lista

        fetch(this._address) // busca a lista
        .then(function (response) {
          return response.json();
        }) // retornar como json
        .then(function (result) {
          return _this._parse(result);
        })["catch"](function (err) {
          return console.error('Fail:', err);
        });
      }
    }]);

    return LoadProducts;
  }();

  _exports["default"] = LoadProducts;
});