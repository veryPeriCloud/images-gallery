/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/aos/dist/aos.js":
/*!**************************************!*\
  !*** ./node_modules/aos/dist/aos.js ***!
  \**************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),s=o(c),f=n(8),d=o(f),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,x),(0,b.default)(w,x.once),w},O=function(){w=(0,h.default)(),j()},M=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},S=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},_=function(e){x=i(x,e),w=(0,h.default)();var t=document.all&&!window.atob;return S(x.disable)||t?M():(x.disableMutationObserver||d.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),x.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){j(!0)}):document.addEventListener(x.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,x.once)},x.throttleDelay)),x.disableMutationObserver||d.default.ready("[data-aos]",O),w)};e.exports={init:_,refresh:j,refreshHard:O}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(f,t),M?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=O();return c(e)?d(e):void(h=setTimeout(f,a(e)))}function d(e){return h=void 0,_&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),o(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,k=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(s);return t=u(t)||0,i(n)&&(M=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(s);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return f;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?f:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",f=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(f,t),M?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function s(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=j();return s(e)?d(e):void(h=setTimeout(f,u(e)))}function d(e){return h=void 0,_&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=s(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),i(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,O=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(M=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==f}function a(e){if("number"==typeof e)return e;if(r(e))return s;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?s:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",s=NaN,f="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,o=void 0,i=void 0;for(t=0;t<e.length;t+=1){if(o=e[t],o.dataset&&o.dataset.aos)return!0;if(i=o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!o()}function r(e,t){var n=window.document,i=o(),r=new i(a);u=t,r.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes),i=t.concat(o);if(n(i))return u()})}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){};t.default={isSupported:i,ready:r}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});

/***/ }),

/***/ "./node_modules/content-type/index.js":
/*!********************************************!*\
  !*** ./node_modules/content-type/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * RegExp to match *( ";" parameter ) in RFC 7231 sec 3.1.1.1
 *
 * parameter     = token "=" ( token / quoted-string )
 * token         = 1*tchar
 * tchar         = "!" / "#" / "$" / "%" / "&" / "'" / "*"
 *               / "+" / "-" / "." / "^" / "_" / "`" / "|" / "~"
 *               / DIGIT / ALPHA
 *               ; any VCHAR, except delimiters
 * quoted-string = DQUOTE *( qdtext / quoted-pair ) DQUOTE
 * qdtext        = HTAB / SP / %x21 / %x23-5B / %x5D-7E / obs-text
 * obs-text      = %x80-FF
 * quoted-pair   = "\" ( HTAB / SP / VCHAR / obs-text )
 */
var PARAM_REGEXP = /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g
var TEXT_REGEXP = /^[\u000b\u0020-\u007e\u0080-\u00ff]+$/
var TOKEN_REGEXP = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/

/**
 * RegExp to match quoted-pair in RFC 7230 sec 3.2.6
 *
 * quoted-pair = "\" ( HTAB / SP / VCHAR / obs-text )
 * obs-text    = %x80-FF
 */
var QESC_REGEXP = /\\([\u000b\u0020-\u00ff])/g

/**
 * RegExp to match chars that must be quoted-pair in RFC 7230 sec 3.2.6
 */
var QUOTE_REGEXP = /([\\"])/g

/**
 * RegExp to match type in RFC 7231 sec 3.1.1.1
 *
 * media-type = type "/" subtype
 * type       = token
 * subtype    = token
 */
var TYPE_REGEXP = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/

/**
 * Module exports.
 * @public
 */

exports.format = format
exports.parse = parse

/**
 * Format object to media type.
 *
 * @param {object} obj
 * @return {string}
 * @public
 */

function format (obj) {
  if (!obj || typeof obj !== 'object') {
    throw new TypeError('argument obj is required')
  }

  var parameters = obj.parameters
  var type = obj.type

  if (!type || !TYPE_REGEXP.test(type)) {
    throw new TypeError('invalid type')
  }

  var string = type

  // append parameters
  if (parameters && typeof parameters === 'object') {
    var param
    var params = Object.keys(parameters).sort()

    for (var i = 0; i < params.length; i++) {
      param = params[i]

      if (!TOKEN_REGEXP.test(param)) {
        throw new TypeError('invalid parameter name')
      }

      string += '; ' + param + '=' + qstring(parameters[param])
    }
  }

  return string
}

/**
 * Parse media type to object.
 *
 * @param {string|object} string
 * @return {Object}
 * @public
 */

function parse (string) {
  if (!string) {
    throw new TypeError('argument string is required')
  }

  // support req/res-like objects as argument
  var header = typeof string === 'object'
    ? getcontenttype(string)
    : string

  if (typeof header !== 'string') {
    throw new TypeError('argument string is required to be a string')
  }

  var index = header.indexOf(';')
  var type = index !== -1
    ? header.substr(0, index).trim()
    : header.trim()

  if (!TYPE_REGEXP.test(type)) {
    throw new TypeError('invalid media type')
  }

  var obj = new ContentType(type.toLowerCase())

  // parse parameters
  if (index !== -1) {
    var key
    var match
    var value

    PARAM_REGEXP.lastIndex = index

    while ((match = PARAM_REGEXP.exec(header))) {
      if (match.index !== index) {
        throw new TypeError('invalid parameter format')
      }

      index += match[0].length
      key = match[1].toLowerCase()
      value = match[2]

      if (value[0] === '"') {
        // remove quotes and escapes
        value = value
          .substr(1, value.length - 2)
          .replace(QESC_REGEXP, '$1')
      }

      obj.parameters[key] = value
    }

    if (index !== header.length) {
      throw new TypeError('invalid parameter format')
    }
  }

  return obj
}

/**
 * Get content-type from req/res objects.
 *
 * @param {object}
 * @return {Object}
 * @private
 */

function getcontenttype (obj) {
  var header

  if (typeof obj.getHeader === 'function') {
    // res-like
    header = obj.getHeader('content-type')
  } else if (typeof obj.headers === 'object') {
    // req-like
    header = obj.headers && obj.headers['content-type']
  }

  if (typeof header !== 'string') {
    throw new TypeError('content-type header is missing from object')
  }

  return header
}

/**
 * Quote a string if necessary.
 *
 * @param {string} val
 * @return {string}
 * @private
 */

function qstring (val) {
  var str = String(val)

  // no need to quote tokens
  if (TOKEN_REGEXP.test(str)) {
    return str
  }

  if (str.length > 0 && !TEXT_REGEXP.test(str)) {
    throw new TypeError('invalid parameter value')
  }

  return '"' + str.replace(QUOTE_REGEXP, '\\$1') + '"'
}

/**
 * Class to represent a content type.
 * @private
 */
function ContentType (type) {
  this.parameters = Object.create(null)
  this.type = type
}


/***/ }),

/***/ "./node_modules/fslightbox/index.js":
/*!******************************************!*\
  !*** ./node_modules/fslightbox/index.js ***!
  \******************************************/
/***/ ((module) => {

!function(e,t){if(true)module.exports=t();else { var o, n; }}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o,r="fslightbox-",i="".concat(r,"styles"),s="".concat(r,"cursor-grabbing"),c="".concat(r,"full-dimension"),a="".concat(r,"flex-centered"),l="".concat(r,"open"),u="".concat(r,"transform-transition"),d="".concat(r,"absoluted"),p="".concat(r,"slide-btn"),f="".concat(p,"-container"),h="".concat(r,"fade-in"),m="".concat(r,"fade-out"),g=h+"-strong",v=m+"-strong",b="".concat(r,"opacity-"),x="".concat(b,"1"),y="".concat(r,"source");function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}"object"===("undefined"==typeof document?"undefined":S(document))&&((o=document.createElement("style")).className=i,o.appendChild(document.createTextNode(".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .3s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .3s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);touch-action:pinch-zoom;z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightbox-loader{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightbox-loader div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightbox-loader 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightbox-loader div:nth-child(1){animation-delay:-.45s}.fslightbox-loader div:nth-child(2){animation-delay:-.3s}.fslightbox-loader div:nth-child(3){animation-delay:-.15s}@keyframes fslightbox-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0}")),document.head.appendChild(o));function w(e){var t,n=e.props,o=0,r={};this.getSourceTypeFromLocalStorageByUrl=function(e){return t[e]?t[e]:i(e)},this.handleReceivedSourceTypeForUrl=function(e,n){!1===r[n]&&(o--,"invalid"!==e?r[n]=e:delete r[n],0===o&&(!function(e,t){for(var n in t)e[n]=t[n]}(t,r),localStorage.setItem("fslightbox-types",JSON.stringify(t))))};var i=function(e){o++,r[e]=!1};n.disableLocalStorage?(this.getSourceTypeFromLocalStorageByUrl=function(){},this.handleReceivedSourceTypeForUrl=function(){}):(t=JSON.parse(localStorage.getItem("fslightbox-types")))||(t={},this.getSourceTypeFromLocalStorageByUrl=i)}function L(e,t,n,o){var r=e.data,i=e.elements.sources,s=n/o,c=0;this.adjustSize=function(){if((c=r.maxSourceWidth/s)<r.maxSourceHeight)return n<r.maxSourceWidth&&(c=o),a();c=o>r.maxSourceHeight?r.maxSourceHeight:o,a()};var a=function(){i[t].style.width=c*s+"px",i[t].style.height=c+"px"}}function C(e,t){var n=this,o=e.collections.sourceSizers,r=e.elements,i=r.sourceAnimationWrappers,s=r.sourceMainWrappers,c=r.sources,a=e.resolve;function l(e,n){o[t]=a(L,[t,e,n]),o[t].adjustSize()}this.runActions=function(e,o){c[t].classList.add(x),i[t].classList.add(g),s[t].removeChild(s[t].firstChild),l(e,o),n.runActions=l}}function F(e,t){var n,o=this,r=e.elements.sources,i=e.props,s=(0,e.resolve)(C,[t]);this.handleImageLoad=function(e){var t=e.target,n=t.naturalWidth,o=t.naturalHeight;s.runActions(n,o)},this.handleVideoLoad=function(e){var t=e.target,o=t.videoWidth,r=t.videoHeight;n=!0,s.runActions(o,r)},this.handleNotMetaDatedVideoLoad=function(){n||o.handleYoutubeLoad()},this.handleYoutubeLoad=function(){var e=1920,t=1080;i.maxYoutubeDimensions&&(e=i.maxYoutubeDimensions.width,t=i.maxYoutubeDimensions.height),s.runActions(e,t)},this.handleCustomLoad=function(){setTimeout((function(){var e=r[t];s.runActions(e.offsetWidth,e.offsetHeight)}))}}function A(e,t,n){var o=e.elements.sources,r=e.props.customClasses,i=r[t]?r[t]:"";o[t].className=n+" "+i}function I(e,t){var n=e.elements.sources,o=e.props.customAttributes;for(var r in o[t])n[t].setAttribute(r,o[t][r])}function T(e,t){var n=e.collections.sourceLoadHandlers,o=e.elements,r=o.sources,i=o.sourceAnimationWrappers,s=e.props.sources;r[t]=document.createElement("img"),A(e,t,y),r[t].src=s[t],r[t].onload=n[t].handleImageLoad,I(e,t),i[t].appendChild(r[t])}function E(e,t){var n=e.collections.sourceLoadHandlers,o=e.elements,r=o.sources,i=o.sourceAnimationWrappers,s=e.props,c=s.sources,a=s.videosPosters;r[t]=document.createElement("video"),A(e,t,y),r[t].src=c[t],r[t].onloadedmetadata=function(e){n[t].handleVideoLoad(e)},r[t].controls=!0,I(e,t),a[t]&&(r[t].poster=a[t]);var l=document.createElement("source");l.src=c[t],r[t].appendChild(l),setTimeout(n[t].handleNotMetaDatedVideoLoad,3e3),i[t].appendChild(r[t])}function N(e,t){var n=e.collections.sourceLoadHandlers,o=e.elements,i=o.sources,s=o.sourceAnimationWrappers,c=e.props.sources;i[t]=document.createElement("iframe"),A(e,t,"".concat(y," ").concat(r,"youtube-iframe")),i[t].src="https://www.youtube.com/embed/".concat(c[t].match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2],"?enablejsapi=1"),i[t].allowFullscreen=!0,I(e,t),s[t].appendChild(i[t]),n[t].handleYoutubeLoad()}function W(e,t){var n=e.collections.sourceLoadHandlers,o=e.elements,r=o.sources,i=o.sourceAnimationWrappers,s=e.props.sources;r[t]=s[t],A(e,t,"".concat(r[t].className," ").concat(y)),i[t].appendChild(r[t]),n[t].handleCustomLoad()}function z(e,t){var n=e.elements,o=n.sources,i=n.sourceAnimationWrappers,s=n.sourceMainWrappers;e.props.sources;o[t]=document.createElement("div"),o[t].className="".concat(r,"invalid-file-wrapper ").concat(a),o[t].innerHTML="Invalid source",i[t].classList.add(g),i[t].appendChild(o[t]),s[t].removeChild(s[t].firstChild)}function M(e){var t=e.collections,n=t.sourceLoadHandlers,o=t.sourcesRenderFunctions,r=e.core.sourceDisplayFacade,i=e.resolve;this.runActionsForSourceTypeAndIndex=function(t,s){var c;switch("invalid"!==t&&(n[s]=i(F,[s])),t){case"image":c=T;break;case"video":c=E;break;case"youtube":c=N;break;case"custom":c=W;break;default:c=z}o[s]=function(){return c(e,s)},r.displaySourcesWhichShouldBeDisplayed()}}function P(){var e,t,n,o={isUrlYoutubeOne:function(e){var t=document.createElement("a");return t.href=e,"www.youtube.com"===t.hostname},getTypeFromResponseContentType:function(e){return e.slice(0,e.indexOf("/"))}};function r(){if(4!==n.readyState){if(2===n.readyState){var e;switch(o.getTypeFromResponseContentType(n.getResponseHeader("content-type"))){case"image":e="image";break;case"video":e="video";break;default:e="invalid"}n.onreadystatechange=null,n.abort(),t(e)}}else t("invalid")}this.setUrlToCheck=function(t){e=t},this.getSourceType=function(i){if(o.isUrlYoutubeOne(e))return i("youtube");t=i,(n=new XMLHttpRequest).onreadystatechange=r,n.open("GET",e,!0),n.send()}}function H(e,t,n){var o=e.props,r=o.types,i=o.type,s=o.sources,c=e.resolve;this.getTypeSetByClientForIndex=function(e){var t;return r&&r[e]?t=r[e]:i&&(t=i),t},this.retrieveTypeWithXhrForIndex=function(e){var o=c(P);o.setUrlToCheck(s[e]),o.getSourceType((function(o){t.handleReceivedSourceTypeForUrl(o,s[e]),n.runActionsForSourceTypeAndIndex(o,e)}))}}function k(e,t){var n=e.componentsServices.hideSourceLoaderIfNotYetCollection,o=e.elements,r=o.sourceWrappersContainer,i=o.sourceMainWrappers;i[t]=document.createElement("div"),i[t].className="".concat(d," ").concat(c," ").concat(a),i[t].innerHTML='<div class="fslightbox-loader"><div></div><div></div><div></div><div></div></div>';var s=i[t].firstChild;n[t]=function(){i[t].contains(s)&&i[t].removeChild(s)},r.appendChild(i[t]),function(e,t){var n=e.elements,o=n.sourceMainWrappers,r=n.sourceAnimationWrappers;r[t]=document.createElement("div"),o[t].appendChild(r[t])}(e,t)}function O(e,t,n,o){var i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttributeNS(null,"width",t),i.setAttributeNS(null,"height",t),i.setAttributeNS(null,"viewBox",n);var s=document.createElementNS("http://www.w3.org/2000/svg","path");return s.setAttributeNS(null,"class","".concat(r,"svg-path")),s.setAttributeNS(null,"d",o),i.appendChild(s),e.appendChild(i),i}function R(e,t){var n=document.createElement("div");return n.className="".concat(r,"toolbar-button ").concat(a),n.title=t,e.appendChild(n),n}function D(e,t){var n=document.createElement("div");n.className="".concat(r,"toolbar"),t.appendChild(n),function(e,t){var n=e.componentsServices,o=e.core.fullscreenToggler,r=e.data,i="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z",s=R(t);s.title="Enter fullscreen";var c=O(s,"20px","0 0 18 18",i);n.enterFullscreen=function(){r.isFullscreenOpen=!0,s.title="Exit fullscreen",c.setAttributeNS(null,"width","24px"),c.setAttributeNS(null,"height","24px"),c.setAttributeNS(null,"viewBox","0 0 950 1024"),c.firstChild.setAttributeNS(null,"d","M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z")},n.exitFullscreen=function(){r.isFullscreenOpen=!1,s.title="Enter fullscreen",c.setAttributeNS(null,"width","20px"),c.setAttributeNS(null,"height","20px"),c.setAttributeNS(null,"viewBox","0 0 18 18"),c.firstChild.setAttributeNS(null,"d",i)},s.onclick=function(){r.isFullscreenOpen?o.exitFullscreen():o.enterFullscreen()}}(e,n),function(e,t){var n=R(t,"Close");n.onclick=e.core.lightboxCloser.closeLightbox,O(n,"20px","0 0 24 24","M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z")}(e,n)}function j(e){var t=e.props.sources,n=e.elements.container,o=document.createElement("div");o.className="".concat(r,"nav"),n.appendChild(o),D(e,o),t.length>1&&function(e,t){var n=e.componentsServices,o=e.props.sources,i=(e.stageIndexes,document.createElement("div"));i.className="".concat(r,"slide-number-container");var s=document.createElement("div");s.className=a;var c=document.createElement("span");n.setSlideNumber=function(e){return c.innerHTML=e};var l=document.createElement("span");l.className="".concat(r,"slash");var u=document.createElement("div");u.innerHTML=o.length,i.appendChild(s),s.appendChild(c),s.appendChild(l),s.appendChild(u),t.appendChild(i),setTimeout((function(){s.offsetWidth>55&&(i.style.justifyContent="flex-start")}))}(e,o)}function X(e,t){var n=this,o=e.elements.sourceMainWrappers,r=e.props,i=0;this.byValue=function(e){return i=e,n},this.negative=function(){s(-c())},this.zero=function(){s(0)},this.positive=function(){s(c())};var s=function(e){o[t].style.transform="translateX(".concat(e+i,"px)"),i=0},c=function(){return(1+r.slideDistance)*innerWidth}}function B(e,t,n,o){var r=e.elements.container,i=n.charAt(0).toUpperCase()+n.slice(1),s=document.createElement("div");s.className="".concat(f," ").concat(f,"-").concat(n),s.title="".concat(i," slide"),s.onclick=t,function(e,t){var n=document.createElement("div");n.className="".concat(p," ").concat(a),O(n,"20px","0 0 20 20",t),e.appendChild(n)}(s,o),r.appendChild(s)}function U(e,t){var n=e.classList;n.contains(t)&&n.remove(t)}function V(e){var t=this,n=e.core,o=n.eventsDispatcher,r=n.fullscreenToggler,i=n.globalEventsController,s=n.scrollbarRecompensor,c=e.data,a=e.elements,u=e.props,d=e.sourcePointerProps;this.isLightboxFadingOut=!1,this.runActions=function(){t.isLightboxFadingOut=!0,a.container.classList.add(v),i.removeListeners(),u.exitFullscreenOnClose&&c.isFullscreenOpen&&r.exitFullscreen(),setTimeout((function(){t.isLightboxFadingOut=!1,d.isPointering=!1,a.container.classList.remove(v),document.documentElement.classList.remove(l),s.removeRecompense(),document.body.removeChild(a.container),o.dispatch("onClose")}),270)}}function Y(e){var t,n,o,r=e.collections.sourceMainWrappersTransformers,i=e.componentsServices,s=e.core,c=s.classFacade,a=s.slideIndexChanger,l=s.sourceDisplayFacade,d=s.stageManager,p=e.elements.sourceAnimationWrappers,f=e.stageIndexes,v=(t=function(){c.removeFromEachElementClassIfContains("sourceAnimationWrappers",m)},n=300,o=[],function(){o.push(!0),setTimeout((function(){o.pop(),o.length||t()}),n)});a.changeTo=function(e){f.current=e,d.updateStageIndexes(),i.setSlideNumber(e+1),l.displaySourcesWhichShouldBeDisplayed()},a.jumpTo=function(e){var t=f.current;a.changeTo(e),c.removeFromEachElementClassIfContains("sourceMainWrappers",u),U(p[t],g),U(p[t],h),p[t].classList.add(m),U(p[e],g),U(p[e],m),p[e].classList.add(h),v(),r[e].zero(),setTimeout((function(){t!==f.current&&r[t].negative()}),270)}}function _(e){var t=e.core,n=t.lightboxCloser,o=t.fullscreenToggler,r=t.slideChangeFacade;this.listener=function(e){switch(e.key){case"Escape":n.closeLightbox();break;case"ArrowLeft":r.changeToPrevious();break;case"ArrowRight":r.changeToNext();break;case"F11":e.preventDefault(),o.enterFullscreen()}}}function q(e){var t=e.collections.sourceMainWrappersTransformers,n=e.elements,o=e.sourcePointerProps,r=e.stageIndexes;function i(e,n){t[e].byValue(o.swipedX)[n]()}this.runActionsForEvent=function(e){var t,c,a;n.container.contains(n.slideSwipingHoverer)||n.container.appendChild(n.slideSwipingHoverer),t=n.container,c=s,(a=t.classList).contains(c)||a.add(c),o.swipedX=e.screenX-o.downScreenX,i(r.current,"zero"),void 0!==r.previous&&o.swipedX>0?i(r.previous,"negative"):void 0!==r.next&&o.swipedX<0&&i(r.next,"positive")}}function J(e){var t=e.props.sources,n=e.resolve,o=e.sourcePointerProps,r=n(q);1===t.length?this.listener=function(){o.swipedX=1}:this.listener=function(e){o.isPointering&&r.runActionsForEvent(e)}}function G(e){var t=e.collections.sourceMainWrappersTransformers,n=e.core.slideIndexChanger,o=e.elements.sourceMainWrappers,r=e.stageIndexes;this.runPositiveSwipedXActions=function(){void 0===r.previous||(i("positive"),n.changeTo(r.previous)),i("zero")},this.runNegativeSwipedXActions=function(){void 0===r.next||(i("negative"),n.changeTo(r.next)),i("zero")};var i=function(e){o[r.current].classList.add(u),t[r.current][e]()}}function $(e,t){e.contains(t)&&e.removeChild(t)}function K(e){var t=e.core.lightboxCloser,n=e.elements,o=e.resolve,r=e.sourcePointerProps,i=o(G);this.runNoSwipeActions=function(){$(n.container,n.slideSwipingHoverer),r.isSourceDownEventTarget||t.closeLightbox(),r.isPointering=!1},this.runActions=function(){r.swipedX>0?i.runPositiveSwipedXActions():i.runNegativeSwipedXActions(),$(n.container,n.slideSwipingHoverer),n.container.classList.remove(s),r.isPointering=!1}}function Q(e){var t=e.resolve,n=e.sourcePointerProps,o=t(K);this.listener=function(){n.isPointering&&(n.swipedX?o.runActions():o.runNoSwipeActions())}}function Z(e){var t,n,o;n=(t=e).core.classFacade,o=t.elements,n.removeFromEachElementClassIfContains=function(e,t){for(var n=0;n<o[e].length;n++)U(o[e][n],t)},function(e){var t=e.core.eventsDispatcher,n=e.props;t.dispatch=function(e){n[e]&&n[e]()}}(e),function(e){var t=e.componentsServices,n=e.core.fullscreenToggler;n.enterFullscreen=function(){t.enterFullscreen();var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()},n.exitFullscreen=function(){t.exitFullscreen(),document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}}(e),function(e){var t=e.core,n=t.globalEventsController,o=t.windowResizeActioner,r=e.resolve,i=r(_),s=r(J),c=r(Q);n.attachListeners=function(){document.addEventListener("pointermove",s.listener),document.addEventListener("pointerup",c.listener),addEventListener("resize",o.runActions),document.addEventListener("keydown",i.listener)},n.removeListeners=function(){document.removeEventListener("pointermove",s.listener),document.removeEventListener("pointerup",c.listener),removeEventListener("resize",o.runActions),document.removeEventListener("keydown",i.listener)}}(e),function(e){var t=e.core.lightboxCloser,n=(0,e.resolve)(V);t.closeLightbox=function(){n.isLightboxFadingOut||n.runActions()}}(e),ne(e),function(e){var t=e.data,n=e.core.scrollbarRecompensor;function o(){document.body.offsetHeight>innerHeight&&(document.body.style.marginRight=t.scrollbarWidth+"px")}n.addRecompense=function(){"complete"===document.readyState?o():addEventListener("load",(function(){o(),n.addRecompense=o}))},n.removeRecompense=function(){document.body.style.removeProperty("margin-right")}}(e),function(e){var t=e.core,n=t.slideChangeFacade,o=t.slideIndexChanger,r=t.stageManager;e.props.sources.length>1?(n.changeToPrevious=function(){o.jumpTo(r.getPreviousSlideIndex())},n.changeToNext=function(){o.jumpTo(r.getNextSlideIndex())}):(n.changeToPrevious=function(){},n.changeToNext=function(){})}(e),Y(e),function(e){var t=e.core,n=t.classFacade,o=t.sourcesPointerDown,r=e.elements.sources,i=e.sourcePointerProps,s=e.stageIndexes;o.listener=function(e){"VIDEO"!==e.target.tagName&&e.preventDefault(),i.isPointering=!0,i.downScreenX=e.screenX,i.swipedX=0;var t=r[s.current];t&&t.contains(e.target)?i.isSourceDownEventTarget=!0:i.isSourceDownEventTarget=!1,n.removeFromEachElementClassIfContains("sourceMainWrappers",u)}}(e),function(e){var t=e.collections.sourcesRenderFunctions,n=e.core.sourceDisplayFacade,o=e.props,r=e.stageIndexes;function i(e){t[e]&&(t[e](),delete t[e])}n.displaySourcesWhichShouldBeDisplayed=function(){if(o.loadOnlyCurrentSource)i(r.current);else for(var e in r)i(r[e])}}(e),function(e){var t=e.stageIndexes,n=e.core.stageManager,o=e.props.sources.length-1;n.getPreviousSlideIndex=function(){return 0===t.current?o:t.current-1},n.getNextSlideIndex=function(){return t.current===o?0:t.current+1},n.updateStageIndexes=0===o?function(){}:1===o?function(){0===t.current?(t.next=1,delete t.previous):(t.previous=0,delete t.next)}:function(){t.previous=n.getPreviousSlideIndex(),t.next=n.getNextSlideIndex()},n.isSourceInStage=o<=2?function(){return!0}:function(e){var n=t.current;if(0===n&&e===o||n===o&&0===e)return!0;var r=n-e;return-1===r||0===r||1===r}}(e),function(e){var t=e.collections,n=t.sourceMainWrappersTransformers,o=t.sourceSizers,r=e.core.windowResizeActioner,i=e.data,s=e.elements.sourceMainWrappers,c=e.props,a=e.stageIndexes;r.runActions=function(){innerWidth<992?i.maxSourceWidth=innerWidth:i.maxSourceWidth=.9*innerWidth,i.maxSourceHeight=.9*innerHeight;for(var e=0;e<c.sources.length;e++)U(s[e],u),e!==a.current&&n[e].negative(),o[e]&&o[e].adjustSize()}}(e)}function ee(e){var t=e.props.disableLocalStorage;if(!t){var n=localStorage.getItem("fslightbox-scrollbar-width");if(n)return n}var o=function(){var e=document.createElement("div"),t=e.style;return t.visibility="hidden",t.width="100px",t.msOverflowStyle="scrollbar",t.overflow="scroll",e}(),r=function(){var e=document.createElement("div");return e.style.width="100%",e}();document.body.appendChild(o);var i=o.offsetWidth;o.appendChild(r);var s=r.offsetWidth;document.body.removeChild(o);var c=i-s;return t||localStorage.setItem("fslightbox-scrollbar-width",c.toString()),c}function te(e){var t=e.core.eventsDispatcher,n=e.data,o=e.elements,i=e.props.sources;n.isInitialized=!0,n.scrollbarWidth=ee(e),function(e){for(var t=e.collections.sourceMainWrappersTransformers,n=e.props.sources,o=e.resolve,r=0;r<n.length;r++)t[r]=o(X,[r])}(e),Z(e),o.container=document.createElement("div"),o.container.className="".concat(r,"container ").concat(c," ").concat(g),function(e){var t=e.elements;t.slideSwipingHoverer=document.createElement("div"),t.slideSwipingHoverer.className="".concat(r,"slide-swiping-hoverer ").concat(c," ").concat(d)}(e),j(e),function(e){var t=e.core.sourcesPointerDown,n=e.elements,o=e.props.sources,r=document.createElement("div");r.className="".concat(d," ").concat(c),n.container.appendChild(r),r.addEventListener("pointerdown",t.listener),n.sourceWrappersContainer=r;for(var i=0;i<o.length;i++)k(e,i)}(e),i.length>1&&function(e){var t=e.core.slideChangeFacade;B(e,t.changeToPrevious,"previous","M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"),B(e,t.changeToNext,"next","M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z")}(e),function(e){for(var t=e.props.sources,n=e.resolve,o=n(w),r=n(M),i=n(H,[o,r]),s=0;s<t.length;s++)if("string"==typeof t[s]){var c=i.getTypeSetByClientForIndex(s);if(c)r.runActionsForSourceTypeAndIndex(c,s);else{var a=o.getSourceTypeFromLocalStorageByUrl(t[s]);a?r.runActionsForSourceTypeAndIndex(a,s):i.retrieveTypeWithXhrForIndex(s)}}else r.runActionsForSourceTypeAndIndex("custom",s)}(e),t.dispatch("onInit")}function ne(e){var t=e.collections.sourceMainWrappersTransformers,n=e.componentsServices,o=e.core,r=o.eventsDispatcher,i=o.lightboxOpener,s=o.globalEventsController,c=o.scrollbarRecompensor,a=o.sourceDisplayFacade,u=o.stageManager,d=o.windowResizeActioner,p=e.data,f=e.elements,h=e.stageIndexes;i.open=function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;h.current=o,p.isInitialized?r.dispatch("onShow"):te(e),u.updateStageIndexes(),a.displaySourcesWhichShouldBeDisplayed(),n.setSlideNumber(o+1),document.body.appendChild(f.container),document.documentElement.classList.add(l),c.addRecompense(),s.attachListeners(),d.runActions(),t[h.current].zero(),r.dispatch("onOpen")}}function oe(e,t,n){return(oe=re()?Reflect.construct:function(e,t,n){var o=[null];o.push.apply(o,t);var r=new(Function.bind.apply(e,o));return n&&ie(r,n.prototype),r}).apply(null,arguments)}function re(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function ie(e,t){return(ie=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function se(e){return function(e){if(Array.isArray(e))return ce(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return ce(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ce(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function ae(){for(var e=document.getElementsByTagName("a"),t=function(t){if(!e[t].hasAttribute("data-fslightbox"))return"continue";var n=e[t].getAttribute("data-fslightbox"),o=e[t].getAttribute("href");fsLightboxInstances[n]||(fsLightboxInstances[n]=new FsLightbox);var r=null;"#"===o.charAt(0)?(r=document.getElementById(o.substring(1)).cloneNode(!0)).removeAttribute("id"):r=o,fsLightboxInstances[n].props.sources.push(r),fsLightboxInstances[n].elements.a.push(e[t]);var i=fsLightboxInstances[n].props.sources.length-1;e[t].onclick=function(e){e.preventDefault(),fsLightboxInstances[n].open(i)},d("types","data-type"),d("videosPosters","data-video-poster"),d("customClasses","data-class"),d("customClasses","data-custom-class");for(var s=["href","data-fslightbox","data-type","data-video-poster","data-class","data-custom-class"],c=e[t].attributes,a=fsLightboxInstances[n].props.customAttributes,l=0;l<c.length;l++)if(-1===s.indexOf(c[l].name)&&"data-"===c[l].name.substr(0,5)){a[i]||(a[i]={});var u=c[l].name.substr(5);a[i][u]=c[l].value}function d(o,r){e[t].hasAttribute(r)&&(fsLightboxInstances[n].props[o][i]=e[t].getAttribute(r))}},n=0;n<e.length;n++)t(n);var o=Object.keys(fsLightboxInstances);window.fsLightbox=fsLightboxInstances[o[o.length-1]]}window.FsLightbox=function(){var e=this;this.props={sources:[],customAttributes:[],customClasses:[],types:[],videosPosters:[],slideDistance:.3},this.data={isInitialized:!1,isFullscreenOpen:!1,maxSourceWidth:0,maxSourceHeight:0,scrollbarWidth:0},this.sourcePointerProps={downScreenX:null,isPointering:!1,isSourceDownEventTarget:!1,swipedX:0},this.stageIndexes={},this.elements={a:[],container:null,slideSwipingHoverer:null,sourceWrappersContainer:null,sources:[],sourceMainWrappers:[],sourceAnimationWrappers:[]},this.componentsServices={enterFullscreen:null,exitFullscreen:null,hideSourceLoaderIfNotYetCollection:[],setSlideNumber:function(){}},this.resolve=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n.unshift(e),oe(t,se(n))},this.collections={sourceMainWrappersTransformers:[],sourceLoadHandlers:[],sourcesRenderFunctions:[],sourceSizers:[]},this.core={classFacade:{},eventsDispatcher:{},fullscreenToggler:{},globalEventsController:{},lightboxCloser:{},lightboxOpener:{},lightboxUpdater:{},scrollbarRecompensor:{},slideChangeFacade:{},slideIndexChanger:{},sourcesPointerDown:{},sourceDisplayFacade:{},stageManager:{},windowResizeActioner:{}},ne(this),this.open=function(t){return e.core.lightboxOpener.open(t)},this.close=function(){return e.core.lightboxCloser.closeLightbox()}},window.fsLightboxInstances={},ae(),window.refreshFsLightbox=function(){for(var e in fsLightboxInstances){var t=fsLightboxInstances[e].props;fsLightboxInstances[e]=new FsLightbox,fsLightboxInstances[e].props=t,fsLightboxInstances[e].props.sources=[],fsLightboxInstances[e].elements.a=[]}ae()}}])}));

/***/ }),

/***/ "./node_modules/unsplash-js/dist/unsplash-js.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/unsplash-js/dist/unsplash-js.esm.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Language": () => (/* binding */ Language),
/* harmony export */   "OrderBy": () => (/* binding */ OrderBy),
/* harmony export */   "_internals": () => (/* binding */ internals),
/* harmony export */   "createApi": () => (/* binding */ createApi)
/* harmony export */ });
/* harmony import */ var content_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! content-type */ "./node_modules/content-type/index.js");


function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var checkIsString = /*#__PURE__*/getRefinement(function (value) {
  return typeof value === 'string' ? value : null;
});
var isDefined = function isDefined(x) {
  return x !== null && x !== undefined;
};
function getRefinement(getB) {
  return function (a) {
    return isDefined(getB(a));
  };
}
var checkIsNonEmptyArray = function checkIsNonEmptyArray(a) {
  return a.length > 0;
};

/** Takes a dictionary containing nullish values and returns a dictionary of all the defined
 * (non-nullish) values.
 */

var compactDefined = function compactDefined(obj) {
  return Object.keys(obj).reduce(function (acc, key) {
    var _ref;

    var value = obj[key];
    return _extends({}, acc, isDefined(value) ? (_ref = {}, _ref[key] = value, _ref) : {});
  }, {});
};
function flow() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  var len = fns.length - 1;
  return function () {
    for (var _len2 = arguments.length, x = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      x[_key2] = arguments[_key2];
    }

    var y = fns[0].apply(this, x);

    for (var i = 1; i <= len; i++) {
      y = fns[i].call(this, y);
    }

    return y;
  };
}

var checkIsObject = /*#__PURE__*/getRefinement(function (response) {
  return isDefined(response) && typeof response === 'object' && !Array.isArray(response) ? response : null;
});
var checkIsErrors = /*#__PURE__*/getRefinement(function (errors) {
  return Array.isArray(errors) && errors.every(checkIsString) && checkIsNonEmptyArray(errors) ? errors : null;
});
var checkIsApiError = /*#__PURE__*/getRefinement(function (response) {
  return checkIsObject(response) && 'errors' in response && checkIsErrors(response.errors) ? {
    errors: response.errors
  } : null;
});
var getErrorForBadStatusCode = function getErrorForBadStatusCode(jsonResponse) {
  if (checkIsApiError(jsonResponse)) {
    return {
      errors: jsonResponse.errors,
      source: 'api'
    };
  } else {
    return {
      errors: ['Responded with a status code outside the 2xx range, and the response body is not recognisable.'],
      source: 'decoding'
    };
  }
};
var DecodingError = function DecodingError(message) {
  this.message = message;
};

var CONTENT_TYPE_RESPONSE_HEADER = 'content-type';
var CONTENT_TYPE_JSON = 'application/json';

var checkIsJsonResponse = function checkIsJsonResponse(response) {
  var contentTypeHeader = response.headers.get(CONTENT_TYPE_RESPONSE_HEADER);
  return isDefined(contentTypeHeader) && (0,content_type__WEBPACK_IMPORTED_MODULE_0__.parse)(contentTypeHeader).type === CONTENT_TYPE_JSON;
};
/**
 * Note: restrict the type of JSON to `AnyJson` so that `any` doesn't leak downstream.
 */


var getJsonResponse = function getJsonResponse(response) {
  if (checkIsJsonResponse(response)) {
    return response.json()["catch"](function (_err) {
      throw new DecodingError('unable to parse JSON response.');
    });
  } else {
    throw new DecodingError('expected JSON response from server.');
  }
};

var handleFetchResponse = function handleFetchResponse(handleResponse) {
  return function (response) {
    return (response.ok ? handleResponse({
      response: response
    }).then(function (handledResponse) {
      return {
        type: 'success',
        status: response.status,
        response: handledResponse,
        originalResponse: response
      };
    }) : getJsonResponse(response).then(function (jsonResponse) {
      return _extends({
        type: 'error',
        status: response.status
      }, getErrorForBadStatusCode(jsonResponse), {
        originalResponse: response
      });
    }))["catch"](function (error) {
      /**
       * We want to separate expected decoding errors from unknown ones. We do so by throwing a custom
       * `DecodingError` whenever we encounter one within `handleFetchResponse` and catch them all
       * here. This allows us to easily handle all of these errors at once. Unexpected errors are not
       * caught, so that they bubble up and fail loudly.
       *
       * Note: Ideally we'd use an Either type, but this does the job without introducing dependencies
       * like `fp-ts`.
       */
      if (error instanceof DecodingError) {
        return {
          type: 'error',
          source: 'decoding',
          status: response.status,
          originalResponse: response,
          errors: [error.message]
        };
      } else {
        throw error;
      }
    });
  };
};
var castResponse = function castResponse() {
  return function (_ref) {
    var response = _ref.response;
    return getJsonResponse(response);
  };
};

var addQueryToUrl = function addQueryToUrl(query) {
  return function (url) {
    Object.keys(query).forEach(function (queryKey) {
      return url.searchParams.set(queryKey, query[queryKey].toString());
    });
  };
};

var addPathnameToUrl = function addPathnameToUrl(pathname) {
  return function (url) {
    // When there is no existing pathname, the value is `/`. Appending would give us a URL with two
    // forward slashes. This is why we replace the value in that scenario.
    if (url.pathname === '/') {
      url.pathname = pathname;
    } else {
      url.pathname += pathname;
    }
  };
};

var buildUrl = function buildUrl(_ref) {
  var pathname = _ref.pathname,
      query = _ref.query;
  return function (apiUrl) {
    var url = new URL(apiUrl);
    addPathnameToUrl(pathname)(url);
    addQueryToUrl(query)(url);
    return url.toString();
  };
};

var getQueryFromSearchParams = function getQueryFromSearchParams(searchParams) {
  var query = {};
  searchParams.forEach(function (value, key) {
    query[key] = value;
  });
  return query;
};

var parseQueryAndPathname = function parseQueryAndPathname(url) {
  var _URL = new URL(url),
      pathname = _URL.pathname,
      searchParams = _URL.searchParams;

  var query = getQueryFromSearchParams(searchParams);
  return {
    query: query,
    pathname: pathname === '/' ? undefined : pathname
  };
};

/**
 * helper used to type-check the arguments, and add default params for all requests
 */

var createRequestHandler = function createRequestHandler(fn) {
  return function (a, additionalFetchOptions) {
    if (additionalFetchOptions === void 0) {
      additionalFetchOptions = {};
    }

    var _fn = fn(a),
        headers = _fn.headers,
        query = _fn.query,
        baseReqParams = _objectWithoutPropertiesLoose(_fn, ["headers", "query"]);

    return _extends({}, baseReqParams, additionalFetchOptions, {
      query: query,
      headers: _extends({}, headers, additionalFetchOptions.headers)
    });
  };
};
var makeEndpoint = function makeEndpoint(endpoint) {
  return endpoint;
};
var initMakeRequest = function initMakeRequest(_ref) {
  var accessKey = _ref.accessKey,
      _ref$apiVersion = _ref.apiVersion,
      apiVersion = _ref$apiVersion === void 0 ? 'v1' : _ref$apiVersion,
      _ref$apiUrl = _ref.apiUrl,
      apiUrl = _ref$apiUrl === void 0 ? 'https://api.unsplash.com' : _ref$apiUrl,
      generalHeaders = _ref.headers,
      providedFetch = _ref.fetch,
      generalFetchOptions = _objectWithoutPropertiesLoose(_ref, ["accessKey", "apiVersion", "apiUrl", "headers", "fetch"]);

  return function (_ref2) {
    var handleResponse = _ref2.handleResponse,
        handleRequest = _ref2.handleRequest;
    return flow(handleRequest, function (_ref3) {
      var pathname = _ref3.pathname,
          query = _ref3.query,
          _ref3$method = _ref3.method,
          method = _ref3$method === void 0 ? 'GET' : _ref3$method,
          endpointHeaders = _ref3.headers,
          body = _ref3.body,
          signal = _ref3.signal;
      var url = buildUrl({
        pathname: pathname,
        query: query
      })(apiUrl);

      var fetchOptions = _extends({
        method: method,
        headers: _extends({}, generalHeaders, endpointHeaders, {
          'Accept-Version': apiVersion
        }, isDefined(accessKey) ? {
          Authorization: "Client-ID " + accessKey
        } : {}),
        body: body,
        signal: signal
      }, generalFetchOptions);

      var fetchToUse = providedFetch != null ? providedFetch : fetch;
      return fetchToUse(url, fetchOptions).then(handleFetchResponse(handleResponse));
    });
  };
};

var TOTAL_RESPONSE_HEADER = 'x-total';

var getTotalFromApiFeedResponse = function getTotalFromApiFeedResponse(response) {
  var totalsStr = response.headers.get(TOTAL_RESPONSE_HEADER);

  if (isDefined(totalsStr)) {
    var total = parseInt(totalsStr);

    if (Number.isInteger(total)) {
      return total;
    } else {
      throw new DecodingError("expected " + TOTAL_RESPONSE_HEADER + " header to be valid integer.");
    }
  } else {
    throw new DecodingError("expected " + TOTAL_RESPONSE_HEADER + " header to exist.");
  }
};

var handleFeedResponse = function handleFeedResponse() {
  return function (_ref) {
    var response = _ref.response;
    return castResponse()({
      response: response
    }).then(function (results) {
      return {
        results: results,
        total: getTotalFromApiFeedResponse(response)
      };
    });
  };
};

var getCollections = function getCollections(collectionIds) {
  return isDefined(collectionIds) ? {
    collections: collectionIds.join()
  } : {};
};
var getTopics = function getTopics(topicIds) {
  return isDefined(topicIds) ? {
    topics: topicIds.join()
  } : {};
};
var getFeedParams = function getFeedParams(_ref) {
  var page = _ref.page,
      perPage = _ref.perPage,
      orderBy = _ref.orderBy;
  return compactDefined({
    per_page: perPage,
    order_by: orderBy,
    page: page
  });
};

var COLLECTIONS_PATH_PREFIX = '/collections';
var getPhotos = /*#__PURE__*/function () {
  var getPathname = function getPathname(_ref) {
    var collectionId = _ref.collectionId;
    return COLLECTIONS_PATH_PREFIX + "/" + collectionId + "/photos";
  };

  return makeEndpoint({
    getPathname: getPathname,
    handleRequest: createRequestHandler(function (_ref2) {
      var collectionId = _ref2.collectionId,
          orientation = _ref2.orientation,
          paginationParams = _objectWithoutPropertiesLoose(_ref2, ["collectionId", "orientation"]);

      return {
        pathname: getPathname({
          collectionId: collectionId
        }),
        query: compactDefined(_extends({}, getFeedParams(paginationParams), {
          orientation: orientation
        }))
      };
    }),
    handleResponse: handleFeedResponse()
  });
}();
var get = /*#__PURE__*/function () {
  var getPathname = function getPathname(_ref3) {
    var collectionId = _ref3.collectionId;
    return COLLECTIONS_PATH_PREFIX + "/" + collectionId;
  };

  return makeEndpoint({
    getPathname: getPathname,
    handleRequest: createRequestHandler(function (_ref4) {
      var collectionId = _ref4.collectionId;
      return {
        pathname: getPathname({
          collectionId: collectionId
        }),
        query: {}
      };
    }),
    handleResponse: castResponse()
  });
}();
var list = /*#__PURE__*/function () {
  var getPathname = function getPathname() {
    return COLLECTIONS_PATH_PREFIX;
  };

  return makeEndpoint({
    getPathname: getPathname,
    handleRequest: createRequestHandler(function (paginationParams) {
      if (paginationParams === void 0) {
        paginationParams = {};
      }

      return {
        pathname: getPathname(),
        query: getFeedParams(paginationParams)
      };
    }),
    handleResponse: handleFeedResponse()
  });
}();
var getRelated = /*#__PURE__*/function () {
  var getPathname = function getPathname(_ref5) {
    var collectionId = _ref5.collectionId;
    return COLLECTIONS_PATH_PREFIX + "/" + collectionId + "/related";
  };

  return makeEndpoint({
    getPathname: getPathname,
    handleRequest: createRequestHandler(function (_ref6) {
      var collectionId = _ref6.collectionId;
      return {
        pathname: getPathname({
          collectionId: collectionId
        }),
        query: {}
      };
    }),
    handleResponse: castResponse()
  });
}();

var index = {
  __proto__: null,
  getPhotos: getPhotos,
  get: get,
  list: list,
  getRelated: getRelated
};

var PHOTOS_PATH_PREFIX = '/photos';
var list$1 = /*#__PURE__*/function () {
  var _getPathname = function getPathname() {
    return PHOTOS_PATH_PREFIX;
  };

  return makeEndpoint({
    // Wrapper uses type trick to allow 0 args
    getPathname: function getPathname(_params) {
      return _getPathname();
    },
    handleRequest: createRequestHandler(function (feedParams) {
      if (feedParams === void 0) {
        feedParams = {};
      }

      return {
        pathname: PHOTOS_PATH_PREFIX,
        query: compactDefined(getFeedParams(feedParams))
      };
    }),
    handleResponse: handleFeedResponse()
  });
}();
var get$1 = /*#__PURE__*/function () {
  var getPathname = function getPathname(_ref) {
    var photoId = _ref.photoId;
    return PHOTOS_PATH_PREFIX + "/" + photoId;
  };

  return makeEndpoint({
    getPathname: getPathname,
    handleRequest: createRequestHandler(function (_ref2) {
      var photoId = _ref2.photoId;
      return {
        pathname: getPathname({
          photoId: photoId
        }),
        query: {}
      };
    }),
    handleResponse: castResponse()
  });
}();
var getStats = /*#__PURE__*/function () {
  var getPathname = function getPathname(_ref3) {
    var photoId = _ref3.photoId;
    return PHOTOS_PATH_PREFIX + "/" + photoId + "/statistics";
  };

  return makeEndpoint({
    getPathname: getPathname,
    handleRequest: createRequestHandler(function (_ref4) {
      var photoId = _ref4.photoId;
      return {
        pathname: getPathname({
          photoId: photoId
        }),
        query: {}
      };
    }),
    handleResponse: castResponse()
  });
}();
var getRandom = /*#__PURE__*/function () {
  var getPathname = function getPathname() {
    return PHOTOS_PATH_PREFIX + "/random";
  };

  return makeEndpoint({
    getPathname: getPathname,
    handleRequest: createRequestHandler(function (_temp) {
      var _ref5 = _temp === void 0 ? {} : _temp,
          collectionIds = _ref5.collectionIds,
          contentFilter = _ref5.contentFilter,
          topicIds = _ref5.topicIds,
          queryParams = _objectWithoutPropertiesLoose(_ref5, ["collectionIds", "contentFilter", "topicIds"]);

      return {
        pathname: getPathname(),
        query: compactDefined(_extends({}, queryParams, {
          content_filter: contentFilter
        }, getCollections(collectionIds), getTopics(topicIds))),
        headers: {
          /**
           * Avoid response caching
           */
          'cache-control': 'no-cache'
        }
      };
    }),
    handleResponse: castResponse()
  });
}();
var trackDownload = {
  handleRequest: /*#__PURE__*/createRequestHandler(function (_ref6) {
    var downloadLocation = _ref6.downloadLocation;

    var _parseQueryAndPathnam = parseQueryAndPathname(downloadLocation),
        pathname = _parseQueryAndPathnam.pathname,
        query = _parseQueryAndPathnam.query;

    if (!isDefined(pathname)) {
      throw new Error('Could not parse pathname from url.');
    }

    return {
      pathname: pathname,
      query: compactDefined(query)
    };
  }),
  handleResponse: /*#__PURE__*/castResponse()
};

var index$1 = {
  __proto__: null,
  list: list$1,
  get: get$1,
  getStats: getStats,
  getRandom: getRandom,
  trackDownload: trackDownload
};

var SEARCH_PATH_PREFIX = "/search";
var getPhotos$1 = /*#__PURE__*/function () {
  var _getPathname = function getPathname() {
    return SEARCH_PATH_PREFIX + "/photos";
  };

  return makeEndpoint({
    // Wrapper uses type trick to allow 0 args
    getPathname: function getPathname(_params) {
      return _getPathname();
    },
    handleRequest: createRequestHandler(function (_ref) {
      var query = _ref.query,
          page = _ref.page,
          perPage = _ref.perPage,
          orderBy = _ref.orderBy,
          collectionIds = _ref.collectionIds,
          lang = _ref.lang,
          contentFilter = _ref.contentFilter,
          filters = _objectWithoutPropertiesLoose(_ref, ["query", "page", "perPage", "orderBy", "collectionIds", "lang", "contentFilter"]);

      return {
        pathname: _getPathname(),
        query: compactDefined(_extends({
          query: query,
          content_filter: contentFilter,
          lang: lang,
          order_by: orderBy
        }, getFeedParams({
          page: page,
          perPage: perPage
        }), getCollections(collectionIds), filters))
      };
    }),
    handleResponse: castResponse()
  });
}();
var getCollections$1 = /*#__PURE__*/function () {
  var _getPathname2 = function getPathname() {
    return SEARCH_PATH_PREFIX + "/collections";
  };

  return makeEndpoint({
    // Wrapper uses type trick to allow 0 args
    getPathname: function getPathname(_params) {
      return _getPathname2();
    },
    handleRequest: createRequestHandler(function (_ref2) {
      var query = _ref2.query,
          paginationParams = _objectWithoutPropertiesLoose(_ref2, ["query"]);

      return {
        pathname: _getPathname2(),
        query: _extends({
          query: query
        }, getFeedParams(paginationParams))
      };
    }),
    handleResponse: castResponse()
  });
}();
var getUsers = /*#__PURE__*/function () {
  var _getPathname3 = function getPathname() {
    return SEARCH_PATH_PREFIX + "/users";
  };

  return makeEndpoint({
    // Wrapper uses type trick to allow 0 args
    getPathname: function getPathname(_params) {
      return _getPathname3();
    },
    handleRequest: createRequestHandler(function (_ref3) {
      var query = _ref3.query,
          paginationParams = _objectWithoutPropertiesLoose(_ref3, ["query"]);

      return {
        pathname: _getPathname3(),
        query: _extends({
          query: query
        }, getFeedParams(paginationParams))
      };
    }),
    handleResponse: castResponse()
  });
}();

var index$2 = {
  __proto__: null,
  getPhotos: getPhotos$1,
  getCollections: getCollections$1,
  getUsers: getUsers
};

var USERS_PATH_PREFIX = '/users';
var get$2 = /*#__PURE__*/function () {
  var getPathname = function getPathname(_ref) {
    var username = _ref.username;
    return USERS_PATH_PREFIX + "/" + username;
  };

  return makeEndpoint({
    getPathname: getPathname,
    handleRequest: createRequestHandler(function (_ref2) {
      var username = _ref2.username;
      return {
        pathname: getPathname({
          username: username
        }),
        query: {}
      };
    }),
    handleResponse: castResponse()
  });
}();
var getPhotos$2 = /*#__PURE__*/function () {
  var getPathname = function getPathname(_ref3) {
    var username = _ref3.username;
    return USERS_PATH_PREFIX + "/" + username + "/photos";
  };

  return makeEndpoint({
    getPathname: getPathname,
    handleRequest: createRequestHandler(function (_ref4) {
      var username = _ref4.username,
          stats = _ref4.stats,
          orientation = _ref4.orientation,
          paginationParams = _objectWithoutPropertiesLoose(_ref4, ["username", "stats", "orientation"]);

      return {
        pathname: getPathname({
          username: username
        }),
        query: compactDefined(_extends({}, getFeedParams(paginationParams), {
          orientation: orientation,
          stats: stats
        }))
      };
    }),
    handleResponse: handleFeedResponse()
  });
}();
var getLikes = /*#__PURE__*/function () {
  var getPathname = function getPathname(_ref5) {
    var username = _ref5.username;
    return USERS_PATH_PREFIX + "/" + username + "/likes";
  };

  return makeEndpoint({
    getPathname: getPathname,
    handleRequest: createRequestHandler(function (_ref6) {
      var username = _ref6.username,
          orientation = _ref6.orientation,
          paginationParams = _objectWithoutPropertiesLoose(_ref6, ["username", "orientation"]);

      return {
        pathname: getPathname({
          username: username
        }),
        query: compactDefined(_extends({}, getFeedParams(paginationParams), {
          orientation: orientation
        }))
      };
    }),
    handleResponse: handleFeedResponse()
  });
}();
var getCollections$2 = /*#__PURE__*/function () {
  var getPathname = function getPathname(_ref7) {
    var username = _ref7.username;
    return USERS_PATH_PREFIX + "/" + username + "/collections";
  };

  return makeEndpoint({
    getPathname: getPathname,
    handleRequest: createRequestHandler(function (_ref8) {
      var username = _ref8.username,
          paginationParams = _objectWithoutPropertiesLoose(_ref8, ["username"]);

      return {
        pathname: getPathname({
          username: username
        }),
        query: getFeedParams(paginationParams)
      };
    }),
    handleResponse: handleFeedResponse()
  });
}();

var index$3 = {
  __proto__: null,
  get: get$2,
  getPhotos: getPhotos$2,
  getLikes: getLikes,
  getCollections: getCollections$2
};

var BASE_TOPIC_PATH = '/topics';

var getTopicPath = function getTopicPath(_ref) {
  var topicIdOrSlug = _ref.topicIdOrSlug;
  return BASE_TOPIC_PATH + "/" + topicIdOrSlug;
};

var list$2 = /*#__PURE__*/makeEndpoint({
  getPathname: getTopicPath,
  handleRequest: function handleRequest(_ref2) {
    var page = _ref2.page,
        perPage = _ref2.perPage,
        orderBy = _ref2.orderBy,
        topicIdsOrSlugs = _ref2.topicIdsOrSlugs;
    return {
      pathname: BASE_TOPIC_PATH,
      query: compactDefined(_extends({}, getFeedParams({
        page: page,
        perPage: perPage
      }), {
        ids: topicIdsOrSlugs == null ? void 0 : topicIdsOrSlugs.join(','),
        order_by: orderBy
      }))
    };
  },
  handleResponse: /*#__PURE__*/handleFeedResponse()
});
var get$3 = /*#__PURE__*/makeEndpoint({
  getPathname: getTopicPath,
  handleRequest: function handleRequest(_ref3) {
    var topicIdOrSlug = _ref3.topicIdOrSlug;
    return {
      pathname: getTopicPath({
        topicIdOrSlug: topicIdOrSlug
      }),
      query: {}
    };
  },
  handleResponse: /*#__PURE__*/castResponse()
});
var getPhotos$3 = /*#__PURE__*/function () {
  var getPathname = /*#__PURE__*/flow(getTopicPath, function (topicPath) {
    return topicPath + "/photos";
  });
  return makeEndpoint({
    getPathname: getPathname,
    handleRequest: function handleRequest(_ref4) {
      var topicIdOrSlug = _ref4.topicIdOrSlug,
          orientation = _ref4.orientation,
          feedParams = _objectWithoutPropertiesLoose(_ref4, ["topicIdOrSlug", "orientation"]);

      return {
        pathname: getPathname({
          topicIdOrSlug: topicIdOrSlug
        }),
        query: compactDefined(_extends({}, getFeedParams(feedParams), {
          orientation: orientation
        }))
      };
    },
    handleResponse: handleFeedResponse()
  });
}();

var index$4 = {
  __proto__: null,
  list: list$2,
  get: get$3,
  getPhotos: getPhotos$3
};

var trackNonHotLinkedPhotoView = function trackNonHotLinkedPhotoView(_ref) {
  var appId = _ref.appId;
  return function (_ref2) {
    var photoId = _ref2.photoId;
    var ids = !Array.isArray(photoId) ? [photoId] : photoId;

    if (ids.length > 20) {
      throw new Error('You cannot track more than 20 photos at once. Please try again with fewer photos.');
    }

    return fetch("views.unsplash.com/v?photo_id=" + ids.join() + "&app_id=" + appId);
  };
};



var internals = {
  __proto__: null,
  collections: index,
  photos: index$1,
  search: index$2,
  users: index$3,
  topics: index$4,
  trackNonHotLinkedPhotoView: trackNonHotLinkedPhotoView
};

var Language;

(function (Language) {
  Language["Afrikaans"] = "af";
  Language["Amharic"] = "am";
  Language["Arabic"] = "ar";
  Language["Azerbaijani"] = "az";
  Language["Belarusian"] = "be";
  Language["Bulgarian"] = "bg";
  Language["Bengali"] = "bn";
  Language["Bosnian"] = "bs";
  Language["Catalan"] = "ca";
  Language["Cebuano"] = "ceb";
  Language["Corsican"] = "co";
  Language["Czech"] = "cs";
  Language["Welsh"] = "cy";
  Language["Danish"] = "da";
  Language["German"] = "de";
  Language["Greek"] = "el";
  Language["English"] = "en";
  Language["Esperanto"] = "eo";
  Language["Spanish"] = "es";
  Language["Estonian"] = "et";
  Language["Basque"] = "eu";
  Language["Persian"] = "fa";
  Language["Finnish"] = "fi";
  Language["French"] = "fr";
  Language["Frisian"] = "fy";
  Language["Irish"] = "ga";
  Language["ScotsGaelic"] = "gd";
  Language["Galician"] = "gl";
  Language["Gujarati"] = "gu";
  Language["Hausa"] = "ha";
  Language["Hawaiian"] = "haw";
  Language["Hindi"] = "hi";
  Language["Hmong"] = "hmn";
  Language["Croatian"] = "hr";
  Language["HaitianCreole"] = "ht";
  Language["Hungarian"] = "hu";
  Language["Armenian"] = "hy";
  Language["Indonesian"] = "id";
  Language["Igbo"] = "ig";
  Language["Icelandic"] = "is";
  Language["Italian"] = "it";
  Language["Hebrew"] = "iw";
  Language["Japanese"] = "ja";
  Language["Javanese"] = "jw";
  Language["Georgian"] = "ka";
  Language["Kazakh"] = "kk";
  Language["Khmer"] = "km";
  Language["Kannada"] = "kn";
  Language["Korean"] = "ko";
  Language["Kurdish"] = "ku";
  Language["Kyrgyz"] = "ky";
  Language["Latin"] = "la";
  Language["Luxembourgish"] = "lb";
  Language["Lao"] = "lo";
  Language["Lithuanian"] = "lt";
  Language["Latvian"] = "lv";
  Language["Malagasy"] = "mg";
  Language["Maori"] = "mi";
  Language["Macedonian"] = "mk";
  Language["Malayalam"] = "ml";
  Language["Mongolian"] = "mn";
  Language["Marathi"] = "mr";
  Language["Malay"] = "ms";
  Language["Maltese"] = "mt";
  Language["Myanmar"] = "my";
  Language["Nepali"] = "ne";
  Language["Dutch"] = "nl";
  Language["Norwegian"] = "no";
  Language["Nyanja"] = "ny";
  Language["Oriya"] = "or";
  Language["Punjabi"] = "pa";
  Language["Polish"] = "pl";
  Language["Pashto"] = "ps";
  Language["Portuguese"] = "pt";
  Language["Romanian"] = "ro";
  Language["Russian"] = "ru";
  Language["Kinyarwanda"] = "rw";
  Language["Sindhi"] = "sd";
  Language["Sinhala"] = "si";
  Language["Slovak"] = "sk";
  Language["Slovenian"] = "sl";
  Language["Samoan"] = "sm";
  Language["Shona"] = "sn";
  Language["Somali"] = "so";
  Language["Albanian"] = "sq";
  Language["Serbian"] = "sr";
  Language["Sesotho"] = "st";
  Language["Sundanese"] = "su";
  Language["Swedish"] = "sv";
  Language["Swahili"] = "sw";
  Language["Tamil"] = "ta";
  Language["Telugu"] = "te";
  Language["Tajik"] = "tg";
  Language["Thai"] = "th";
  Language["Turkmen"] = "tk";
  Language["Filipino"] = "tl";
  Language["Turkish"] = "tr";
  Language["Tatar"] = "tt";
  Language["Uighur"] = "ug";
  Language["Ukrainian"] = "uk";
  Language["Urdu"] = "ur";
  Language["Uzbek"] = "uz";
  Language["Vietnamese"] = "vi";
  Language["Xhosa"] = "xh";
  Language["Yiddish"] = "yi";
  Language["Yoruba"] = "yo";
  Language["ChineseSimplified"] = "zh";
  Language["ChineseTraditional"] = "zh-TW";
  Language["Zulu"] = "zu";
})(Language || (Language = {}));

var OrderBy;

(function (OrderBy) {
  OrderBy["LATEST"] = "latest";
  OrderBy["POPULAR"] = "popular";
  OrderBy["VIEWS"] = "views";
  OrderBy["DOWNLOADS"] = "downloads";
  OrderBy["OLDEST"] = "oldest";
})(OrderBy || (OrderBy = {}));

var createApi = /*#__PURE__*/flow(initMakeRequest, function (makeRequest) {
  return {
    photos: {
      get: makeRequest(get$1),
      list: makeRequest(list$1),
      getStats: makeRequest(getStats),
      getRandom: makeRequest(getRandom),
      trackDownload: makeRequest(trackDownload)
    },
    users: {
      getPhotos: makeRequest(getPhotos$2),
      getCollections: makeRequest(getCollections$2),
      getLikes: makeRequest(getLikes),
      get: makeRequest(get$2)
    },
    search: {
      getCollections: makeRequest(getCollections$1),
      getPhotos: makeRequest(getPhotos$1),
      getUsers: makeRequest(getUsers)
    },
    collections: {
      getPhotos: makeRequest(getPhotos),
      get: makeRequest(get),
      list: makeRequest(list),
      getRelated: makeRequest(getRelated)
    },
    topics: {
      list: makeRequest(list$2),
      get: makeRequest(get$3),
      getPhotos: makeRequest(getPhotos$3)
    }
  };
});


//# sourceMappingURL=unsplash-js.esm.js.map


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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var unsplash_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unsplash-js */ "./node_modules/unsplash-js/dist/unsplash-js.esm.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fslightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fslightbox */ "./node_modules/fslightbox/index.js");
/* harmony import */ var fslightbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fslightbox__WEBPACK_IMPORTED_MODULE_1__);



document.addEventListener('DOMContentLoaded', () => {
  const unsplash = (0,unsplash_js__WEBPACK_IMPORTED_MODULE_2__.createApi)({
    accessKey: 'HT8RFkUehZBd1F-rWSr1yMCah0y41WHrWzPzSvY6l1E'
  });
  const galleryWrapper = document.querySelector('.gallery__container');
  const gallery = document.querySelector('#gallery');
  const form = document.querySelector('.search');
  const input = document.querySelector('.search__input');
  const searchBtn = document.querySelector('.search__btn');
  const cleanBtn = document.querySelector('.search__btn-close');
  function setFocus() {
    input.focus();
  }
  setFocus();
  unsplash.photos.getRandom({
    count: 24
  }).then(result => {
    renderGallery(result.response);
    return result;
  }).catch(error => {
    console.log(error.message);
    const message = document.createElement('div');
    message.classList.add('gallery__message');
    message.textContent = 'Ошибка сервера. Попробуйте зайти позже.';
    galleryWrapper.append(message);
  });
  const showMoreBtn = document.createElement('button');
  showMoreBtn.classList.add('gallery__btn');
  showMoreBtn.textContent = 'Show more photos';
  galleryWrapper.append(showMoreBtn);

  //Кнопка "показать еще"
  let currentPage = 1;
  showMoreBtn.addEventListener('click', () => {
    currentPage++;
    if (input.value.length > 0) {
      const str = input.value.trim().toLowerCase();
      unsplash.search.getPhotos({
        query: str,
        page: currentPage,
        per_page: 24
      }).then(result => {
        renderGallery(result.response.results);
      });
    } else {
      unsplash.photos.getRandom({
        count: 24
      }).then(result => {
        renderGallery(result.response);
      });
    }
  });
  input.addEventListener('input', () => {
    searchBtn.style.display = 'block';
    cleanBtn.style.display = 'block';
  });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const str = input.value.trim().toLowerCase();
    unsplash.search.getPhotos({
      query: str,
      per_page: 24
    }).then(result => {
      gallery.innerHTML = '';
      cleanBtn.style.display = 'block';
      renderGallery(result.response.results);
      return result;
    });
  });
  cleanBtn.addEventListener('click', e => {
    e.preventDefault();
    input.value = '';
    searchBtn.style.display = 'block';
    unsplash.photos.getRandom({
      count: 24
    }).then(result => {
      renderGallery(result.response);
      return result;
    }).catch(error => {
      console.log(error.message);
      const message = document.createElement('div');
      message.classList.add('gallery__message');
      message.textContent = 'Ошибка сервера. Попробуйте зайти позже.';
      galleryWrapper.append(message);
    });
  });
  function renderGallery(arr) {
    for (let item of arr) {
      const galleryItem = document.createElement('a');
      galleryItem.classList.add('gallery__item');
      galleryItem.href = item.urls.regular;
      galleryItem.setAttribute('data-fslightbox', 'gallery');
      galleryItem.setAttribute('data-aos', 'fade-up');
      galleryItem.target = '_blank';
      const image = document.createElement('img');
      image.classList.add('gallery__image');
      image.src = item.urls.small;
      image.alt = item.alt_description;
      galleryItem.append(image);
      gallery.append(galleryItem);
    }
    return gallery;
  }
  aos__WEBPACK_IMPORTED_MODULE_0___default().init();
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map