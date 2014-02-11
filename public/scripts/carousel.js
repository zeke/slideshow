;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.Carousel = require('../index.js');
new Carousel('#slides');



},{"../index.js":2}],2:[function(require,module,exports){
(function() {
  var Carousel, domready;

  domready = require('domready');

  module.exports = Carousel = (function() {
    function Carousel(selector) {
      var _this = this;
      this.selector = selector;
      if (!this.selector) {
        console.error("Please specify a CSS selector when creating a new Carousel,        e.g. new Carousel('#my-carousel')");
      }
      domready(function() {
        _this.slide_count = document.querySelectorAll("" + _this.selector + " > *").length;
        document.body.addEventListener('keydown', function(event) {
          var _ref, _ref1;
          if ((_ref = event.keyCode) === 39 || _ref === 40) {
            _this.next();
          }
          if ((_ref1 = event.keyCode) === 37 || _ref1 === 38) {
            return _this.prev();
          }
        });
        return _this.getOffset();
      });
    }

    Carousel.prototype.getOffset = function() {
      this.offset = parseInt(document.body.scrollTop / window.innerHeight);
      if ((document.body.scrollTop % window.innerHeight) > window.innerHeight / 2) {
        return this.offset++;
      }
    };

    Carousel.prototype.next = function() {
      this.getOffset();
      if (this.offset !== this.slide_count - 1) {
        this.offset++;
      }
      return this.animate();
    };

    Carousel.prototype.prev = function() {
      this.getOffset();
      if (this.offset !== 0) {
        this.offset--;
      }
      return this.animate();
    };

    Carousel.prototype.animate = function() {
      if (typeof jQuery !== "undefined") {
        return $("html, body").animate({
          scrollTop: window.innerHeight * this.offset
        });
      } else {
        return document.body.scrollTop = window.innerHeight * this.offset;
      }
    };

    return Carousel;

  })();

}).call(this);

},{"domready":3}],3:[function(require,module,exports){
/*!
  * domready (c) Dustin Diaz 2012 - License MIT
  */
!function (name, definition) {
  if (typeof module != 'undefined') module.exports = definition()
  else if (typeof define == 'function' && typeof define.amd == 'object') define(definition)
  else this[name] = definition()
}('domready', function (ready) {

  var fns = [], fn, f = false
    , doc = document
    , testEl = doc.documentElement
    , hack = testEl.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , addEventListener = 'addEventListener'
    , onreadystatechange = 'onreadystatechange'
    , readyState = 'readyState'
    , loadedRgx = hack ? /^loaded|^c/ : /^loaded|c/
    , loaded = loadedRgx.test(doc[readyState])

  function flush(f) {
    loaded = 1
    while (f = fns.shift()) f()
  }

  doc[addEventListener] && doc[addEventListener](domContentLoaded, fn = function () {
    doc.removeEventListener(domContentLoaded, fn, f)
    flush()
  }, f)


  hack && doc.attachEvent(onreadystatechange, fn = function () {
    if (/^c/.test(doc[readyState])) {
      doc.detachEvent(onreadystatechange, fn)
      flush()
    }
  })

  return (ready = hack ?
    function (fn) {
      self != top ?
        loaded ? fn() : fns.push(fn) :
        function () {
          try {
            testEl.doScroll('left')
          } catch (e) {
            return setTimeout(function() { ready(fn) }, 50)
          }
          fn()
        }()
    } :
    function (fn) {
      loaded ? fn() : fns.push(fn)
    })
})
},{}]},{},[1])
;