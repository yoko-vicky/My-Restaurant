/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/styles.scss */ \"./src/scss/styles.scss\");\n/* harmony import */ var _mymodules_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mymodules/header */ \"./src/scripts/mymodules/header.js\");\n/* harmony import */ var _mymodules_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mymodules/footer */ \"./src/scripts/mymodules/footer.js\");\n/* harmony import */ var _mymodules_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mymodules/main */ \"./src/scripts/mymodules/main.js\");\n/* harmony import */ var _mymodules_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mymodules/menu */ \"./src/scripts/mymodules/menu.js\");\n/* harmony import */ var _mymodules_tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mymodules/tab */ \"./src/scripts/mymodules/tab.js\");\n\n\n\n\n\n\n(0,_mymodules_header__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_mymodules_main__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_mymodules_menu__WEBPACK_IMPORTED_MODULE_4__.default)();\n(0,_mymodules_footer__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_mymodules_tab__WEBPACK_IMPORTED_MODULE_5__.default)();\n\n//# sourceURL=webpack://webpack-demo/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/mymodules/footer.js":
/*!*****************************************!*\
  !*** ./src/scripts/mymodules/footer.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst container = document.getElementById('content');\nconst footer = document.createElement('footer');\nfooter.classList.add('footer');\nfooter.innerHTML = '&copy; 2021 Sushi Taro Designed by <a href=\"https://github.com/yocosaka\">Yoko Saka</a>';\n\nconst myFooter = () => {\n  container.appendChild(footer);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (myFooter);\n\n//# sourceURL=webpack://webpack-demo/./src/scripts/mymodules/footer.js?");

/***/ }),

/***/ "./src/scripts/mymodules/header.js":
/*!*****************************************!*\
  !*** ./src/scripts/mymodules/header.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst container = document.getElementById('content');\nconst header = document.createElement('header');\nheader.classList.add('header');\nconst headerWrap = document.createElement('div');\nheaderWrap.classList.add('header__wrap');\nconst headerLogo = document.createElement('span');\nheaderLogo.classList.add('header__logo');\nheaderLogo.textContent = 'Sushi Taro';\n\nconst myHeader = () => {\n  headerWrap.appendChild(headerLogo);\n  header.appendChild(headerWrap);\n  container.appendChild(header);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (myHeader);\n\n//# sourceURL=webpack://webpack-demo/./src/scripts/mymodules/header.js?");

/***/ }),

/***/ "./src/scripts/mymodules/main.js":
/*!***************************************!*\
  !*** ./src/scripts/mymodules/main.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst container = document.getElementById('content');\nconst main = document.createElement('main');\nmain.classList.add('main');\nconst mainVisual = document.createElement('div');\nmainVisual.classList.add('main__visual');\nconst mainText = document.createElement('div');\nmainText.classList.add('main__text');\nmainVisual.appendChild(mainText);\nconst mainHeading = document.createElement('h1');\nmainHeading.classList.add('main__heading');\nmainHeading.textContent = 'SushiTaro';\nmainText.appendChild(mainHeading);\nconst mainSubHeading = document.createElement('p');\nmainSubHeading.classList.add('main__sub-heading');\nmainSubHeading.textContent = 'Making sushi since 1960';\nmainText.appendChild(mainSubHeading);\n\nconst myMain = () => {\n  main.appendChild(mainVisual);\n  container.appendChild(main);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (myMain);\n\n//# sourceURL=webpack://webpack-demo/./src/scripts/mymodules/main.js?");

/***/ }),

/***/ "./src/scripts/mymodules/menu.js":
/*!***************************************!*\
  !*** ./src/scripts/mymodules/menu.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images_sushi_07_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/sushi_07.jpg */ \"./src/images/sushi_07.jpg\");\n/* harmony import */ var _images_sushi_01_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/sushi_01.jpg */ \"./src/images/sushi_01.jpg\");\n/* harmony import */ var _images_sushi_05_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/sushi_05.jpg */ \"./src/images/sushi_05.jpg\");\n/* harmony import */ var _images_sushi_10_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/sushi_10.jpg */ \"./src/images/sushi_10.jpg\");\n\n\n\n\nconst menu = document.createElement('div');\nmenu.classList.add('menu');\n\nconst createMenuTab = (dataId, text) => {\n  const tab = document.createElement('div');\n  tab.classList.add('menu__tab');\n  tab.setAttribute('data-id', dataId);\n  tab.textContent = text;\n  return tab;\n};\n\nconst menuTabs = document.createElement('div');\nmenuTabs.classList.add('menu__tabs');\nconst tabMenu = createMenuTab('food-drink', 'Menu');\ntabMenu.setAttribute('id', 'default-open');\nconst tabAbout = createMenuTab('about', 'About');\nconst tabContact = createMenuTab('contact', 'Contact');\nmenuTabs.innerHTML += tabMenu.outerHTML + tabAbout.outerHTML + tabContact.outerHTML;\n\nconst createMenuItem = (id, title) => {\n  const menuItem = document.createElement('div');\n  menuItem.classList.add('menu__item');\n  menuItem.setAttribute('id', id);\n  const heading = document.createElement('h3');\n  heading.classList.add('menu__item__heading');\n  heading.textContent = title;\n  const content = document.createElement('div');\n  content.classList.add('menu__item__content');\n  menuItem.appendChild(heading);\n  menuItem.appendChild(content);\n  return [menuItem, content];\n};\n\nconst menuContent = document.createElement('div');\nmenuContent.classList.add('menu__content');\nconst [aboutItem, aboutContent] = createMenuItem('about', 'About us');\nconst max80 = document.createElement('div');\nmax80.classList.add('max-80');\nconst aboutImg = document.createElement('img');\naboutImg.src = _images_sushi_07_jpg__WEBPACK_IMPORTED_MODULE_0__;\naboutImg.setAttribute('alt', 'Sushi Taro Set');\naboutImg.classList.add('menu__item__image');\nconst aboutPara = document.createElement('p');\naboutPara.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam exercitationem debitis ipsam temporibus doloremque laboriosam fugiat dicta iste. Asperiores laudantium fugit ut maiores omnis quos perspiciatis eaque sequi architecto commodi. Lorem ipsum dolor, sit amet consectetur adipisicing elit.';\nmax80.innerHTML += aboutImg.outerHTML + aboutPara.outerHTML;\naboutContent.appendChild(max80);\nmenuContent.appendChild(aboutItem);\n\nconst createMenuListItem = (img, title) => {\n  const listItem = document.createElement('li');\n  listItem.classList.add('menu__list__item');\n  const listImg = document.createElement('img');\n  listImg.src = img;\n  listImg.setAttribute('alt', title);\n  const listTitle = document.createElement('span');\n  listTitle.textContent = title;\n  listItem.appendChild(listImg);\n  listItem.appendChild(listTitle);\n  return listItem;\n};\n\nconst [foodItem, foodContent] = createMenuItem('food-drink', 'Menu');\nconst menuList = document.createElement('ul');\nmenuList.classList.add('menu__list');\nfoodContent.appendChild(menuList);\nconst UmeItem = createMenuListItem(_images_sushi_01_jpg__WEBPACK_IMPORTED_MODULE_1__, 'Sushi Ume Set $30');\nconst TakeItem = createMenuListItem(_images_sushi_05_jpg__WEBPACK_IMPORTED_MODULE_2__, 'Sushi Take Set $50');\nconst MatsuItem = createMenuListItem(_images_sushi_10_jpg__WEBPACK_IMPORTED_MODULE_3__, 'Sushi Matsu Set $70');\nmenuList.innerHTML += UmeItem.outerHTML + TakeItem.outerHTML + MatsuItem.outerHTML;\nmenuContent.appendChild(foodItem);\nconst [contactItem, contactContent] = createMenuItem('contact', 'Contact');\nconst msg = document.createElement('p');\nmsg.textContent = 'Feel free to contact us:';\nconst tel = document.createElement('p');\ntel.classList.add('tel');\nconst iconify = document.createElement('span');\niconify.classList.add('iconify');\niconify.setAttribute('data-icon', 'bi:telephone-fill');\niconify.setAttribute('data-inline', 'false');\ntel.innerHTML = \"\".concat(iconify.outerHTML, \" 000 - 111 - 0000\");\ncontactContent.innerHTML += msg.outerHTML + tel.outerHTML;\nmenuContent.appendChild(contactItem);\n\nconst myMenu = () => {\n  menu.appendChild(menuTabs);\n  menu.appendChild(menuContent);\n  document.querySelector('.main').appendChild(menu);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (myMenu);\n\n//# sourceURL=webpack://webpack-demo/./src/scripts/mymodules/menu.js?");

/***/ }),

/***/ "./src/scripts/mymodules/tab.js":
/*!**************************************!*\
  !*** ./src/scripts/mymodules/tab.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst openTab = id => {\n  document.querySelectorAll('.menu__tab').forEach(tab => {\n    tab.classList.remove('active');\n  });\n  document.querySelectorAll('.menu__item').forEach(item => {\n    item.classList.remove('active');\n  });\n  document.getElementById(id).classList.add('active');\n  document.querySelector(\"div[data-id='\".concat(id, \"']\")).classList.add('active');\n};\n\nconst addTabEvent = () => {\n  document.querySelectorAll('.menu__tab').forEach(tab => {\n    tab.addEventListener('click', e => {\n      openTab(e.target.getAttribute('data-id'));\n    });\n  });\n  document.getElementById('default-open').click();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (addTabEvent);\n\n//# sourceURL=webpack://webpack-demo/./src/scripts/mymodules/tab.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss ***!
  \***********************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_sushi_11_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/sushi_11.jpg */ \"./src/images/sushi_11.jpg\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Kristi&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_sushi_11_jpg__WEBPACK_IMPORTED_MODULE_2__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::after,\\n*::before {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: inherit;\\n}\\n\\nhtml {\\n  scroll-behavior: smooth;\\n}\\n\\nbody {\\n  box-sizing: border-box;\\n}\\n\\nul {\\n  list-style-type: none;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\na {\\n  text-decoration: none;\\n  color: #353031;\\n  transition: all 0.4s;\\n}\\na:hover {\\n  opacity: 0.8;\\n}\\n\\nimg {\\n  max-width: 100%;\\n}\\n\\ninput,\\nbutton,\\ntextarea {\\n  margin: 0;\\n  padding: 0;\\n  background: none;\\n  border: none;\\n  border-radius: 0;\\n  outline: none;\\n  appearance: none;\\n}\\n\\nselect {\\n  margin: 0;\\n  padding: 0;\\n  background: none;\\n  border: none;\\n  border-radius: 0;\\n  outline: none;\\n  appearance: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\nhtml {\\n  font-size: 50%;\\n}\\n@media only screen and (min-width: 768px) {\\n  html {\\n    font-size: 62.5%;\\n  }\\n}\\n\\nbody {\\n  font-family: \\\"Lato\\\", sans-serif;\\n  line-height: 1.7;\\n  font-size: 1.6rem;\\n  letter-spacing: 0.2px;\\n  color: #353031;\\n}\\n\\np {\\n  font-size: 1.5rem;\\n}\\n\\n.header {\\n  background: #fff;\\n  width: 100%;\\n  position: relative;\\n  z-index: 5;\\n}\\n.header__wrap {\\n  max-width: 90%;\\n  height: 6rem;\\n  margin: 0 auto;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n@media only screen and (min-width: 960px) {\\n  .header__wrap {\\n    width: 90%;\\n    max-width: 100rem;\\n    padding: 1rem 0;\\n  }\\n}\\n.header__logo {\\n  font-family: \\\"Lora\\\", serif;\\n  font-weight: bold;\\n  text-transform: uppercase;\\n  font-size: 2.4rem;\\n}\\n\\n.main__visual {\\n  height: 80vh;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat;\\n  background-position: center;\\n  background-size: cover;\\n  margin-top: -6rem;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  position: relative;\\n}\\n.main__visual::after {\\n  content: \\\"\\\";\\n  display: block;\\n  width: 100%;\\n  height: 100%;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  background: rgba(53, 48, 49, 0.3);\\n  z-index: 0;\\n}\\n.main__text {\\n  position: relative;\\n  z-index: 5;\\n  color: #fff;\\n  text-align: center;\\n  padding-top: 6rem;\\n}\\n.main__heading {\\n  font-family: \\\"Kristi\\\", cursive;\\n  font-size: 14rem;\\n  line-height: 1;\\n  margin-bottom: 0;\\n}\\n.main__sub-heading {\\n  font-family: \\\"Lora\\\", serif;\\n  font-size: 1.9rem;\\n  letter-spacing: 3.5px;\\n  text-transform: uppercase;\\n  margin-top: -1rem;\\n}\\n\\n@media only screen and (min-width: 960px) {\\n  .menu {\\n    min-height: 44vh;\\n  }\\n}\\n.menu__heading {\\n  text-align: center;\\n  font-family: \\\"Lora\\\", serif;\\n  text-transform: uppercase;\\n  margin: 0 auto 3rem;\\n  font-size: 3.2rem;\\n}\\n.menu__tabs {\\n  background: #fafafa;\\n  display: flex;\\n  text-align: center;\\n  align-items: center;\\n  justify-content: space-between;\\n  max-width: 120rem;\\n  margin: 0 auto;\\n}\\n.menu__tab {\\n  padding: 2rem;\\n  flex: 1;\\n  font-size: 1.8rem;\\n  text-transform: uppercase;\\n  font-weight: bold;\\n  color: #a68b7c;\\n  border: 1px solid #a68b7c;\\n  transition: all 0.4s;\\n  cursor: pointer;\\n}\\n.menu__tab:not(:first-child) {\\n  border-left: none;\\n}\\n.menu__tab.active {\\n  background: #a68b7c;\\n  color: #fff;\\n}\\n.menu__content {\\n  width: 90%;\\n  margin: 0 auto;\\n}\\n@media only screen and (min-width: 960px) {\\n  .menu__content {\\n    max-width: 120rem;\\n  }\\n}\\n.menu__item {\\n  display: none;\\n  padding: 1rem;\\n}\\n@media only screen and (min-width: 960px) {\\n  .menu__item {\\n    padding: 0;\\n  }\\n}\\n.menu__item.active {\\n  display: block;\\n}\\n.menu__item__heading {\\n  font-family: \\\"Kristi\\\", cursive;\\n  font-size: 4rem;\\n  text-align: center;\\n  margin: 0 auto 2rem;\\n}\\n@media only screen and (min-width: 960px) {\\n  .menu__item__heading {\\n    font-size: 6rem;\\n  }\\n}\\n.menu__item__content {\\n  width: 96%;\\n  margin: 0 auto;\\n  text-align: center;\\n}\\n.menu__item__content p {\\n  font-size: 1.8rem;\\n  margin-bottom: 1rem;\\n}\\n.menu__item__content .tel {\\n  font-size: 4.8rem;\\n  font-family: \\\"Lora\\\", serif;\\n  font-weight: bold;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.menu__item__content .tel .iconify {\\n  margin-right: 1rem;\\n  font-size: 3.4rem;\\n  display: none;\\n}\\n@media only screen and (min-width: 768px) {\\n  .menu__item__content .tel .iconify {\\n    display: inline;\\n  }\\n}\\n@media only screen and (min-width: 960px) {\\n  .menu__item__content {\\n    margin: 0 auto;\\n    width: 100%;\\n  }\\n  .menu__item__content .max-80 {\\n    max-width: 80rem;\\n    margin: 0 auto;\\n  }\\n}\\n.menu__item__image {\\n  width: 100%;\\n  margin: 0 auto 1rem;\\n}\\n@media only screen and (min-width: 960px) {\\n  .menu__list {\\n    display: flex;\\n  }\\n}\\n.menu__list__item {\\n  font-size: 1.8rem;\\n  font-family: \\\"Lora\\\", serif;\\n  text-transform: uppercase;\\n  font-weight: bold;\\n  margin: 0 auto 3rem;\\n}\\n@media only screen and (min-width: 960px) {\\n  .menu__list__item:not(:last-child) {\\n    margin: 0 3rem 0 0;\\n  }\\n}\\n\\n.footer {\\n  font-size: 1.4rem;\\n  color: #a68b7c;\\n  text-align: center;\\n  padding: 1rem 0;\\n}\\n.footer a {\\n  color: #a68b7c;\\n  text-decoration: underline;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/scss/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ (function(module) {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://webpack-demo/./src/scss/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/images/sushi_01.jpg":
/*!*********************************!*\
  !*** ./src/images/sushi_01.jpg ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/095968105020577200e4.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/sushi_01.jpg?");

/***/ }),

/***/ "./src/images/sushi_05.jpg":
/*!*********************************!*\
  !*** ./src/images/sushi_05.jpg ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/926a881cf3aad222dca7.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/sushi_05.jpg?");

/***/ }),

/***/ "./src/images/sushi_07.jpg":
/*!*********************************!*\
  !*** ./src/images/sushi_07.jpg ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/e4986881aa7e8d5e1c73.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/sushi_07.jpg?");

/***/ }),

/***/ "./src/images/sushi_10.jpg":
/*!*********************************!*\
  !*** ./src/images/sushi_10.jpg ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/f65368bf33ed7e66a2c6.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/sushi_10.jpg?");

/***/ }),

/***/ "./src/images/sushi_11.jpg":
/*!*********************************!*\
  !*** ./src/images/sushi_11.jpg ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/5df353a9dfd9533d1777.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/images/sushi_11.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/scripts/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;