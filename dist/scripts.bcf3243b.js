// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"scripts/variables.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sliderLine = exports.searchInput = exports.searchBtn = exports.searchBox = exports.productsBox = exports.mainTitle = exports.logo = exports.imagesSlider = exports.header = exports.closeIcon = exports.buttonArrow = exports.body = exports.basketTotal = exports.basketList = exports.basketIconPlus = exports.basketIconCheck = exports.basketDelete = exports.basketBtn = exports.basket = void 0;
var body = document.querySelector("body");
exports.body = body;
var basket = document.querySelector(".basket");
exports.basket = basket;
var basketList = document.querySelector(".basket__list");
exports.basketList = basketList;
var basketTotal = document.querySelector(".basket__total");
exports.basketTotal = basketTotal;
var basketDelete = document.querySelector(".basket__delete");
exports.basketDelete = basketDelete;
var header = document.querySelector(".header");
exports.header = header;
var searchBtn = document.querySelector(".header__search-sm-btn");
exports.searchBtn = searchBtn;
var searchBox = document.querySelector(".header__search-box");
exports.searchBox = searchBox;
var searchInput = document.querySelector(".header__search-text");
exports.searchInput = searchInput;
var basketBtn = document.querySelector(".header__button");
exports.basketBtn = basketBtn;
var logo = document.querySelector(".logo");
exports.logo = logo;
var productsBox = document.querySelector(".products");
exports.productsBox = productsBox;
var mainTitle = document.querySelector(".title");
exports.mainTitle = mainTitle;
var buttonArrow = document.querySelector(".button-scroll");
exports.buttonArrow = buttonArrow;
var imagesSlider = document.querySelectorAll(".flex-wrapper, .slider, .slider__img");
exports.imagesSlider = imagesSlider;
var sliderLine = document.querySelector(".slider");
exports.sliderLine = sliderLine;
var basketIconPlus = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" fill=\"currentColor\" class=\"bi bi-cart-plus\" viewBox=\"0 0 16 16\">\n<path d=\"M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z\"/>\n<path d=\"M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z\"/></svg>";
exports.basketIconPlus = basketIconPlus;
var basketIconCheck = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" fill=\"currentColor\" class=\"bi bi-cart-check\" viewBox=\"0 0 16 16\">\n<path d=\"M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z\"/>\n<path d=\"M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z\"/>\n</svg>";
exports.basketIconCheck = basketIconCheck;
var closeIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" fill=\"currentColor\" class=\"bi bi-x-lg\" viewBox=\"0 0 16 16\">\n<path fill-rule=\"evenodd\" d=\"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z\"/>\n<path fill-rule=\"evenodd\" d=\"M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z\"/></svg>";
exports.closeIcon = closeIcon;
},{}],"scripts/add_product_card.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProducts = exports.addProductCard = void 0;

var _variables = require("./variables.js");

var getProducts = function getProducts() {
  return new Promise(function (resolve, reject) {
    fetch("https://625edd553b039517f1fdb9e1.mockapi.io/products").then(function (response) {
      return response.json();
    }).then(function (products) {
      return resolve(products);
    });
  });
};

exports.getProducts = getProducts;

var addProductCard = function addProductCard(products) {
  products.forEach(function (item) {
    var productId = item.id;
    var productName = item.name;
    var productOldPrice = item.oldPrice;
    var productNewPrice = item.newPrice;
    var productSale = item.sale;
    var productImage = item.imgSrc;
    var templete = "<div class=\"card\" data-id=\"".concat(productId, "\">\n        \n                            <div class=\"card__content\" id=\"cardContent\">\n                                <img src=\"").concat(productImage, "\" alt=\"").concat(productName, "\" class=\"card__photo\">\n                                <a href=\"#popup\" class=\"card__fast-view\" >\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440</a>\n                                <div class=\"card__bottom\">\n                                    <p class=\"card__sale-value\">").concat(productSale, "%</p>\n                                    <button class=\"card__add-in-basket-btn\">").concat(_variables.basketIconPlus, "</button>\n                                </div>\n                            </div>\n\n                            <div class=\"card__prices\">\n                                <p class=\"card__new-price\">").concat(productNewPrice, "\u0440</p>\n                                <p class=\"card__old-price\">").concat(productOldPrice, "\u0440</p>\n                            </div>\n                            <h3 class=\"card__title\">").concat(productName, "</h3>\n\n                            <div id=\"popup\" class=\"popup\">\n                                <div class=\"popup-body\">\n                                    <img src=\"").concat(productImage, "\" alt=\"").concat(productName, "\" class=\"popup-photo\">\n                                    <a href=\"#\" class=\"popup-close\">").concat(_variables.closeIcon, "</a>\n                                </div>\n                            </div>\n                        </div>");

    _variables.productsBox.insertAdjacentHTML("beforeend", templete);
  });
  return products;
};

exports.addProductCard = addProductCard;
},{"./variables.js":"scripts/variables.js"}],"scripts/basket.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showProductCount = exports.initListeners = exports.initBasket = exports.createProduct = exports.addProductToBasket = void 0;

var _variables = require("./variables.js");

var products = [];
var sum = 0;

var showProductCount = function showProductCount() {
  var products = JSON.parse(localStorage.getItem("products"));
  var productCount = document.querySelector(".product__count");

  if (products.length) {
    productCount.innerText = "".concat(products.length);
    productCount.classList.remove("hide");
  } else {
    productCount.classList.add("hide");
  }
};

exports.showProductCount = showProductCount;

var addProductToBasket = function addProductToBasket(product) {
  var products = JSON.parse(localStorage.getItem("products"));
  var find = products.find(function (item) {
    return item.id === product.id;
  });
  var message = document.querySelector(".message");
  message.classList.add("show");
  setTimeout(function () {
    message.classList.remove("show");
  }, 1500);

  if (find) {
    message.innerText = "?????????? ?????? ???????? ?? ??????????????";
    return;
  }

  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
  showProductCount();
};

exports.addProductToBasket = addProductToBasket;

var createProduct = function createProduct(id, name, newPrice, oldPrice, imgSrc) {
  var basketItem = document.createElement("li");
  var image = document.createElement("img");
  var productInfo = document.createElement("div");
  var productName = document.createElement("p");
  var costs = document.createElement("div");
  var newCost = document.createElement("p");
  var oldCost = document.createElement("p");
  var deleteProduct = document.createElement("button");
  basketItem.className = "basket__item";
  image.className = "basket__image";
  productInfo.className = "basket__info";
  productName.className = "basket__info-name";
  costs.className = "basket__info-costs";
  newCost.className = "basket__info-new-cost";
  oldCost.className = "basket__info-old-cost";
  deleteProduct.className = "basket__info-delete";
  basketItem.dataset.productId = id;
  basketItem.append(image, productInfo);
  productInfo.append(productName, costs);
  costs.append(newCost, oldCost, deleteProduct);
  image.src = imgSrc;
  productName.innerText = name;
  newCost.innerText = "".concat(newPrice, " \u0440\u0443\u0431.");
  oldCost.innerText = "".concat(oldPrice, " \u0440\u0443\u0431.");
  deleteProduct.innerText = "??????????????";
  deleteProduct.addEventListener("click", function (event) {
    var parent = event.target.closest(".basket__item");
    parent.remove();
    products = products.filter(function (product) {
      return +product.id !== +parent.dataset.productId;
    });
    localStorage.setItem("products", JSON.stringify(products));
    sum -= newPrice;

    if (sum <= 0) {
      _variables.basketTotal.innerText = "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0435 \u043F\u043E\u043A\u0430 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435\u0442";
    } else {
      _variables.basketTotal.innerText = "\u0418\u0442\u043E\u0433\u043E ".concat(sum, " \u0440\u0443\u0431.");
    }

    showProductCount();
  });
  return basketItem;
};

exports.createProduct = createProduct;

var initBasket = function initBasket() {
  _variables.body.style.overflow = "hidden";
  sum = 0;
  var productsFromStorage = JSON.parse(localStorage.getItem("products"));
  showProductCount();

  if ("products" in localStorage && productsFromStorage && productsFromStorage.length) {
    _variables.basketList.innerHTML = "";
    productsFromStorage.forEach(function (product) {
      _variables.basketList.append(createProduct(product.id, product.name, product.newPrice, product.oldPrice, product.imgSrc));

      products.push(product);
      sum += product.newPrice;
    });
    _variables.basketTotal.innerText = "\u0418\u0442\u043E\u0433\u043E ".concat(sum, " \u0440\u0443\u0431.");
  }

  _variables.basket.classList.add("show");
};

exports.initBasket = initBasket;

var initListeners = function initListeners() {
  _variables.basketBtn.addEventListener("click", function () {
    initBasket();
  });

  _variables.basketDelete.addEventListener("click", function () {
    _variables.basketList.innerHTML = "";
    _variables.basketTotal.innerText = "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0435 \u043F\u043E\u043A\u0430 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435\u0442";
    products = [];
    localStorage.setItem("products", JSON.stringify(products));
    showProductCount();
  });
};

exports.initListeners = initListeners;
},{"./variables.js":"scripts/variables.js"}],"scripts/index.js":[function(require,module,exports) {
"use strict";

var _variables = require("./variables.js");

var _add_product_card = require("./add_product_card.js");

var _basket = require("./basket.js");

// VARIABLES
var offset = 500;
var width;

var resizeSlider = function resizeSlider() {
  width = document.querySelector(".slider").offsetWidth;
  _variables.sliderLine.style.width = width * _variables.imagesSlider.length + "px";

  _variables.imagesSlider.forEach(function (item) {
    item.style.width = width + "px";
    item.style.height = "auto";
  });
};

var getTop = function getTop() {
  return window.pageYOffset || document.documentElement.scrollTop;
};

var addInBasketBtn = function addInBasketBtn(products) {
  document.querySelectorAll(".card__add-in-basket-btn").forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      var id = event.target.closest(".card").dataset.id;
      var product = products.find(function (elem) {
        return elem.id === id;
      });
      basketOutput.addProduct(product);
      btn.innerHTML = "".concat(_variables.basketIconCheck);
      btn.className = "card__add-in-basket-btn-disable";
    });
  });
}; // BASKET


var basketOutput = {
  init: function init() {
    var productsFromStorage = JSON.parse(localStorage.getItem("products"));

    if (!("products" in localStorage) && !productsFromStorage) {
      localStorage.setItem("products", JSON.stringify(products));
    }

    var message = document.createElement("div");
    var productCount = document.createElement("p");
    message.className = "message";
    productCount.className = "product__count";
    message.innerText = "?????????? ?????????????? ???????????????? ?? ??????????????";

    _variables.body.append(message);

    _variables.basketBtn.append(productCount);

    (0, _basket.initListeners)();
    (0, _basket.showProductCount)();
  },
  addProduct: function addProduct(product) {
    (0, _basket.addProductToBasket)(product);
  }
};
basketOutput.init(); // CARDS

(0, _add_product_card.getProducts)().then(function (products) {
  return (0, _add_product_card.addProductCard)(products);
}).then(function (products) {
  return addInBasketBtn(products);
}).then(function () {
  document.querySelectorAll(".card__fast-view").forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      var popup = event.target.closest(".card").querySelector(".popup");
      popup.classList.add("open");
      document.body.style.overflow = "hidden";

      _variables.buttonArrow.classList.add("hiddenButtonArrow");

      var close = popup.querySelector(".popup-close");
      close.addEventListener("click", function (event) {
        event.preventDefault();
        popup.classList.remove("open");
        document.body.style.overflow = "auto";

        _variables.buttonArrow.classList.remove("hiddenButtonArrow");
      });
    });
  });
}); // SEARCH

_variables.header.addEventListener("click", function () {
  // show searchbox
  if (event.target.closest(".header__search-sm-btn") || event.target.closest(".header__search-box.enabled")) {
    _variables.logo.classList.add("disabled");

    _variables.basketBtn.classList.add("disabled");

    _variables.searchBox.classList.add("enabled");

    _variables.searchBtn.classList.add("disabled");
  } else {
    _variables.logo.classList.remove("disabled");

    _variables.basketBtn.classList.remove("disabled");

    _variables.searchBox.classList.remove("enabled");

    _variables.searchBtn.classList.remove("disabled");
  } // init search


  if (event.target.className === "header__search-btn") {
    (0, _add_product_card.getProducts)().then(function (products) {
      var value = _variables.searchInput.value.toLowerCase().trim();

      var newProducts = products.filter(function (product) {
        return product.name.toLowerCase().includes(value);
      });

      if (value === "") {
        return;
      } else if (newProducts.length === 0) {
        _variables.productsBox.innerHTML = "";

        _variables.productsBox.classList.add("not-found");

        _variables.productsBox.innerText = "?????????????? ???? ??????????????";
      } else {
        _variables.productsBox.innerHTML = "";

        _variables.productsBox.classList.remove("not-found");

        (0, _add_product_card.addProductCard)(newProducts);
      }

      _variables.searchInput.value = "";

      _variables.mainTitle.remove();

      addInBasketBtn(products);
    });
  }
}); // SCROLL ARROW


window.addEventListener("scroll", function () {
  if (getTop() > offset) {
    _variables.buttonArrow.classList.add("scroll-up--active");
  } else {
    _variables.buttonArrow.classList.remove("scroll-up--active");
  }
});

_variables.buttonArrow.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}); // SLIDER ADAPTIVE


window.addEventListener("resize", resizeSlider);
resizeSlider();
},{"./variables.js":"scripts/variables.js","./add_product_card.js":"scripts/add_product_card.js","./basket.js":"scripts/basket.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51824" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ??? Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] ????  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">????</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/index.js"], null)
//# sourceMappingURL=/scripts.bcf3243b.js.map