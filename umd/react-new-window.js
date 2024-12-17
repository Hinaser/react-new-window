!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],t):(e=e||self).ReactNewWindow=t(e.React,e.ReactDOM)}(this,function(e,t){"use strict";function o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function n(e,t){return e(t={exports:{}},t.exports),t.exports}e=e&&e.hasOwnProperty("default")?e.default:e,t=t&&t.hasOwnProperty("default")?t.default:t;var r=o(n(function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports})),i=n(function(e){function t(o){"@babel/helpers - typeof";return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(o)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports});o(i);var s=n(function(e){var t=i.default;e.exports=function(e,o){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,o||"default");if("object"!=t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===o?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports});o(s);var u=n(function(e){var t=i.default;e.exports=function(e){var o=s(e,"string");return"symbol"==t(o)?o:o+""},e.exports.__esModule=!0,e.exports.default=e.exports});o(u);var c=o(n(function(e){function t(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,u(n.key),n)}}e.exports=function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports})),l=n(function(e){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports});o(l);var a=o(n(function(e){var t=i.default;e.exports=function(e,o){if(o&&("object"==t(o)||"function"==typeof o))return o;if(void 0!==o)throw new TypeError("Derived constructors may only return object or undefined");return l(e)},e.exports.__esModule=!0,e.exports.default=e.exports})),d=o(n(function(e){function t(o){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,t(o)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})),p=n(function(e){function t(o,n){return e.exports=t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,t(o,n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports});o(p);var f=o(n(function(e){e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports}));function w(e,t,o){return t=d(t),a(e,function(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return function(){return!!e}()}()?Reflect.construct(t,o||[],d(e).constructor):t.apply(e,o))}var h={url:"",name:"",title:"",features:{width:"600px",height:"640px"},onBlock:null,onOpen:null,onUnload:null,center:"parent",copyStyles:!0};return function(e){function o(e){var t;return r(this,o),(t=w(this,o,[e])).props=Object.assign({},h,e),t.container=document.createElement("div"),t.window=null,t.windowCheckerInterval=null,t.released=!1,t.state={mounted:0},console.error("constructor called"),t}return f(o,e),c(o,[{key:"render",value:function(){return console.error("render called",this.state,this.window,this.windowCheckerInterval),this.state.mounted?t.createPortal(this.props.children,this.container):null}},{key:"componentDidMount",value:function(){console.error("componentDidMount called",this.state,this.window,this.windowCheckerInterval),this.released=!1,this.openChild(),this.setState(function(e){return{mounted:e.mounted+1}})}},{key:"componentWillUnmount",value:function(){console.error("componentWillUnmount called",this.window,this.windowCheckerInterval),this.window&&(this.window.close(),this.window=null),this.release()}},{key:"openChild",value:function(){var e,t=this,o=this.props,n=o.url,r=o.title,i=o.name,s=o.features,u=o.onBlock,c=o.onOpen,l=o.center;if("string"!=typeof l||void 0!==s.width&&void 0!==s.height){if("parent"===l)s.left=window.top.outerWidth/2+window.top.screenX-s.width/2,s.top=window.top.outerHeight/2+window.top.screenY-s.height/2;else if("screen"===l){var a=void 0!==window.screenLeft?window.screenLeft:window.screen.left,d=void 0!==window.screenTop?window.screenTop:window.screen.top,p=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:window.screen.width,f=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:window.screen.height;s.left=p/2-s.width/2+a,s.top=f/2-s.height/2+d}}else console.warn("width and height window features must be present when a center prop is provided");this.window=window.open(n,i,(e=s,Object.keys(e).reduce(function(t,o){var n=e[o];return"boolean"==typeof n?t.push("".concat(o,"=").concat(n?"yes":"no")):t.push("".concat(o,"=").concat(n)),t},[]).join(","))),this.windowCheckerInterval=setInterval(function(){t.window&&!t.window.closed||t.release()},50),this.window?(this.window.document.title=r,this.window.document.body.appendChild(this.container),this.props.copyStyles&&setTimeout(function(){return e=document,o=t.window.document,void Array.from(e.styleSheets).forEach(function(t){var n;try{n=t.cssRules}catch(e){console.error(e)}var r=n&&Object.values(n).some(function(e){return e instanceof CSSFontFaceRule})&&t.href;if(n&&!r){var i=e.createElement("style");Array.from(t.cssRules).forEach(function(t){var o=t.cssText,n=t.type,r=o;[3,5].includes(n)&&(r=o.split("url(").map(function(e){return"/"===e[1]?"".concat(e.slice(0,1)).concat(window.location.origin).concat(e.slice(1)):e}).join("url(")),i.appendChild(e.createTextNode(r))}),o.head.appendChild(i)}else if(t.href){var s=e.createElement("link");s.rel="stylesheet",s.href=t.href,o.head.appendChild(s)}});var e,o},0),"function"==typeof c&&c(this.window),this.window.addEventListener("beforeunload",function(){return t.release()})):"function"==typeof u?u(null):console.warn("A new window could not be opened. Maybe it was blocked.")}},{key:"release",value:function(){if(!this.released){this.released=!0,this.windowCheckerInterval&&clearTimeout(this.windowCheckerInterval);var e=this.props.onUnload;"function"==typeof e&&e(null)}}}])}(e.PureComponent)});
//# sourceMappingURL=react-new-window.js.map
