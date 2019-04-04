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
            html += "<li>".concat(this._wrapper(item), "</li>");
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

        this._element.innerHTML = "<ul>".concat(html, "</ul>");
        this.setupBoxes();
        this.setupSwipeEvents();
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
      /**
       * prepara as caixas
       */

    }, {
      key: "setupBoxes",
      value: function setupBoxes() {
        var _this2 = this;

        var cwrap = this._element.querySelector('div[data-counter]') || this._element.appendChild(document.createElement('div'));

        var curr = cwrap.getAttribute('data-counter') || 0;

        var wrap = this._element.getElementsByTagName('ul');

        var cards = this._element.getElementsByTagName('li');

        var fullW = this._element.offsetWidth - 1;
        var ncols = isMobile() ? 2 : 4;
        var cardW = fullW / ncols - 1;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = cards[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var card = _step2.value;
            var index = index + 1 || 0;
            card.style.width = cardW + 'px';
            card.style.left = cardW * index - cardW * curr + 'px';
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
              _iterator2["return"]();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        var _count_html = '';
        cwrap.setAttribute('data-counter', curr);

        for (var i = 0; i <= cards.length - 1; i++) {
          _count_html += "<span class=\"".concat(i == curr ? 'curr' : '', "\" data-countnum=\"").concat(i, "\"></span>");
        }

        cwrap.innerHTML = _count_html; //aplica eventos aos marcadores

        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = cwrap.getElementsByTagName('span')[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var cwrap_elm = _step3.value;
            cwrap_elm.addEventListener('click', function (event) {
              _this2._element.querySelector('div[data-counter]').setAttribute('data-counter', event.target.dataset.countnum);

              _this2.setupBoxes();
            }, true);
          } // prepara as setas e seus eventos

        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
              _iterator3["return"]();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        var arrows = this._element.querySelector('div.arrows');

        if (!arrows) {
          arrows = this._element.appendChild(document.createElement('div'));
          arrows.setAttribute('class', 'arrows');
          arrows.innerHTML = "<span></span> <span></span>";
          arrows.querySelectorAll('span')[0].addEventListener('click', function (event) {
            return _this2._setSlider(-1);
          }, true);
          arrows.querySelectorAll('span')[1].addEventListener('click', function (event) {
            return _this2._setSlider(1);
          }, true);
        }
      }
      /**
       */

    }, {
      key: "_setSlider",
      value: function _setSlider() {
        var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        var _cwrap = this._element.querySelector('div[data-counter]');

        var curr = _cwrap.getAttribute('data-counter') || 0;
        curr = parseInt(curr) + parseInt(n);

        _cwrap.setAttribute('data-counter', curr);

        this.setupBoxes();
      }
      /**
       * prepara os eventos
       */

    }, {
      key: "setupSwipeEvents",
      value: function setupSwipeEvents() {
        var _this3 = this;

        var touchstartX = 0;
        var touchendX = 0;

        this._element.addEventListener('touchstart', function (event) {
          touchstartX = event.changedTouches[0].screenX;
        }, false);

        this._element.addEventListener('touchend', function (event) {
          touchendX = event.changedTouches[0].screenX;
          if (touchendX < touchstartX) _this3._setSlider(1);else if (touchendX > touchstartX) _this3._setSlider(-1);
          touchstartX = 0;
          touchendX = 0;
        }, false);
      }
    }]);

    return LoadProducts;
  }();

  _exports["default"] = LoadProducts;
});