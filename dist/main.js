/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    box-sizing: border-box;
    margin: 0;
    border:0;
    
    color:white;
}
:root{
    --low-color:#15803d;
    --high-color:#991b1b;
    --background-color:#581c87;
    --control-panel-color:#9333ea;
    --element-color:#a855f7;
}
body{
    background-color: var(--background-color);
}
.container{
    display:grid;
    grid-template: 1fr 5fr/1fr;
    min-height:100vh;

}
.control-panel{
    display:flex;
    justify-content: space-around;
    
}
.control-panel>button{
    width:5vw;
    height: 5vh;
}
.project-display{
    display:grid;
    
    grid-template: 2fr 1fr/1fr;
    position: relative;
  

}
.project-display>.urgent{
    display:grid;
    background-color: var(--high-color);
    grid-template-columns:repeat(2, minmax(30vw,55%));
    grid-template-rows:repeat(auto-fill, minmax(15vh,50%));
    min-width:100%;
    max-width: 100%;
    max-height: 40vh;
    overflow-x:hidden;
    overflow-y:scroll;
   
   
    
}
.project-display .non-urgent{
    display:grid;
    background-color: var(--low-color);
    grid-template-columns:repeat(2, minmax(30vw,55%));
    grid-template-rows:repeat(auto-fill, minmax(15vh,50%));
    min-width:100%;
    max-width: 100%;
    max-height: 30vh;
    overflow-x:hidden;
    overflow-y:scroll;
  

}
.project{
    margin:2px;
    border:2px solid white;
    min-width: 100%;
    min-height:15vh;
    max-width: 100%;
    max-height: 100%;
    padding: 15px;
    display:grid;
    grid-template:1fr 3fr/1fr;
    border-radius: 5%;;
    position:relative;
}
.project-top{
    display:flex;
    border: none;
}
.project-top>.project-name{
    flex:1;
    text-align: left;
}
.project-top>.project-dueDate{
    text-align:right;
}
.project>.project-description{
    overflow:hidden;
    max-height: 100%;
    border:none;
}
.project>.delete{
    position:absolute;
    bottom:5px;
    right:5px;
    max-width: 5vw;
    max-height: 5vh;
    
    filter: invert(97%) sepia(26%) saturate(14%) hue-rotate(61deg) brightness(106%) contrast(102%);
}
.project-display>form{
    display:flex;
    justify-content: space-around;
    flex-direction: column;
    position: absolute;
    left: 30vw;
    top: 25vh;
    width:40vw;
    height:50vh;
    background-color: var(--element-color);
    padding:10px;
}
.project-display>form>input{
    color:black;
}
.project-display>form>button{
    color:black;
}
form>img#close{
    position: absolute;
    top:0;
    right:0px;
    max-width: 3vw;
    max-height: 3vh;

}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,QAAQ;;IAER,WAAW;AACf;AACA;IACI,mBAAmB;IACnB,oBAAoB;IACpB,0BAA0B;IAC1B,6BAA6B;IAC7B,uBAAuB;AAC3B;AACA;IACI,yCAAyC;AAC7C;AACA;IACI,YAAY;IACZ,0BAA0B;IAC1B,gBAAgB;;AAEpB;AACA;IACI,YAAY;IACZ,6BAA6B;;AAEjC;AACA;IACI,SAAS;IACT,WAAW;AACf;AACA;IACI,YAAY;;IAEZ,0BAA0B;IAC1B,kBAAkB;;;AAGtB;AACA;IACI,YAAY;IACZ,mCAAmC;IACnC,iDAAiD;IACjD,sDAAsD;IACtD,cAAc;IACd,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;;;;AAIrB;AACA;IACI,YAAY;IACZ,kCAAkC;IAClC,iDAAiD;IACjD,sDAAsD;IACtD,cAAc;IACd,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;;;AAGrB;AACA;IACI,UAAU;IACV,sBAAsB;IACtB,eAAe;IACf,eAAe;IACf,eAAe;IACf,gBAAgB;IAChB,aAAa;IACb,YAAY;IACZ,yBAAyB;IACzB,iBAAiB;IACjB,iBAAiB;AACrB;AACA;IACI,YAAY;IACZ,YAAY;AAChB;AACA;IACI,MAAM;IACN,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,WAAW;AACf;AACA;IACI,iBAAiB;IACjB,UAAU;IACV,SAAS;IACT,cAAc;IACd,eAAe;;IAEf,8FAA8F;AAClG;AACA;IACI,YAAY;IACZ,6BAA6B;IAC7B,sBAAsB;IACtB,kBAAkB;IAClB,UAAU;IACV,SAAS;IACT,UAAU;IACV,WAAW;IACX,sCAAsC;IACtC,YAAY;AAChB;AACA;IACI,WAAW;AACf;AACA;IACI,WAAW;AACf;AACA;IACI,kBAAkB;IAClB,KAAK;IACL,SAAS;IACT,cAAc;IACd,eAAe;;AAEnB","sourcesContent":["*{\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    border:0;\r\n    \r\n    color:white;\r\n}\r\n:root{\r\n    --low-color:#15803d;\r\n    --high-color:#991b1b;\r\n    --background-color:#581c87;\r\n    --control-panel-color:#9333ea;\r\n    --element-color:#a855f7;\r\n}\r\nbody{\r\n    background-color: var(--background-color);\r\n}\r\n.container{\r\n    display:grid;\r\n    grid-template: 1fr 5fr/1fr;\r\n    min-height:100vh;\r\n\r\n}\r\n.control-panel{\r\n    display:flex;\r\n    justify-content: space-around;\r\n    \r\n}\r\n.control-panel>button{\r\n    width:5vw;\r\n    height: 5vh;\r\n}\r\n.project-display{\r\n    display:grid;\r\n    \r\n    grid-template: 2fr 1fr/1fr;\r\n    position: relative;\r\n  \r\n\r\n}\r\n.project-display>.urgent{\r\n    display:grid;\r\n    background-color: var(--high-color);\r\n    grid-template-columns:repeat(2, minmax(30vw,55%));\r\n    grid-template-rows:repeat(auto-fill, minmax(15vh,50%));\r\n    min-width:100%;\r\n    max-width: 100%;\r\n    max-height: 40vh;\r\n    overflow-x:hidden;\r\n    overflow-y:scroll;\r\n   \r\n   \r\n    \r\n}\r\n.project-display .non-urgent{\r\n    display:grid;\r\n    background-color: var(--low-color);\r\n    grid-template-columns:repeat(2, minmax(30vw,55%));\r\n    grid-template-rows:repeat(auto-fill, minmax(15vh,50%));\r\n    min-width:100%;\r\n    max-width: 100%;\r\n    max-height: 30vh;\r\n    overflow-x:hidden;\r\n    overflow-y:scroll;\r\n  \r\n\r\n}\r\n.project{\r\n    margin:2px;\r\n    border:2px solid white;\r\n    min-width: 100%;\r\n    min-height:15vh;\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    padding: 15px;\r\n    display:grid;\r\n    grid-template:1fr 3fr/1fr;\r\n    border-radius: 5%;;\r\n    position:relative;\r\n}\r\n.project-top{\r\n    display:flex;\r\n    border: none;\r\n}\r\n.project-top>.project-name{\r\n    flex:1;\r\n    text-align: left;\r\n}\r\n.project-top>.project-dueDate{\r\n    text-align:right;\r\n}\r\n.project>.project-description{\r\n    overflow:hidden;\r\n    max-height: 100%;\r\n    border:none;\r\n}\r\n.project>.delete{\r\n    position:absolute;\r\n    bottom:5px;\r\n    right:5px;\r\n    max-width: 5vw;\r\n    max-height: 5vh;\r\n    \r\n    filter: invert(97%) sepia(26%) saturate(14%) hue-rotate(61deg) brightness(106%) contrast(102%);\r\n}\r\n.project-display>form{\r\n    display:flex;\r\n    justify-content: space-around;\r\n    flex-direction: column;\r\n    position: absolute;\r\n    left: 30vw;\r\n    top: 25vh;\r\n    width:40vw;\r\n    height:50vh;\r\n    background-color: var(--element-color);\r\n    padding:10px;\r\n}\r\n.project-display>form>input{\r\n    color:black;\r\n}\r\n.project-display>form>button{\r\n    color:black;\r\n}\r\nform>img#close{\r\n    position: absolute;\r\n    top:0;\r\n    right:0px;\r\n    max-width: 3vw;\r\n    max-height: 3vh;\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addResetButton: () => (/* binding */ addResetButton),
/* harmony export */   createFormElement: () => (/* binding */ createFormElement),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   createProjectElement: () => (/* binding */ createProjectElement),
/* harmony export */   indexInit: () => (/* binding */ indexInit)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _icons_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/close.svg */ "./src/icons/close.svg");
 





function indexInit()
{
    //declare var for form 
    let newProject;
    let projectList = []
    if (projectList.length == 0)
    {
        
        
        const cleanRoom = createProject("clean room","2023-7-1","non-urgent","clean my damn room");
        const checkEmail = createProject("check email", "2023-6-20","urgent","check all emails");
        const testProject = createProject("test", "23-4-2222", "urgent", "LOLOLOL")
        const testProject2 = createProject("test2", "20 - 4- 2222", "urgent", "obamamama")
        const testProject3 = createProject("test2", "20 -4- 2222", "urgent", "obamamama")
    
        projectList.push(testProject);
        projectList.push(testProject2);
        projectList.push(testProject3)
     
        projectList.push(checkEmail);
        projectList.push(cleanRoom);
        for (let i =0;i<projectList.length;i++)
        {
            console.log(projectList[i].id)
        }
    }
        

    
    else
    {
        console.log("List Found");
        console.log(projectList)
    }
    for (let i =0; i< projectList.length; i++)
    {
        createProjectElement(projectList[i]);
    }
    
    let projectForm;
    let addButton = document.querySelector("#addProjectButton");
    addButton.addEventListener("click",function()
    {
        createFormElement();
        projectForm = document.querySelector("form");
        console.log(projectForm);
        projectForm.addEventListener("submit", function(e)
        {
            e.preventDefault();
             //create project object
            let inputProject = formValue()
            //check id if exists
            checkIDExists(inputProject,projectList);
            //add to projectList
            projectList.push(inputProject);
            createProjectElement(inputProject);
        })
        
    });
   deleteEventListener(projectList);

}




function deleteEventListener(projectList)
{
    let deleteButtons = document.querySelectorAll(".delete");
    for (let i =0; i< deleteButtons.length; i++)
    {
        deleteButtons[i].addEventListener("click",function(e)
        {
            //
            deleteProjectFromList(deleteButtons[i],projectList)
            e.target.parentElement.remove();
        })
    }

}

function deleteProjectFromList(button,projectList)
{
    let projectID = button.getAttribute("id");
    //search projectList for project with id projectID
    for (let i =0; i < projectList.length; i++)
    {
        if (projectList[i].id != projectID)
        {
            continue;
        }
        else
        {
            console.log("Initial List:" + projectList)
            //i is position in index
            projectList.splice(i,1);
            console.log("After:" +projectList)
            
            
        }
    }
}


function createProject(name,dueDate,priority, description="", id=generateID())
{
    
  
    function getDueDateObject()
    {
        return Date(dueDate);
    }
    
    //have to change to plain project for localStorage
    
    return {name,dueDate,description,priority, id, getDueDateObject}
    
    // const dateString = `${getdueDate().getDate()}-${dueDate().getMonth()}-${dueDate().getFullYear()}`

    
}
function createProjectElement(project)
{
    
    let displayTab;
    console.log(project.priority)
    if (project.priority == "urgent")
    {
        displayTab = document.querySelector(".urgent")
    }
    else if (project.priority == "non-urgent")
    {
        displayTab = document.querySelector(".non-urgent")
    }
    else if (!project.priority)
    {
        console.log("objects are empty")
        return;
    }
    let newProjectTab = document.createElement("div");
    newProjectTab.classList.add("project");
   
    let projectTop = document.createElement("div");
    projectTop.classList.add("project-top");

    let projectName = document.createElement("div")
    projectName.classList.add("project-name")
    projectName.textContent = project.name;

    let projectDueDate = document.createElement("div");
    projectDueDate.classList.add("project-dueDate");  
    let dateString = project.dueDate
    projectDueDate.textContent =  dateString;

    let projectDesc = document.createElement("div")
    projectDesc.classList.add("project-description");
    projectDesc.textContent = project.description

    projectTop.appendChild(projectName)
    projectTop.appendChild(projectDueDate)
    
    let deleteButton = document.createElement("img")
    deleteButton.setAttribute("class","delete");
    deleteButton.src= _icons_close_svg__WEBPACK_IMPORTED_MODULE_1__;
    deleteButton.setAttribute("id",project.id)

    newProjectTab.appendChild(projectTop);
    newProjectTab.appendChild(projectDesc)
    newProjectTab.appendChild(deleteButton);
    displayTab.appendChild(newProjectTab);



}

function addResetButton()
{
    let resetButton = document.querySelector("#resetter");
    resetButton.addEventListener("click", function()
    {
        for (let i =0; i<localStorage.length;i++)
        {
            const key = localStorage.key(i)
            localStorage.removeItem(key);

        }
        console.log("cleared local storage")
    })
}




function createFormElement()
{

    let projectDisplay = document.querySelector(".project-display");
    let newProjectForm = document.createElement("form");
    newProjectForm.setAttribute("autocomplete","off");
    let projectNameLabel = document.createElement("label");
    projectNameLabel.setAttribute("for", "projectName");
    projectNameLabel.textContent = "Name of new Project?"
    let projectNameInput = document.createElement("input");
    projectNameInput.setAttribute("type","text");
    projectNameInput.setAttribute("name","projectName");
    newProjectForm.appendChild(projectNameLabel);
    newProjectForm.appendChild(projectNameInput);

    let projectDateLabel = document.createElement("label");
    projectDateLabel.setAttribute("for","projectDate");
    projectDateLabel.textContent = "Due Date?"
    let projectDateInput = document.createElement("input")
    projectDateInput.setAttribute("type","date");
    projectDateInput.setAttribute("name","projectDate");
    newProjectForm.appendChild(projectDateLabel)
    newProjectForm.appendChild(projectDateInput)

    let projectPriorityLabel = document.createElement("label");
    projectPriorityLabel.setAttribute("for", "urgent");
    projectPriorityLabel.textContent = "Urgent";


    let projectPriorityInputUrgent = document.createElement("input")
    projectPriorityInputUrgent.setAttribute("type","radio");
    projectPriorityInputUrgent.setAttribute("name","projectPriority");
    projectPriorityInputUrgent.setAttribute("value","urgent");
    projectPriorityInputUrgent.setAttribute("id","urgent");
    projectPriorityInputUrgent.checked = true;

    let projectPrioDiv1 = document.createElement("div")
    projectPrioDiv1.classList.add("radioHolder")
    let projectPriorityLabel2 = document.createElement("label");
    projectPrioDiv1.appendChild(projectPriorityLabel)
    projectPrioDiv1.appendChild(projectPriorityInputUrgent);
    
    
    projectPriorityLabel2.setAttribute("for","non-urgent");
    projectPriorityLabel2.textContent = "Non-Urgent"
    let projectPriorityInputNon = document.createElement("input");
    projectPriorityInputNon.setAttribute("type","radio")
    projectPriorityInputNon.setAttribute("name","projectPriority");
    projectPriorityInputNon.setAttribute("value","non-urgent");
    projectPriorityInputNon.setAttribute("id","non-urgent");
    
    let projectDescLabel = document.createElement("label")
    projectDescLabel.setAttribute("for","projectDesc")
    projectDescLabel.textContent="Description?"
    let projectDesc = document.createElement("input")
    projectDesc.setAttribute("name","projectDesc");
    newProjectForm.appendChild(projectDescLabel);
    newProjectForm.append(projectDesc);
    
    let projectPrioDiv2 = document.createElement("div");
    projectPrioDiv2.classList.add("radioHolder");
    projectPrioDiv2.appendChild(projectPriorityLabel2)
    projectPrioDiv2.appendChild(projectPriorityInputNon);
    newProjectForm.appendChild(projectPrioDiv1)
    newProjectForm.appendChild(projectPrioDiv2);

   

    //submit button
    let submitButton = document.createElement("button")
    submitButton.setAttribute("type","submit")
    submitButton.textContent="Add Project";
  
    
    
    let closeButton = document.createElement("img");
    closeButton.src = _icons_close_svg__WEBPACK_IMPORTED_MODULE_1__;
    closeButton.setAttribute("id","close")
    closeButton.addEventListener("click", function()
    {
        //deletes the form element
        projectDisplay.removeChild(newProjectForm);
    })
    newProjectForm.appendChild(submitButton)
    newProjectForm.appendChild(closeButton);
    projectDisplay.appendChild(newProjectForm);
    
  
    

    console.log("created")
}

function checkIDExists(input,projectList)
{
    for (let i =0; i< projectList.length;i++)
    {
        if (input.id != projectList[i].id)
        {
            continue;
        }
        else if (input.id == projectList[i].id)
        {
            //remake a id
            input.id = generateID()
            //rerun
            checkIDExists(input,projectList)
        }
    }
    return;
}
function formValue()
{
    
    
    let ProjectNameValue = document.querySelector("input[name='projectName']").value;
    let projectDateValue = document.querySelector("input[name='projectDate']").value;
    let projectPrioValue = document.querySelector("input[name='projectPriority']:checked").value;
    
    let projectDescValue = document.querySelector("input[name='projectDesc']").value;
    if (projectDescValue)
    {
        return createProject(ProjectNameValue,projectDateValue,projectPrioValue,projectDescValue)  
    }
    else
    {
        return createProject(ProjectNameValue,projectDateValue,projectPrioValue)  
    }
    
}



function generateID()
{
     
    return Math.floor(Math.random() * 10000);
}

/***/ }),

/***/ "./src/icons/close.svg":
/*!*****************************!*\
  !*** ./src/icons/close.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97d4c0a10ac97607dc65.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



(0,_utils__WEBPACK_IMPORTED_MODULE_0__.indexInit)()
;(0,_utils__WEBPACK_IMPORTED_MODULE_0__.addResetButton)();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGNBQWMsTUFBTSxLQUFLLFVBQVUsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFlBQVksZUFBZSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGdCQUFnQixNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGVBQWUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxXQUFXLDRCQUE0QiwrQkFBK0Isa0JBQWtCLGlCQUFpQiw0QkFBNEIsS0FBSyxVQUFVLDRCQUE0Qiw2QkFBNkIsbUNBQW1DLHNDQUFzQyxnQ0FBZ0MsS0FBSyxTQUFTLGtEQUFrRCxLQUFLLGVBQWUscUJBQXFCLG1DQUFtQyx5QkFBeUIsU0FBUyxtQkFBbUIscUJBQXFCLHNDQUFzQyxhQUFhLDBCQUEwQixrQkFBa0Isb0JBQW9CLEtBQUsscUJBQXFCLHFCQUFxQiwyQ0FBMkMsMkJBQTJCLGVBQWUsNkJBQTZCLHFCQUFxQiw0Q0FBNEMsMERBQTBELCtEQUErRCx1QkFBdUIsd0JBQXdCLHlCQUF5QiwwQkFBMEIsMEJBQTBCLDJCQUEyQixpQ0FBaUMscUJBQXFCLDJDQUEyQywwREFBMEQsK0RBQStELHVCQUF1Qix3QkFBd0IseUJBQXlCLDBCQUEwQiwwQkFBMEIsZUFBZSxhQUFhLG1CQUFtQiwrQkFBK0Isd0JBQXdCLHdCQUF3Qix3QkFBd0IseUJBQXlCLHNCQUFzQixxQkFBcUIsa0NBQWtDLDJCQUEyQiwwQkFBMEIsS0FBSyxpQkFBaUIscUJBQXFCLHFCQUFxQixLQUFLLCtCQUErQixlQUFlLHlCQUF5QixLQUFLLGtDQUFrQyx5QkFBeUIsS0FBSyxrQ0FBa0Msd0JBQXdCLHlCQUF5QixvQkFBb0IsS0FBSyxxQkFBcUIsMEJBQTBCLG1CQUFtQixrQkFBa0IsdUJBQXVCLHdCQUF3QiwrR0FBK0csS0FBSywwQkFBMEIscUJBQXFCLHNDQUFzQywrQkFBK0IsMkJBQTJCLG1CQUFtQixrQkFBa0IsbUJBQW1CLG9CQUFvQiwrQ0FBK0MscUJBQXFCLEtBQUssZ0NBQWdDLG9CQUFvQixLQUFLLGlDQUFpQyxvQkFBb0IsS0FBSyxtQkFBbUIsMkJBQTJCLGNBQWMsa0JBQWtCLHVCQUF1Qix3QkFBd0IsU0FBUyxtQkFBbUI7QUFDamdJO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDekkxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNibUU7QUFDL0M7QUFDcUI7QUFDK0M7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxQkFBcUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIseUJBQXlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHdCQUF3QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsNkJBQTZCLHVCQUF1QixHQUFHLHFCQUFxQixHQUFHLHdCQUF3QjtBQUN2RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNkNBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNkNBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztVQ2hWQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7QUNBc0c7QUFDbEY7QUFDcEI7QUFDQSxpREFBUztBQUNULHVEQUFjO0FBQ2QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdDIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Mi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QyLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0Mi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdDIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Mi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdDIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QyLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL3RvZG9saXN0Mi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdDIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdDIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvbGlzdDIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdDIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdDIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdDIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm9yZGVyOjA7XHJcbiAgICBcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcbjpyb290e1xyXG4gICAgLS1sb3ctY29sb3I6IzE1ODAzZDtcclxuICAgIC0taGlnaC1jb2xvcjojOTkxYjFiO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiM1ODFjODc7XHJcbiAgICAtLWNvbnRyb2wtcGFuZWwtY29sb3I6IzkzMzNlYTtcclxuICAgIC0tZWxlbWVudC1jb2xvcjojYTg1NWY3O1xyXG59XHJcbmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgZGlzcGxheTpncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDVmci8xZnI7XHJcbiAgICBtaW4taGVpZ2h0OjEwMHZoO1xyXG5cclxufVxyXG4uY29udHJvbC1wYW5lbHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgXHJcbn1cclxuLmNvbnRyb2wtcGFuZWw+YnV0dG9ue1xyXG4gICAgd2lkdGg6NXZ3O1xyXG4gICAgaGVpZ2h0OiA1dmg7XHJcbn1cclxuLnByb2plY3QtZGlzcGxheXtcclxuICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIFxyXG4gICAgZ3JpZC10ZW1wbGF0ZTogMmZyIDFmci8xZnI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgXHJcblxyXG59XHJcbi5wcm9qZWN0LWRpc3BsYXk+LnVyZ2VudHtcclxuICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2gtY29sb3IpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgyLCBtaW5tYXgoMzB2dyw1NSUpKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czpyZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTV2aCw1MCUpKTtcclxuICAgIG1pbi13aWR0aDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogNDB2aDtcclxuICAgIG92ZXJmbG93LXg6aGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcbiAgIFxyXG4gICBcclxuICAgIFxyXG59XHJcbi5wcm9qZWN0LWRpc3BsYXkgLm5vbi11cmdlbnR7XHJcbiAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb3ctY29sb3IpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgyLCBtaW5tYXgoMzB2dyw1NSUpKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czpyZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTV2aCw1MCUpKTtcclxuICAgIG1pbi13aWR0aDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMzB2aDtcclxuICAgIG92ZXJmbG93LXg6aGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcbiAgXHJcblxyXG59XHJcbi5wcm9qZWN0e1xyXG4gICAgbWFyZ2luOjJweDtcclxuICAgIGJvcmRlcjoycHggc29saWQgd2hpdGU7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OjE1dmg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGU6MWZyIDNmci8xZnI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTs7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxufVxyXG4ucHJvamVjdC10b3B7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLnByb2plY3QtdG9wPi5wcm9qZWN0LW5hbWV7XHJcbiAgICBmbGV4OjE7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5wcm9qZWN0LXRvcD4ucHJvamVjdC1kdWVEYXRle1xyXG4gICAgdGV4dC1hbGlnbjpyaWdodDtcclxufVxyXG4ucHJvamVjdD4ucHJvamVjdC1kZXNjcmlwdGlvbntcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6bm9uZTtcclxufVxyXG4ucHJvamVjdD4uZGVsZXRle1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBib3R0b206NXB4O1xyXG4gICAgcmlnaHQ6NXB4O1xyXG4gICAgbWF4LXdpZHRoOiA1dnc7XHJcbiAgICBtYXgtaGVpZ2h0OiA1dmg7XHJcbiAgICBcclxuICAgIGZpbHRlcjogaW52ZXJ0KDk3JSkgc2VwaWEoMjYlKSBzYXR1cmF0ZSgxNCUpIGh1ZS1yb3RhdGUoNjFkZWcpIGJyaWdodG5lc3MoMTA2JSkgY29udHJhc3QoMTAyJSk7XHJcbn1cclxuLnByb2plY3QtZGlzcGxheT5mb3Jte1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMzB2dztcclxuICAgIHRvcDogMjV2aDtcclxuICAgIHdpZHRoOjQwdnc7XHJcbiAgICBoZWlnaHQ6NTB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVsZW1lbnQtY29sb3IpO1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG59XHJcbi5wcm9qZWN0LWRpc3BsYXk+Zm9ybT5pbnB1dHtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcbi5wcm9qZWN0LWRpc3BsYXk+Zm9ybT5idXR0b257XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG5mb3JtPmltZyNjbG9zZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDowO1xyXG4gICAgcmlnaHQ6MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAzdnc7XHJcbiAgICBtYXgtaGVpZ2h0OiAzdmg7XHJcblxyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxRQUFROztJQUVSLFdBQVc7QUFDZjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0kseUNBQXlDO0FBQzdDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLFlBQVk7SUFDWiw2QkFBNkI7O0FBRWpDO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZOztJQUVaLDBCQUEwQjtJQUMxQixrQkFBa0I7OztBQUd0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxpREFBaUQ7SUFDakQsc0RBQXNEO0lBQ3RELGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7Ozs7QUFJckI7QUFDQTtJQUNJLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsaURBQWlEO0lBQ2pELHNEQUFzRDtJQUN0RCxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCOzs7QUFHckI7QUFDQTtJQUNJLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxNQUFNO0lBQ04sZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFNBQVM7SUFDVCxjQUFjO0lBQ2QsZUFBZTs7SUFFZiw4RkFBOEY7QUFDbEc7QUFDQTtJQUNJLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsc0NBQXNDO0lBQ3RDLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsS0FBSztJQUNMLFNBQVM7SUFDVCxjQUFjO0lBQ2QsZUFBZTs7QUFFbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3JkZXI6MDtcXHJcXG4gICAgXFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbn1cXHJcXG46cm9vdHtcXHJcXG4gICAgLS1sb3ctY29sb3I6IzE1ODAzZDtcXHJcXG4gICAgLS1oaWdoLWNvbG9yOiM5OTFiMWI7XFxyXFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjojNTgxYzg3O1xcclxcbiAgICAtLWNvbnRyb2wtcGFuZWwtY29sb3I6IzkzMzNlYTtcXHJcXG4gICAgLS1lbGVtZW50LWNvbG9yOiNhODU1Zjc7XFxyXFxufVxcclxcbmJvZHl7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcclxcbn1cXHJcXG4uY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciA1ZnIvMWZyO1xcclxcbiAgICBtaW4taGVpZ2h0OjEwMHZoO1xcclxcblxcclxcbn1cXHJcXG4uY29udHJvbC1wYW5lbHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgXFxyXFxufVxcclxcbi5jb250cm9sLXBhbmVsPmJ1dHRvbntcXHJcXG4gICAgd2lkdGg6NXZ3O1xcclxcbiAgICBoZWlnaHQ6IDV2aDtcXHJcXG59XFxyXFxuLnByb2plY3QtZGlzcGxheXtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMmZyIDFmci8xZnI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIFxcclxcblxcclxcbn1cXHJcXG4ucHJvamVjdC1kaXNwbGF5Pi51cmdlbnR7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaC1jb2xvcik7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoMiwgbWlubWF4KDMwdncsNTUlKSk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czpyZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTV2aCw1MCUpKTtcXHJcXG4gICAgbWluLXdpZHRoOjEwMCU7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LWhlaWdodDogNDB2aDtcXHJcXG4gICAgb3ZlcmZsb3cteDpoaWRkZW47XFxyXFxuICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xcclxcbiAgIFxcclxcbiAgIFxcclxcbiAgICBcXHJcXG59XFxyXFxuLnByb2plY3QtZGlzcGxheSAubm9uLXVyZ2VudHtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb3ctY29sb3IpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDIsIG1pbm1heCgzMHZ3LDU1JSkpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6cmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE1dmgsNTAlKSk7XFxyXFxuICAgIG1pbi13aWR0aDoxMDAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDMwdmg7XFxyXFxuICAgIG92ZXJmbG93LXg6aGlkZGVuO1xcclxcbiAgICBvdmVyZmxvdy15OnNjcm9sbDtcXHJcXG4gIFxcclxcblxcclxcbn1cXHJcXG4ucHJvamVjdHtcXHJcXG4gICAgbWFyZ2luOjJweDtcXHJcXG4gICAgYm9yZGVyOjJweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcclxcbiAgICBtaW4taGVpZ2h0OjE1dmg7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOjFmciAzZnIvMWZyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1JTs7XFxyXFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbn1cXHJcXG4ucHJvamVjdC10b3B7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4ucHJvamVjdC10b3A+LnByb2plY3QtbmFtZXtcXHJcXG4gICAgZmxleDoxO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG4ucHJvamVjdC10b3A+LnByb2plY3QtZHVlRGF0ZXtcXHJcXG4gICAgdGV4dC1hbGlnbjpyaWdodDtcXHJcXG59XFxyXFxuLnByb2plY3Q+LnByb2plY3QtZGVzY3JpcHRpb257XFxyXFxuICAgIG92ZXJmbG93OmhpZGRlbjtcXHJcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXHJcXG4gICAgYm9yZGVyOm5vbmU7XFxyXFxufVxcclxcbi5wcm9qZWN0Pi5kZWxldGV7XFxyXFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcclxcbiAgICBib3R0b206NXB4O1xcclxcbiAgICByaWdodDo1cHg7XFxyXFxuICAgIG1heC13aWR0aDogNXZ3O1xcclxcbiAgICBtYXgtaGVpZ2h0OiA1dmg7XFxyXFxuICAgIFxcclxcbiAgICBmaWx0ZXI6IGludmVydCg5NyUpIHNlcGlhKDI2JSkgc2F0dXJhdGUoMTQlKSBodWUtcm90YXRlKDYxZGVnKSBicmlnaHRuZXNzKDEwNiUpIGNvbnRyYXN0KDEwMiUpO1xcclxcbn1cXHJcXG4ucHJvamVjdC1kaXNwbGF5PmZvcm17XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMzB2dztcXHJcXG4gICAgdG9wOiAyNXZoO1xcclxcbiAgICB3aWR0aDo0MHZ3O1xcclxcbiAgICBoZWlnaHQ6NTB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZWxlbWVudC1jb2xvcik7XFxyXFxuICAgIHBhZGRpbmc6MTBweDtcXHJcXG59XFxyXFxuLnByb2plY3QtZGlzcGxheT5mb3JtPmlucHV0e1xcclxcbiAgICBjb2xvcjpibGFjaztcXHJcXG59XFxyXFxuLnByb2plY3QtZGlzcGxheT5mb3JtPmJ1dHRvbntcXHJcXG4gICAgY29sb3I6YmxhY2s7XFxyXFxufVxcclxcbmZvcm0+aW1nI2Nsb3Nle1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDowO1xcclxcbiAgICByaWdodDowcHg7XFxyXFxuICAgIG1heC13aWR0aDogM3Z3O1xcclxcbiAgICBtYXgtaGVpZ2h0OiAzdmg7XFxyXFxuXFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjb21wYXJlQXNjLCBjb21wYXJlRGVzYywgYWRkRGF5cyxzdWJEYXlzIH0gZnJvbSBcImRhdGUtZm5zXCIgXHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCJcclxuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICcuL2ljb25zL2Nsb3NlLnN2ZydcclxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdCxpbmRleEluaXQsY3JlYXRlUHJvamVjdEVsZW1lbnQsYWRkUmVzZXRCdXR0b24sY3JlYXRlRm9ybUVsZW1lbnQgfVxyXG5cclxuXHJcbmZ1bmN0aW9uIGluZGV4SW5pdCgpXHJcbntcclxuICAgIC8vZGVjbGFyZSB2YXIgZm9yIGZvcm0gXHJcbiAgICBsZXQgbmV3UHJvamVjdDtcclxuICAgIGxldCBwcm9qZWN0TGlzdCA9IFtdXHJcbiAgICBpZiAocHJvamVjdExpc3QubGVuZ3RoID09IDApXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY2xlYW5Sb29tID0gY3JlYXRlUHJvamVjdChcImNsZWFuIHJvb21cIixcIjIwMjMtNy0xXCIsXCJub24tdXJnZW50XCIsXCJjbGVhbiBteSBkYW1uIHJvb21cIik7XHJcbiAgICAgICAgY29uc3QgY2hlY2tFbWFpbCA9IGNyZWF0ZVByb2plY3QoXCJjaGVjayBlbWFpbFwiLCBcIjIwMjMtNi0yMFwiLFwidXJnZW50XCIsXCJjaGVjayBhbGwgZW1haWxzXCIpO1xyXG4gICAgICAgIGNvbnN0IHRlc3RQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChcInRlc3RcIiwgXCIyMy00LTIyMjJcIiwgXCJ1cmdlbnRcIiwgXCJMT0xPTE9MXCIpXHJcbiAgICAgICAgY29uc3QgdGVzdFByb2plY3QyID0gY3JlYXRlUHJvamVjdChcInRlc3QyXCIsIFwiMjAgLSA0LSAyMjIyXCIsIFwidXJnZW50XCIsIFwib2JhbWFtYW1hXCIpXHJcbiAgICAgICAgY29uc3QgdGVzdFByb2plY3QzID0gY3JlYXRlUHJvamVjdChcInRlc3QyXCIsIFwiMjAgLTQtIDIyMjJcIiwgXCJ1cmdlbnRcIiwgXCJvYmFtYW1hbWFcIilcclxuICAgIFxyXG4gICAgICAgIHByb2plY3RMaXN0LnB1c2godGVzdFByb2plY3QpO1xyXG4gICAgICAgIHByb2plY3RMaXN0LnB1c2godGVzdFByb2plY3QyKTtcclxuICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKHRlc3RQcm9qZWN0MylcclxuICAgICBcclxuICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKGNoZWNrRW1haWwpO1xyXG4gICAgICAgIHByb2plY3RMaXN0LnB1c2goY2xlYW5Sb29tKTtcclxuICAgICAgICBmb3IgKGxldCBpID0wO2k8cHJvamVjdExpc3QubGVuZ3RoO2krKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0W2ldLmlkKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICBcclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkxpc3QgRm91bmRcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdExpc3QpXHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0wOyBpPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKylcclxuICAgIHtcclxuICAgICAgICBjcmVhdGVQcm9qZWN0RWxlbWVudChwcm9qZWN0TGlzdFtpXSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCBwcm9qZWN0Rm9ybTtcclxuICAgIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFByb2plY3RCdXR0b25cIik7XHJcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIGNyZWF0ZUZvcm1FbGVtZW50KCk7XHJcbiAgICAgICAgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0Rm9ybSk7XHJcbiAgICAgICAgcHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgLy9jcmVhdGUgcHJvamVjdCBvYmplY3RcclxuICAgICAgICAgICAgbGV0IGlucHV0UHJvamVjdCA9IGZvcm1WYWx1ZSgpXHJcbiAgICAgICAgICAgIC8vY2hlY2sgaWQgaWYgZXhpc3RzXHJcbiAgICAgICAgICAgIGNoZWNrSURFeGlzdHMoaW5wdXRQcm9qZWN0LHByb2plY3RMaXN0KTtcclxuICAgICAgICAgICAgLy9hZGQgdG8gcHJvamVjdExpc3RcclxuICAgICAgICAgICAgcHJvamVjdExpc3QucHVzaChpbnB1dFByb2plY3QpO1xyXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0RWxlbWVudChpbnB1dFByb2plY3QpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuICAgZGVsZXRlRXZlbnRMaXN0ZW5lcihwcm9qZWN0TGlzdCk7XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBkZWxldGVFdmVudExpc3RlbmVyKHByb2plY3RMaXN0KVxyXG57XHJcbiAgICBsZXQgZGVsZXRlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlXCIpO1xyXG4gICAgZm9yIChsZXQgaSA9MDsgaTwgZGVsZXRlQnV0dG9ucy5sZW5ndGg7IGkrKylcclxuICAgIHtcclxuICAgICAgICBkZWxldGVCdXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0RnJvbUxpc3QoZGVsZXRlQnV0dG9uc1tpXSxwcm9qZWN0TGlzdClcclxuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdEZyb21MaXN0KGJ1dHRvbixwcm9qZWN0TGlzdClcclxue1xyXG4gICAgbGV0IHByb2plY3RJRCA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcclxuICAgIC8vc2VhcmNoIHByb2plY3RMaXN0IGZvciBwcm9qZWN0IHdpdGggaWQgcHJvamVjdElEXHJcbiAgICBmb3IgKGxldCBpID0wOyBpIDwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHByb2plY3RMaXN0W2ldLmlkICE9IHByb2plY3RJRClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkluaXRpYWwgTGlzdDpcIiArIHByb2plY3RMaXN0KVxyXG4gICAgICAgICAgICAvL2kgaXMgcG9zaXRpb24gaW4gaW5kZXhcclxuICAgICAgICAgICAgcHJvamVjdExpc3Quc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWZ0ZXI6XCIgK3Byb2plY3RMaXN0KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lLGR1ZURhdGUscHJpb3JpdHksIGRlc2NyaXB0aW9uPVwiXCIsIGlkPWdlbmVyYXRlSUQoKSlcclxue1xyXG4gICAgXHJcbiAgXHJcbiAgICBmdW5jdGlvbiBnZXREdWVEYXRlT2JqZWN0KClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gRGF0ZShkdWVEYXRlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy9oYXZlIHRvIGNoYW5nZSB0byBwbGFpbiBwcm9qZWN0IGZvciBsb2NhbFN0b3JhZ2VcclxuICAgIFxyXG4gICAgcmV0dXJuIHtuYW1lLGR1ZURhdGUsZGVzY3JpcHRpb24scHJpb3JpdHksIGlkLCBnZXREdWVEYXRlT2JqZWN0fVxyXG4gICAgXHJcbiAgICAvLyBjb25zdCBkYXRlU3RyaW5nID0gYCR7Z2V0ZHVlRGF0ZSgpLmdldERhdGUoKX0tJHtkdWVEYXRlKCkuZ2V0TW9udGgoKX0tJHtkdWVEYXRlKCkuZ2V0RnVsbFllYXIoKX1gXHJcblxyXG4gICAgXHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEVsZW1lbnQocHJvamVjdClcclxue1xyXG4gICAgXHJcbiAgICBsZXQgZGlzcGxheVRhYjtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3QucHJpb3JpdHkpXHJcbiAgICBpZiAocHJvamVjdC5wcmlvcml0eSA9PSBcInVyZ2VudFwiKVxyXG4gICAge1xyXG4gICAgICAgIGRpc3BsYXlUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVyZ2VudFwiKVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocHJvamVjdC5wcmlvcml0eSA9PSBcIm5vbi11cmdlbnRcIilcclxuICAgIHtcclxuICAgICAgICBkaXNwbGF5VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub24tdXJnZW50XCIpXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghcHJvamVjdC5wcmlvcml0eSlcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9iamVjdHMgYXJlIGVtcHR5XCIpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IG5ld1Byb2plY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmV3UHJvamVjdFRhYi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcclxuICAgXHJcbiAgICBsZXQgcHJvamVjdFRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwcm9qZWN0VG9wLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRvcFwiKTtcclxuXHJcbiAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lXCIpXHJcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcclxuXHJcbiAgICBsZXQgcHJvamVjdER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJvamVjdER1ZURhdGUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZHVlRGF0ZVwiKTsgIFxyXG4gICAgbGV0IGRhdGVTdHJpbmcgPSBwcm9qZWN0LmR1ZURhdGVcclxuICAgIHByb2plY3REdWVEYXRlLnRleHRDb250ZW50ID0gIGRhdGVTdHJpbmc7XHJcblxyXG4gICAgbGV0IHByb2plY3REZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgcHJvamVjdERlc2MuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZGVzY3JpcHRpb25cIik7XHJcbiAgICBwcm9qZWN0RGVzYy50ZXh0Q29udGVudCA9IHByb2plY3QuZGVzY3JpcHRpb25cclxuXHJcbiAgICBwcm9qZWN0VG9wLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKVxyXG4gICAgcHJvamVjdFRvcC5hcHBlbmRDaGlsZChwcm9qZWN0RHVlRGF0ZSlcclxuICAgIFxyXG4gICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcclxuICAgIGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwiZGVsZXRlXCIpO1xyXG4gICAgZGVsZXRlQnV0dG9uLnNyYz0gY2xvc2VJY29uO1xyXG4gICAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIscHJvamVjdC5pZClcclxuXHJcbiAgICBuZXdQcm9qZWN0VGFiLmFwcGVuZENoaWxkKHByb2plY3RUb3ApO1xyXG4gICAgbmV3UHJvamVjdFRhYi5hcHBlbmRDaGlsZChwcm9qZWN0RGVzYylcclxuICAgIG5ld1Byb2plY3RUYWIuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcclxuICAgIGRpc3BsYXlUYWIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdFRhYik7XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFJlc2V0QnV0dG9uKClcclxue1xyXG4gICAgbGV0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXNldHRlclwiKTtcclxuICAgIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9MDsgaTxsb2NhbFN0b3JhZ2UubGVuZ3RoO2krKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSlcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xlYXJlZCBsb2NhbCBzdG9yYWdlXCIpXHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGb3JtRWxlbWVudCgpXHJcbntcclxuXHJcbiAgICBsZXQgcHJvamVjdERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZGlzcGxheVwiKTtcclxuICAgIGxldCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gICAgbmV3UHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKFwiYXV0b2NvbXBsZXRlXCIsXCJvZmZcIik7XHJcbiAgICBsZXQgcHJvamVjdE5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIHByb2plY3ROYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJvamVjdE5hbWVcIik7XHJcbiAgICBwcm9qZWN0TmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJOYW1lIG9mIG5ldyBQcm9qZWN0P1wiXHJcbiAgICBsZXQgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIHByb2plY3ROYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwidGV4dFwiKTtcclxuICAgIHByb2plY3ROYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwicHJvamVjdE5hbWVcIik7XHJcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUxhYmVsKTtcclxuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3ROYW1lSW5wdXQpO1xyXG5cclxuICAgIGxldCBwcm9qZWN0RGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgcHJvamVjdERhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixcInByb2plY3REYXRlXCIpO1xyXG4gICAgcHJvamVjdERhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGU/XCJcclxuICAgIGxldCBwcm9qZWN0RGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICBwcm9qZWN0RGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIixcImRhdGVcIik7XHJcbiAgICBwcm9qZWN0RGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIixcInByb2plY3REYXRlXCIpO1xyXG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdERhdGVMYWJlbClcclxuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3REYXRlSW5wdXQpXHJcblxyXG4gICAgbGV0IHByb2plY3RQcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgcHJvamVjdFByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidXJnZW50XCIpO1xyXG4gICAgcHJvamVjdFByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIlVyZ2VudFwiO1xyXG5cclxuXHJcbiAgICBsZXQgcHJvamVjdFByaW9yaXR5SW5wdXRVcmdlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgIHByb2plY3RQcmlvcml0eUlucHV0VXJnZW50LnNldEF0dHJpYnV0ZShcInR5cGVcIixcInJhZGlvXCIpO1xyXG4gICAgcHJvamVjdFByaW9yaXR5SW5wdXRVcmdlbnQuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwicHJvamVjdFByaW9yaXR5XCIpO1xyXG4gICAgcHJvamVjdFByaW9yaXR5SW5wdXRVcmdlbnQuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcInVyZ2VudFwiKTtcclxuICAgIHByb2plY3RQcmlvcml0eUlucHV0VXJnZW50LnNldEF0dHJpYnV0ZShcImlkXCIsXCJ1cmdlbnRcIik7XHJcbiAgICBwcm9qZWN0UHJpb3JpdHlJbnB1dFVyZ2VudC5jaGVja2VkID0gdHJ1ZTtcclxuXHJcbiAgICBsZXQgcHJvamVjdFByaW9EaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgcHJvamVjdFByaW9EaXYxLmNsYXNzTGlzdC5hZGQoXCJyYWRpb0hvbGRlclwiKVxyXG4gICAgbGV0IHByb2plY3RQcmlvcml0eUxhYmVsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIHByb2plY3RQcmlvRGl2MS5hcHBlbmRDaGlsZChwcm9qZWN0UHJpb3JpdHlMYWJlbClcclxuICAgIHByb2plY3RQcmlvRGl2MS5hcHBlbmRDaGlsZChwcm9qZWN0UHJpb3JpdHlJbnB1dFVyZ2VudCk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgcHJvamVjdFByaW9yaXR5TGFiZWwyLnNldEF0dHJpYnV0ZShcImZvclwiLFwibm9uLXVyZ2VudFwiKTtcclxuICAgIHByb2plY3RQcmlvcml0eUxhYmVsMi50ZXh0Q29udGVudCA9IFwiTm9uLVVyZ2VudFwiXHJcbiAgICBsZXQgcHJvamVjdFByaW9yaXR5SW5wdXROb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBwcm9qZWN0UHJpb3JpdHlJbnB1dE5vbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJyYWRpb1wiKVxyXG4gICAgcHJvamVjdFByaW9yaXR5SW5wdXROb24uc2V0QXR0cmlidXRlKFwibmFtZVwiLFwicHJvamVjdFByaW9yaXR5XCIpO1xyXG4gICAgcHJvamVjdFByaW9yaXR5SW5wdXROb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIm5vbi11cmdlbnRcIik7XHJcbiAgICBwcm9qZWN0UHJpb3JpdHlJbnB1dE5vbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwibm9uLXVyZ2VudFwiKTtcclxuICAgIFxyXG4gICAgbGV0IHByb2plY3REZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcclxuICAgIHByb2plY3REZXNjTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsXCJwcm9qZWN0RGVzY1wiKVxyXG4gICAgcHJvamVjdERlc2NMYWJlbC50ZXh0Q29udGVudD1cIkRlc2NyaXB0aW9uP1wiXHJcbiAgICBsZXQgcHJvamVjdERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgIHByb2plY3REZXNjLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcInByb2plY3REZXNjXCIpO1xyXG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdERlc2NMYWJlbCk7XHJcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmQocHJvamVjdERlc2MpO1xyXG4gICAgXHJcbiAgICBsZXQgcHJvamVjdFByaW9EaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHByb2plY3RQcmlvRGl2Mi5jbGFzc0xpc3QuYWRkKFwicmFkaW9Ib2xkZXJcIik7XHJcbiAgICBwcm9qZWN0UHJpb0RpdjIuYXBwZW5kQ2hpbGQocHJvamVjdFByaW9yaXR5TGFiZWwyKVxyXG4gICAgcHJvamVjdFByaW9EaXYyLmFwcGVuZENoaWxkKHByb2plY3RQcmlvcml0eUlucHV0Tm9uKTtcclxuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RQcmlvRGl2MSlcclxuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RQcmlvRGl2Mik7XHJcblxyXG4gICBcclxuXHJcbiAgICAvL3N1Ym1pdCBidXR0b25cclxuICAgIGxldCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLFwic3VibWl0XCIpXHJcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQ9XCJBZGQgUHJvamVjdFwiO1xyXG4gIFxyXG4gICAgXHJcbiAgICBcclxuICAgIGxldCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBjbG9zZUJ1dHRvbi5zcmMgPSBjbG9zZUljb247XHJcbiAgICBjbG9zZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiY2xvc2VcIilcclxuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgLy9kZWxldGVzIHRoZSBmb3JtIGVsZW1lbnRcclxuICAgICAgICBwcm9qZWN0RGlzcGxheS5yZW1vdmVDaGlsZChuZXdQcm9qZWN0Rm9ybSk7XHJcbiAgICB9KVxyXG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKVxyXG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xyXG4gICAgcHJvamVjdERpc3BsYXkuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm0pO1xyXG4gICAgXHJcbiAgXHJcbiAgICBcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImNyZWF0ZWRcIilcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tJREV4aXN0cyhpbnB1dCxwcm9qZWN0TGlzdClcclxue1xyXG4gICAgZm9yIChsZXQgaSA9MDsgaTwgcHJvamVjdExpc3QubGVuZ3RoO2krKylcclxuICAgIHtcclxuICAgICAgICBpZiAoaW5wdXQuaWQgIT0gcHJvamVjdExpc3RbaV0uaWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaW5wdXQuaWQgPT0gcHJvamVjdExpc3RbaV0uaWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL3JlbWFrZSBhIGlkXHJcbiAgICAgICAgICAgIGlucHV0LmlkID0gZ2VuZXJhdGVJRCgpXHJcbiAgICAgICAgICAgIC8vcmVydW5cclxuICAgICAgICAgICAgY2hlY2tJREV4aXN0cyhpbnB1dCxwcm9qZWN0TGlzdClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbn1cclxuZnVuY3Rpb24gZm9ybVZhbHVlKClcclxue1xyXG4gICAgXHJcbiAgICBcclxuICAgIGxldCBQcm9qZWN0TmFtZVZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3Byb2plY3ROYW1lJ11cIikudmFsdWU7XHJcbiAgICBsZXQgcHJvamVjdERhdGVWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdwcm9qZWN0RGF0ZSddXCIpLnZhbHVlO1xyXG4gICAgbGV0IHByb2plY3RQcmlvVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0ncHJvamVjdFByaW9yaXR5J106Y2hlY2tlZFwiKS52YWx1ZTtcclxuICAgIFxyXG4gICAgbGV0IHByb2plY3REZXNjVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0ncHJvamVjdERlc2MnXVwiKS52YWx1ZTtcclxuICAgIGlmIChwcm9qZWN0RGVzY1ZhbHVlKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBjcmVhdGVQcm9qZWN0KFByb2plY3ROYW1lVmFsdWUscHJvamVjdERhdGVWYWx1ZSxwcm9qZWN0UHJpb1ZhbHVlLHByb2plY3REZXNjVmFsdWUpICBcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gY3JlYXRlUHJvamVjdChQcm9qZWN0TmFtZVZhbHVlLHByb2plY3REYXRlVmFsdWUscHJvamVjdFByaW9WYWx1ZSkgIFxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVJRCgpXHJcbntcclxuICAgICBcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMCk7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7aW5kZXhJbml0LGNyZWF0ZVByb2plY3QsY3JlYXRlUHJvamVjdEVsZW1lbnQsYWRkUmVzZXRCdXR0b24sIGNyZWF0ZUZvcm1FbGVtZW50fSBmcm9tIFwiLi91dGlsc1wiXHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCJcclxuXHJcbmluZGV4SW5pdCgpXHJcbmFkZFJlc2V0QnV0dG9uKCk7XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=