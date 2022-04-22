webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/Card/Menu/Menu.tsx":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/Menu.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Menu = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar EIcon_1 = __webpack_require__(/*! ../../../../enums/EIcon */ \"./src/enums/EIcon.tsx\");\r\nvar getRandomIndex_1 = __webpack_require__(/*! ../../../../utils/react/getRandomIndex */ \"./src/utils/react/getRandomIndex.ts\");\r\nvar Dropdown_1 = __webpack_require__(/*! ../../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../Icon/Icon */ \"./src/shared/Icon/Icon.tsx\");\r\nvar GenericList_1 = __webpack_require__(/*! ../../GenericList */ \"./src/shared/CardsList/GenericList.tsx\");\r\nvar menu_css_1 = __importDefault(__webpack_require__(/*! ./menu.css */ \"./src/shared/CardsList/Card/Menu/menu.css\"));\r\nvar list = [\r\n    {\r\n        text: 'Комментарии',\r\n        className: 'menuItem',\r\n        href: '#comments'\r\n    },\r\n    {\r\n        text: 'Комментарии',\r\n        className: 'menuItem',\r\n        href: '#comments'\r\n    },\r\n    {\r\n        text: 'Комментарии',\r\n        className: 'menuItem',\r\n        href: '#comments'\r\n    }\r\n].map(getRandomIndex_1.generateId);\r\nfunction Menu() {\r\n    var _a = react_1.default.useState(false), open = _a[0], isOpen = _a[1];\r\n    return (react_1.default.createElement(\"div\", { className: menu_css_1.default.menu },\r\n        react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement(\"button\", { className: menu_css_1.default.menuButton, onClick: function () { return isOpen(!open); } },\r\n                react_1.default.createElement(Icon_1.Icon, { name: EIcon_1.EIcon.Menu })) },\r\n            react_1.default.createElement(\"div\", { className: menu_css_1.default.dropdown },\r\n                react_1.default.createElement(GenericList_1.GenericList, { list: list }),\r\n                react_1.default.createElement(\"button\", { onClick: function () { return isOpen(!open); }, className: menu_css_1.default.closeButton }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\")))));\r\n}\r\nexports.Menu = Menu;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/Icon/Icon.tsx":
/*!**********************************!*\
  !*** ./src/shared/Icon/Icon.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Icon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar EIcon_1 = __webpack_require__(/*! ../../enums/EIcon */ \"./src/enums/EIcon.tsx\");\r\nvar Icons_1 = __webpack_require__(/*! ./Icons */ \"./src/shared/Icon/Icons/index.ts\");\r\nvar CommentsIcon_1 = __webpack_require__(/*! ./Icons/CommentsIcon */ \"./src/shared/Icon/Icons/CommentsIcon.tsx\");\r\nvar ComplainIcon_1 = __webpack_require__(/*! ./Icons/ComplainIcon */ \"./src/shared/Icon/Icons/ComplainIcon.tsx\");\r\nvar HideIcon_1 = __webpack_require__(/*! ./Icons/HideIcon */ \"./src/shared/Icon/Icons/HideIcon.tsx\");\r\nvar SaveIcon_1 = __webpack_require__(/*! ./Icons/SaveIcon */ \"./src/shared/Icon/Icons/SaveIcon.tsx\");\r\nvar ShareIcon_1 = __webpack_require__(/*! ./Icons/ShareIcon */ \"./src/shared/Icon/Icons/ShareIcon.tsx\");\r\nfunction Icon(_a) {\r\n    var name = _a.name, size = _a.size;\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        name === EIcon_1.EIcon.Comment && react_1.default.createElement(CommentsIcon_1.CommentsIcon, { style: { height: size + \"px\" } }),\r\n        name === EIcon_1.EIcon.Complain && react_1.default.createElement(ComplainIcon_1.ComplainIcon, null),\r\n        name === EIcon_1.EIcon.Hide && react_1.default.createElement(HideIcon_1.HideIcon, null),\r\n        name === EIcon_1.EIcon.Menu && react_1.default.createElement(Icons_1.MenuIcon, null),\r\n        name === EIcon_1.EIcon.Save && react_1.default.createElement(SaveIcon_1.SaveIcon, null),\r\n        name === EIcon_1.EIcon.Share && react_1.default.createElement(ShareIcon_1.ShareIcon, null)));\r\n}\r\nexports.Icon = Icon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/Icon.tsx?");

/***/ })

})