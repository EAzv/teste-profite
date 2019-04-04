define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = bannerSlider;

  /**
   * Classe para tratar do slider no banner principal
   */
  function bannerSlider(element) {
    var inWrap, slides, wrapHeight, wrapWidth;
    var currentSlide = 0; //

    var setupBoxSize = function setupBoxSize(slide, index) {
      slide.style['top'] = "".concat(0, "px");
      slide.style['left'] = "".concat(wrapWidth * index - wrapWidth * currentSlide, "px");
      slide.style['width'] = "".concat(wrapWidth, "px");
      slide.style['height'] = "".concat(wrapHeight, "px");
    }; //


    var setupBoxNavCounter = function setupBoxNavCounter(num) {
      var _html = '';

      var _counter = element.querySelector('div[data-boxnavcounter]') || element.appendChild(document.createElement('div'));

      _counter.setAttribute('data-boxnavcounter', true);

      for (var i = 0; i < num; i++) {
        _html += " <span class=\"".concat(i == currentSlide ? 'curr' : '', "\" ><i></i></span> ");
      }

      _counter.innerHTML = _html;
    }; // preenche o background calculando o tamanho proporcional da imagem redimencionada


    var setupBackground = function setupBackground(image) {
      var size = {
        'width': 0,
        'height': 0,
        '_width': image.naturalWidth,
        '_height': image.naturalHeight
      };

      while (size.width <= wrapWidth || size.height <= wrapHeight) {
        // NAI = AI / LI * NLI
        size.height = size._height / size._width * (size.width += 1);
      }

      image.style['top'] = "".concat(0, "px");
      image.style['left'] = "".concat(0, "px");
      image.style['width'] = "".concat(size.width, "px");
      image.style['height'] = "".concat(size.height, "px");
    };

    var _prevSlider = function _prevSlider() {
      currentSlide--;
      if (currentSlide < 0) currentSlide = slides.length - 1;
      inWrap.setAttribute('data-counter', currentSlide);
      mainSetup();
    };

    var _nextSlider = function _nextSlider() {
      currentSlide++;
      if (currentSlide > slides.length - 1) currentSlide = 0;
      inWrap.setAttribute('data-counter', currentSlide);
      mainSetup();
    }; //


    var mainSetup = function mainSetup() {
      inWrap = element.getElementsByTagName('ul')[0];
      slides = element.getElementsByTagName('li');
      wrapHeight = parseInt(element.offsetHeight);
      wrapWidth = parseInt(element.offsetWidth);
      currentSlide = inWrap.getAttribute('data-counter') || 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = slides[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var slide = _step.value;
          var index = index + 1 || 0;
          setupBoxSize(slide, index);
          setupBackground(slide.getElementsByTagName('img')[0]);
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

      setupBoxNavCounter(slides.length);
    }; //


    var setupEvents = function setupEvents() {
      var touchstartX = 0;
      var touchendX = 0;
      element.addEventListener('touchstart', function (event) {
        touchstartX = event.changedTouches[0].screenX;
      }, false);
      element.addEventListener('touchend', function (event) {
        touchendX = event.changedTouches[0].screenX;
        if (touchendX < touchstartX) _nextSlider();else if (touchendX > touchstartX) _prevSlider();
        touchstartX = 0;
        touchendX = 0;
      }, false);
    };

    mainSetup();
    setupEvents();
  }
});