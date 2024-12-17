import React from"react";import ReactDOM from"react-dom";function unwrapExports(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}var classCallCheck=createCommonjsModule(function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports}),_classCallCheck=unwrapExports(classCallCheck),_typeof_1=createCommonjsModule(function(e){function t(o){"@babel/helpers - typeof";return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(o)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports});unwrapExports(_typeof_1);var toPrimitive_1=createCommonjsModule(function(e){var t=_typeof_1.default;e.exports=function(e,o){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,o||"default");if("object"!=t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===o?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports});unwrapExports(toPrimitive_1);var toPropertyKey_1=createCommonjsModule(function(e){var t=_typeof_1.default;e.exports=function(e){var o=toPrimitive_1(e,"string");return"symbol"==t(o)?o:o+""},e.exports.__esModule=!0,e.exports.default=e.exports});unwrapExports(toPropertyKey_1);var createClass=createCommonjsModule(function(e){function t(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,toPropertyKey_1(n.key),n)}}e.exports=function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports}),_createClass=unwrapExports(createClass),assertThisInitialized=createCommonjsModule(function(e){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports});unwrapExports(assertThisInitialized);var possibleConstructorReturn=createCommonjsModule(function(e){var t=_typeof_1.default;e.exports=function(e,o){if(o&&("object"==t(o)||"function"==typeof o))return o;if(void 0!==o)throw new TypeError("Derived constructors may only return object or undefined");return assertThisInitialized(e)},e.exports.__esModule=!0,e.exports.default=e.exports}),_possibleConstructorReturn=unwrapExports(possibleConstructorReturn),getPrototypeOf=createCommonjsModule(function(e){function t(o){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,t(o)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}),_getPrototypeOf=unwrapExports(getPrototypeOf),setPrototypeOf=createCommonjsModule(function(e){function t(o,n){return e.exports=t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,t(o,n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports});unwrapExports(setPrototypeOf);var inherits=createCommonjsModule(function(e){e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&setPrototypeOf(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports}),_inherits=unwrapExports(inherits),defineProperty=createCommonjsModule(function(e){e.exports=function(e,t,o){return(t=toPropertyKey_1(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},e.exports.__esModule=!0,e.exports.default=e.exports}),_defineProperty=unwrapExports(defineProperty);function _callSuper(e,t,o){return t=_getPrototypeOf(t),_possibleConstructorReturn(e,_isNativeReflectConstruct()?Reflect.construct(t,o||[],_getPrototypeOf(e).constructor):t.apply(e,o))}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}var NewWindow=function(e){function t(e){var o;return _classCallCheck(this,t),(o=_callSuper(this,t,[e])).container=document.createElement("div"),o.window=null,o.unmountDelayTimeout=null,o.released=!1,o.state={mounted:0},o}return _inherits(t,e),_createClass(t,[{key:"render",value:function(){return this.state.mounted?ReactDOM.createPortal(this.props.children,this.container):null}},{key:"componentDidMount",value:function(){this.unmountDelayTimeout&&(clearTimeout(this.unmountDelayTimeout),this.unmountDelayTimeout=null),this.released=!1,this.openChild(),this.setState(function(e){return{mounted:e.mounted+1}})}},{key:"componentWillUnmount",value:function(){var e=this;this.unmountDelayTimeout=setTimeout(function(){e.window&&(e.window.close(),e.window=null),e.release()},13)}},{key:"openChild",value:function(){var e=this,t=this.props,o=t.url,n=t.title,r=t.name,i=t.features,s=t.onBlock,u=t.onOpen,l=t.center;if("string"!=typeof l||void 0!==i.width&&void 0!==i.height){if("parent"===l)i.left=window.top.outerWidth/2+window.top.screenX-i.width/2,i.top=window.top.outerHeight/2+window.top.screenY-i.height/2;else if("screen"===l){var c=void 0!==window.screenLeft?window.screenLeft:window.screen.left,a=void 0!==window.screenTop?window.screenTop:window.screen.top,p=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:window.screen.width,d=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:window.screen.height;i.left=p/2-i.width/2+c,i.top=d/2-i.height/2+a}}else console.warn("width and height window features must be present when a center prop is provided");this.window=window.open(o,r,toWindowFeatures(i));var f=window.setInterval(function(){e.window&&!e.window.closed||(f&&window.clearInterval(f),e.release())},50);this.window?(this.window.document.title=n,this.window.document.body.appendChild(this.container),this.props.copyStyles&&setTimeout(function(){return copyStyles(document,e.window.document)},0),"function"==typeof u&&u(this.window),this.window.addEventListener("beforeunload",function(){e.release()})):"function"==typeof s?s(null):console.warn("A new window could not be opened. Maybe it was blocked.")}},{key:"release",value:function(){if(!this.released){this.released=!0;var e=this.props.onUnload;"function"==typeof e&&e(null)}}}])}(React.PureComponent);function copyStyles(e,t){Array.from(e.styleSheets).forEach(function(o){var n;try{n=o.cssRules}catch(e){console.warn(e)}var r=n&&Object.values(n).some(function(e){return e instanceof CSSFontFaceRule})&&o.href;if(n&&!r){var i=e.createElement("style");Array.from(o.cssRules).forEach(function(t){var o=t.cssText,n=t.type,r=o;[3,5].includes(n)&&(r=o.split("url(").map(function(e){return"/"===e[1]?"".concat(e.slice(0,1)).concat(window.location.origin).concat(e.slice(1)):e}).join("url(")),i.appendChild(e.createTextNode(r))}),t.head.appendChild(i)}else if(o.href){var s=e.createElement("link");s.rel="stylesheet",s.href=o.href,t.head.appendChild(s)}})}function toWindowFeatures(e){return Object.keys(e).reduce(function(t,o){var n=e[o];return"boolean"==typeof n?t.push("".concat(o,"=").concat(n?"yes":"no")):t.push("".concat(o,"=").concat(n)),t},[]).join(",")}_defineProperty(NewWindow,"defaultProps",{url:"",name:"",title:"",features:{width:"600px",height:"640px"},onBlock:null,onOpen:null,onUnload:null,center:"parent",copyStyles:!0});export default NewWindow;
//# sourceMappingURL=react-new-window.js.map
