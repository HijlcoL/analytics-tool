//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;

/* Package-scope variables */
var $, Materialize, leftPosition, activateOption, $caption, $curr_slide, curr_index, $index, $this, namesCount, createDayLabel, createWeekdayLabel, imageHeight, item_width, tweenedOpacity, zTranslation, y;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/materialize_materialize/dist/js/materialize.js                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/*!                                                                                                                   // 1
 * Materialize v0.97.5 (http://materializecss.com)                                                                    // 2
 * Copyright 2014-2015 Materialize                                                                                    // 3
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)                                 // 4
 */                                                                                                                   // 5
// Check for jQuery.                                                                                                  // 6
if (typeof(jQuery) === 'undefined') {                                                                                 // 7
  var jQuery;                                                                                                         // 8
  // Check if require is a defined function.                                                                          // 9
  if (typeof(require) === 'function') {                                                                               // 10
    jQuery = $ = require('jQuery');                                                                                   // 11
  // Else use the dollar sign alias.                                                                                  // 12
  } else {                                                                                                            // 13
    jQuery = $;                                                                                                       // 14
  }                                                                                                                   // 15
};/*                                                                                                                  // 16
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/                                                      // 17
 *                                                                                                                    // 18
 * Uses the built in easing capabilities added In jQuery 1.1                                                          // 19
 * to offer multiple easing options                                                                                   // 20
 *                                                                                                                    // 21
 * TERMS OF USE - jQuery Easing                                                                                       // 22
 *                                                                                                                    // 23
 * Open source under the BSD License.                                                                                 // 24
 *                                                                                                                    // 25
 * Copyright © 2008 George McGinley Smith                                                                             // 26
 * All rights reserved.                                                                                               // 27
 *                                                                                                                    // 28
 * Redistribution and use in source and binary forms, with or without modification,                                   // 29
 * are permitted provided that the following conditions are met:                                                      // 30
 *                                                                                                                    // 31
 * Redistributions of source code must retain the above copyright notice, this list of                                // 32
 * conditions and the following disclaimer.                                                                           // 33
 * Redistributions in binary form must reproduce the above copyright notice, this list                                // 34
 * of conditions and the following disclaimer in the documentation and/or other materials                             // 35
 * provided with the distribution.                                                                                    // 36
 *                                                                                                                    // 37
 * Neither the name of the author nor the names of contributors may be used to endorse                                // 38
 * or promote products derived from this software without specific prior written permission.                          // 39
 *                                                                                                                    // 40
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY                                // 41
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF                            // 42
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE                         // 43
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,                          // 44
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE                     // 45
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED                        // 46
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING                          // 47
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED                      // 48
 * OF THE POSSIBILITY OF SUCH DAMAGE.                                                                                 // 49
 *                                                                                                                    // 50
*/                                                                                                                    // 51
                                                                                                                      // 52
// t: current time, b: begInnIng value, c: change In value, d: duration                                               // 53
jQuery.easing['jswing'] = jQuery.easing['swing'];                                                                     // 54
                                                                                                                      // 55
jQuery.extend( jQuery.easing,                                                                                         // 56
{                                                                                                                     // 57
	def: 'easeOutQuad',                                                                                                  // 58
	swing: function (x, t, b, c, d) {                                                                                    // 59
		//alert(jQuery.easing.default);                                                                                     // 60
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);                                                             // 61
	},                                                                                                                   // 62
	easeInQuad: function (x, t, b, c, d) {                                                                               // 63
		return c*(t/=d)*t + b;                                                                                              // 64
	},                                                                                                                   // 65
	easeOutQuad: function (x, t, b, c, d) {                                                                              // 66
		return -c *(t/=d)*(t-2) + b;                                                                                        // 67
	},                                                                                                                   // 68
	easeInOutQuad: function (x, t, b, c, d) {                                                                            // 69
		if ((t/=d/2) < 1) return c/2*t*t + b;                                                                               // 70
		return -c/2 * ((--t)*(t-2) - 1) + b;                                                                                // 71
	},                                                                                                                   // 72
	easeInCubic: function (x, t, b, c, d) {                                                                              // 73
		return c*(t/=d)*t*t + b;                                                                                            // 74
	},                                                                                                                   // 75
	easeOutCubic: function (x, t, b, c, d) {                                                                             // 76
		return c*((t=t/d-1)*t*t + 1) + b;                                                                                   // 77
	},                                                                                                                   // 78
	easeInOutCubic: function (x, t, b, c, d) {                                                                           // 79
		if ((t/=d/2) < 1) return c/2*t*t*t + b;                                                                             // 80
		return c/2*((t-=2)*t*t + 2) + b;                                                                                    // 81
	},                                                                                                                   // 82
	easeInQuart: function (x, t, b, c, d) {                                                                              // 83
		return c*(t/=d)*t*t*t + b;                                                                                          // 84
	},                                                                                                                   // 85
	easeOutQuart: function (x, t, b, c, d) {                                                                             // 86
		return -c * ((t=t/d-1)*t*t*t - 1) + b;                                                                              // 87
	},                                                                                                                   // 88
	easeInOutQuart: function (x, t, b, c, d) {                                                                           // 89
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;                                                                           // 90
		return -c/2 * ((t-=2)*t*t*t - 2) + b;                                                                               // 91
	},                                                                                                                   // 92
	easeInQuint: function (x, t, b, c, d) {                                                                              // 93
		return c*(t/=d)*t*t*t*t + b;                                                                                        // 94
	},                                                                                                                   // 95
	easeOutQuint: function (x, t, b, c, d) {                                                                             // 96
		return c*((t=t/d-1)*t*t*t*t + 1) + b;                                                                               // 97
	},                                                                                                                   // 98
	easeInOutQuint: function (x, t, b, c, d) {                                                                           // 99
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;                                                                         // 100
		return c/2*((t-=2)*t*t*t*t + 2) + b;                                                                                // 101
	},                                                                                                                   // 102
	easeInSine: function (x, t, b, c, d) {                                                                               // 103
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;                                                                    // 104
	},                                                                                                                   // 105
	easeOutSine: function (x, t, b, c, d) {                                                                              // 106
		return c * Math.sin(t/d * (Math.PI/2)) + b;                                                                         // 107
	},                                                                                                                   // 108
	easeInOutSine: function (x, t, b, c, d) {                                                                            // 109
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;                                                                      // 110
	},                                                                                                                   // 111
	easeInExpo: function (x, t, b, c, d) {                                                                               // 112
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;                                                            // 113
	},                                                                                                                   // 114
	easeOutExpo: function (x, t, b, c, d) {                                                                              // 115
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;                                                        // 116
	},                                                                                                                   // 117
	easeInOutExpo: function (x, t, b, c, d) {                                                                            // 118
		if (t==0) return b;                                                                                                 // 119
		if (t==d) return b+c;                                                                                               // 120
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;                                                       // 121
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;                                                                     // 122
	},                                                                                                                   // 123
	easeInCirc: function (x, t, b, c, d) {                                                                               // 124
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;                                                                      // 125
	},                                                                                                                   // 126
	easeOutCirc: function (x, t, b, c, d) {                                                                              // 127
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;                                                                          // 128
	},                                                                                                                   // 129
	easeInOutCirc: function (x, t, b, c, d) {                                                                            // 130
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;                                                       // 131
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;                                                                     // 132
	},                                                                                                                   // 133
	easeInElastic: function (x, t, b, c, d) {                                                                            // 134
		var s=1.70158;var p=0;var a=c;                                                                                      // 135
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;                                                    // 136
		if (a < Math.abs(c)) { a=c; var s=p/4; }                                                                            // 137
		else var s = p/(2*Math.PI) * Math.asin (c/a);                                                                       // 138
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;                                          // 139
	},                                                                                                                   // 140
	easeOutElastic: function (x, t, b, c, d) {                                                                           // 141
		var s=1.70158;var p=0;var a=c;                                                                                      // 142
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;                                                    // 143
		if (a < Math.abs(c)) { a=c; var s=p/4; }                                                                            // 144
		else var s = p/(2*Math.PI) * Math.asin (c/a);                                                                       // 145
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;                                             // 146
	},                                                                                                                   // 147
	easeInOutElastic: function (x, t, b, c, d) {                                                                         // 148
		var s=1.70158;var p=0;var a=c;                                                                                      // 149
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);                                            // 150
		if (a < Math.abs(c)) { a=c; var s=p/4; }                                                                            // 151
		else var s = p/(2*Math.PI) * Math.asin (c/a);                                                                       // 152
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;                            // 153
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;                                     // 154
	},                                                                                                                   // 155
	easeInBack: function (x, t, b, c, d, s) {                                                                            // 156
		if (s == undefined) s = 1.70158;                                                                                    // 157
		return c*(t/=d)*t*((s+1)*t - s) + b;                                                                                // 158
	},                                                                                                                   // 159
	easeOutBack: function (x, t, b, c, d, s) {                                                                           // 160
		if (s == undefined) s = 1.70158;                                                                                    // 161
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;                                                                       // 162
	},                                                                                                                   // 163
	easeInOutBack: function (x, t, b, c, d, s) {                                                                         // 164
		if (s == undefined) s = 1.70158;                                                                                    // 165
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;                                                    // 166
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;                                                             // 167
	},                                                                                                                   // 168
	easeInBounce: function (x, t, b, c, d) {                                                                             // 169
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;                                                       // 170
	},                                                                                                                   // 171
	easeOutBounce: function (x, t, b, c, d) {                                                                            // 172
		if ((t/=d) < (1/2.75)) {                                                                                            // 173
			return c*(7.5625*t*t) + b;                                                                                         // 174
		} else if (t < (2/2.75)) {                                                                                          // 175
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;                                                                     // 176
		} else if (t < (2.5/2.75)) {                                                                                        // 177
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;                                                                  // 178
		} else {                                                                                                            // 179
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;                                                               // 180
		}                                                                                                                   // 181
	},                                                                                                                   // 182
	easeInOutBounce: function (x, t, b, c, d) {                                                                          // 183
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;                                          // 184
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;                                             // 185
	}                                                                                                                    // 186
});                                                                                                                   // 187
                                                                                                                      // 188
/*                                                                                                                    // 189
 *                                                                                                                    // 190
 * TERMS OF USE - EASING EQUATIONS                                                                                    // 191
 *                                                                                                                    // 192
 * Open source under the BSD License.                                                                                 // 193
 *                                                                                                                    // 194
 * Copyright © 2001 Robert Penner                                                                                     // 195
 * All rights reserved.                                                                                               // 196
 *                                                                                                                    // 197
 * Redistribution and use in source and binary forms, with or without modification,                                   // 198
 * are permitted provided that the following conditions are met:                                                      // 199
 *                                                                                                                    // 200
 * Redistributions of source code must retain the above copyright notice, this list of                                // 201
 * conditions and the following disclaimer.                                                                           // 202
 * Redistributions in binary form must reproduce the above copyright notice, this list                                // 203
 * of conditions and the following disclaimer in the documentation and/or other materials                             // 204
 * provided with the distribution.                                                                                    // 205
 *                                                                                                                    // 206
 * Neither the name of the author nor the names of contributors may be used to endorse                                // 207
 * or promote products derived from this software without specific prior written permission.                          // 208
 *                                                                                                                    // 209
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY                                // 210
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF                            // 211
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE                         // 212
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,                          // 213
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE                     // 214
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED                        // 215
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING                          // 216
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED                      // 217
 * OF THE POSSIBILITY OF SUCH DAMAGE.                                                                                 // 218
 *                                                                                                                    // 219
 */;    // Custom Easing                                                                                              // 220
    jQuery.extend( jQuery.easing,                                                                                     // 221
    {                                                                                                                 // 222
      easeInOutMaterial: function (x, t, b, c, d) {                                                                   // 223
        if ((t/=d/2) < 1) return c/2*t*t + b;                                                                         // 224
        return c/4*((t-=2)*t*t + 2) + b;                                                                              // 225
      }                                                                                                               // 226
    });                                                                                                               // 227
                                                                                                                      // 228
;/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */              // 229
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
/*! Note that this has been modified by Materialize to confirm that Velocity is not already being imported. */        // 231
jQuery.Velocity?console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity."):(!function(e){function t(e){var t=e.length,a=r.type(e);return"function"===a||r.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===a||0===t||"number"==typeof t&&t>0&&t-1 in e}if(!e.jQuery){var r=function(e,t){return new r.fn.init(e,t)};r.isWindow=function(e){return null!=e&&e==e.window},r.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[i.call(e)]||"object":typeof e},r.isArray=Array.isArray||function(e){return"array"===r.type(e)},r.isPlainObject=function(e){var t;if(!e||"object"!==r.type(e)||e.nodeType||r.isWindow(e))return!1;try{if(e.constructor&&!o.call(e,"constructor")&&!o.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(a){return!1}for(t in e);return void 0===t||o.call(e,t)},r.each=function(e,r,a){var n,o=0,i=e.length,s=t(e);if(a){if(s)for(;i>o&&(n=r.apply(e[o],a),n!==!1);o++);else for(o in e)if(n=r.apply(e[o],a),n===!1)break}else if(s)for(;i>o&&(n=r.call(e[o],o,e[o]),n!==!1);o++);else for(o in e)if(n=r.call(e[o],o,e[o]),n===!1)break;return e},r.data=function(e,t,n){if(void 0===n){var o=e[r.expando],i=o&&a[o];if(void 0===t)return i;if(i&&t in i)return i[t]}else if(void 0!==t){var o=e[r.expando]||(e[r.expando]=++r.uuid);return a[o]=a[o]||{},a[o][t]=n,n}},r.removeData=function(e,t){var n=e[r.expando],o=n&&a[n];o&&r.each(t,function(e,t){delete o[t]})},r.extend=function(){var e,t,a,n,o,i,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[l]||{},l++),"object"!=typeof s&&"function"!==r.type(s)&&(s={}),l===u&&(s=this,l--);u>l;l++)if(null!=(o=arguments[l]))for(n in o)e=s[n],a=o[n],s!==a&&(c&&a&&(r.isPlainObject(a)||(t=r.isArray(a)))?(t?(t=!1,i=e&&r.isArray(e)?e:[]):i=e&&r.isPlainObject(e)?e:{},s[n]=r.extend(c,i,a)):void 0!==a&&(s[n]=a));return s},r.queue=function(e,a,n){function o(e,r){var a=r||[];return null!=e&&(t(Object(e))?!function(e,t){for(var r=+t.length,a=0,n=e.length;r>a;)e[n++]=t[a++];if(r!==r)for(;void 0!==t[a];)e[n++]=t[a++];return e.length=n,e}(a,"string"==typeof e?[e]:e):[].push.call(a,e)),a}if(e){a=(a||"fx")+"queue";var i=r.data(e,a);return n?(!i||r.isArray(n)?i=r.data(e,a,o(n)):i.push(n),i):i||[]}},r.dequeue=function(e,t){r.each(e.nodeType?[e]:e,function(e,a){t=t||"fx";var n=r.queue(a,t),o=n.shift();"inprogress"===o&&(o=n.shift()),o&&("fx"===t&&n.unshift("inprogress"),o.call(a,function(){r.dequeue(a,t)}))})},r.fn=r.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var t=this[0],e=e.apply(t),a=this.offset(),n=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:r(e).offset();return a.top-=parseFloat(t.style.marginTop)||0,a.left-=parseFloat(t.style.marginLeft)||0,e.style&&(n.top+=parseFloat(e.style.borderTopWidth)||0,n.left+=parseFloat(e.style.borderLeftWidth)||0),{top:a.top-n.top,left:a.left-n.left}}};var a={};r.expando="velocity"+(new Date).getTime(),r.uuid=0;for(var n={},o=n.hasOwnProperty,i=n.toString,s="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;l<s.length;l++)n["[object "+s[l]+"]"]=s[l].toLowerCase();r.fn.init.prototype=r.fn,e.Velocity={Utilities:r}}}(window),function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){return function(e,t,r,a){function n(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var n=e[t];n&&a.push(n)}return a}function o(e){return m.isWrapped(e)?e=[].slice.call(e):m.isNode(e)&&(e=[e]),e}function i(e){var t=f.data(e,"velocity");return null===t?a:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}function l(e,r,a,n){function o(e,t){return 1-3*t+3*e}function i(e,t){return 3*t-6*e}function s(e){return 3*e}function l(e,t,r){return((o(t,r)*e+i(t,r))*e+s(t))*e}function u(e,t,r){return 3*o(t,r)*e*e+2*i(t,r)*e+s(t)}function c(t,r){for(var n=0;m>n;++n){var o=u(r,e,a);if(0===o)return r;var i=l(r,e,a)-t;r-=i/o}return r}function p(){for(var t=0;b>t;++t)w[t]=l(t*x,e,a)}function f(t,r,n){var o,i,s=0;do i=r+(n-r)/2,o=l(i,e,a)-t,o>0?n=i:r=i;while(Math.abs(o)>h&&++s<v);return i}function d(t){for(var r=0,n=1,o=b-1;n!=o&&w[n]<=t;++n)r+=x;--n;var i=(t-w[n])/(w[n+1]-w[n]),s=r+i*x,l=u(s,e,a);return l>=y?c(t,s):0==l?s:f(t,r,r+x)}function g(){V=!0,(e!=r||a!=n)&&p()}var m=4,y=.001,h=1e-7,v=10,b=11,x=1/(b-1),S="Float32Array"in t;if(4!==arguments.length)return!1;for(var P=0;4>P;++P)if("number"!=typeof arguments[P]||isNaN(arguments[P])||!isFinite(arguments[P]))return!1;e=Math.min(e,1),a=Math.min(a,1),e=Math.max(e,0),a=Math.max(a,0);var w=S?new Float32Array(b):new Array(b),V=!1,C=function(t){return V||g(),e===r&&a===n?t:0===t?0:1===t?1:l(d(t),r,n)};C.getControlPoints=function(){return[{x:e,y:r},{x:a,y:n}]};var T="generateBezier("+[e,r,a,n]+")";return C.toString=function(){return T},C}function u(e,t){var r=e;return m.isString(e)?b.Easings[e]||(r=!1):r=m.isArray(e)&&1===e.length?s.apply(null,e):m.isArray(e)&&2===e.length?x.apply(null,e.concat([t])):m.isArray(e)&&4===e.length?l.apply(null,e):!1,r===!1&&(r=b.Easings[b.defaults.easing]?b.defaults.easing:v),r}function c(e){if(e){var t=(new Date).getTime(),r=b.State.calls.length;r>1e4&&(b.State.calls=n(b.State.calls));for(var o=0;r>o;o++)if(b.State.calls[o]){var s=b.State.calls[o],l=s[0],u=s[2],d=s[3],g=!!d,y=null;d||(d=b.State.calls[o][3]=t-16);for(var h=Math.min((t-d)/u.duration,1),v=0,x=l.length;x>v;v++){var P=l[v],V=P.element;if(i(V)){var C=!1;if(u.display!==a&&null!==u.display&&"none"!==u.display){if("flex"===u.display){var T=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];f.each(T,function(e,t){S.setPropertyValue(V,"display",t)})}S.setPropertyValue(V,"display",u.display)}u.visibility!==a&&"hidden"!==u.visibility&&S.setPropertyValue(V,"visibility",u.visibility);for(var k in P)if("element"!==k){var A,F=P[k],j=m.isString(F.easing)?b.Easings[F.easing]:F.easing;if(1===h)A=F.endValue;else{var E=F.endValue-F.startValue;if(A=F.startValue+E*j(h,u,E),!g&&A===F.currentValue)continue}if(F.currentValue=A,"tween"===k)y=A;else{if(S.Hooks.registered[k]){var H=S.Hooks.getRoot(k),N=i(V).rootPropertyValueCache[H];N&&(F.rootPropertyValue=N)}var L=S.setPropertyValue(V,k,F.currentValue+(0===parseFloat(A)?"":F.unitType),F.rootPropertyValue,F.scrollData);S.Hooks.registered[k]&&(i(V).rootPropertyValueCache[H]=S.Normalizations.registered[H]?S.Normalizations.registered[H]("extract",null,L[1]):L[1]),"transform"===L[0]&&(C=!0)}}u.mobileHA&&i(V).transformCache.translate3d===a&&(i(V).transformCache.translate3d="(0px, 0px, 0px)",C=!0),C&&S.flushTransformCache(V)}}u.display!==a&&"none"!==u.display&&(b.State.calls[o][2].display=!1),u.visibility!==a&&"hidden"!==u.visibility&&(b.State.calls[o][2].visibility=!1),u.progress&&u.progress.call(s[1],s[1],h,Math.max(0,d+u.duration-t),d,y),1===h&&p(o)}}b.State.isTicking&&w(c)}function p(e,t){if(!b.State.calls[e])return!1;for(var r=b.State.calls[e][0],n=b.State.calls[e][1],o=b.State.calls[e][2],s=b.State.calls[e][4],l=!1,u=0,c=r.length;c>u;u++){var p=r[u].element;if(t||o.loop||("none"===o.display&&S.setPropertyValue(p,"display",o.display),"hidden"===o.visibility&&S.setPropertyValue(p,"visibility",o.visibility)),o.loop!==!0&&(f.queue(p)[1]===a||!/\.velocityQueueEntryFlag/i.test(f.queue(p)[1]))&&i(p)){i(p).isAnimating=!1,i(p).rootPropertyValueCache={};var d=!1;f.each(S.Lists.transforms3D,function(e,t){var r=/^scale/.test(t)?1:0,n=i(p).transformCache[t];i(p).transformCache[t]!==a&&new RegExp("^\\("+r+"[^.]").test(n)&&(d=!0,delete i(p).transformCache[t])}),o.mobileHA&&(d=!0,delete i(p).transformCache.translate3d),d&&S.flushTransformCache(p),S.Values.removeClass(p,"velocity-animating")}if(!t&&o.complete&&!o.loop&&u===c-1)try{o.complete.call(n,n)}catch(g){setTimeout(function(){throw g},1)}s&&o.loop!==!0&&s(n),i(p)&&o.loop===!0&&!t&&(f.each(i(p).tweensContainer,function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360),/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType&&(t.endValue=0,t.startValue=100)}),b(p,"reverse",{loop:!0,delay:o.delay})),o.queue!==!1&&f.dequeue(p,o.queue)}b.State.calls[e]=!1;for(var m=0,y=b.State.calls.length;y>m;m++)if(b.State.calls[m]!==!1){l=!0;break}l===!1&&(b.State.isTicking=!1,delete b.State.calls,b.State.calls=[])}var f,d=function(){if(r.documentMode)return r.documentMode;for(var e=7;e>4;e--){var t=r.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return a}(),g=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var r,a=(new Date).getTime();return r=Math.max(0,16-(a-e)),e=a+r,setTimeout(function(){t(a+r)},r)}}(),m={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==a&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},y=!1;if(e.fn&&e.fn.jquery?(f=e,y=!0):f=t.Velocity.Utilities,8>=d&&!y)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=d)return void(jQuery.fn.velocity=jQuery.fn.animate);var h=400,v="swing",b={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:r.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:f,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:h,easing:v,begin:a,complete:a,progress:a,display:a,visibility:a,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){f.data(e,"velocity",{isSVG:m.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};t.pageYOffset!==a?(b.State.scrollAnchor=t,b.State.scrollPropertyLeft="pageXOffset",b.State.scrollPropertyTop="pageYOffset"):(b.State.scrollAnchor=r.documentElement||r.body.parentNode||r.body,b.State.scrollPropertyLeft="scrollLeft",b.State.scrollPropertyTop="scrollTop");var x=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var n={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:n.v,dv:e(n)}}function r(r,a){var n={dx:r.v,dv:e(r)},o=t(r,.5*a,n),i=t(r,.5*a,o),s=t(r,a,i),l=1/6*(n.dx+2*(o.dx+i.dx)+s.dx),u=1/6*(n.dv+2*(o.dv+i.dv)+s.dv);return r.x=r.x+l*a,r.v=r.v+u*a,r}return function a(e,t,n){var o,i,s,l={x:-1,v:0,tension:null,friction:null},u=[0],c=0,p=1e-4,f=.016;for(e=parseFloat(e)||500,t=parseFloat(t)||20,n=n||null,l.tension=e,l.friction=t,o=null!==n,o?(c=a(e,t),i=c/n*f):i=f;s=r(s||l,i),u.push(1+s.x),c+=16,Math.abs(s.x)>p&&Math.abs(s.v)>p;);return o?function(e){return u[e*(u.length-1)|0]}:c}}();b.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},f.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){b.Easings[t[0]]=l.apply(null,t[1])});var S=b.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<S.Lists.colors.length;e++){var t="color"===S.Lists.colors[e]?"0 0 0 1":"255 255 255 1";S.Hooks.templates[S.Lists.colors[e]]=["Red Green Blue Alpha",t]}var r,a,n;if(d)for(r in S.Hooks.templates){a=S.Hooks.templates[r],n=a[0].split(" ");var o=a[1].match(S.RegEx.valueSplit);"Color"===n[0]&&(n.push(n.shift()),o.push(o.shift()),S.Hooks.templates[r]=[n.join(" "),o.join(" ")])}for(r in S.Hooks.templates){a=S.Hooks.templates[r],n=a[0].split(" ");for(var e in n){var i=r+n[e],s=e;S.Hooks.registered[i]=[r,s]}}},getRoot:function(e){var t=S.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return S.RegEx.valueUnwrap.test(t)&&(t=t.match(S.RegEx.valueUnwrap)[1]),S.Values.isCSSNullValue(t)&&(t=S.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=S.Hooks.registered[e];if(r){var a=r[0],n=r[1];return t=S.Hooks.cleanRootPropertyValue(a,t),t.toString().match(S.RegEx.valueSplit)[n]}return t},injectValue:function(e,t,r){var a=S.Hooks.registered[e];if(a){var n,o,i=a[0],s=a[1];return r=S.Hooks.cleanRootPropertyValue(i,r),n=r.toString().match(S.RegEx.valueSplit),n[s]=t,o=n.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return S.RegEx.wrappedValueAlreadyExtracted.test(r)?a=r:(a=r.toString().match(S.RegEx.valueUnwrap),a=a?a[1].replace(/,(\s+)?/g," "):r),a;case"inject":return"rect("+r+")"}},blur:function(e,t,r){switch(e){case"name":return b.State.isFirefox?"filter":"-webkit-filter";case"extract":var a=parseFloat(r);if(!a&&0!==a){var n=r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);a=n?n[1]:0}return a;case"inject":return parseFloat(r)?"blur("+r+")":"none"}},opacity:function(e,t,r){if(8>=d)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":return r;case"inject":return r}}},register:function(){9>=d||b.State.isGingerbread||(S.Lists.transformsBase=S.Lists.transformsBase.concat(S.Lists.transforms3D));for(var e=0;e<S.Lists.transformsBase.length;e++)!function(){var t=S.Lists.transformsBase[e];S.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return"transform";case"extract":return i(r)===a||i(r).transformCache[t]===a?/^scale/i.test(t)?1:0:i(r).transformCache[t].replace(/[()]/g,"");case"inject":var o=!1;switch(t.substr(0,t.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(n);break;case"scal":case"scale":b.State.isAndroid&&i(r).transformCache[t]===a&&1>n&&(n=1),o=!/(\d)$/i.test(n);break;case"skew":o=!/(deg|\d)$/i.test(n);break;case"rotate":o=!/(deg|\d)$/i.test(n)}return o||(i(r).transformCache[t]="("+n+")"),i(r).transformCache[t]}}}();for(var e=0;e<S.Lists.colors.length;e++)!function(){var t=S.Lists.colors[e];S.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return t;case"extract":var o;if(S.RegEx.wrappedValueAlreadyExtracted.test(n))o=n;else{var i,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(n)?i=s[n]!==a?s[n]:s.black:S.RegEx.isHex.test(n)?i="rgb("+S.Values.hexToRgb(n).join(" ")+")":/^rgba?\(/i.test(n)||(i=s.black),o=(i||n).toString().match(S.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=d||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return 8>=d?4===n.split(" ").length&&(n=n.split(/\s+/).slice(0,3).join(" ")):3===n.split(" ").length&&(n+=" 1"),(8>=d?"rgb":"rgba")+"("+n.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(d||b.State.isAndroid&&!b.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(b.State.prefixMatches[e])return[b.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;a>r;r++){var n;if(n=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),m.isString(b.State.prefixElement.style[n]))return b.State.prefixMatches[e]=n,[n,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t,r=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return e=e.replace(r,function(e,t,r,a){return t+t+r+r+a+a}),t=a.exec(e),t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,r,n,o){function s(e,r){function n(){u&&S.setPropertyValue(e,"display","none")}var l=0;if(8>=d)l=f.css(e,r);else{var u=!1;if(/^(width|height)$/.test(r)&&0===S.getPropertyValue(e,"display")&&(u=!0,S.setPropertyValue(e,"display",S.Values.getDisplayType(e))),!o){if("height"===r&&"border-box"!==S.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(S.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(S.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(S.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(S.getPropertyValue(e,"paddingBottom"))||0);return n(),c}if("width"===r&&"border-box"!==S.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(S.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(S.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(S.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(S.getPropertyValue(e,"paddingRight"))||0);return n(),p}}var g;g=i(e)===a?t.getComputedStyle(e,null):i(e).computedStyle?i(e).computedStyle:i(e).computedStyle=t.getComputedStyle(e,null),"borderColor"===r&&(r="borderTopColor"),l=9===d&&"filter"===r?g.getPropertyValue(r):g[r],(""===l||null===l)&&(l=e.style[r]),n()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(r)){var m=s(e,"position");("fixed"===m||"absolute"===m&&/top|left/i.test(r))&&(l=f(e).position()[r]+"px")}return l}var l;if(S.Hooks.registered[r]){var u=r,c=S.Hooks.getRoot(u);n===a&&(n=S.getPropertyValue(e,S.Names.prefixCheck(c)[0])),S.Normalizations.registered[c]&&(n=S.Normalizations.registered[c]("extract",e,n)),l=S.Hooks.extractValue(u,n)}else if(S.Normalizations.registered[r]){var p,g;p=S.Normalizations.registered[r]("name",e),"transform"!==p&&(g=s(e,S.Names.prefixCheck(p)[0]),S.Values.isCSSNullValue(g)&&S.Hooks.templates[r]&&(g=S.Hooks.templates[r][1])),l=S.Normalizations.registered[r]("extract",e,g)}if(!/^[\d-]/.test(l))if(i(e)&&i(e).isSVG&&S.Names.SVGAttribute(r))if(/^(height|width)$/i.test(r))try{l=e.getBBox()[r]}catch(m){l=0}else l=e.getAttribute(r);else l=s(e,S.Names.prefixCheck(r)[0]);return S.Values.isCSSNullValue(l)&&(l=0),b.debug>=2&&console.log("Get "+r+": "+l),l},setPropertyValue:function(e,r,a,n,o){var s=r;if("scroll"===r)o.container?o.container["scroll"+o.direction]=a:"Left"===o.direction?t.scrollTo(a,o.alternateValue):t.scrollTo(o.alternateValue,a);else if(S.Normalizations.registered[r]&&"transform"===S.Normalizations.registered[r]("name",e))S.Normalizations.registered[r]("inject",e,a),s="transform",a=i(e).transformCache[r];else{if(S.Hooks.registered[r]){var l=r,u=S.Hooks.getRoot(r);n=n||S.getPropertyValue(e,u),a=S.Hooks.injectValue(l,a,n),r=u}if(S.Normalizations.registered[r]&&(a=S.Normalizations.registered[r]("inject",e,a),r=S.Normalizations.registered[r]("name",e)),s=S.Names.prefixCheck(r)[0],8>=d)try{e.style[s]=a}catch(c){b.debug&&console.log("Browser does not support ["+a+"] for ["+s+"]")}else i(e)&&i(e).isSVG&&S.Names.SVGAttribute(r)?e.setAttribute(r,a):e.style[s]=a;b.debug>=2&&console.log("Set "+r+" ("+s+"): "+a)}return[s,a]},flushTransformCache:function(e){function t(t){return parseFloat(S.getPropertyValue(e,t))}var r="";if((d||b.State.isAndroid&&!b.State.isChrome)&&i(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};f.each(i(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var n,o;f.each(i(e).transformCache,function(t){return n=i(e).transformCache[t],"transformPerspective"===t?(o=n,!0):(9===d&&"rotateZ"===t&&(t="rotate"),void(r+=t+n+" "))}),o&&(r="perspective"+o+" "+r)}S.setPropertyValue(e,"transform",r)}};S.Hooks.register(),S.Normalizations.register(),b.hook=function(e,t,r){var n=a;return e=o(e),f.each(e,function(e,o){if(i(o)===a&&b.init(o),r===a)n===a&&(n=b.CSS.getPropertyValue(o,t));else{var s=b.CSS.setPropertyValue(o,t,r);"transform"===s[0]&&b.CSS.flushTransformCache(o),n=s}}),n};var P=function(){function e(){return s?k.promise||null:l}function n(){function e(e){function p(e,t){var r=a,n=a,i=a;return m.isArray(e)?(r=e[0],!m.isArray(e[1])&&/^[\d-]/.test(e[1])||m.isFunction(e[1])||S.RegEx.isHex.test(e[1])?i=e[1]:(m.isString(e[1])&&!S.RegEx.isHex.test(e[1])||m.isArray(e[1]))&&(n=t?e[1]:u(e[1],s.duration),e[2]!==a&&(i=e[2]))):r=e,t||(n=n||s.easing),m.isFunction(r)&&(r=r.call(o,V,w)),m.isFunction(i)&&(i=i.call(o,V,w)),[r||0,n,i]}function d(e,t){var r,a;return a=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=S.Values.getUnitType(e)),[a,r]}function h(){var e={myParent:o.parentNode||r.body,position:S.getPropertyValue(o,"position"),fontSize:S.getPropertyValue(o,"fontSize")},a=e.position===L.lastPosition&&e.myParent===L.lastParent,n=e.fontSize===L.lastFontSize;L.lastParent=e.myParent,L.lastPosition=e.position,L.lastFontSize=e.fontSize;var s=100,l={};if(n&&a)l.emToPx=L.lastEmToPx,l.percentToPxWidth=L.lastPercentToPxWidth,l.percentToPxHeight=L.lastPercentToPxHeight;else{var u=i(o).isSVG?r.createElementNS("http://www.w3.org/2000/svg","rect"):r.createElement("div");b.init(u),e.myParent.appendChild(u),f.each(["overflow","overflowX","overflowY"],function(e,t){b.CSS.setPropertyValue(u,t,"hidden")}),b.CSS.setPropertyValue(u,"position",e.position),b.CSS.setPropertyValue(u,"fontSize",e.fontSize),b.CSS.setPropertyValue(u,"boxSizing","content-box"),f.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){b.CSS.setPropertyValue(u,t,s+"%")}),b.CSS.setPropertyValue(u,"paddingLeft",s+"em"),l.percentToPxWidth=L.lastPercentToPxWidth=(parseFloat(S.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=L.lastPercentToPxHeight=(parseFloat(S.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=L.lastEmToPx=(parseFloat(S.getPropertyValue(u,"paddingLeft"))||1)/s,e.myParent.removeChild(u)}return null===L.remToPx&&(L.remToPx=parseFloat(S.getPropertyValue(r.body,"fontSize"))||16),null===L.vwToPx&&(L.vwToPx=parseFloat(t.innerWidth)/100,L.vhToPx=parseFloat(t.innerHeight)/100),l.remToPx=L.remToPx,l.vwToPx=L.vwToPx,l.vhToPx=L.vhToPx,b.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),o),l}if(s.begin&&0===V)try{s.begin.call(g,g)}catch(x){setTimeout(function(){throw x},1)}if("scroll"===A){var P,C,T,F=/^x$/i.test(s.axis)?"Left":"Top",j=parseFloat(s.offset)||0;s.container?m.isWrapped(s.container)||m.isNode(s.container)?(s.container=s.container[0]||s.container,P=s.container["scroll"+F],T=P+f(o).position()[F.toLowerCase()]+j):s.container=null:(P=b.State.scrollAnchor[b.State["scrollProperty"+F]],C=b.State.scrollAnchor[b.State["scrollProperty"+("Left"===F?"Top":"Left")]],T=f(o).offset()[F.toLowerCase()]+j),l={scroll:{rootPropertyValue:!1,startValue:P,currentValue:P,endValue:T,unitType:"",easing:s.easing,scrollData:{container:s.container,direction:F,alternateValue:C}},element:o},b.debug&&console.log("tweensContainer (scroll): ",l.scroll,o)}else if("reverse"===A){if(!i(o).tweensContainer)return void f.dequeue(o,s.queue);"none"===i(o).opts.display&&(i(o).opts.display="auto"),"hidden"===i(o).opts.visibility&&(i(o).opts.visibility="visible"),i(o).opts.loop=!1,i(o).opts.begin=null,i(o).opts.complete=null,v.easing||delete s.easing,v.duration||delete s.duration,s=f.extend({},i(o).opts,s);var E=f.extend(!0,{},i(o).tweensContainer);for(var H in E)if("element"!==H){var N=E[H].startValue;E[H].startValue=E[H].currentValue=E[H].endValue,E[H].endValue=N,m.isEmptyObject(v)||(E[H].easing=s.easing),b.debug&&console.log("reverse tweensContainer ("+H+"): "+JSON.stringify(E[H]),o)}l=E}else if("start"===A){var E;i(o).tweensContainer&&i(o).isAnimating===!0&&(E=i(o).tweensContainer),f.each(y,function(e,t){if(RegExp("^"+S.Lists.colors.join("$|^")+"$").test(e)){var r=p(t,!0),n=r[0],o=r[1],i=r[2];if(S.RegEx.isHex.test(n)){for(var s=["Red","Green","Blue"],l=S.Values.hexToRgb(n),u=i?S.Values.hexToRgb(i):a,c=0;c<s.length;c++){var f=[l[c]];o&&f.push(o),u!==a&&f.push(u[c]),y[e+s[c]]=f}delete y[e]}}});for(var z in y){var O=p(y[z]),q=O[0],$=O[1],M=O[2];z=S.Names.camelCase(z);var I=S.Hooks.getRoot(z),B=!1;if(i(o).isSVG||"tween"===I||S.Names.prefixCheck(I)[1]!==!1||S.Normalizations.registered[I]!==a){(s.display!==a&&null!==s.display&&"none"!==s.display||s.visibility!==a&&"hidden"!==s.visibility)&&/opacity|filter/.test(z)&&!M&&0!==q&&(M=0),s._cacheValues&&E&&E[z]?(M===a&&(M=E[z].endValue+E[z].unitType),B=i(o).rootPropertyValueCache[I]):S.Hooks.registered[z]?M===a?(B=S.getPropertyValue(o,I),M=S.getPropertyValue(o,z,B)):B=S.Hooks.templates[I][1]:M===a&&(M=S.getPropertyValue(o,z));var W,G,Y,D=!1;if(W=d(z,M),M=W[0],Y=W[1],W=d(z,q),q=W[0].replace(/^([+-\/*])=/,function(e,t){return D=t,""}),G=W[1],M=parseFloat(M)||0,q=parseFloat(q)||0,"%"===G&&(/^(fontSize|lineHeight)$/.test(z)?(q/=100,G="em"):/^scale/.test(z)?(q/=100,G=""):/(Red|Green|Blue)$/i.test(z)&&(q=q/100*255,G="")),/[\/*]/.test(D))G=Y;else if(Y!==G&&0!==M)if(0===q)G=Y;else{n=n||h();var Q=/margin|padding|left|right|width|text|word|letter/i.test(z)||/X$/.test(z)||"x"===z?"x":"y";switch(Y){case"%":M*="x"===Q?n.percentToPxWidth:n.percentToPxHeight;break;case"px":break;default:M*=n[Y+"ToPx"]}switch(G){case"%":M*=1/("x"===Q?n.percentToPxWidth:n.percentToPxHeight);break;case"px":break;default:M*=1/n[G+"ToPx"]}}switch(D){case"+":q=M+q;break;case"-":q=M-q;break;case"*":q=M*q;break;case"/":q=M/q}l[z]={rootPropertyValue:B,startValue:M,currentValue:M,endValue:q,unitType:G,easing:$},b.debug&&console.log("tweensContainer ("+z+"): "+JSON.stringify(l[z]),o)}else b.debug&&console.log("Skipping ["+I+"] due to a lack of browser support.")}l.element=o}l.element&&(S.Values.addClass(o,"velocity-animating"),R.push(l),""===s.queue&&(i(o).tweensContainer=l,i(o).opts=s),i(o).isAnimating=!0,V===w-1?(b.State.calls.push([R,g,s,null,k.resolver]),b.State.isTicking===!1&&(b.State.isTicking=!0,c())):V++)}var n,o=this,s=f.extend({},b.defaults,v),l={};switch(i(o)===a&&b.init(o),parseFloat(s.delay)&&s.queue!==!1&&f.queue(o,s.queue,function(e){b.velocityQueueEntryFlag=!0,i(o).delayTimer={setTimeout:setTimeout(e,parseFloat(s.delay)),next:e}}),s.duration.toString().toLowerCase()){case"fast":s.duration=200;break;case"normal":s.duration=h;break;case"slow":s.duration=600;break;default:s.duration=parseFloat(s.duration)||1}b.mock!==!1&&(b.mock===!0?s.duration=s.delay=1:(s.duration*=parseFloat(b.mock)||1,s.delay*=parseFloat(b.mock)||1)),s.easing=u(s.easing,s.duration),s.begin&&!m.isFunction(s.begin)&&(s.begin=null),s.progress&&!m.isFunction(s.progress)&&(s.progress=null),s.complete&&!m.isFunction(s.complete)&&(s.complete=null),s.display!==a&&null!==s.display&&(s.display=s.display.toString().toLowerCase(),"auto"===s.display&&(s.display=b.CSS.Values.getDisplayType(o))),s.visibility!==a&&null!==s.visibility&&(s.visibility=s.visibility.toString().toLowerCase()),s.mobileHA=s.mobileHA&&b.State.isMobile&&!b.State.isGingerbread,s.queue===!1?s.delay?setTimeout(e,s.delay):e():f.queue(o,s.queue,function(t,r){return r===!0?(k.promise&&k.resolver(g),!0):(b.velocityQueueEntryFlag=!0,void e(t))}),""!==s.queue&&"fx"!==s.queue||"inprogress"===f.queue(o)[0]||f.dequeue(o)}var s,l,d,g,y,v,x=arguments[0]&&(arguments[0].p||f.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||m.isString(arguments[0].properties));if(m.isWrapped(this)?(s=!1,d=0,g=this,l=this):(s=!0,d=1,g=x?arguments[0].elements||arguments[0].e:arguments[0]),g=o(g)){x?(y=arguments[0].properties||arguments[0].p,v=arguments[0].options||arguments[0].o):(y=arguments[d],v=arguments[d+1]);var w=g.length,V=0;if(!/^(stop|finish)$/i.test(y)&&!f.isPlainObject(v)){var C=d+1;v={};for(var T=C;T<arguments.length;T++)m.isArray(arguments[T])||!/^(fast|normal|slow)$/i.test(arguments[T])&&!/^\d/.test(arguments[T])?m.isString(arguments[T])||m.isArray(arguments[T])?v.easing=arguments[T]:m.isFunction(arguments[T])&&(v.complete=arguments[T]):v.duration=arguments[T]}var k={promise:null,resolver:null,rejecter:null};s&&b.Promise&&(k.promise=new b.Promise(function(e,t){k.resolver=e,k.rejecter=t}));var A;switch(y){case"scroll":A="scroll";break;case"reverse":A="reverse";break;case"finish":case"stop":f.each(g,function(e,t){i(t)&&i(t).delayTimer&&(clearTimeout(i(t).delayTimer.setTimeout),i(t).delayTimer.next&&i(t).delayTimer.next(),delete i(t).delayTimer)});var F=[];return f.each(b.State.calls,function(e,t){t&&f.each(t[1],function(r,n){var o=v===a?"":v;return o===!0||t[2].queue===o||v===a&&t[2].queue===!1?void f.each(g,function(r,a){a===n&&((v===!0||m.isString(v))&&(f.each(f.queue(a,m.isString(v)?v:""),function(e,t){
m.isFunction(t)&&t(null,!0)}),f.queue(a,m.isString(v)?v:"",[])),"stop"===y?(i(a)&&i(a).tweensContainer&&o!==!1&&f.each(i(a).tweensContainer,function(e,t){t.endValue=t.currentValue}),F.push(e)):"finish"===y&&(t[2].duration=1))}):!0})}),"stop"===y&&(f.each(F,function(e,t){p(t,!0)}),k.promise&&k.resolver(g)),e();default:if(!f.isPlainObject(y)||m.isEmptyObject(y)){if(m.isString(y)&&b.Redirects[y]){var j=f.extend({},v),E=j.duration,H=j.delay||0;return j.backwards===!0&&(g=f.extend(!0,[],g).reverse()),f.each(g,function(e,t){parseFloat(j.stagger)?j.delay=H+parseFloat(j.stagger)*e:m.isFunction(j.stagger)&&(j.delay=H+j.stagger.call(t,e,w)),j.drag&&(j.duration=parseFloat(E)||(/^(callout|transition)/.test(y)?1e3:h),j.duration=Math.max(j.duration*(j.backwards?1-e/w:(e+1)/w),.75*j.duration,200)),b.Redirects[y].call(t,t,j||{},e,w,g,k.promise?k:a)}),e()}var N="Velocity: First argument ("+y+") was not a property map, a known action, or a registered redirect. Aborting.";return k.promise?k.rejecter(new Error(N)):console.log(N),e()}A="start"}var L={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},R=[];f.each(g,function(e,t){m.isNode(t)&&n.call(t)});var z,j=f.extend({},b.defaults,v);if(j.loop=parseInt(j.loop),z=2*j.loop-1,j.loop)for(var O=0;z>O;O++){var q={delay:j.delay,progress:j.progress};O===z-1&&(q.display=j.display,q.visibility=j.visibility,q.complete=j.complete),P(g,"reverse",q)}return e()}};b=f.extend(P,b),b.animate=P;var w=t.requestAnimationFrame||g;return b.State.isMobile||r.hidden===a||r.addEventListener("visibilitychange",function(){r.hidden?(w=function(e){return setTimeout(function(){e(!0)},16)},c()):w=t.requestAnimationFrame||g}),e.Velocity=b,e!==t&&(e.fn.velocity=P,e.fn.velocity.defaults=b.defaults),f.each(["Down","Up"],function(e,t){b.Redirects["slide"+t]=function(e,r,n,o,i,s){var l=f.extend({},r),u=l.begin,c=l.complete,p={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},d={};l.display===a&&(l.display="Down"===t?"inline"===b.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){u&&u.call(i,i);for(var r in p){d[r]=e.style[r];var a=b.CSS.getPropertyValue(e,r);p[r]="Down"===t?[a,0]:[0,a]}d.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in d)e.style[t]=d[t];c&&c.call(i,i),s&&s.resolver(i)},b(e,p,l)}}),f.each(["In","Out"],function(e,t){b.Redirects["fade"+t]=function(e,r,n,o,i,s){var l=f.extend({},r),u={opacity:"In"===t?1:0},c=l.complete;l.complete=n!==o-1?l.begin=null:function(){c&&c.call(i,i),s&&s.resolver(i)},l.display===a&&(l.display="In"===t?"auto":"none"),b(this,u,l)}}),b}(window.jQuery||window.Zepto||window,window,document)}));
;!function(a,b,c,d){"use strict";function k(a,b,c){return setTimeout(q(a,c),b)}function l(a,b,c){return Array.isArray(a)?(m(a,c[b],c),!0):!1}function m(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function n(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a}function o(a,b){return n(a,b,!0)}function p(a,b,c){var e,d=b.prototype;e=a.prototype=Object.create(d),e.constructor=a,e._super=d,c&&n(e,c)}function q(a,b){return function(){return a.apply(b,arguments)}}function r(a,b){return typeof a==g?a.apply(b?b[0]||d:d,b):a}function s(a,b){return a===d?b:a}function t(a,b,c){m(x(b),function(b){a.addEventListener(b,c,!1)})}function u(a,b,c){m(x(b),function(b){a.removeEventListener(b,c,!1)})}function v(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function w(a,b){return a.indexOf(b)>-1}function x(a){return a.trim().split(/\s+/g)}function y(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function z(a){return Array.prototype.slice.call(a,0)}function A(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];y(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function B(a,b){for(var c,f,g=b[0].toUpperCase()+b.slice(1),h=0;h<e.length;){if(c=e[h],f=c?c+g:b,f in a)return f;h++}return d}function D(){return C++}function E(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}function ab(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){r(a.options.enable,[a])&&c.handler(b)},this.init()}function bb(a){var b,c=a.options.inputClass;return b=c?c:H?wb:I?Eb:G?Gb:rb,new b(a,cb)}function cb(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&O&&0===d-e,g=b&(Q|R)&&0===d-e;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,db(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function db(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=gb(b)),e>1&&!c.firstMultiple?c.firstMultiple=gb(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=hb(d);b.timeStamp=j(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=lb(h,i),b.distance=kb(h,i),eb(c,b),b.offsetDirection=jb(b.deltaX,b.deltaY),b.scale=g?nb(g.pointers,d):1,b.rotation=g?mb(g.pointers,d):0,fb(c,b);var k=a.element;v(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function eb(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===O||f.eventType===Q)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function fb(a,b){var f,g,h,j,c=a.lastInterval||b,e=b.timeStamp-c.timeStamp;if(b.eventType!=R&&(e>N||c.velocity===d)){var k=c.deltaX-b.deltaX,l=c.deltaY-b.deltaY,m=ib(e,k,l);g=m.x,h=m.y,f=i(m.x)>i(m.y)?m.x:m.y,j=jb(k,l),a.lastInterval=b}else f=c.velocity,g=c.velocityX,h=c.velocityY,j=c.direction;b.velocity=f,b.velocityX=g,b.velocityY=h,b.direction=j}function gb(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:h(a.pointers[c].clientX),clientY:h(a.pointers[c].clientY)},c++;return{timeStamp:j(),pointers:b,center:hb(b),deltaX:a.deltaX,deltaY:a.deltaY}}function hb(a){var b=a.length;if(1===b)return{x:h(a[0].clientX),y:h(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:h(c/b),y:h(d/b)}}function ib(a,b,c){return{x:b/a||0,y:c/a||0}}function jb(a,b){return a===b?S:i(a)>=i(b)?a>0?T:U:b>0?V:W}function kb(a,b,c){c||(c=$);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function lb(a,b,c){c||(c=$);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function mb(a,b){return lb(b[1],b[0],_)-lb(a[1],a[0],_)}function nb(a,b){return kb(b[0],b[1],_)/kb(a[0],a[1],_)}function rb(){this.evEl=pb,this.evWin=qb,this.allow=!0,this.pressed=!1,ab.apply(this,arguments)}function wb(){this.evEl=ub,this.evWin=vb,ab.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function Ab(){this.evTarget=yb,this.evWin=zb,this.started=!1,ab.apply(this,arguments)}function Bb(a,b){var c=z(a.touches),d=z(a.changedTouches);return b&(Q|R)&&(c=A(c.concat(d),"identifier",!0)),[c,d]}function Eb(){this.evTarget=Db,this.targetIds={},ab.apply(this,arguments)}function Fb(a,b){var c=z(a.touches),d=this.targetIds;if(b&(O|P)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=z(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return v(a.target,i)}),b===O)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Q|R)&&delete d[g[e].identifier],e++;return h.length?[A(f.concat(h),"identifier",!0),h]:void 0}function Gb(){ab.apply(this,arguments);var a=q(this.handler,this);this.touch=new Eb(this.manager,a),this.mouse=new rb(this.manager,a)}function Pb(a,b){this.manager=a,this.set(b)}function Qb(a){if(w(a,Mb))return Mb;var b=w(a,Nb),c=w(a,Ob);return b&&c?Nb+" "+Ob:b||c?b?Nb:Ob:w(a,Lb)?Lb:Kb}function Yb(a){this.id=D(),this.manager=null,this.options=o(a||{},this.defaults),this.options.enable=s(this.options.enable,!0),this.state=Rb,this.simultaneous={},this.requireFail=[]}function Zb(a){return a&Wb?"cancel":a&Ub?"end":a&Tb?"move":a&Sb?"start":""}function $b(a){return a==W?"down":a==V?"up":a==T?"left":a==U?"right":""}function _b(a,b){var c=b.manager;return c?c.get(a):a}function ac(){Yb.apply(this,arguments)}function bc(){ac.apply(this,arguments),this.pX=null,this.pY=null}function cc(){ac.apply(this,arguments)}function dc(){Yb.apply(this,arguments),this._timer=null,this._input=null}function ec(){ac.apply(this,arguments)}function fc(){ac.apply(this,arguments)}function gc(){Yb.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function hc(a,b){return b=b||{},b.recognizers=s(b.recognizers,hc.defaults.preset),new kc(a,b)}function kc(a,b){b=b||{},this.options=o(b,hc.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=bb(this),this.touchAction=new Pb(this,this.options.touchAction),lc(this,!0),m(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function lc(a,b){var c=a.element;m(a.options.cssProps,function(a,d){c.style[B(c.style,d)]=b?a:""})}function mc(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var e=["","webkit","moz","MS","ms","o"],f=b.createElement("div"),g="function",h=Math.round,i=Math.abs,j=Date.now,C=1,F=/mobile|tablet|ip(ad|hone|od)|android/i,G="ontouchstart"in a,H=B(a,"PointerEvent")!==d,I=G&&F.test(navigator.userAgent),J="touch",K="pen",L="mouse",M="kinect",N=25,O=1,P=2,Q=4,R=8,S=1,T=2,U=4,V=8,W=16,X=T|U,Y=V|W,Z=X|Y,$=["x","y"],_=["clientX","clientY"];ab.prototype={handler:function(){},init:function(){this.evEl&&t(this.element,this.evEl,this.domHandler),this.evTarget&&t(this.target,this.evTarget,this.domHandler),this.evWin&&t(E(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&u(this.element,this.evEl,this.domHandler),this.evTarget&&u(this.target,this.evTarget,this.domHandler),this.evWin&&u(E(this.element),this.evWin,this.domHandler)}};var ob={mousedown:O,mousemove:P,mouseup:Q},pb="mousedown",qb="mousemove mouseup";p(rb,ab,{handler:function(a){var b=ob[a.type];b&O&&0===a.button&&(this.pressed=!0),b&P&&1!==a.which&&(b=Q),this.pressed&&this.allow&&(b&Q&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:L,srcEvent:a}))}});var sb={pointerdown:O,pointermove:P,pointerup:Q,pointercancel:R,pointerout:R},tb={2:J,3:K,4:L,5:M},ub="pointerdown",vb="pointermove pointerup pointercancel";a.MSPointerEvent&&(ub="MSPointerDown",vb="MSPointerMove MSPointerUp MSPointerCancel"),p(wb,ab,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=sb[d],f=tb[a.pointerType]||a.pointerType,g=f==J,h=y(b,a.pointerId,"pointerId");e&O&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Q|R)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var xb={touchstart:O,touchmove:P,touchend:Q,touchcancel:R},yb="touchstart",zb="touchstart touchmove touchend touchcancel";p(Ab,ab,{handler:function(a){var b=xb[a.type];if(b===O&&(this.started=!0),this.started){var c=Bb.call(this,a,b);b&(Q|R)&&0===c[0].length-c[1].length&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:J,srcEvent:a})}}});var Cb={touchstart:O,touchmove:P,touchend:Q,touchcancel:R},Db="touchstart touchmove touchend touchcancel";p(Eb,ab,{handler:function(a){var b=Cb[a.type],c=Fb.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:J,srcEvent:a})}}),p(Gb,ab,{handler:function(a,b,c){var d=c.pointerType==J,e=c.pointerType==L;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Q|R)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Hb=B(f.style,"touchAction"),Ib=Hb!==d,Jb="compute",Kb="auto",Lb="manipulation",Mb="none",Nb="pan-x",Ob="pan-y";Pb.prototype={set:function(a){a==Jb&&(a=this.compute()),Ib&&(this.manager.element.style[Hb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return m(this.manager.recognizers,function(b){r(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),Qb(a.join(" "))},preventDefaults:function(a){if(!Ib){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return b.preventDefault(),void 0;var d=this.actions,e=w(d,Mb),f=w(d,Ob),g=w(d,Nb);return e||f&&c&X||g&&c&Y?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var Rb=1,Sb=2,Tb=4,Ub=8,Vb=Ub,Wb=16,Xb=32;Yb.prototype={defaults:{},set:function(a){return n(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(l(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_b(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return l(a,"dropRecognizeWith",this)?this:(a=_b(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(l(a,"requireFailure",this))return this;var b=this.requireFail;return a=_b(a,this),-1===y(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(l(a,"dropRequireFailure",this))return this;a=_b(a,this);var b=y(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function d(d){b.manager.emit(b.options.event+(d?Zb(c):""),a)}var b=this,c=this.state;Ub>c&&d(!0),d(),c>=Ub&&d(!0)},tryEmit:function(a){return this.canEmit()?this.emit(a):(this.state=Xb,void 0)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(Xb|Rb)))return!1;a++}return!0},recognize:function(a){var b=n({},a);return r(this.options.enable,[this,b])?(this.state&(Vb|Wb|Xb)&&(this.state=Rb),this.state=this.process(b),this.state&(Sb|Tb|Ub|Wb)&&this.tryEmit(b),void 0):(this.reset(),this.state=Xb,void 0)},process:function(){},getTouchAction:function(){},reset:function(){}},p(ac,Yb,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(Sb|Tb),e=this.attrTest(a);return d&&(c&R||!e)?b|Wb:d||e?c&Q?b|Ub:b&Sb?b|Tb:Sb:Xb}}),p(bc,ac,{defaults:{event:"pan",threshold:10,pointers:1,direction:Z},getTouchAction:function(){var a=this.options.direction,b=[];return a&X&&b.push(Ob),a&Y&&b.push(Nb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&X?(e=0===f?S:0>f?T:U,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?S:0>g?V:W,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return ac.prototype.attrTest.call(this,a)&&(this.state&Sb||!(this.state&Sb)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$b(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),p(cc,ac,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Mb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&Sb)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),p(dc,Yb,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[Kb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,e=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Q|R)&&!e)this.reset();else if(a.eventType&O)this.reset(),this._timer=k(function(){this.state=Vb,this.tryEmit()},b.time,this);else if(a.eventType&Q)return Vb;return Xb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===Vb&&(a&&a.eventType&Q?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=j(),this.manager.emit(this.options.event,this._input)))}}),p(ec,ac,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Mb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&Sb)}}),p(fc,ac,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:X|Y,pointers:1},getTouchAction:function(){return bc.prototype.getTouchAction.call(this)},attrTest:function(a){var c,b=this.options.direction;return b&(X|Y)?c=a.velocity:b&X?c=a.velocityX:b&Y&&(c=a.velocityY),this._super.attrTest.call(this,a)&&b&a.direction&&a.distance>this.options.threshold&&i(c)>this.options.velocity&&a.eventType&Q},emit:function(a){var b=$b(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),p(gc,Yb,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[Lb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,e=a.deltaTime<b.time;if(this.reset(),a.eventType&O&&0===this.count)return this.failTimeout();if(d&&e&&c){if(a.eventType!=Q)return this.failTimeout();var f=this.pTime?a.timeStamp-this.pTime<b.interval:!0,g=!this.pCenter||kb(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,g&&f?this.count+=1:this.count=1,this._input=a;var h=this.count%b.taps;if(0===h)return this.hasRequireFailures()?(this._timer=k(function(){this.state=Vb,this.tryEmit()},b.interval,this),Sb):Vb}return Xb},failTimeout:function(){return this._timer=k(function(){this.state=Xb},this.options.interval,this),Xb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Vb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),hc.VERSION="2.0.4",hc.defaults={domEvents:!1,touchAction:Jb,enable:!0,inputTarget:null,inputClass:null,preset:[[ec,{enable:!1}],[cc,{enable:!1},["rotate"]],[fc,{direction:X}],[bc,{direction:X},["swipe"]],[gc],[gc,{event:"doubletap",taps:2},["tap"]],[dc]],cssProps:{userSelect:"default",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ic=1,jc=2;kc.prototype={set:function(a){return n(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?jc:ic},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&Vb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===jc||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(Sb|Tb|Ub)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Yb)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(l(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(l(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(y(b,a),1),this.touchAction.update(),this},on:function(a,b){var c=this.handlers;return m(x(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return m(x(a),function(a){b?c[a].splice(y(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&mc(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&lc(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},n(hc,{INPUT_START:O,INPUT_MOVE:P,INPUT_END:Q,INPUT_CANCEL:R,STATE_POSSIBLE:Rb,STATE_BEGAN:Sb,STATE_CHANGED:Tb,STATE_ENDED:Ub,STATE_RECOGNIZED:Vb,STATE_CANCELLED:Wb,STATE_FAILED:Xb,DIRECTION_NONE:S,DIRECTION_LEFT:T,DIRECTION_RIGHT:U,DIRECTION_UP:V,DIRECTION_DOWN:W,DIRECTION_HORIZONTAL:X,DIRECTION_VERTICAL:Y,DIRECTION_ALL:Z,Manager:kc,Input:ab,TouchAction:Pb,TouchInput:Eb,MouseInput:rb,PointerEventInput:wb,TouchMouseInput:Gb,SingleTouchInput:Ab,Recognizer:Yb,AttrRecognizer:ac,Tap:gc,Pan:bc,Swipe:fc,Pinch:cc,Rotate:ec,Press:dc,on:t,off:u,each:m,merge:o,extend:n,inherit:p,bindFn:q,prefixed:B}),typeof define==g&&define.amd?define(function(){return hc}):"undefined"!=typeof module&&module.exports?module.exports=hc:a[c]=hc}(window,document,"Hammer");;(function(factory) {
    if (typeof define === 'function' && define.amd) {                                                                 // 235
        define(['jquery', 'hammerjs'], factory);                                                                      // 236
    } else if (typeof exports === 'object') {                                                                         // 237
        factory(require('jquery'), require('hammerjs'));                                                              // 238
    } else {                                                                                                          // 239
        factory(jQuery, Hammer);                                                                                      // 240
    }                                                                                                                 // 241
}(function($, Hammer) {                                                                                               // 242
    function hammerify(el, options) {                                                                                 // 243
        var $el = $(el);                                                                                              // 244
        if(!$el.data("hammer")) {                                                                                     // 245
            $el.data("hammer", new Hammer($el[0], options));                                                          // 246
        }                                                                                                             // 247
    }                                                                                                                 // 248
                                                                                                                      // 249
    $.fn.hammer = function(options) {                                                                                 // 250
        return this.each(function() {                                                                                 // 251
            hammerify(this, options);                                                                                 // 252
        });                                                                                                           // 253
    };                                                                                                                // 254
                                                                                                                      // 255
    // extend the emit method to also trigger jQuery events                                                           // 256
    Hammer.Manager.prototype.emit = (function(originalEmit) {                                                         // 257
        return function(type, data) {                                                                                 // 258
            originalEmit.call(this, type, data);                                                                      // 259
            $(this.element).trigger({                                                                                 // 260
                type: type,                                                                                           // 261
                gesture: data                                                                                         // 262
            });                                                                                                       // 263
        };                                                                                                            // 264
    })(Hammer.Manager.prototype.emit);                                                                                // 265
}));                                                                                                                  // 266
;// Required for Meteor package, the use of window prevents export by Meteor                                          // 267
(function(window){                                                                                                    // 268
  if(window.Package){                                                                                                 // 269
    Materialize = {};                                                                                                 // 270
  } else {                                                                                                            // 271
    window.Materialize = {};                                                                                          // 272
  }                                                                                                                   // 273
})(window);                                                                                                           // 274
                                                                                                                      // 275
                                                                                                                      // 276
// Unique ID                                                                                                          // 277
Materialize.guid = (function() {                                                                                      // 278
  function s4() {                                                                                                     // 279
    return Math.floor((1 + Math.random()) * 0x10000)                                                                  // 280
      .toString(16)                                                                                                   // 281
      .substring(1);                                                                                                  // 282
  }                                                                                                                   // 283
  return function() {                                                                                                 // 284
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +                                                              // 285
           s4() + '-' + s4() + s4() + s4();                                                                           // 286
  };                                                                                                                  // 287
})();                                                                                                                 // 288
                                                                                                                      // 289
Materialize.elementOrParentIsFixed = function(element) {                                                              // 290
    var $element = $(element);                                                                                        // 291
    var $checkElements = $element.add($element.parents());                                                            // 292
    var isFixed = false;                                                                                              // 293
    $checkElements.each(function(){                                                                                   // 294
        if ($(this).css("position") === "fixed") {                                                                    // 295
            isFixed = true;                                                                                           // 296
            return false;                                                                                             // 297
        }                                                                                                             // 298
    });                                                                                                               // 299
    return isFixed;                                                                                                   // 300
};                                                                                                                    // 301
                                                                                                                      // 302
// Velocity has conflicts when loaded with jQuery, this will check for it                                             // 303
var Vel;                                                                                                              // 304
if ($) {                                                                                                              // 305
  Vel = $.Velocity;                                                                                                   // 306
} else if (jQuery) {                                                                                                  // 307
  Vel = jQuery.Velocity;                                                                                              // 308
} else {                                                                                                              // 309
  Vel = Velocity;                                                                                                     // 310
}                                                                                                                     // 311
;  (function ($) {                                                                                                    // 312
  $.fn.collapsible = function(options) {                                                                              // 313
    var defaults = {                                                                                                  // 314
        accordion: undefined                                                                                          // 315
    };                                                                                                                // 316
                                                                                                                      // 317
    options = $.extend(defaults, options);                                                                            // 318
                                                                                                                      // 319
                                                                                                                      // 320
    return this.each(function() {                                                                                     // 321
                                                                                                                      // 322
      var $this = $(this);                                                                                            // 323
                                                                                                                      // 324
      var $panel_headers = $(this).find('> li > .collapsible-header');                                                // 325
                                                                                                                      // 326
      var collapsible_type = $this.data("collapsible");                                                               // 327
                                                                                                                      // 328
      // Turn off any existing event handlers                                                                         // 329
       $this.off('click.collapse', '> li > .collapsible-header');                                                     // 330
       $panel_headers.off('click.collapse');                                                                          // 331
                                                                                                                      // 332
                                                                                                                      // 333
       /****************                                                                                              // 334
       Helper Functions                                                                                               // 335
       ****************/                                                                                              // 336
                                                                                                                      // 337
      // Accordion Open                                                                                               // 338
      function accordionOpen(object) {                                                                                // 339
        $panel_headers = $this.find('> li > .collapsible-header');                                                    // 340
        if (object.hasClass('active')) {                                                                              // 341
            object.parent().addClass('active');                                                                       // 342
        }                                                                                                             // 343
        else {                                                                                                        // 344
            object.parent().removeClass('active');                                                                    // 345
        }                                                                                                             // 346
        if (object.parent().hasClass('active')){                                                                      // 347
          object.siblings('.collapsible-body').stop(true,false).slideDown({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '');}});
        }                                                                                                             // 349
        else{                                                                                                         // 350
          object.siblings('.collapsible-body').stop(true,false).slideUp({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '');}});
        }                                                                                                             // 352
                                                                                                                      // 353
        $panel_headers.not(object).removeClass('active').parent().removeClass('active');                              // 354
        $panel_headers.not(object).parent().children('.collapsible-body').stop(true,false).slideUp(                   // 355
          {                                                                                                           // 356
            duration: 350,                                                                                            // 357
            easing: "easeOutQuart",                                                                                   // 358
            queue: false,                                                                                             // 359
            complete:                                                                                                 // 360
              function() {                                                                                            // 361
                $(this).css('height', '');                                                                            // 362
              }                                                                                                       // 363
          });                                                                                                         // 364
      }                                                                                                               // 365
                                                                                                                      // 366
      // Expandable Open                                                                                              // 367
      function expandableOpen(object) {                                                                               // 368
        if (object.hasClass('active')) {                                                                              // 369
            object.parent().addClass('active');                                                                       // 370
        }                                                                                                             // 371
        else {                                                                                                        // 372
            object.parent().removeClass('active');                                                                    // 373
        }                                                                                                             // 374
        if (object.parent().hasClass('active')){                                                                      // 375
          object.siblings('.collapsible-body').stop(true,false).slideDown({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '');}});
        }                                                                                                             // 377
        else{                                                                                                         // 378
          object.siblings('.collapsible-body').stop(true,false).slideUp({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '');}});
        }                                                                                                             // 380
      }                                                                                                               // 381
                                                                                                                      // 382
      /**                                                                                                             // 383
       * Check if object is children of panel header                                                                  // 384
       * @param  {Object}  object Jquery object                                                                       // 385
       * @return {Boolean} true if it is children                                                                     // 386
       */                                                                                                             // 387
      function isChildrenOfPanelHeader(object) {                                                                      // 388
                                                                                                                      // 389
        var panelHeader = getPanelHeader(object);                                                                     // 390
                                                                                                                      // 391
        return panelHeader.length > 0;                                                                                // 392
      }                                                                                                               // 393
                                                                                                                      // 394
      /**                                                                                                             // 395
       * Get panel header from a children element                                                                     // 396
       * @param  {Object} object Jquery object                                                                        // 397
       * @return {Object} panel header object                                                                         // 398
       */                                                                                                             // 399
      function getPanelHeader(object) {                                                                               // 400
                                                                                                                      // 401
        return object.closest('li > .collapsible-header');                                                            // 402
      }                                                                                                               // 403
                                                                                                                      // 404
      /*****  End Helper Functions  *****/                                                                            // 405
                                                                                                                      // 406
                                                                                                                      // 407
                                                                                                                      // 408
      // Add click handler to only direct collapsible header children                                                 // 409
      $this.on('click.collapse', '> li > .collapsible-header', function(e) {                                          // 410
        var $header = $(this),                                                                                        // 411
            element = $(e.target);                                                                                    // 412
                                                                                                                      // 413
        if (isChildrenOfPanelHeader(element)) {                                                                       // 414
          element = getPanelHeader(element);                                                                          // 415
        }                                                                                                             // 416
                                                                                                                      // 417
        element.toggleClass('active');                                                                                // 418
                                                                                                                      // 419
        if (options.accordion || collapsible_type === "accordion" || collapsible_type === undefined) { // Handle Accordion
          accordionOpen(element);                                                                                     // 421
        } else { // Handle Expandables                                                                                // 422
          expandableOpen(element);                                                                                    // 423
                                                                                                                      // 424
          if ($header.hasClass('active')) {                                                                           // 425
            expandableOpen($header);                                                                                  // 426
          }                                                                                                           // 427
        }                                                                                                             // 428
      });                                                                                                             // 429
                                                                                                                      // 430
      // Open first active                                                                                            // 431
      var $panel_headers = $this.find('> li > .collapsible-header');                                                  // 432
      if (options.accordion || collapsible_type === "accordion" || collapsible_type === undefined) { // Handle Accordion
        accordionOpen($panel_headers.filter('.active').first());                                                      // 434
      }                                                                                                               // 435
      else { // Handle Expandables                                                                                    // 436
        $panel_headers.filter('.active').each(function() {                                                            // 437
          expandableOpen($(this));                                                                                    // 438
        });                                                                                                           // 439
      }                                                                                                               // 440
                                                                                                                      // 441
    });                                                                                                               // 442
  };                                                                                                                  // 443
                                                                                                                      // 444
  $(document).ready(function(){                                                                                       // 445
    $('.collapsible').collapsible();                                                                                  // 446
  });                                                                                                                 // 447
}( jQuery ));;(function ($) {                                                                                         // 448
                                                                                                                      // 449
  // Add posibility to scroll to selected option                                                                      // 450
  // usefull for select for example                                                                                   // 451
  $.fn.scrollTo = function(elem) {                                                                                    // 452
    $(this).scrollTop($(this).scrollTop() - $(this).offset().top + $(elem).offset().top);                             // 453
    return this;                                                                                                      // 454
  };                                                                                                                  // 455
                                                                                                                      // 456
  $.fn.dropdown = function (option) {                                                                                 // 457
    var defaults = {                                                                                                  // 458
      inDuration: 300,                                                                                                // 459
      outDuration: 225,                                                                                               // 460
      constrain_width: true, // Constrains width of dropdown to the activator                                         // 461
      hover: false,                                                                                                   // 462
      gutter: 0, // Spacing from edge                                                                                 // 463
      belowOrigin: false,                                                                                             // 464
      alignment: 'left'                                                                                               // 465
    };                                                                                                                // 466
                                                                                                                      // 467
    this.each(function(){                                                                                             // 468
    var origin = $(this);                                                                                             // 469
    var options = $.extend({}, defaults, option);                                                                     // 470
    var isFocused = false;                                                                                            // 471
                                                                                                                      // 472
    // Dropdown menu                                                                                                  // 473
    var activates = $("#"+ origin.attr('data-activates'));                                                            // 474
                                                                                                                      // 475
    function updateOptions() {                                                                                        // 476
      if (origin.data('induration') !== undefined)                                                                    // 477
        options.inDuration = origin.data('inDuration');                                                               // 478
      if (origin.data('outduration') !== undefined)                                                                   // 479
        options.outDuration = origin.data('outDuration');                                                             // 480
      if (origin.data('constrainwidth') !== undefined)                                                                // 481
        options.constrain_width = origin.data('constrainwidth');                                                      // 482
      if (origin.data('hover') !== undefined)                                                                         // 483
        options.hover = origin.data('hover');                                                                         // 484
      if (origin.data('gutter') !== undefined)                                                                        // 485
        options.gutter = origin.data('gutter');                                                                       // 486
      if (origin.data('beloworigin') !== undefined)                                                                   // 487
        options.belowOrigin = origin.data('beloworigin');                                                             // 488
      if (origin.data('alignment') !== undefined)                                                                     // 489
        options.alignment = origin.data('alignment');                                                                 // 490
    }                                                                                                                 // 491
                                                                                                                      // 492
    updateOptions();                                                                                                  // 493
                                                                                                                      // 494
    // Attach dropdown to its activator                                                                               // 495
    origin.after(activates);                                                                                          // 496
                                                                                                                      // 497
    /*                                                                                                                // 498
      Helper function to position and resize dropdown.                                                                // 499
      Used in hover and click handler.                                                                                // 500
    */                                                                                                                // 501
    function placeDropdown(eventType) {                                                                               // 502
      // Check for simultaneous focus and click events.                                                               // 503
      if (eventType === 'focus') {                                                                                    // 504
        isFocused = true;                                                                                             // 505
      }                                                                                                               // 506
                                                                                                                      // 507
      // Check html data attributes                                                                                   // 508
      updateOptions();                                                                                                // 509
                                                                                                                      // 510
      // Set Dropdown state                                                                                           // 511
      activates.addClass('active');                                                                                   // 512
      origin.addClass('active');                                                                                      // 513
                                                                                                                      // 514
      // Constrain width                                                                                              // 515
      if (options.constrain_width === true) {                                                                         // 516
        activates.css('width', origin.outerWidth());                                                                  // 517
                                                                                                                      // 518
      } else {                                                                                                        // 519
        activates.css('white-space', 'nowrap');                                                                       // 520
      }                                                                                                               // 521
                                                                                                                      // 522
      // Offscreen detection                                                                                          // 523
      var windowHeight = window.innerHeight;                                                                          // 524
      var originHeight = origin.innerHeight();                                                                        // 525
      var offsetLeft = origin.offset().left;                                                                          // 526
      var offsetTop = origin.offset().top - $(window).scrollTop();                                                    // 527
      var currAlignment = options.alignment;                                                                          // 528
      var activatesLeft, gutterSpacing;                                                                               // 529
                                                                                                                      // 530
      // Below Origin                                                                                                 // 531
      var verticalOffset = 0;                                                                                         // 532
      if (options.belowOrigin === true) {                                                                             // 533
        verticalOffset = originHeight;                                                                                // 534
      }                                                                                                               // 535
                                                                                                                      // 536
      if (offsetLeft + activates.innerWidth() > $(window).width()) {                                                  // 537
        // Dropdown goes past screen on right, force right alignment                                                  // 538
        currAlignment = 'right';                                                                                      // 539
                                                                                                                      // 540
      } else if (offsetLeft - activates.innerWidth() + origin.innerWidth() < 0) {                                     // 541
        // Dropdown goes past screen on left, force left alignment                                                    // 542
        currAlignment = 'left';                                                                                       // 543
      }                                                                                                               // 544
      // Vertical bottom offscreen detection                                                                          // 545
      if (offsetTop + activates.innerHeight() > windowHeight) {                                                       // 546
        // If going upwards still goes offscreen, just crop height of dropdown.                                       // 547
        if (offsetTop + originHeight - activates.innerHeight() < 0) {                                                 // 548
          var adjustedHeight = windowHeight - offsetTop - verticalOffset;                                             // 549
          activates.css('max-height', adjustedHeight);                                                                // 550
        } else {                                                                                                      // 551
          // Flow upwards.                                                                                            // 552
          if (!verticalOffset) {                                                                                      // 553
            verticalOffset += originHeight;                                                                           // 554
          }                                                                                                           // 555
          verticalOffset -= activates.innerHeight();                                                                  // 556
        }                                                                                                             // 557
      }                                                                                                               // 558
                                                                                                                      // 559
      // Handle edge alignment                                                                                        // 560
      if (currAlignment === 'left') {                                                                                 // 561
        gutterSpacing = options.gutter;                                                                               // 562
        leftPosition = origin.position().left + gutterSpacing;                                                        // 563
      }                                                                                                               // 564
      else if (currAlignment === 'right') {                                                                           // 565
        var offsetRight = origin.position().left + origin.outerWidth() - activates.outerWidth();                      // 566
        gutterSpacing = -options.gutter;                                                                              // 567
        leftPosition =  offsetRight + gutterSpacing;                                                                  // 568
      }                                                                                                               // 569
                                                                                                                      // 570
      // Position dropdown                                                                                            // 571
      activates.css({                                                                                                 // 572
        position: 'absolute',                                                                                         // 573
        top: origin.position().top + verticalOffset,                                                                  // 574
        left: leftPosition                                                                                            // 575
      });                                                                                                             // 576
                                                                                                                      // 577
                                                                                                                      // 578
      // Show dropdown                                                                                                // 579
      activates.stop(true, true).css('opacity', 0)                                                                    // 580
        .slideDown({                                                                                                  // 581
        queue: false,                                                                                                 // 582
        duration: options.inDuration,                                                                                 // 583
        easing: 'easeOutCubic',                                                                                       // 584
        complete: function() {                                                                                        // 585
          $(this).css('height', '');                                                                                  // 586
        }                                                                                                             // 587
      })                                                                                                              // 588
        .animate( {opacity: 1}, {queue: false, duration: options.inDuration, easing: 'easeOutSine'});                 // 589
    }                                                                                                                 // 590
                                                                                                                      // 591
    function hideDropdown() {                                                                                         // 592
      // Check for simultaneous focus and click events.                                                               // 593
      isFocused = false;                                                                                              // 594
      activates.fadeOut(options.outDuration);                                                                         // 595
      activates.removeClass('active');                                                                                // 596
      origin.removeClass('active');                                                                                   // 597
      setTimeout(function() { activates.css('max-height', ''); }, options.outDuration);                               // 598
    }                                                                                                                 // 599
                                                                                                                      // 600
    // Hover                                                                                                          // 601
    if (options.hover) {                                                                                              // 602
      var open = false;                                                                                               // 603
      origin.unbind('click.' + origin.attr('id'));                                                                    // 604
      // Hover handler to show dropdown                                                                               // 605
      origin.on('mouseenter', function(e){ // Mouse over                                                              // 606
        if (open === false) {                                                                                         // 607
          placeDropdown();                                                                                            // 608
          open = true;                                                                                                // 609
        }                                                                                                             // 610
      });                                                                                                             // 611
      origin.on('mouseleave', function(e){                                                                            // 612
        // If hover on origin then to something other than dropdown content, then close                               // 613
        var toEl = e.toElement || e.relatedTarget; // added browser compatibility for target element                  // 614
        if(!$(toEl).closest('.dropdown-content').is(activates)) {                                                     // 615
          activates.stop(true, true);                                                                                 // 616
          hideDropdown();                                                                                             // 617
          open = false;                                                                                               // 618
        }                                                                                                             // 619
      });                                                                                                             // 620
                                                                                                                      // 621
      activates.on('mouseleave', function(e){ // Mouse out                                                            // 622
        var toEl = e.toElement || e.relatedTarget;                                                                    // 623
        if(!$(toEl).closest('.dropdown-button').is(origin)) {                                                         // 624
          activates.stop(true, true);                                                                                 // 625
          hideDropdown();                                                                                             // 626
          open = false;                                                                                               // 627
        }                                                                                                             // 628
      });                                                                                                             // 629
                                                                                                                      // 630
    // Click                                                                                                          // 631
    } else {                                                                                                          // 632
      // Click handler to show dropdown                                                                               // 633
      origin.unbind('click.' + origin.attr('id'));                                                                    // 634
      origin.bind('click.'+origin.attr('id'), function(e){                                                            // 635
        if (!isFocused) {                                                                                             // 636
          if ( origin[0] == e.currentTarget &&                                                                        // 637
               !origin.hasClass('active') &&                                                                          // 638
               ($(e.target).closest('.dropdown-content').length === 0)) {                                             // 639
            e.preventDefault(); // Prevents button click from moving window                                           // 640
            placeDropdown('click');                                                                                   // 641
          }                                                                                                           // 642
          // If origin is clicked and menu is open, close menu                                                        // 643
          else if (origin.hasClass('active')) {                                                                       // 644
            hideDropdown();                                                                                           // 645
            $(document).unbind('click.'+ activates.attr('id') + ' touchstart.' + activates.attr('id'));               // 646
          }                                                                                                           // 647
          // If menu open, add click close handler to document                                                        // 648
          if (activates.hasClass('active')) {                                                                         // 649
            $(document).bind('click.'+ activates.attr('id') + ' touchstart.' + activates.attr('id'), function (e) {   // 650
              if (!activates.is(e.target) && !origin.is(e.target) && (!origin.find(e.target).length) ) {              // 651
                hideDropdown();                                                                                       // 652
                $(document).unbind('click.'+ activates.attr('id') + ' touchstart.' + activates.attr('id'));           // 653
              }                                                                                                       // 654
            });                                                                                                       // 655
          }                                                                                                           // 656
        }                                                                                                             // 657
      });                                                                                                             // 658
                                                                                                                      // 659
    } // End else                                                                                                     // 660
                                                                                                                      // 661
    // Listen to open and close event - useful for select component                                                   // 662
    origin.on('open', function(e, eventType) {                                                                        // 663
      placeDropdown(eventType);                                                                                       // 664
    });                                                                                                               // 665
    origin.on('close', hideDropdown);                                                                                 // 666
                                                                                                                      // 667
                                                                                                                      // 668
   });                                                                                                                // 669
  }; // End dropdown plugin                                                                                           // 670
                                                                                                                      // 671
  $(document).ready(function(){                                                                                       // 672
    $('.dropdown-button').dropdown();                                                                                 // 673
  });                                                                                                                 // 674
}( jQuery ));;(function($) {                                                                                          // 675
    var _stack = 0,                                                                                                   // 676
    _lastID = 0,                                                                                                      // 677
    _generateID = function() {                                                                                        // 678
      _lastID++;                                                                                                      // 679
      return 'materialize-lean-overlay-' + _lastID;                                                                   // 680
    };                                                                                                                // 681
                                                                                                                      // 682
  $.fn.extend({                                                                                                       // 683
    openModal: function(options) {                                                                                    // 684
                                                                                                                      // 685
      $('body').css('overflow', 'hidden');                                                                            // 686
                                                                                                                      // 687
      var defaults = {                                                                                                // 688
        opacity: 0.5,                                                                                                 // 689
        in_duration: 350,                                                                                             // 690
        out_duration: 250,                                                                                            // 691
        ready: undefined,                                                                                             // 692
        complete: undefined,                                                                                          // 693
        dismissible: true,                                                                                            // 694
        starting_top: '4%'                                                                                            // 695
      },                                                                                                              // 696
      overlayID = _generateID(),                                                                                      // 697
      $modal = $(this),                                                                                               // 698
      $overlay = $('<div class="lean-overlay"></div>'),                                                               // 699
      lStack = (++_stack);                                                                                            // 700
                                                                                                                      // 701
      // Store a reference of the overlay                                                                             // 702
      $overlay.attr('id', overlayID).css('z-index', 1000 + lStack * 2);                                               // 703
      $modal.data('overlay-id', overlayID).css('z-index', 1000 + lStack * 2 + 1);                                     // 704
                                                                                                                      // 705
      $("body").append($overlay);                                                                                     // 706
                                                                                                                      // 707
      // Override defaults                                                                                            // 708
      options = $.extend(defaults, options);                                                                          // 709
                                                                                                                      // 710
      if (options.dismissible) {                                                                                      // 711
        $overlay.click(function() {                                                                                   // 712
          $modal.closeModal(options);                                                                                 // 713
        });                                                                                                           // 714
        // Return on ESC                                                                                              // 715
        $(document).on('keyup.leanModal' + overlayID, function(e) {                                                   // 716
          if (e.keyCode === 27) {   // ESC key                                                                        // 717
            $modal.closeModal(options);                                                                               // 718
          }                                                                                                           // 719
        });                                                                                                           // 720
      }                                                                                                               // 721
                                                                                                                      // 722
      $modal.find(".modal-close").on('click.close', function(e) {                                                     // 723
        $modal.closeModal(options);                                                                                   // 724
      });                                                                                                             // 725
                                                                                                                      // 726
      $overlay.css({ display : "block", opacity : 0 });                                                               // 727
                                                                                                                      // 728
      $modal.css({                                                                                                    // 729
        display : "block",                                                                                            // 730
        opacity: 0                                                                                                    // 731
      });                                                                                                             // 732
                                                                                                                      // 733
      $overlay.velocity({opacity: options.opacity}, {duration: options.in_duration, queue: false, ease: "easeOutCubic"});
      $modal.data('associated-overlay', $overlay[0]);                                                                 // 735
                                                                                                                      // 736
      // Define Bottom Sheet animation                                                                                // 737
      if ($modal.hasClass('bottom-sheet')) {                                                                          // 738
        $modal.velocity({bottom: "0", opacity: 1}, {                                                                  // 739
          duration: options.in_duration,                                                                              // 740
          queue: false,                                                                                               // 741
          ease: "easeOutCubic",                                                                                       // 742
          // Handle modal ready callback                                                                              // 743
          complete: function() {                                                                                      // 744
            if (typeof(options.ready) === "function") {                                                               // 745
              options.ready();                                                                                        // 746
            }                                                                                                         // 747
          }                                                                                                           // 748
        });                                                                                                           // 749
      }                                                                                                               // 750
      else {                                                                                                          // 751
        $.Velocity.hook($modal, "scaleX", 0.7);                                                                       // 752
        $modal.css({ top: options.starting_top });                                                                    // 753
        $modal.velocity({top: "10%", opacity: 1, scaleX: '1'}, {                                                      // 754
          duration: options.in_duration,                                                                              // 755
          queue: false,                                                                                               // 756
          ease: "easeOutCubic",                                                                                       // 757
          // Handle modal ready callback                                                                              // 758
          complete: function() {                                                                                      // 759
            if (typeof(options.ready) === "function") {                                                               // 760
              options.ready();                                                                                        // 761
            }                                                                                                         // 762
          }                                                                                                           // 763
        });                                                                                                           // 764
      }                                                                                                               // 765
                                                                                                                      // 766
                                                                                                                      // 767
    }                                                                                                                 // 768
  });                                                                                                                 // 769
                                                                                                                      // 770
  $.fn.extend({                                                                                                       // 771
    closeModal: function(options) {                                                                                   // 772
      var defaults = {                                                                                                // 773
        out_duration: 250,                                                                                            // 774
        complete: undefined                                                                                           // 775
      },                                                                                                              // 776
      $modal = $(this),                                                                                               // 777
      overlayID = $modal.data('overlay-id'),                                                                          // 778
      $overlay = $('#' + overlayID);                                                                                  // 779
                                                                                                                      // 780
      options = $.extend(defaults, options);                                                                          // 781
                                                                                                                      // 782
      // Disable scrolling                                                                                            // 783
      $('body').css('overflow', '');                                                                                  // 784
                                                                                                                      // 785
      $modal.find('.modal-close').off('click.close');                                                                 // 786
      $(document).off('keyup.leanModal' + overlayID);                                                                 // 787
                                                                                                                      // 788
      $overlay.velocity( { opacity: 0}, {duration: options.out_duration, queue: false, ease: "easeOutQuart"});        // 789
                                                                                                                      // 790
                                                                                                                      // 791
      // Define Bottom Sheet animation                                                                                // 792
      if ($modal.hasClass('bottom-sheet')) {                                                                          // 793
        $modal.velocity({bottom: "-100%", opacity: 0}, {                                                              // 794
          duration: options.out_duration,                                                                             // 795
          queue: false,                                                                                               // 796
          ease: "easeOutCubic",                                                                                       // 797
          // Handle modal ready callback                                                                              // 798
          complete: function() {                                                                                      // 799
            $overlay.css({display:"none"});                                                                           // 800
                                                                                                                      // 801
            // Call complete callback                                                                                 // 802
            if (typeof(options.complete) === "function") {                                                            // 803
              options.complete();                                                                                     // 804
            }                                                                                                         // 805
            $overlay.remove();                                                                                        // 806
            _stack--;                                                                                                 // 807
          }                                                                                                           // 808
        });                                                                                                           // 809
      }                                                                                                               // 810
      else {                                                                                                          // 811
        $modal.velocity(                                                                                              // 812
          { top: options.starting_top, opacity: 0, scaleX: 0.7}, {                                                    // 813
          duration: options.out_duration,                                                                             // 814
          complete:                                                                                                   // 815
            function() {                                                                                              // 816
                                                                                                                      // 817
              $(this).css('display', 'none');                                                                         // 818
              // Call complete callback                                                                               // 819
              if (typeof(options.complete) === "function") {                                                          // 820
                options.complete();                                                                                   // 821
              }                                                                                                       // 822
              $overlay.remove();                                                                                      // 823
              _stack--;                                                                                               // 824
            }                                                                                                         // 825
          }                                                                                                           // 826
        );                                                                                                            // 827
      }                                                                                                               // 828
    }                                                                                                                 // 829
  });                                                                                                                 // 830
                                                                                                                      // 831
  $.fn.extend({                                                                                                       // 832
    leanModal: function(option) {                                                                                     // 833
      return this.each(function() {                                                                                   // 834
                                                                                                                      // 835
        var defaults = {                                                                                              // 836
          starting_top: '4%'                                                                                          // 837
        },                                                                                                            // 838
        // Override defaults                                                                                          // 839
        options = $.extend(defaults, option);                                                                         // 840
                                                                                                                      // 841
        // Close Handlers                                                                                             // 842
        $(this).click(function(e) {                                                                                   // 843
          options.starting_top = ($(this).offset().top - $(window).scrollTop()) /1.15;                                // 844
          var modal_id = $(this).attr("href") || '#' + $(this).data('target');                                        // 845
          $(modal_id).openModal(options);                                                                             // 846
          e.preventDefault();                                                                                         // 847
        }); // done set on click                                                                                      // 848
      }); // done return                                                                                              // 849
    }                                                                                                                 // 850
  });                                                                                                                 // 851
})(jQuery);                                                                                                           // 852
;(function ($) {                                                                                                      // 853
                                                                                                                      // 854
  $.fn.materialbox = function () {                                                                                    // 855
                                                                                                                      // 856
    return this.each(function() {                                                                                     // 857
                                                                                                                      // 858
      if ($(this).hasClass('initialized')) {                                                                          // 859
        return;                                                                                                       // 860
      }                                                                                                               // 861
                                                                                                                      // 862
      $(this).addClass('initialized');                                                                                // 863
                                                                                                                      // 864
      var overlayActive = false;                                                                                      // 865
      var doneAnimating = true;                                                                                       // 866
      var inDuration = 275;                                                                                           // 867
      var outDuration = 200;                                                                                          // 868
      var origin = $(this);                                                                                           // 869
      var placeholder = $('<div></div>').addClass('material-placeholder');                                            // 870
      var originalWidth = 0;                                                                                          // 871
      var originalHeight = 0;                                                                                         // 872
      var ancestorsChanged;                                                                                           // 873
      var ancestor;                                                                                                   // 874
      origin.wrap(placeholder);                                                                                       // 875
                                                                                                                      // 876
                                                                                                                      // 877
      origin.on('click', function(){                                                                                  // 878
        var placeholder = origin.parent('.material-placeholder');                                                     // 879
        var windowWidth = window.innerWidth;                                                                          // 880
        var windowHeight = window.innerHeight;                                                                        // 881
        var originalWidth = origin.width();                                                                           // 882
        var originalHeight = origin.height();                                                                         // 883
                                                                                                                      // 884
                                                                                                                      // 885
        // If already modal, return to original                                                                       // 886
        if (doneAnimating === false) {                                                                                // 887
          returnToOriginal();                                                                                         // 888
          return false;                                                                                               // 889
        }                                                                                                             // 890
        else if (overlayActive && doneAnimating===true) {                                                             // 891
          returnToOriginal();                                                                                         // 892
          return false;                                                                                               // 893
        }                                                                                                             // 894
                                                                                                                      // 895
                                                                                                                      // 896
        // Set states                                                                                                 // 897
        doneAnimating = false;                                                                                        // 898
        origin.addClass('active');                                                                                    // 899
        overlayActive = true;                                                                                         // 900
                                                                                                                      // 901
        // Set positioning for placeholder                                                                            // 902
        placeholder.css({                                                                                             // 903
          width: placeholder[0].getBoundingClientRect().width,                                                        // 904
          height: placeholder[0].getBoundingClientRect().height,                                                      // 905
          position: 'relative',                                                                                       // 906
          top: 0,                                                                                                     // 907
          left: 0                                                                                                     // 908
        });                                                                                                           // 909
                                                                                                                      // 910
        // Find ancestor with overflow: hidden; and remove it                                                         // 911
        ancestorsChanged = undefined;                                                                                 // 912
        ancestor = placeholder[0].parentNode;                                                                         // 913
        var count = 0;                                                                                                // 914
        while (ancestor !== null && !$(ancestor).is(document)) {                                                      // 915
          var curr = $(ancestor);                                                                                     // 916
          if (curr.css('overflow') === 'hidden') {                                                                    // 917
            curr.css('overflow', 'visible');                                                                          // 918
            if (ancestorsChanged === undefined) {                                                                     // 919
              ancestorsChanged = curr;                                                                                // 920
            }                                                                                                         // 921
            else {                                                                                                    // 922
              ancestorsChanged = ancestorsChanged.add(curr);                                                          // 923
            }                                                                                                         // 924
          }                                                                                                           // 925
          ancestor = ancestor.parentNode;                                                                             // 926
        }                                                                                                             // 927
                                                                                                                      // 928
        // Set css on origin                                                                                          // 929
        origin.css({position: 'absolute', 'z-index': 1000})                                                           // 930
        .data('width', originalWidth)                                                                                 // 931
        .data('height', originalHeight);                                                                              // 932
                                                                                                                      // 933
        // Add overlay                                                                                                // 934
        var overlay = $('<div id="materialbox-overlay"></div>')                                                       // 935
          .css({                                                                                                      // 936
            opacity: 0                                                                                                // 937
          })                                                                                                          // 938
          .click(function(){                                                                                          // 939
            if (doneAnimating === true)                                                                               // 940
            returnToOriginal();                                                                                       // 941
          });                                                                                                         // 942
          // Animate Overlay                                                                                          // 943
          $('body').append(overlay);                                                                                  // 944
          overlay.velocity({opacity: 1}, {duration: inDuration, queue: false, easing: 'easeOutQuad'}                  // 945
            );                                                                                                        // 946
                                                                                                                      // 947
                                                                                                                      // 948
        // Add and animate caption if it exists                                                                       // 949
        if (origin.data('caption') !== "") {                                                                          // 950
          var $photo_caption = $('<div class="materialbox-caption"></div>');                                          // 951
          $photo_caption.text(origin.data('caption'));                                                                // 952
          $('body').append($photo_caption);                                                                           // 953
          $photo_caption.css({ "display": "inline" });                                                                // 954
          $photo_caption.velocity({opacity: 1}, {duration: inDuration, queue: false, easing: 'easeOutQuad'});         // 955
        }                                                                                                             // 956
                                                                                                                      // 957
                                                                                                                      // 958
                                                                                                                      // 959
        // Resize Image                                                                                               // 960
        var ratio = 0;                                                                                                // 961
        var widthPercent = originalWidth / windowWidth;                                                               // 962
        var heightPercent = originalHeight / windowHeight;                                                            // 963
        var newWidth = 0;                                                                                             // 964
        var newHeight = 0;                                                                                            // 965
                                                                                                                      // 966
        if (widthPercent > heightPercent) {                                                                           // 967
          ratio = originalHeight / originalWidth;                                                                     // 968
          newWidth = windowWidth * 0.9;                                                                               // 969
          newHeight = windowWidth * 0.9 * ratio;                                                                      // 970
        }                                                                                                             // 971
        else {                                                                                                        // 972
          ratio = originalWidth / originalHeight;                                                                     // 973
          newWidth = (windowHeight * 0.9) * ratio;                                                                    // 974
          newHeight = windowHeight * 0.9;                                                                             // 975
        }                                                                                                             // 976
                                                                                                                      // 977
        // Animate image + set z-index                                                                                // 978
        if(origin.hasClass('responsive-img')) {                                                                       // 979
          origin.velocity({'max-width': newWidth, 'width': originalWidth}, {duration: 0, queue: false,                // 980
            complete: function(){                                                                                     // 981
              origin.css({left: 0, top: 0})                                                                           // 982
              .velocity(                                                                                              // 983
                {                                                                                                     // 984
                  height: newHeight,                                                                                  // 985
                  width: newWidth,                                                                                    // 986
                  left: $(document).scrollLeft() + windowWidth/2 - origin.parent('.material-placeholder').offset().left - newWidth/2,
                  top: $(document).scrollTop() + windowHeight/2 - origin.parent('.material-placeholder').offset().top - newHeight/ 2
                },                                                                                                    // 989
                {                                                                                                     // 990
                  duration: inDuration,                                                                               // 991
                  queue: false,                                                                                       // 992
                  easing: 'easeOutQuad',                                                                              // 993
                  complete: function(){doneAnimating = true;}                                                         // 994
                }                                                                                                     // 995
              );                                                                                                      // 996
            } // End Complete                                                                                         // 997
          }); // End Velocity                                                                                         // 998
        }                                                                                                             // 999
        else {                                                                                                        // 1000
          origin.css('left', 0)                                                                                       // 1001
          .css('top', 0)                                                                                              // 1002
          .velocity(                                                                                                  // 1003
            {                                                                                                         // 1004
              height: newHeight,                                                                                      // 1005
              width: newWidth,                                                                                        // 1006
              left: $(document).scrollLeft() + windowWidth/2 - origin.parent('.material-placeholder').offset().left - newWidth/2,
              top: $(document).scrollTop() + windowHeight/2 - origin.parent('.material-placeholder').offset().top - newHeight/ 2
            },                                                                                                        // 1009
            {                                                                                                         // 1010
              duration: inDuration,                                                                                   // 1011
              queue: false,                                                                                           // 1012
              easing: 'easeOutQuad',                                                                                  // 1013
              complete: function(){doneAnimating = true;}                                                             // 1014
            }                                                                                                         // 1015
            ); // End Velocity                                                                                        // 1016
        }                                                                                                             // 1017
                                                                                                                      // 1018
    }); // End origin on click                                                                                        // 1019
                                                                                                                      // 1020
                                                                                                                      // 1021
      // Return on scroll                                                                                             // 1022
      $(window).scroll(function() {                                                                                   // 1023
        if (overlayActive ) {                                                                                         // 1024
          returnToOriginal();                                                                                         // 1025
        }                                                                                                             // 1026
      });                                                                                                             // 1027
                                                                                                                      // 1028
      // Return on ESC                                                                                                // 1029
      $(document).keyup(function(e) {                                                                                 // 1030
                                                                                                                      // 1031
        if (e.keyCode === 27 && doneAnimating === true) {   // ESC key                                                // 1032
          if (overlayActive) {                                                                                        // 1033
            returnToOriginal();                                                                                       // 1034
          }                                                                                                           // 1035
        }                                                                                                             // 1036
      });                                                                                                             // 1037
                                                                                                                      // 1038
                                                                                                                      // 1039
      // This function returns the modaled image to the original spot                                                 // 1040
      function returnToOriginal() {                                                                                   // 1041
                                                                                                                      // 1042
          doneAnimating = false;                                                                                      // 1043
                                                                                                                      // 1044
          var placeholder = origin.parent('.material-placeholder');                                                   // 1045
          var windowWidth = window.innerWidth;                                                                        // 1046
          var windowHeight = window.innerHeight;                                                                      // 1047
          var originalWidth = origin.data('width');                                                                   // 1048
          var originalHeight = origin.data('height');                                                                 // 1049
                                                                                                                      // 1050
          origin.velocity("stop", true);                                                                              // 1051
          $('#materialbox-overlay').velocity("stop", true);                                                           // 1052
          $('.materialbox-caption').velocity("stop", true);                                                           // 1053
                                                                                                                      // 1054
                                                                                                                      // 1055
          $('#materialbox-overlay').velocity({opacity: 0}, {                                                          // 1056
            duration: outDuration, // Delay prevents animation overlapping                                            // 1057
            queue: false, easing: 'easeOutQuad',                                                                      // 1058
            complete: function(){                                                                                     // 1059
              // Remove Overlay                                                                                       // 1060
              overlayActive = false;                                                                                  // 1061
              $(this).remove();                                                                                       // 1062
            }                                                                                                         // 1063
          });                                                                                                         // 1064
                                                                                                                      // 1065
          // Resize Image                                                                                             // 1066
          origin.velocity(                                                                                            // 1067
            {                                                                                                         // 1068
              width: originalWidth,                                                                                   // 1069
              height: originalHeight,                                                                                 // 1070
              left: 0,                                                                                                // 1071
              top: 0                                                                                                  // 1072
            },                                                                                                        // 1073
            {                                                                                                         // 1074
              duration: outDuration,                                                                                  // 1075
              queue: false, easing: 'easeOutQuad'                                                                     // 1076
            }                                                                                                         // 1077
          );                                                                                                          // 1078
                                                                                                                      // 1079
          // Remove Caption + reset css settings on image                                                             // 1080
          $('.materialbox-caption').velocity({opacity: 0}, {                                                          // 1081
            duration: outDuration, // Delay prevents animation overlapping                                            // 1082
            queue: false, easing: 'easeOutQuad',                                                                      // 1083
            complete: function(){                                                                                     // 1084
              placeholder.css({                                                                                       // 1085
                height: '',                                                                                           // 1086
                width: '',                                                                                            // 1087
                position: '',                                                                                         // 1088
                top: '',                                                                                              // 1089
                left: ''                                                                                              // 1090
              });                                                                                                     // 1091
                                                                                                                      // 1092
              origin.css({                                                                                            // 1093
                height: '',                                                                                           // 1094
                top: '',                                                                                              // 1095
                left: '',                                                                                             // 1096
                width: '',                                                                                            // 1097
                'max-width': '',                                                                                      // 1098
                position: '',                                                                                         // 1099
                'z-index': ''                                                                                         // 1100
              });                                                                                                     // 1101
                                                                                                                      // 1102
              // Remove class                                                                                         // 1103
              origin.removeClass('active');                                                                           // 1104
              doneAnimating = true;                                                                                   // 1105
              $(this).remove();                                                                                       // 1106
                                                                                                                      // 1107
              // Remove overflow overrides on ancestors                                                               // 1108
              ancestorsChanged.css('overflow', '');                                                                   // 1109
            }                                                                                                         // 1110
          });                                                                                                         // 1111
                                                                                                                      // 1112
        }                                                                                                             // 1113
        });                                                                                                           // 1114
};                                                                                                                    // 1115
                                                                                                                      // 1116
$(document).ready(function(){                                                                                         // 1117
  $('.materialboxed').materialbox();                                                                                  // 1118
});                                                                                                                   // 1119
                                                                                                                      // 1120
}( jQuery ));                                                                                                         // 1121
;(function ($) {                                                                                                      // 1122
                                                                                                                      // 1123
    $.fn.parallax = function () {                                                                                     // 1124
      var window_width = $(window).width();                                                                           // 1125
      // Parallax Scripts                                                                                             // 1126
      return this.each(function(i) {                                                                                  // 1127
        var $this = $(this);                                                                                          // 1128
        $this.addClass('parallax');                                                                                   // 1129
                                                                                                                      // 1130
        function updateParallax(initial) {                                                                            // 1131
          var container_height;                                                                                       // 1132
          if (window_width < 601) {                                                                                   // 1133
            container_height = ($this.height() > 0) ? $this.height() : $this.children("img").height();                // 1134
          }                                                                                                           // 1135
          else {                                                                                                      // 1136
            container_height = ($this.height() > 0) ? $this.height() : 500;                                           // 1137
          }                                                                                                           // 1138
          var $img = $this.children("img").first();                                                                   // 1139
          var img_height = $img.height();                                                                             // 1140
          var parallax_dist = img_height - container_height;                                                          // 1141
          var bottom = $this.offset().top + container_height;                                                         // 1142
          var top = $this.offset().top;                                                                               // 1143
          var scrollTop = $(window).scrollTop();                                                                      // 1144
          var windowHeight = window.innerHeight;                                                                      // 1145
          var windowBottom = scrollTop + windowHeight;                                                                // 1146
          var percentScrolled = (windowBottom - top) / (container_height + windowHeight);                             // 1147
          var parallax = Math.round((parallax_dist * percentScrolled));                                               // 1148
                                                                                                                      // 1149
          if (initial) {                                                                                              // 1150
            $img.css('display', 'block');                                                                             // 1151
          }                                                                                                           // 1152
          if ((bottom > scrollTop) && (top < (scrollTop + windowHeight))) {                                           // 1153
            $img.css('transform', "translate3D(-50%," + parallax + "px, 0)");                                         // 1154
          }                                                                                                           // 1155
                                                                                                                      // 1156
        }                                                                                                             // 1157
                                                                                                                      // 1158
        // Wait for image load                                                                                        // 1159
        $this.children("img").one("load", function() {                                                                // 1160
          updateParallax(true);                                                                                       // 1161
        }).each(function() {                                                                                          // 1162
          if(this.complete) $(this).load();                                                                           // 1163
        });                                                                                                           // 1164
                                                                                                                      // 1165
        $(window).scroll(function() {                                                                                 // 1166
          window_width = $(window).width();                                                                           // 1167
          updateParallax(false);                                                                                      // 1168
        });                                                                                                           // 1169
                                                                                                                      // 1170
        $(window).resize(function() {                                                                                 // 1171
          window_width = $(window).width();                                                                           // 1172
          updateParallax(false);                                                                                      // 1173
        });                                                                                                           // 1174
                                                                                                                      // 1175
      });                                                                                                             // 1176
                                                                                                                      // 1177
    };                                                                                                                // 1178
}( jQuery ));;(function ($) {                                                                                         // 1179
                                                                                                                      // 1180
  var methods = {                                                                                                     // 1181
    init : function() {                                                                                               // 1182
      return this.each(function() {                                                                                   // 1183
                                                                                                                      // 1184
      // For each set of tabs, we want to keep track of                                                               // 1185
      // which tab is active and its associated content                                                               // 1186
      var $this = $(this),                                                                                            // 1187
          window_width = $(window).width();                                                                           // 1188
                                                                                                                      // 1189
      $this.width('100%');                                                                                            // 1190
      var $active, $content, $links = $this.find('li.tab a'),                                                         // 1191
          $tabs_width = $this.width(),                                                                                // 1192
          $tab_width = $this.find('li').first().outerWidth(),                                                         // 1193
          $index = 0;                                                                                                 // 1194
                                                                                                                      // 1195
      // If the location.hash matches one of the links, use that as the active tab.                                   // 1196
      $active = $($links.filter('[href="'+location.hash+'"]'));                                                       // 1197
                                                                                                                      // 1198
      // If no match is found, use the first link or any with class 'active' as the initial active tab.               // 1199
      if ($active.length === 0) {                                                                                     // 1200
          $active = $(this).find('li.tab a.active').first();                                                          // 1201
      }                                                                                                               // 1202
      if ($active.length === 0) {                                                                                     // 1203
        $active = $(this).find('li.tab a').first();                                                                   // 1204
      }                                                                                                               // 1205
                                                                                                                      // 1206
      $active.addClass('active');                                                                                     // 1207
      $index = $links.index($active);                                                                                 // 1208
      if ($index < 0) {                                                                                               // 1209
        $index = 0;                                                                                                   // 1210
      }                                                                                                               // 1211
                                                                                                                      // 1212
      $content = $($active[0].hash);                                                                                  // 1213
                                                                                                                      // 1214
      // append indicator then set indicator width to tab width                                                       // 1215
      $this.append('<div class="indicator"></div>');                                                                  // 1216
      var $indicator = $this.find('.indicator');                                                                      // 1217
      if ($this.is(":visible")) {                                                                                     // 1218
        $indicator.css({"right": $tabs_width - (($index + 1) * $tab_width)});                                         // 1219
        $indicator.css({"left": $index * $tab_width});                                                                // 1220
      }                                                                                                               // 1221
      $(window).resize(function () {                                                                                  // 1222
        $tabs_width = $this.width();                                                                                  // 1223
        $tab_width = $this.find('li').first().outerWidth();                                                           // 1224
        if ($index < 0) {                                                                                             // 1225
          $index = 0;                                                                                                 // 1226
        }                                                                                                             // 1227
        if ($tab_width !== 0 && $tabs_width !== 0) {                                                                  // 1228
          $indicator.css({"right": $tabs_width - (($index + 1) * $tab_width)});                                       // 1229
          $indicator.css({"left": $index * $tab_width});                                                              // 1230
        }                                                                                                             // 1231
      });                                                                                                             // 1232
                                                                                                                      // 1233
      // Hide the remaining content                                                                                   // 1234
      $links.not($active).each(function () {                                                                          // 1235
        $(this.hash).hide();                                                                                          // 1236
      });                                                                                                             // 1237
                                                                                                                      // 1238
                                                                                                                      // 1239
      // Bind the click event handler                                                                                 // 1240
      $this.on('click', 'a', function(e) {                                                                            // 1241
        if ($(this).parent().hasClass('disabled')) {                                                                  // 1242
          e.preventDefault();                                                                                         // 1243
          return;                                                                                                     // 1244
        }                                                                                                             // 1245
                                                                                                                      // 1246
        $tabs_width = $this.width();                                                                                  // 1247
        $tab_width = $this.find('li').first().outerWidth();                                                           // 1248
                                                                                                                      // 1249
        // Make the old tab inactive.                                                                                 // 1250
        $active.removeClass('active');                                                                                // 1251
        $content.hide();                                                                                              // 1252
                                                                                                                      // 1253
        // Update the variables with the new link and content                                                         // 1254
        $active = $(this);                                                                                            // 1255
        $content = $(this.hash);                                                                                      // 1256
        $links = $this.find('li.tab a');                                                                              // 1257
                                                                                                                      // 1258
        // Make the tab active.                                                                                       // 1259
        $active.addClass('active');                                                                                   // 1260
        var $prev_index = $index;                                                                                     // 1261
        $index = $links.index($(this));                                                                               // 1262
        if ($index < 0) {                                                                                             // 1263
          $index = 0;                                                                                                 // 1264
        }                                                                                                             // 1265
        // Change url to current tab                                                                                  // 1266
        // window.location.hash = $active.attr('href');                                                               // 1267
                                                                                                                      // 1268
        $content.show();                                                                                              // 1269
                                                                                                                      // 1270
        // Update indicator                                                                                           // 1271
        if (($index - $prev_index) >= 0) {                                                                            // 1272
          $indicator.velocity({"right": $tabs_width - (($index + 1) * $tab_width)}, { duration: 300, queue: false, easing: 'easeOutQuad'});
          $indicator.velocity({"left": $index * $tab_width}, {duration: 300, queue: false, easing: 'easeOutQuad', delay: 90});
                                                                                                                      // 1275
        }                                                                                                             // 1276
        else {                                                                                                        // 1277
          $indicator.velocity({"left": $index * $tab_width}, { duration: 300, queue: false, easing: 'easeOutQuad'});  // 1278
          $indicator.velocity({"right": $tabs_width - (($index + 1) * $tab_width)}, {duration: 300, queue: false, easing: 'easeOutQuad', delay: 90});
        }                                                                                                             // 1280
                                                                                                                      // 1281
        // Prevent the anchor's default click action                                                                  // 1282
        e.preventDefault();                                                                                           // 1283
      });                                                                                                             // 1284
    });                                                                                                               // 1285
                                                                                                                      // 1286
    },                                                                                                                // 1287
    select_tab : function( id ) {                                                                                     // 1288
      this.find('a[href="#' + id + '"]').trigger('click');                                                            // 1289
    }                                                                                                                 // 1290
  };                                                                                                                  // 1291
                                                                                                                      // 1292
  $.fn.tabs = function(methodOrOptions) {                                                                             // 1293
    if ( methods[methodOrOptions] ) {                                                                                 // 1294
      return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));                     // 1295
    } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {                                          // 1296
      // Default to "init"                                                                                            // 1297
      return methods.init.apply( this, arguments );                                                                   // 1298
    } else {                                                                                                          // 1299
      $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.tooltip' );                                  // 1300
    }                                                                                                                 // 1301
  };                                                                                                                  // 1302
                                                                                                                      // 1303
  $(document).ready(function(){                                                                                       // 1304
    $('ul.tabs').tabs();                                                                                              // 1305
  });                                                                                                                 // 1306
}( jQuery ));                                                                                                         // 1307
;(function ($) {                                                                                                      // 1308
    $.fn.tooltip = function (options) {                                                                               // 1309
        var timeout = null,                                                                                           // 1310
        margin = 5;                                                                                                   // 1311
                                                                                                                      // 1312
      // Defaults                                                                                                     // 1313
      var defaults = {                                                                                                // 1314
        delay: 350                                                                                                    // 1315
      };                                                                                                              // 1316
                                                                                                                      // 1317
      // Remove tooltip from the activator                                                                            // 1318
      if (options === "remove") {                                                                                     // 1319
        this.each(function(){                                                                                         // 1320
          $('#' + $(this).attr('data-tooltip-id')).remove();                                                          // 1321
          $(this).off('mouseenter.tooltip mouseleave.tooltip');                                                       // 1322
        });                                                                                                           // 1323
        return false;                                                                                                 // 1324
      }                                                                                                               // 1325
                                                                                                                      // 1326
      options = $.extend(defaults, options);                                                                          // 1327
                                                                                                                      // 1328
                                                                                                                      // 1329
      return this.each(function(){                                                                                    // 1330
        var tooltipId = Materialize.guid();                                                                           // 1331
        var origin = $(this);                                                                                         // 1332
        origin.attr('data-tooltip-id', tooltipId);                                                                    // 1333
                                                                                                                      // 1334
        // Create Text span                                                                                           // 1335
        var tooltip_text = $('<span></span>').text(origin.attr('data-tooltip'));                                      // 1336
                                                                                                                      // 1337
        // Create tooltip                                                                                             // 1338
        var newTooltip = $('<div></div>');                                                                            // 1339
        newTooltip.addClass('material-tooltip').append(tooltip_text)                                                  // 1340
          .appendTo($('body'))                                                                                        // 1341
          .attr('id', tooltipId);                                                                                     // 1342
                                                                                                                      // 1343
        var backdrop = $('<div></div>').addClass('backdrop');                                                         // 1344
        backdrop.appendTo(newTooltip);                                                                                // 1345
        backdrop.css({ top: 0, left:0 });                                                                             // 1346
                                                                                                                      // 1347
                                                                                                                      // 1348
      //Destroy previously binded events                                                                              // 1349
      origin.off('mouseenter.tooltip mouseleave.tooltip');                                                            // 1350
      // Mouse In                                                                                                     // 1351
      var started = false, timeoutRef;                                                                                // 1352
      origin.on({                                                                                                     // 1353
        'mouseenter.tooltip': function(e) {                                                                           // 1354
          var tooltip_delay = origin.attr('data-delay');                                                              // 1355
          tooltip_delay = (tooltip_delay === undefined || tooltip_delay === '') ?                                     // 1356
              options.delay : tooltip_delay;                                                                          // 1357
          timeoutRef = setTimeout(function(){                                                                         // 1358
            started = true;                                                                                           // 1359
            newTooltip.velocity('stop');                                                                              // 1360
            backdrop.velocity('stop');                                                                                // 1361
            newTooltip.css({ display: 'block', left: '0px', top: '0px' });                                            // 1362
                                                                                                                      // 1363
            // Set Tooltip text                                                                                       // 1364
            newTooltip.children('span').text(origin.attr('data-tooltip'));                                            // 1365
                                                                                                                      // 1366
            // Tooltip positioning                                                                                    // 1367
            var originWidth = origin.outerWidth();                                                                    // 1368
            var originHeight = origin.outerHeight();                                                                  // 1369
            var tooltipPosition =  origin.attr('data-position');                                                      // 1370
            var tooltipHeight = newTooltip.outerHeight();                                                             // 1371
            var tooltipWidth = newTooltip.outerWidth();                                                               // 1372
            var tooltipVerticalMovement = '0px';                                                                      // 1373
            var tooltipHorizontalMovement = '0px';                                                                    // 1374
            var scale_factor = 8;                                                                                     // 1375
            var targetTop, targetLeft, newCoordinates;                                                                // 1376
                                                                                                                      // 1377
            if (tooltipPosition === "top") {                                                                          // 1378
              // Top Position                                                                                         // 1379
              targetTop = origin.offset().top - tooltipHeight - margin;                                               // 1380
              targetLeft = origin.offset().left + originWidth/2 - tooltipWidth/2;                                     // 1381
              newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);            // 1382
                                                                                                                      // 1383
              tooltipVerticalMovement = '-10px';                                                                      // 1384
              backdrop.css({                                                                                          // 1385
                borderRadius: '14px 14px 0 0',                                                                        // 1386
                transformOrigin: '50% 90%',                                                                           // 1387
                marginTop: tooltipHeight,                                                                             // 1388
                marginLeft: (tooltipWidth/2) - (backdrop.width()/2)                                                   // 1389
              });                                                                                                     // 1390
            }                                                                                                         // 1391
            // Left Position                                                                                          // 1392
            else if (tooltipPosition === "left") {                                                                    // 1393
              targetTop = origin.offset().top + originHeight/2 - tooltipHeight/2;                                     // 1394
              targetLeft =  origin.offset().left - tooltipWidth - margin;                                             // 1395
              newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);            // 1396
                                                                                                                      // 1397
              tooltipHorizontalMovement = '-10px';                                                                    // 1398
              backdrop.css({                                                                                          // 1399
                width: '14px',                                                                                        // 1400
                height: '14px',                                                                                       // 1401
                borderRadius: '14px 0 0 14px',                                                                        // 1402
                transformOrigin: '95% 50%',                                                                           // 1403
                marginTop: tooltipHeight/2,                                                                           // 1404
                marginLeft: tooltipWidth                                                                              // 1405
              });                                                                                                     // 1406
            }                                                                                                         // 1407
            // Right Position                                                                                         // 1408
            else if (tooltipPosition === "right") {                                                                   // 1409
              targetTop = origin.offset().top + originHeight/2 - tooltipHeight/2;                                     // 1410
              targetLeft = origin.offset().left + originWidth + margin;                                               // 1411
              newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);            // 1412
                                                                                                                      // 1413
              tooltipHorizontalMovement = '+10px';                                                                    // 1414
              backdrop.css({                                                                                          // 1415
                width: '14px',                                                                                        // 1416
                height: '14px',                                                                                       // 1417
                borderRadius: '0 14px 14px 0',                                                                        // 1418
                transformOrigin: '5% 50%',                                                                            // 1419
                marginTop: tooltipHeight/2,                                                                           // 1420
                marginLeft: '0px'                                                                                     // 1421
              });                                                                                                     // 1422
            }                                                                                                         // 1423
            else {                                                                                                    // 1424
              // Bottom Position                                                                                      // 1425
              targetTop = origin.offset().top + origin.outerHeight() + margin;                                        // 1426
              targetLeft = origin.offset().left + originWidth/2 - tooltipWidth/2;                                     // 1427
              newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);            // 1428
              tooltipVerticalMovement = '+10px';                                                                      // 1429
              backdrop.css({                                                                                          // 1430
                marginLeft: (tooltipWidth/2) - (backdrop.width()/2)                                                   // 1431
              });                                                                                                     // 1432
            }                                                                                                         // 1433
                                                                                                                      // 1434
            // Set tooptip css placement                                                                              // 1435
            newTooltip.css({                                                                                          // 1436
              top: newCoordinates.y,                                                                                  // 1437
              left: newCoordinates.x                                                                                  // 1438
            });                                                                                                       // 1439
                                                                                                                      // 1440
            // Calculate Scale to fill                                                                                // 1441
            scale_factor = tooltipWidth / 8;                                                                          // 1442
            if (scale_factor < 8) {                                                                                   // 1443
              scale_factor = 8;                                                                                       // 1444
            }                                                                                                         // 1445
            if (tooltipPosition === "right" || tooltipPosition === "left") {                                          // 1446
              scale_factor = tooltipWidth / 10;                                                                       // 1447
              if (scale_factor < 6)                                                                                   // 1448
                scale_factor = 6;                                                                                     // 1449
            }                                                                                                         // 1450
                                                                                                                      // 1451
            newTooltip.velocity({ marginTop: tooltipVerticalMovement, marginLeft: tooltipHorizontalMovement}, { duration: 350, queue: false })
              .velocity({opacity: 1}, {duration: 300, delay: 50, queue: false});                                      // 1453
            backdrop.css({ display: 'block' })                                                                        // 1454
              .velocity({opacity:1},{duration: 55, delay: 0, queue: false})                                           // 1455
              .velocity({scale: scale_factor}, {duration: 300, delay: 0, queue: false, easing: 'easeInOutQuad'});     // 1456
                                                                                                                      // 1457
                                                                                                                      // 1458
          }, tooltip_delay); // End Interval                                                                          // 1459
                                                                                                                      // 1460
        // Mouse Out                                                                                                  // 1461
        },                                                                                                            // 1462
        'mouseleave.tooltip': function(){                                                                             // 1463
          // Reset State                                                                                              // 1464
          started = false;                                                                                            // 1465
          clearTimeout(timeoutRef);                                                                                   // 1466
                                                                                                                      // 1467
          // Animate back                                                                                             // 1468
          setTimeout(function() {                                                                                     // 1469
            if (started != true) {                                                                                    // 1470
              newTooltip.velocity({                                                                                   // 1471
                opacity: 0, marginTop: 0, marginLeft: 0}, { duration: 225, queue: false});                            // 1472
              backdrop.velocity({opacity: 0, scale: 1}, {                                                             // 1473
                duration:225,                                                                                         // 1474
                queue: false,                                                                                         // 1475
                complete: function(){                                                                                 // 1476
                  backdrop.css('display', 'none');                                                                    // 1477
                  newTooltip.css('display', 'none');                                                                  // 1478
                  started = false;}                                                                                   // 1479
              });                                                                                                     // 1480
            }                                                                                                         // 1481
          },225);                                                                                                     // 1482
        }                                                                                                             // 1483
        });                                                                                                           // 1484
    });                                                                                                               // 1485
  };                                                                                                                  // 1486
                                                                                                                      // 1487
  var repositionWithinScreen = function(x, y, width, height) {                                                        // 1488
    var newX = x                                                                                                      // 1489
    var newY = y;                                                                                                     // 1490
                                                                                                                      // 1491
    if (newX < 0) {                                                                                                   // 1492
      newX = 4;                                                                                                       // 1493
    } else if (newX + width > window.innerWidth) {                                                                    // 1494
      newX -= newX + width - window.innerWidth;                                                                       // 1495
    }                                                                                                                 // 1496
                                                                                                                      // 1497
    if (newY < 0) {                                                                                                   // 1498
      newY = 4;                                                                                                       // 1499
    } else if (newY + height > window.innerHeight + $(window).scrollTop) {                                            // 1500
      newY -= newY + height - window.innerHeight;                                                                     // 1501
    }                                                                                                                 // 1502
                                                                                                                      // 1503
    return {x: newX, y: newY};                                                                                        // 1504
  };                                                                                                                  // 1505
                                                                                                                      // 1506
  $(document).ready(function(){                                                                                       // 1507
     $('.tooltipped').tooltip();                                                                                      // 1508
   });                                                                                                                // 1509
}( jQuery ));                                                                                                         // 1510
;/*!                                                                                                                  // 1511
 * Waves v0.6.4                                                                                                       // 1512
 * http://fian.my.id/Waves                                                                                            // 1513
 *                                                                                                                    // 1514
 * Copyright 2014 Alfiana E. Sibuea and other contributors                                                            // 1515
 * Released under the MIT license                                                                                     // 1516
 * https://github.com/fians/Waves/blob/master/LICENSE                                                                 // 1517
 */                                                                                                                   // 1518
                                                                                                                      // 1519
;(function(window) {                                                                                                  // 1520
    'use strict';                                                                                                     // 1521
                                                                                                                      // 1522
    var Waves = Waves || {};                                                                                          // 1523
    var $$ = document.querySelectorAll.bind(document);                                                                // 1524
                                                                                                                      // 1525
    // Find exact position of element                                                                                 // 1526
    function isWindow(obj) {                                                                                          // 1527
        return obj !== null && obj === obj.window;                                                                    // 1528
    }                                                                                                                 // 1529
                                                                                                                      // 1530
    function getWindow(elem) {                                                                                        // 1531
        return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;                                       // 1532
    }                                                                                                                 // 1533
                                                                                                                      // 1534
    function offset(elem) {                                                                                           // 1535
        var docElem, win,                                                                                             // 1536
            box = {top: 0, left: 0},                                                                                  // 1537
            doc = elem && elem.ownerDocument;                                                                         // 1538
                                                                                                                      // 1539
        docElem = doc.documentElement;                                                                                // 1540
                                                                                                                      // 1541
        if (typeof elem.getBoundingClientRect !== typeof undefined) {                                                 // 1542
            box = elem.getBoundingClientRect();                                                                       // 1543
        }                                                                                                             // 1544
        win = getWindow(doc);                                                                                         // 1545
        return {                                                                                                      // 1546
            top: box.top + win.pageYOffset - docElem.clientTop,                                                       // 1547
            left: box.left + win.pageXOffset - docElem.clientLeft                                                     // 1548
        };                                                                                                            // 1549
    }                                                                                                                 // 1550
                                                                                                                      // 1551
    function convertStyle(obj) {                                                                                      // 1552
        var style = '';                                                                                               // 1553
                                                                                                                      // 1554
        for (var a in obj) {                                                                                          // 1555
            if (obj.hasOwnProperty(a)) {                                                                              // 1556
                style += (a + ':' + obj[a] + ';');                                                                    // 1557
            }                                                                                                         // 1558
        }                                                                                                             // 1559
                                                                                                                      // 1560
        return style;                                                                                                 // 1561
    }                                                                                                                 // 1562
                                                                                                                      // 1563
    var Effect = {                                                                                                    // 1564
                                                                                                                      // 1565
        // Effect delay                                                                                               // 1566
        duration: 750,                                                                                                // 1567
                                                                                                                      // 1568
        show: function(e, element) {                                                                                  // 1569
                                                                                                                      // 1570
            // Disable right click                                                                                    // 1571
            if (e.button === 2) {                                                                                     // 1572
                return false;                                                                                         // 1573
            }                                                                                                         // 1574
                                                                                                                      // 1575
            var el = element || this;                                                                                 // 1576
                                                                                                                      // 1577
            // Create ripple                                                                                          // 1578
            var ripple = document.createElement('div');                                                               // 1579
            ripple.className = 'waves-ripple';                                                                        // 1580
            el.appendChild(ripple);                                                                                   // 1581
                                                                                                                      // 1582
            // Get click coordinate and element witdh                                                                 // 1583
            var pos         = offset(el);                                                                             // 1584
            var relativeY   = (e.pageY - pos.top);                                                                    // 1585
            var relativeX   = (e.pageX - pos.left);                                                                   // 1586
            var scale       = 'scale('+((el.clientWidth / 100) * 10)+')';                                             // 1587
                                                                                                                      // 1588
            // Support for touch devices                                                                              // 1589
            if ('touches' in e) {                                                                                     // 1590
              relativeY   = (e.touches[0].pageY - pos.top);                                                           // 1591
              relativeX   = (e.touches[0].pageX - pos.left);                                                          // 1592
            }                                                                                                         // 1593
                                                                                                                      // 1594
            // Attach data to element                                                                                 // 1595
            ripple.setAttribute('data-hold', Date.now());                                                             // 1596
            ripple.setAttribute('data-scale', scale);                                                                 // 1597
            ripple.setAttribute('data-x', relativeX);                                                                 // 1598
            ripple.setAttribute('data-y', relativeY);                                                                 // 1599
                                                                                                                      // 1600
            // Set ripple position                                                                                    // 1601
            var rippleStyle = {                                                                                       // 1602
                'top': relativeY+'px',                                                                                // 1603
                'left': relativeX+'px'                                                                                // 1604
            };                                                                                                        // 1605
                                                                                                                      // 1606
            ripple.className = ripple.className + ' waves-notransition';                                              // 1607
            ripple.setAttribute('style', convertStyle(rippleStyle));                                                  // 1608
            ripple.className = ripple.className.replace('waves-notransition', '');                                    // 1609
                                                                                                                      // 1610
            // Scale the ripple                                                                                       // 1611
            rippleStyle['-webkit-transform'] = scale;                                                                 // 1612
            rippleStyle['-moz-transform'] = scale;                                                                    // 1613
            rippleStyle['-ms-transform'] = scale;                                                                     // 1614
            rippleStyle['-o-transform'] = scale;                                                                      // 1615
            rippleStyle.transform = scale;                                                                            // 1616
            rippleStyle.opacity   = '1';                                                                              // 1617
                                                                                                                      // 1618
            rippleStyle['-webkit-transition-duration'] = Effect.duration + 'ms';                                      // 1619
            rippleStyle['-moz-transition-duration']    = Effect.duration + 'ms';                                      // 1620
            rippleStyle['-o-transition-duration']      = Effect.duration + 'ms';                                      // 1621
            rippleStyle['transition-duration']         = Effect.duration + 'ms';                                      // 1622
                                                                                                                      // 1623
            rippleStyle['-webkit-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';           // 1624
            rippleStyle['-moz-transition-timing-function']    = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';           // 1625
            rippleStyle['-o-transition-timing-function']      = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';           // 1626
            rippleStyle['transition-timing-function']         = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';           // 1627
                                                                                                                      // 1628
            ripple.setAttribute('style', convertStyle(rippleStyle));                                                  // 1629
        },                                                                                                            // 1630
                                                                                                                      // 1631
        hide: function(e) {                                                                                           // 1632
            TouchHandler.touchup(e);                                                                                  // 1633
                                                                                                                      // 1634
            var el = this;                                                                                            // 1635
            var width = el.clientWidth * 1.4;                                                                         // 1636
                                                                                                                      // 1637
            // Get first ripple                                                                                       // 1638
            var ripple = null;                                                                                        // 1639
            var ripples = el.getElementsByClassName('waves-ripple');                                                  // 1640
            if (ripples.length > 0) {                                                                                 // 1641
                ripple = ripples[ripples.length - 1];                                                                 // 1642
            } else {                                                                                                  // 1643
                return false;                                                                                         // 1644
            }                                                                                                         // 1645
                                                                                                                      // 1646
            var relativeX   = ripple.getAttribute('data-x');                                                          // 1647
            var relativeY   = ripple.getAttribute('data-y');                                                          // 1648
            var scale       = ripple.getAttribute('data-scale');                                                      // 1649
                                                                                                                      // 1650
            // Get delay beetween mousedown and mouse leave                                                           // 1651
            var diff = Date.now() - Number(ripple.getAttribute('data-hold'));                                         // 1652
            var delay = 350 - diff;                                                                                   // 1653
                                                                                                                      // 1654
            if (delay < 0) {                                                                                          // 1655
                delay = 0;                                                                                            // 1656
            }                                                                                                         // 1657
                                                                                                                      // 1658
            // Fade out ripple after delay                                                                            // 1659
            setTimeout(function() {                                                                                   // 1660
                var style = {                                                                                         // 1661
                    'top': relativeY+'px',                                                                            // 1662
                    'left': relativeX+'px',                                                                           // 1663
                    'opacity': '0',                                                                                   // 1664
                                                                                                                      // 1665
                    // Duration                                                                                       // 1666
                    '-webkit-transition-duration': Effect.duration + 'ms',                                            // 1667
                    '-moz-transition-duration': Effect.duration + 'ms',                                               // 1668
                    '-o-transition-duration': Effect.duration + 'ms',                                                 // 1669
                    'transition-duration': Effect.duration + 'ms',                                                    // 1670
                    '-webkit-transform': scale,                                                                       // 1671
                    '-moz-transform': scale,                                                                          // 1672
                    '-ms-transform': scale,                                                                           // 1673
                    '-o-transform': scale,                                                                            // 1674
                    'transform': scale,                                                                               // 1675
                };                                                                                                    // 1676
                                                                                                                      // 1677
                ripple.setAttribute('style', convertStyle(style));                                                    // 1678
                                                                                                                      // 1679
                setTimeout(function() {                                                                               // 1680
                    try {                                                                                             // 1681
                        el.removeChild(ripple);                                                                       // 1682
                    } catch(e) {                                                                                      // 1683
                        return false;                                                                                 // 1684
                    }                                                                                                 // 1685
                }, Effect.duration);                                                                                  // 1686
            }, delay);                                                                                                // 1687
        },                                                                                                            // 1688
                                                                                                                      // 1689
        // Little hack to make <input> can perform waves effect                                                       // 1690
        wrapInput: function(elements) {                                                                               // 1691
            for (var a = 0; a < elements.length; a++) {                                                               // 1692
                var el = elements[a];                                                                                 // 1693
                                                                                                                      // 1694
                if (el.tagName.toLowerCase() === 'input') {                                                           // 1695
                    var parent = el.parentNode;                                                                       // 1696
                                                                                                                      // 1697
                    // If input already have parent just pass through                                                 // 1698
                    if (parent.tagName.toLowerCase() === 'i' && parent.className.indexOf('waves-effect') !== -1) {    // 1699
                        continue;                                                                                     // 1700
                    }                                                                                                 // 1701
                                                                                                                      // 1702
                    // Put element class and style to the specified parent                                            // 1703
                    var wrapper = document.createElement('i');                                                        // 1704
                    wrapper.className = el.className + ' waves-input-wrapper';                                        // 1705
                                                                                                                      // 1706
                    var elementStyle = el.getAttribute('style');                                                      // 1707
                                                                                                                      // 1708
                    if (!elementStyle) {                                                                              // 1709
                        elementStyle = '';                                                                            // 1710
                    }                                                                                                 // 1711
                                                                                                                      // 1712
                    wrapper.setAttribute('style', elementStyle);                                                      // 1713
                                                                                                                      // 1714
                    el.className = 'waves-button-input';                                                              // 1715
                    el.removeAttribute('style');                                                                      // 1716
                                                                                                                      // 1717
                    // Put element as child                                                                           // 1718
                    parent.replaceChild(wrapper, el);                                                                 // 1719
                    wrapper.appendChild(el);                                                                          // 1720
                }                                                                                                     // 1721
            }                                                                                                         // 1722
        }                                                                                                             // 1723
    };                                                                                                                // 1724
                                                                                                                      // 1725
                                                                                                                      // 1726
    /**                                                                                                               // 1727
     * Disable mousedown event for 500ms during and after touch                                                       // 1728
     */                                                                                                               // 1729
    var TouchHandler = {                                                                                              // 1730
        /* uses an integer rather than bool so there's no issues with                                                 // 1731
         * needing to clear timeouts if another touch event occurred                                                  // 1732
         * within the 500ms. Cannot mouseup between touchstart and                                                    // 1733
         * touchend, nor in the 500ms after touchend. */                                                              // 1734
        touches: 0,                                                                                                   // 1735
        allowEvent: function(e) {                                                                                     // 1736
            var allow = true;                                                                                         // 1737
                                                                                                                      // 1738
            if (e.type === 'touchstart') {                                                                            // 1739
                TouchHandler.touches += 1; //push                                                                     // 1740
            } else if (e.type === 'touchend' || e.type === 'touchcancel') {                                           // 1741
                setTimeout(function() {                                                                               // 1742
                    if (TouchHandler.touches > 0) {                                                                   // 1743
                        TouchHandler.touches -= 1; //pop after 500ms                                                  // 1744
                    }                                                                                                 // 1745
                }, 500);                                                                                              // 1746
            } else if (e.type === 'mousedown' && TouchHandler.touches > 0) {                                          // 1747
                allow = false;                                                                                        // 1748
            }                                                                                                         // 1749
                                                                                                                      // 1750
            return allow;                                                                                             // 1751
        },                                                                                                            // 1752
        touchup: function(e) {                                                                                        // 1753
            TouchHandler.allowEvent(e);                                                                               // 1754
        }                                                                                                             // 1755
    };                                                                                                                // 1756
                                                                                                                      // 1757
                                                                                                                      // 1758
    /**                                                                                                               // 1759
     * Delegated click handler for .waves-effect element.                                                             // 1760
     * returns null when .waves-effect element not in "click tree"                                                    // 1761
     */                                                                                                               // 1762
    function getWavesEffectElement(e) {                                                                               // 1763
        if (TouchHandler.allowEvent(e) === false) {                                                                   // 1764
            return null;                                                                                              // 1765
        }                                                                                                             // 1766
                                                                                                                      // 1767
        var element = null;                                                                                           // 1768
        var target = e.target || e.srcElement;                                                                        // 1769
                                                                                                                      // 1770
        while (target.parentElement !== null) {                                                                       // 1771
            if (!(target instanceof SVGElement) && target.className.indexOf('waves-effect') !== -1) {                 // 1772
                element = target;                                                                                     // 1773
                break;                                                                                                // 1774
            } else if (target.classList.contains('waves-effect')) {                                                   // 1775
                element = target;                                                                                     // 1776
                break;                                                                                                // 1777
            }                                                                                                         // 1778
            target = target.parentElement;                                                                            // 1779
        }                                                                                                             // 1780
                                                                                                                      // 1781
        return element;                                                                                               // 1782
    }                                                                                                                 // 1783
                                                                                                                      // 1784
    /**                                                                                                               // 1785
     * Bubble the click and show effect if .waves-effect elem was found                                               // 1786
     */                                                                                                               // 1787
    function showEffect(e) {                                                                                          // 1788
        var element = getWavesEffectElement(e);                                                                       // 1789
                                                                                                                      // 1790
        if (element !== null) {                                                                                       // 1791
            Effect.show(e, element);                                                                                  // 1792
                                                                                                                      // 1793
            if ('ontouchstart' in window) {                                                                           // 1794
                element.addEventListener('touchend', Effect.hide, false);                                             // 1795
                element.addEventListener('touchcancel', Effect.hide, false);                                          // 1796
            }                                                                                                         // 1797
                                                                                                                      // 1798
            element.addEventListener('mouseup', Effect.hide, false);                                                  // 1799
            element.addEventListener('mouseleave', Effect.hide, false);                                               // 1800
        }                                                                                                             // 1801
    }                                                                                                                 // 1802
                                                                                                                      // 1803
    Waves.displayEffect = function(options) {                                                                         // 1804
        options = options || {};                                                                                      // 1805
                                                                                                                      // 1806
        if ('duration' in options) {                                                                                  // 1807
            Effect.duration = options.duration;                                                                       // 1808
        }                                                                                                             // 1809
                                                                                                                      // 1810
        //Wrap input inside <i> tag                                                                                   // 1811
        Effect.wrapInput($$('.waves-effect'));                                                                        // 1812
                                                                                                                      // 1813
        if ('ontouchstart' in window) {                                                                               // 1814
            document.body.addEventListener('touchstart', showEffect, false);                                          // 1815
        }                                                                                                             // 1816
                                                                                                                      // 1817
        document.body.addEventListener('mousedown', showEffect, false);                                               // 1818
    };                                                                                                                // 1819
                                                                                                                      // 1820
    /**                                                                                                               // 1821
     * Attach Waves to an input element (or any element which doesn't                                                 // 1822
     * bubble mouseup/mousedown events).                                                                              // 1823
     *   Intended to be used with dynamically loaded forms/inputs, or                                                 // 1824
     * where the user doesn't want a delegated click handler.                                                         // 1825
     */                                                                                                               // 1826
    Waves.attach = function(element) {                                                                                // 1827
        //FUTURE: automatically add waves classes and allow users                                                     // 1828
        // to specify them with an options param? Eg. light/classic/button                                            // 1829
        if (element.tagName.toLowerCase() === 'input') {                                                              // 1830
            Effect.wrapInput([element]);                                                                              // 1831
            element = element.parentElement;                                                                          // 1832
        }                                                                                                             // 1833
                                                                                                                      // 1834
        if ('ontouchstart' in window) {                                                                               // 1835
            element.addEventListener('touchstart', showEffect, false);                                                // 1836
        }                                                                                                             // 1837
                                                                                                                      // 1838
        element.addEventListener('mousedown', showEffect, false);                                                     // 1839
    };                                                                                                                // 1840
                                                                                                                      // 1841
    window.Waves = Waves;                                                                                             // 1842
                                                                                                                      // 1843
    document.addEventListener('DOMContentLoaded', function() {                                                        // 1844
        Waves.displayEffect();                                                                                        // 1845
    }, false);                                                                                                        // 1846
                                                                                                                      // 1847
})(window);                                                                                                           // 1848
;Materialize.toast = function (message, displayLength, className, completeCallback) {                                 // 1849
    className = className || "";                                                                                      // 1850
                                                                                                                      // 1851
    var container = document.getElementById('toast-container');                                                       // 1852
                                                                                                                      // 1853
    // Create toast container if it does not exist                                                                    // 1854
    if (container === null) {                                                                                         // 1855
        // create notification container                                                                              // 1856
        container = document.createElement('div');                                                                    // 1857
        container.id = 'toast-container';                                                                             // 1858
        document.body.appendChild(container);                                                                         // 1859
    }                                                                                                                 // 1860
                                                                                                                      // 1861
    // Select and append toast                                                                                        // 1862
    var newToast = createToast(message);                                                                              // 1863
                                                                                                                      // 1864
    // only append toast if message is not undefined                                                                  // 1865
    if(message){                                                                                                      // 1866
        container.appendChild(newToast);                                                                              // 1867
    }                                                                                                                 // 1868
                                                                                                                      // 1869
    newToast.style.top = '35px';                                                                                      // 1870
    newToast.style.opacity = 0;                                                                                       // 1871
                                                                                                                      // 1872
    // Animate toast in                                                                                               // 1873
    Vel(newToast, { "top" : "0px", opacity: 1 }, {duration: 300,                                                      // 1874
      easing: 'easeOutCubic',                                                                                         // 1875
      queue: false});                                                                                                 // 1876
                                                                                                                      // 1877
    // Allows timer to be pause while being panned                                                                    // 1878
    var timeLeft = displayLength;                                                                                     // 1879
    var counterInterval = setInterval (function(){                                                                    // 1880
                                                                                                                      // 1881
                                                                                                                      // 1882
      if (newToast.parentNode === null)                                                                               // 1883
        window.clearInterval(counterInterval);                                                                        // 1884
                                                                                                                      // 1885
      // If toast is not being dragged, decrease its time remaining                                                   // 1886
      if (!newToast.classList.contains('panning')) {                                                                  // 1887
        timeLeft -= 20;                                                                                               // 1888
      }                                                                                                               // 1889
                                                                                                                      // 1890
      if (timeLeft <= 0) {                                                                                            // 1891
        // Animate toast out                                                                                          // 1892
        Vel(newToast, {"opacity": 0, marginTop: '-40px'}, { duration: 375,                                            // 1893
            easing: 'easeOutExpo',                                                                                    // 1894
            queue: false,                                                                                             // 1895
            complete: function(){                                                                                     // 1896
              // Call the optional callback                                                                           // 1897
              if(typeof(completeCallback) === "function")                                                             // 1898
                completeCallback();                                                                                   // 1899
              // Remove toast after it times out                                                                      // 1900
              this[0].parentNode.removeChild(this[0]);                                                                // 1901
            }                                                                                                         // 1902
          });                                                                                                         // 1903
        window.clearInterval(counterInterval);                                                                        // 1904
      }                                                                                                               // 1905
    }, 20);                                                                                                           // 1906
                                                                                                                      // 1907
                                                                                                                      // 1908
                                                                                                                      // 1909
    function createToast(html) {                                                                                      // 1910
                                                                                                                      // 1911
        // Create toast                                                                                               // 1912
        var toast = document.createElement('div');                                                                    // 1913
        toast.classList.add('toast');                                                                                 // 1914
        if (className) {                                                                                              // 1915
            var classes = className.split(' ');                                                                       // 1916
                                                                                                                      // 1917
            for (var i = 0, count = classes.length; i < count; i++) {                                                 // 1918
                toast.classList.add(classes[i]);                                                                      // 1919
            }                                                                                                         // 1920
        }                                                                                                             // 1921
        // If type of parameter is HTML Element                                                                       // 1922
        if ( typeof HTMLElement === "object" ? html instanceof HTMLElement : html && typeof html === "object" && html !== null && html.nodeType === 1 && typeof html.nodeName==="string"
) {                                                                                                                   // 1924
          toast.appendChild(html);                                                                                    // 1925
        }                                                                                                             // 1926
        else if (html instanceof jQuery) {                                                                            // 1927
          // Check if it is jQuery object                                                                             // 1928
          toast.appendChild(html[0]);                                                                                 // 1929
        }                                                                                                             // 1930
        else {                                                                                                        // 1931
          // Insert as text;                                                                                          // 1932
          toast.innerHTML = html;                                                                                     // 1933
        }                                                                                                             // 1934
        // Bind hammer                                                                                                // 1935
        var hammerHandler = new Hammer(toast, {prevent_default: false});                                              // 1936
        hammerHandler.on('pan', function(e) {                                                                         // 1937
          var deltaX = e.deltaX;                                                                                      // 1938
          var activationDistance = 80;                                                                                // 1939
                                                                                                                      // 1940
          // Change toast state                                                                                       // 1941
          if (!toast.classList.contains('panning')){                                                                  // 1942
            toast.classList.add('panning');                                                                           // 1943
          }                                                                                                           // 1944
                                                                                                                      // 1945
          var opacityPercent = 1-Math.abs(deltaX / activationDistance);                                               // 1946
          if (opacityPercent < 0)                                                                                     // 1947
            opacityPercent = 0;                                                                                       // 1948
                                                                                                                      // 1949
          Vel(toast, {left: deltaX, opacity: opacityPercent }, {duration: 50, queue: false, easing: 'easeOutQuad'});  // 1950
                                                                                                                      // 1951
        });                                                                                                           // 1952
                                                                                                                      // 1953
        hammerHandler.on('panend', function(e) {                                                                      // 1954
          var deltaX = e.deltaX;                                                                                      // 1955
          var activationDistance = 80;                                                                                // 1956
                                                                                                                      // 1957
          // If toast dragged past activation point                                                                   // 1958
          if (Math.abs(deltaX) > activationDistance) {                                                                // 1959
            Vel(toast, {marginTop: '-40px'}, { duration: 375,                                                         // 1960
                easing: 'easeOutExpo',                                                                                // 1961
                queue: false,                                                                                         // 1962
                complete: function(){                                                                                 // 1963
                  if(typeof(completeCallback) === "function") {                                                       // 1964
                    completeCallback();                                                                               // 1965
                  }                                                                                                   // 1966
                  toast.parentNode.removeChild(toast);                                                                // 1967
                }                                                                                                     // 1968
            });                                                                                                       // 1969
                                                                                                                      // 1970
          } else {                                                                                                    // 1971
            toast.classList.remove('panning');                                                                        // 1972
            // Put toast back into original position                                                                  // 1973
            Vel(toast, { left: 0, opacity: 1 }, { duration: 300,                                                      // 1974
              easing: 'easeOutExpo',                                                                                  // 1975
              queue: false                                                                                            // 1976
            });                                                                                                       // 1977
                                                                                                                      // 1978
          }                                                                                                           // 1979
        });                                                                                                           // 1980
                                                                                                                      // 1981
        return toast;                                                                                                 // 1982
    }                                                                                                                 // 1983
};                                                                                                                    // 1984
;(function ($) {                                                                                                      // 1985
                                                                                                                      // 1986
  var methods = {                                                                                                     // 1987
    init : function(options) {                                                                                        // 1988
      var defaults = {                                                                                                // 1989
        menuWidth: 240,                                                                                               // 1990
        edge: 'left',                                                                                                 // 1991
        closeOnClick: false                                                                                           // 1992
      };                                                                                                              // 1993
      options = $.extend(defaults, options);                                                                          // 1994
                                                                                                                      // 1995
      $(this).each(function(){                                                                                        // 1996
        var $this = $(this);                                                                                          // 1997
        var menu_id = $("#"+ $this.attr('data-activates'));                                                           // 1998
                                                                                                                      // 1999
        // Set to width                                                                                               // 2000
        if (options.menuWidth != 240) {                                                                               // 2001
          menu_id.css('width', options.menuWidth);                                                                    // 2002
        }                                                                                                             // 2003
                                                                                                                      // 2004
        // Add Touch Area                                                                                             // 2005
        var dragTarget = $('<div class="drag-target"></div>');                                                        // 2006
        $('body').append(dragTarget);                                                                                 // 2007
                                                                                                                      // 2008
        if (options.edge == 'left') {                                                                                 // 2009
          menu_id.css('left', -1 * (options.menuWidth + 10));                                                         // 2010
          dragTarget.css({'left': 0}); // Add Touch Area                                                              // 2011
        }                                                                                                             // 2012
        else {                                                                                                        // 2013
          menu_id.addClass('right-aligned') // Change text-alignment to right                                         // 2014
            .css('right', -1 * (options.menuWidth + 10))                                                              // 2015
            .css('left', '');                                                                                         // 2016
          dragTarget.css({'right': 0}); // Add Touch Area                                                             // 2017
        }                                                                                                             // 2018
                                                                                                                      // 2019
        // If fixed sidenav, bring menu out                                                                           // 2020
        if (menu_id.hasClass('fixed')) {                                                                              // 2021
            if (window.innerWidth > 992) {                                                                            // 2022
              menu_id.css('left', 0);                                                                                 // 2023
            }                                                                                                         // 2024
          }                                                                                                           // 2025
                                                                                                                      // 2026
        // Window resize to reset on large screens fixed                                                              // 2027
        if (menu_id.hasClass('fixed')) {                                                                              // 2028
          $(window).resize( function() {                                                                              // 2029
            if (window.innerWidth > 992) {                                                                            // 2030
              // Close menu if window is resized bigger than 992 and user has fixed sidenav                           // 2031
              if ($('#sidenav-overlay').css('opacity') !== 0 && menuOut) {                                            // 2032
                removeMenu(true);                                                                                     // 2033
              }                                                                                                       // 2034
              else {                                                                                                  // 2035
                menu_id.removeAttr('style');                                                                          // 2036
                menu_id.css('width', options.menuWidth);                                                              // 2037
              }                                                                                                       // 2038
            }                                                                                                         // 2039
            else if (menuOut === false){                                                                              // 2040
              if (options.edge === 'left')                                                                            // 2041
                menu_id.css('left', -1 * (options.menuWidth + 10));                                                   // 2042
              else                                                                                                    // 2043
                menu_id.css('right', -1 * (options.menuWidth + 10));                                                  // 2044
            }                                                                                                         // 2045
                                                                                                                      // 2046
          });                                                                                                         // 2047
        }                                                                                                             // 2048
                                                                                                                      // 2049
        // if closeOnClick, then add close event for all a tags in side sideNav                                       // 2050
        if (options.closeOnClick === true) {                                                                          // 2051
          menu_id.on("click.itemclick", "a:not(.collapsible-header)", function(){                                     // 2052
            removeMenu();                                                                                             // 2053
          });                                                                                                         // 2054
        }                                                                                                             // 2055
                                                                                                                      // 2056
        function removeMenu(restoreNav) {                                                                             // 2057
          panning = false;                                                                                            // 2058
          menuOut = false;                                                                                            // 2059
                                                                                                                      // 2060
          // Reenable scrolling                                                                                       // 2061
          $('body').css('overflow', '');                                                                              // 2062
                                                                                                                      // 2063
          $('#sidenav-overlay').velocity({opacity: 0}, {duration: 200, queue: false, easing: 'easeOutQuad',           // 2064
            complete: function() {                                                                                    // 2065
              $(this).remove();                                                                                       // 2066
            } });                                                                                                     // 2067
          if (options.edge === 'left') {                                                                              // 2068
            // Reset phantom div                                                                                      // 2069
            dragTarget.css({width: '', right: '', left: '0'});                                                        // 2070
            menu_id.velocity(                                                                                         // 2071
              {left: -1 * (options.menuWidth + 10)},                                                                  // 2072
              { duration: 200,                                                                                        // 2073
                queue: false,                                                                                         // 2074
                easing: 'easeOutCubic',                                                                               // 2075
                complete: function() {                                                                                // 2076
                  if (restoreNav === true) {                                                                          // 2077
                    // Restore Fixed sidenav                                                                          // 2078
                    menu_id.removeAttr('style');                                                                      // 2079
                    menu_id.css('width', options.menuWidth);                                                          // 2080
                  }                                                                                                   // 2081
                }                                                                                                     // 2082
                                                                                                                      // 2083
            });                                                                                                       // 2084
          }                                                                                                           // 2085
          else {                                                                                                      // 2086
            // Reset phantom div                                                                                      // 2087
            dragTarget.css({width: '', right: '0', left: ''});                                                        // 2088
            menu_id.velocity(                                                                                         // 2089
              {right: -1 * (options.menuWidth + 10)},                                                                 // 2090
              { duration: 200,                                                                                        // 2091
                queue: false,                                                                                         // 2092
                easing: 'easeOutCubic',                                                                               // 2093
                complete: function() {                                                                                // 2094
                  if (restoreNav === true) {                                                                          // 2095
                    // Restore Fixed sidenav                                                                          // 2096
                    menu_id.removeAttr('style');                                                                      // 2097
                    menu_id.css('width', options.menuWidth);                                                          // 2098
                  }                                                                                                   // 2099
                }                                                                                                     // 2100
              });                                                                                                     // 2101
          }                                                                                                           // 2102
        }                                                                                                             // 2103
                                                                                                                      // 2104
                                                                                                                      // 2105
                                                                                                                      // 2106
        // Touch Event                                                                                                // 2107
        var panning = false;                                                                                          // 2108
        var menuOut = false;                                                                                          // 2109
                                                                                                                      // 2110
        dragTarget.on('click', function(){                                                                            // 2111
          removeMenu();                                                                                               // 2112
        });                                                                                                           // 2113
                                                                                                                      // 2114
        dragTarget.hammer({                                                                                           // 2115
          prevent_default: false                                                                                      // 2116
        }).bind('pan', function(e) {                                                                                  // 2117
                                                                                                                      // 2118
          if (e.gesture.pointerType == "touch") {                                                                     // 2119
                                                                                                                      // 2120
            var direction = e.gesture.direction;                                                                      // 2121
            var x = e.gesture.center.x;                                                                               // 2122
            var y = e.gesture.center.y;                                                                               // 2123
            var velocityX = e.gesture.velocityX;                                                                      // 2124
                                                                                                                      // 2125
            // Disable Scrolling                                                                                      // 2126
            $('body').css('overflow', 'hidden');                                                                      // 2127
                                                                                                                      // 2128
            // If overlay does not exist, create one and if it is clicked, close menu                                 // 2129
            if ($('#sidenav-overlay').length === 0) {                                                                 // 2130
              var overlay = $('<div id="sidenav-overlay"></div>');                                                    // 2131
              overlay.css('opacity', 0).click( function(){                                                            // 2132
                removeMenu();                                                                                         // 2133
              });                                                                                                     // 2134
              $('body').append(overlay);                                                                              // 2135
            }                                                                                                         // 2136
                                                                                                                      // 2137
            // Keep within boundaries                                                                                 // 2138
            if (options.edge === 'left') {                                                                            // 2139
              if (x > options.menuWidth) { x = options.menuWidth; }                                                   // 2140
              else if (x < 0) { x = 0; }                                                                              // 2141
            }                                                                                                         // 2142
                                                                                                                      // 2143
            if (options.edge === 'left') {                                                                            // 2144
              // Left Direction                                                                                       // 2145
              if (x < (options.menuWidth / 2)) { menuOut = false; }                                                   // 2146
              // Right Direction                                                                                      // 2147
              else if (x >= (options.menuWidth / 2)) { menuOut = true; }                                              // 2148
                                                                                                                      // 2149
              menu_id.css('left', (x - options.menuWidth));                                                           // 2150
            }                                                                                                         // 2151
            else {                                                                                                    // 2152
              // Left Direction                                                                                       // 2153
              if (x < (window.innerWidth - options.menuWidth / 2)) {                                                  // 2154
                menuOut = true;                                                                                       // 2155
              }                                                                                                       // 2156
              // Right Direction                                                                                      // 2157
              else if (x >= (window.innerWidth - options.menuWidth / 2)) {                                            // 2158
               menuOut = false;                                                                                       // 2159
             }                                                                                                        // 2160
              var rightPos = -1 *(x - options.menuWidth / 2);                                                         // 2161
              if (rightPos > 0) {                                                                                     // 2162
                rightPos = 0;                                                                                         // 2163
              }                                                                                                       // 2164
                                                                                                                      // 2165
              menu_id.css('right', rightPos);                                                                         // 2166
            }                                                                                                         // 2167
                                                                                                                      // 2168
                                                                                                                      // 2169
                                                                                                                      // 2170
                                                                                                                      // 2171
            // Percentage overlay                                                                                     // 2172
            var overlayPerc;                                                                                          // 2173
            if (options.edge === 'left') {                                                                            // 2174
              overlayPerc = x / options.menuWidth;                                                                    // 2175
              $('#sidenav-overlay').velocity({opacity: overlayPerc }, {duration: 50, queue: false, easing: 'easeOutQuad'});
            }                                                                                                         // 2177
            else {                                                                                                    // 2178
              overlayPerc = Math.abs((x - window.innerWidth) / options.menuWidth);                                    // 2179
              $('#sidenav-overlay').velocity({opacity: overlayPerc }, {duration: 50, queue: false, easing: 'easeOutQuad'});
            }                                                                                                         // 2181
          }                                                                                                           // 2182
                                                                                                                      // 2183
        }).bind('panend', function(e) {                                                                               // 2184
                                                                                                                      // 2185
          if (e.gesture.pointerType == "touch") {                                                                     // 2186
            var velocityX = e.gesture.velocityX;                                                                      // 2187
            panning = false;                                                                                          // 2188
            if (options.edge === 'left') {                                                                            // 2189
              // If velocityX <= 0.3 then the user is flinging the menu closed so ignore menuOut                      // 2190
              if ((menuOut && velocityX <= 0.3) || velocityX < -0.5) {                                                // 2191
                menu_id.velocity({left: 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});                    // 2192
                $('#sidenav-overlay').velocity({opacity: 1 }, {duration: 50, queue: false, easing: 'easeOutQuad'});   // 2193
                dragTarget.css({width: '50%', right: 0, left: ''});                                                   // 2194
              }                                                                                                       // 2195
              else if (!menuOut || velocityX > 0.3) {                                                                 // 2196
                // Enable Scrolling                                                                                   // 2197
                $('body').css('overflow', '');                                                                        // 2198
                // Slide menu closed                                                                                  // 2199
                menu_id.velocity({left: -1 * (options.menuWidth + 10)}, {duration: 200, queue: false, easing: 'easeOutQuad'});
                $('#sidenav-overlay').velocity({opacity: 0 }, {duration: 200, queue: false, easing: 'easeOutQuad',    // 2201
                  complete: function () {                                                                             // 2202
                    $(this).remove();                                                                                 // 2203
                  }});                                                                                                // 2204
                dragTarget.css({width: '10px', right: '', left: 0});                                                  // 2205
              }                                                                                                       // 2206
            }                                                                                                         // 2207
            else {                                                                                                    // 2208
              if ((menuOut && velocityX >= -0.3) || velocityX > 0.5) {                                                // 2209
                menu_id.velocity({right: 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});                   // 2210
                $('#sidenav-overlay').velocity({opacity: 1 }, {duration: 50, queue: false, easing: 'easeOutQuad'});   // 2211
                dragTarget.css({width: '50%', right: '', left: 0});                                                   // 2212
              }                                                                                                       // 2213
              else if (!menuOut || velocityX < -0.3) {                                                                // 2214
                // Enable Scrolling                                                                                   // 2215
                $('body').css('overflow', '');                                                                        // 2216
                // Slide menu closed                                                                                  // 2217
                menu_id.velocity({right: -1 * (options.menuWidth + 10)}, {duration: 200, queue: false, easing: 'easeOutQuad'});
                $('#sidenav-overlay').velocity({opacity: 0 }, {duration: 200, queue: false, easing: 'easeOutQuad',    // 2219
                  complete: function () {                                                                             // 2220
                    $(this).remove();                                                                                 // 2221
                  }});                                                                                                // 2222
                dragTarget.css({width: '10px', right: 0, left: ''});                                                  // 2223
              }                                                                                                       // 2224
            }                                                                                                         // 2225
                                                                                                                      // 2226
          }                                                                                                           // 2227
        });                                                                                                           // 2228
                                                                                                                      // 2229
          $this.click(function() {                                                                                    // 2230
            if (menuOut === true) {                                                                                   // 2231
              menuOut = false;                                                                                        // 2232
              panning = false;                                                                                        // 2233
              removeMenu();                                                                                           // 2234
            }                                                                                                         // 2235
            else {                                                                                                    // 2236
                                                                                                                      // 2237
              // Disable Scrolling                                                                                    // 2238
              $('body').css('overflow', 'hidden');                                                                    // 2239
              // Push current drag target on top of DOM tree                                                          // 2240
              $('body').append(dragTarget);                                                                           // 2241
                                                                                                                      // 2242
              if (options.edge === 'left') {                                                                          // 2243
                dragTarget.css({width: '50%', right: 0, left: ''});                                                   // 2244
                menu_id.velocity({left: 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});                    // 2245
              }                                                                                                       // 2246
              else {                                                                                                  // 2247
                dragTarget.css({width: '50%', right: '', left: 0});                                                   // 2248
                menu_id.velocity({right: 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});                   // 2249
                menu_id.css('left','');                                                                               // 2250
              }                                                                                                       // 2251
                                                                                                                      // 2252
              var overlay = $('<div id="sidenav-overlay"></div>');                                                    // 2253
              overlay.css('opacity', 0)                                                                               // 2254
              .click(function(){                                                                                      // 2255
                menuOut = false;                                                                                      // 2256
                panning = false;                                                                                      // 2257
                removeMenu();                                                                                         // 2258
                overlay.velocity({opacity: 0}, {duration: 300, queue: false, easing: 'easeOutQuad',                   // 2259
                  complete: function() {                                                                              // 2260
                    $(this).remove();                                                                                 // 2261
                  } });                                                                                               // 2262
                                                                                                                      // 2263
              });                                                                                                     // 2264
              $('body').append(overlay);                                                                              // 2265
              overlay.velocity({opacity: 1}, {duration: 300, queue: false, easing: 'easeOutQuad',                     // 2266
                complete: function () {                                                                               // 2267
                  menuOut = true;                                                                                     // 2268
                  panning = false;                                                                                    // 2269
                }                                                                                                     // 2270
              });                                                                                                     // 2271
            }                                                                                                         // 2272
                                                                                                                      // 2273
            return false;                                                                                             // 2274
          });                                                                                                         // 2275
      });                                                                                                             // 2276
                                                                                                                      // 2277
                                                                                                                      // 2278
    },                                                                                                                // 2279
    show : function() {                                                                                               // 2280
      this.trigger('click');                                                                                          // 2281
    },                                                                                                                // 2282
    hide : function() {                                                                                               // 2283
      $('#sidenav-overlay').trigger('click');                                                                         // 2284
    }                                                                                                                 // 2285
  };                                                                                                                  // 2286
                                                                                                                      // 2287
                                                                                                                      // 2288
    $.fn.sideNav = function(methodOrOptions) {                                                                        // 2289
      if ( methods[methodOrOptions] ) {                                                                               // 2290
        return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));                   // 2291
      } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {                                        // 2292
        // Default to "init"                                                                                          // 2293
        return methods.init.apply( this, arguments );                                                                 // 2294
      } else {                                                                                                        // 2295
        $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.sideNav' );                                // 2296
      }                                                                                                               // 2297
    }; // Plugin end                                                                                                  // 2298
}( jQuery ));                                                                                                         // 2299
;/**                                                                                                                  // 2300
 * Extend jquery with a scrollspy plugin.                                                                             // 2301
 * This watches the window scroll and fires events when elements are scrolled into viewport.                          // 2302
 *                                                                                                                    // 2303
 * throttle() and getTime() taken from Underscore.js                                                                  // 2304
 * https://github.com/jashkenas/underscore                                                                            // 2305
 *                                                                                                                    // 2306
 * @author Copyright 2013 John Smart                                                                                  // 2307
 * @license https://raw.github.com/thesmart/jquery-scrollspy/master/LICENSE                                           // 2308
 * @see https://github.com/thesmart                                                                                   // 2309
 * @version 0.1.2                                                                                                     // 2310
 */                                                                                                                   // 2311
(function($) {                                                                                                        // 2312
                                                                                                                      // 2313
	var jWindow = $(window);                                                                                             // 2314
	var elements = [];                                                                                                   // 2315
	var elementsInView = [];                                                                                             // 2316
	var isSpying = false;                                                                                                // 2317
	var ticks = 0;                                                                                                       // 2318
	var unique_id = 1;                                                                                                   // 2319
	var offset = {                                                                                                       // 2320
		top : 0,                                                                                                            // 2321
		right : 0,                                                                                                          // 2322
		bottom : 0,                                                                                                         // 2323
		left : 0,                                                                                                           // 2324
	}                                                                                                                    // 2325
                                                                                                                      // 2326
	/**                                                                                                                  // 2327
	 * Find elements that are within the boundary                                                                        // 2328
	 * @param {number} top                                                                                               // 2329
	 * @param {number} right                                                                                             // 2330
	 * @param {number} bottom                                                                                            // 2331
	 * @param {number} left                                                                                              // 2332
	 * @return {jQuery}		A collection of elements                                                                        // 2333
	 */                                                                                                                  // 2334
	function findElements(top, right, bottom, left) {                                                                    // 2335
		var hits = $();                                                                                                     // 2336
		$.each(elements, function(i, element) {                                                                             // 2337
			if (element.height() > 0) {                                                                                        // 2338
				var elTop = element.offset().top,                                                                                 // 2339
					elLeft = element.offset().left,                                                                                  // 2340
					elRight = elLeft + element.width(),                                                                              // 2341
					elBottom = elTop + element.height();                                                                             // 2342
                                                                                                                      // 2343
				var isIntersect = !(elLeft > right ||                                                                             // 2344
					elRight < left ||                                                                                                // 2345
					elTop > bottom ||                                                                                                // 2346
					elBottom < top);                                                                                                 // 2347
                                                                                                                      // 2348
				if (isIntersect) {                                                                                                // 2349
					hits.push(element);                                                                                              // 2350
				}                                                                                                                 // 2351
			}                                                                                                                  // 2352
		});                                                                                                                 // 2353
                                                                                                                      // 2354
		return hits;                                                                                                        // 2355
	}                                                                                                                    // 2356
                                                                                                                      // 2357
                                                                                                                      // 2358
	/**                                                                                                                  // 2359
	 * Called when the user scrolls the window                                                                           // 2360
	 */                                                                                                                  // 2361
	function onScroll() {                                                                                                // 2362
		// unique tick id                                                                                                   // 2363
		++ticks;                                                                                                            // 2364
                                                                                                                      // 2365
		// viewport rectangle                                                                                               // 2366
		var top = jWindow.scrollTop(),                                                                                      // 2367
			left = jWindow.scrollLeft(),                                                                                       // 2368
			right = left + jWindow.width(),                                                                                    // 2369
			bottom = top + jWindow.height();                                                                                   // 2370
                                                                                                                      // 2371
		// determine which elements are in view                                                                             // 2372
//        + 60 accounts for fixed nav                                                                                 // 2373
		var intersections = findElements(top+offset.top + 200, right+offset.right, bottom+offset.bottom, left+offset.left);
		$.each(intersections, function(i, element) {                                                                        // 2375
                                                                                                                      // 2376
			var lastTick = element.data('scrollSpy:ticks');                                                                    // 2377
			if (typeof lastTick != 'number') {                                                                                 // 2378
				// entered into view                                                                                              // 2379
				element.triggerHandler('scrollSpy:enter');                                                                        // 2380
			}                                                                                                                  // 2381
                                                                                                                      // 2382
			// update tick id                                                                                                  // 2383
			element.data('scrollSpy:ticks', ticks);                                                                            // 2384
		});                                                                                                                 // 2385
                                                                                                                      // 2386
		// determine which elements are no longer in view                                                                   // 2387
		$.each(elementsInView, function(i, element) {                                                                       // 2388
			var lastTick = element.data('scrollSpy:ticks');                                                                    // 2389
			if (typeof lastTick == 'number' && lastTick !== ticks) {                                                           // 2390
				// exited from view                                                                                               // 2391
				element.triggerHandler('scrollSpy:exit');                                                                         // 2392
				element.data('scrollSpy:ticks', null);                                                                            // 2393
			}                                                                                                                  // 2394
		});                                                                                                                 // 2395
                                                                                                                      // 2396
		// remember elements in view for next tick                                                                          // 2397
		elementsInView = intersections;                                                                                     // 2398
	}                                                                                                                    // 2399
                                                                                                                      // 2400
	/**                                                                                                                  // 2401
	 * Called when window is resized                                                                                     // 2402
	*/                                                                                                                   // 2403
	function onWinSize() {                                                                                               // 2404
		jWindow.trigger('scrollSpy:winSize');                                                                               // 2405
	}                                                                                                                    // 2406
                                                                                                                      // 2407
	/**                                                                                                                  // 2408
	 * Get time in ms                                                                                                    // 2409
   * @license https://raw.github.com/jashkenas/underscore/master/LICENSE                                              // 2410
	 * @type {function}                                                                                                  // 2411
	 * @return {number}                                                                                                  // 2412
	 */                                                                                                                  // 2413
	var getTime = (Date.now || function () {                                                                             // 2414
		return new Date().getTime();                                                                                        // 2415
	});                                                                                                                  // 2416
                                                                                                                      // 2417
	/**                                                                                                                  // 2418
	 * Returns a function, that, when invoked, will only be triggered at most once                                       // 2419
	 * during a given window of time. Normally, the throttled function will run                                          // 2420
	 * as much as it can, without ever going more than once per `wait` duration;                                         // 2421
	 * but if you'd like to disable the execution on the leading edge, pass                                              // 2422
	 * `{leading: false}`. To disable execution on the trailing edge, ditto.                                             // 2423
	 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE                                               // 2424
	 * @param {function} func                                                                                            // 2425
	 * @param {number} wait                                                                                              // 2426
	 * @param {Object=} options                                                                                          // 2427
	 * @returns {Function}                                                                                               // 2428
	 */                                                                                                                  // 2429
	function throttle(func, wait, options) {                                                                             // 2430
		var context, args, result;                                                                                          // 2431
		var timeout = null;                                                                                                 // 2432
		var previous = 0;                                                                                                   // 2433
		options || (options = {});                                                                                          // 2434
		var later = function () {                                                                                           // 2435
			previous = options.leading === false ? 0 : getTime();                                                              // 2436
			timeout = null;                                                                                                    // 2437
			result = func.apply(context, args);                                                                                // 2438
			context = args = null;                                                                                             // 2439
		};                                                                                                                  // 2440
		return function () {                                                                                                // 2441
			var now = getTime();                                                                                               // 2442
			if (!previous && options.leading === false) previous = now;                                                        // 2443
			var remaining = wait - (now - previous);                                                                           // 2444
			context = this;                                                                                                    // 2445
			args = arguments;                                                                                                  // 2446
			if (remaining <= 0) {                                                                                              // 2447
				clearTimeout(timeout);                                                                                            // 2448
				timeout = null;                                                                                                   // 2449
				previous = now;                                                                                                   // 2450
				result = func.apply(context, args);                                                                               // 2451
				context = args = null;                                                                                            // 2452
			} else if (!timeout && options.trailing !== false) {                                                               // 2453
				timeout = setTimeout(later, remaining);                                                                           // 2454
			}                                                                                                                  // 2455
			return result;                                                                                                     // 2456
		};                                                                                                                  // 2457
	};                                                                                                                   // 2458
                                                                                                                      // 2459
	/**                                                                                                                  // 2460
	 * Enables ScrollSpy using a selector                                                                                // 2461
	 * @param {jQuery|string} selector  The elements collection, or a selector                                           // 2462
	 * @param {Object=} options	Optional.                                                                                // 2463
        throttle : number -> scrollspy throttling. Default: 100 ms                                                    // 2464
        offsetTop : number -> offset from top. Default: 0                                                             // 2465
        offsetRight : number -> offset from right. Default: 0                                                         // 2466
        offsetBottom : number -> offset from bottom. Default: 0                                                       // 2467
        offsetLeft : number -> offset from left. Default: 0                                                           // 2468
	 * @returns {jQuery}                                                                                                 // 2469
	 */                                                                                                                  // 2470
	$.scrollSpy = function(selector, options) {                                                                          // 2471
		var visible = [];                                                                                                   // 2472
		selector = $(selector);                                                                                             // 2473
		selector.each(function(i, element) {                                                                                // 2474
			elements.push($(element));                                                                                         // 2475
			$(element).data("scrollSpy:id", i);                                                                                // 2476
			// Smooth scroll to section                                                                                        // 2477
		  $('a[href=#' + $(element).attr('id') + ']').click(function(e) {                                                   // 2478
		    e.preventDefault();                                                                                             // 2479
		    var offset = $(this.hash).offset().top + 1;                                                                     // 2480
                                                                                                                      // 2481
//          offset - 200 allows elements near bottom of page to scroll                                                // 2482
			                                                                                                                   // 2483
	    	$('html, body').animate({ scrollTop: offset - 200 }, {duration: 400, queue: false, easing: 'easeOutCubic'});    // 2484
			                                                                                                                   // 2485
		  });                                                                                                               // 2486
		});                                                                                                                 // 2487
		options = options || {                                                                                              // 2488
			throttle: 100                                                                                                      // 2489
		};                                                                                                                  // 2490
                                                                                                                      // 2491
		offset.top = options.offsetTop || 0;                                                                                // 2492
		offset.right = options.offsetRight || 0;                                                                            // 2493
		offset.bottom = options.offsetBottom || 0;                                                                          // 2494
		offset.left = options.offsetLeft || 0;                                                                              // 2495
                                                                                                                      // 2496
		var throttledScroll = throttle(onScroll, options.throttle || 100);                                                  // 2497
		var readyScroll = function(){                                                                                       // 2498
			$(document).ready(throttledScroll);                                                                                // 2499
		};                                                                                                                  // 2500
                                                                                                                      // 2501
		if (!isSpying) {                                                                                                    // 2502
			jWindow.on('scroll', readyScroll);                                                                                 // 2503
			jWindow.on('resize', readyScroll);                                                                                 // 2504
			isSpying = true;                                                                                                   // 2505
		}                                                                                                                   // 2506
                                                                                                                      // 2507
		// perform a scan once, after current execution context, and after dom is ready                                     // 2508
		setTimeout(readyScroll, 0);                                                                                         // 2509
                                                                                                                      // 2510
                                                                                                                      // 2511
		selector.on('scrollSpy:enter', function() {                                                                         // 2512
			visible = $.grep(visible, function(value) {                                                                        // 2513
	      return value.height() != 0;                                                                                    // 2514
	    });                                                                                                              // 2515
                                                                                                                      // 2516
			var $this = $(this);                                                                                               // 2517
                                                                                                                      // 2518
			if (visible[0]) {                                                                                                  // 2519
				$('a[href=#' + visible[0].attr('id') + ']').removeClass('active');                                                // 2520
				if ($this.data('scrollSpy:id') < visible[0].data('scrollSpy:id')) {                                               // 2521
					visible.unshift($(this));                                                                                        // 2522
				}                                                                                                                 // 2523
				else {                                                                                                            // 2524
					visible.push($(this));                                                                                           // 2525
				}                                                                                                                 // 2526
			}                                                                                                                  // 2527
			else {                                                                                                             // 2528
				visible.push($(this));                                                                                            // 2529
			}                                                                                                                  // 2530
                                                                                                                      // 2531
                                                                                                                      // 2532
			$('a[href=#' + visible[0].attr('id') + ']').addClass('active');                                                    // 2533
		});                                                                                                                 // 2534
		selector.on('scrollSpy:exit', function() {                                                                          // 2535
			visible = $.grep(visible, function(value) {                                                                        // 2536
	      return value.height() != 0;                                                                                    // 2537
	    });                                                                                                              // 2538
                                                                                                                      // 2539
			if (visible[0]) {                                                                                                  // 2540
				$('a[href=#' + visible[0].attr('id') + ']').removeClass('active');                                                // 2541
				var $this = $(this);                                                                                              // 2542
				visible = $.grep(visible, function(value) {                                                                       // 2543
	        return value.attr('id') != $this.attr('id');                                                                 // 2544
	      });                                                                                                            // 2545
	      if (visible[0]) { // Check if empty                                                                            // 2546
					$('a[href=#' + visible[0].attr('id') + ']').addClass('active');                                                  // 2547
	      }                                                                                                              // 2548
			}                                                                                                                  // 2549
		});                                                                                                                 // 2550
                                                                                                                      // 2551
		return selector;                                                                                                    // 2552
	};                                                                                                                   // 2553
                                                                                                                      // 2554
	/**                                                                                                                  // 2555
	 * Listen for window resize events                                                                                   // 2556
	 * @param {Object=} options						Optional. Set { throttle: number } to change throttling. Default: 100 ms            // 2557
	 * @returns {jQuery}		$(window)                                                                                      // 2558
	 */                                                                                                                  // 2559
	$.winSizeSpy = function(options) {                                                                                   // 2560
		$.winSizeSpy = function() { return jWindow; }; // lock from multiple calls                                          // 2561
		options = options || {                                                                                              // 2562
			throttle: 100                                                                                                      // 2563
		};                                                                                                                  // 2564
		return jWindow.on('resize', throttle(onWinSize, options.throttle || 100));                                          // 2565
	};                                                                                                                   // 2566
                                                                                                                      // 2567
	/**                                                                                                                  // 2568
	 * Enables ScrollSpy on a collection of elements                                                                     // 2569
	 * e.g. $('.scrollSpy').scrollSpy()                                                                                  // 2570
	 * @param {Object=} options	Optional.                                                                                // 2571
											throttle : number -> scrollspy throttling. Default: 100 ms                                                 // 2572
											offsetTop : number -> offset from top. Default: 0                                                          // 2573
											offsetRight : number -> offset from right. Default: 0                                                      // 2574
											offsetBottom : number -> offset from bottom. Default: 0                                                    // 2575
											offsetLeft : number -> offset from left. Default: 0                                                        // 2576
	 * @returns {jQuery}                                                                                                 // 2577
	 */                                                                                                                  // 2578
	$.fn.scrollSpy = function(options) {                                                                                 // 2579
		return $.scrollSpy($(this), options);                                                                               // 2580
	};                                                                                                                   // 2581
                                                                                                                      // 2582
})(jQuery);;(function ($) {                                                                                           // 2583
  $(document).ready(function() {                                                                                      // 2584
                                                                                                                      // 2585
    // Function to update labels of text fields                                                                       // 2586
    Materialize.updateTextFields = function() {                                                                       // 2587
      var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';
      $(input_selector).each(function(index, element) {                                                               // 2589
        if ($(element).val().length > 0 || element.autofocus ||$(this).attr('placeholder') !== undefined || $(element)[0].validity.badInput === true) {
          $(this).siblings('label, i').addClass('active');                                                            // 2591
        }                                                                                                             // 2592
        else {                                                                                                        // 2593
          $(this).siblings('label, i').removeClass('active');                                                         // 2594
        }                                                                                                             // 2595
      });                                                                                                             // 2596
    };                                                                                                                // 2597
                                                                                                                      // 2598
    // Text based inputs                                                                                              // 2599
    var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';
                                                                                                                      // 2601
    // Add active if form auto complete                                                                               // 2602
    $(document).on('change', input_selector, function () {                                                            // 2603
      if($(this).val().length !== 0 || $(this).attr('placeholder') !== undefined) {                                   // 2604
        $(this).siblings('label').addClass('active');                                                                 // 2605
      }                                                                                                               // 2606
      validate_field($(this));                                                                                        // 2607
    });                                                                                                               // 2608
                                                                                                                      // 2609
    // Add active if input element has been pre-populated on document ready                                           // 2610
    $(document).ready(function() {                                                                                    // 2611
      Materialize.updateTextFields();                                                                                 // 2612
    });                                                                                                               // 2613
                                                                                                                      // 2614
    // HTML DOM FORM RESET handling                                                                                   // 2615
    $(document).on('reset', function(e) {                                                                             // 2616
      var formReset = $(e.target);                                                                                    // 2617
      if (formReset.is('form')) {                                                                                     // 2618
        formReset.find(input_selector).removeClass('valid').removeClass('invalid');                                   // 2619
        formReset.find(input_selector).each(function () {                                                             // 2620
          if ($(this).attr('value') === '') {                                                                         // 2621
            $(this).siblings('label, i').removeClass('active');                                                       // 2622
          }                                                                                                           // 2623
        });                                                                                                           // 2624
                                                                                                                      // 2625
        // Reset select                                                                                               // 2626
        formReset.find('select.initialized').each(function () {                                                       // 2627
          var reset_text = formReset.find('option[selected]').text();                                                 // 2628
          formReset.siblings('input.select-dropdown').val(reset_text);                                                // 2629
        });                                                                                                           // 2630
      }                                                                                                               // 2631
    });                                                                                                               // 2632
                                                                                                                      // 2633
    // Add active when element has focus                                                                              // 2634
    $(document).on('focus', input_selector, function () {                                                             // 2635
      $(this).siblings('label, i').addClass('active');                                                                // 2636
    });                                                                                                               // 2637
                                                                                                                      // 2638
    $(document).on('blur', input_selector, function () {                                                              // 2639
      var $inputElement = $(this);                                                                                    // 2640
      if ($inputElement.val().length === 0 && $inputElement[0].validity.badInput !== true && $inputElement.attr('placeholder') === undefined) {
        $inputElement.siblings('label, i').removeClass('active');                                                     // 2642
      }                                                                                                               // 2643
                                                                                                                      // 2644
      if ($inputElement.val().length === 0 && $inputElement[0].validity.badInput !== true && $inputElement.attr('placeholder') !== undefined) {
        $inputElement.siblings('i').removeClass('active');                                                            // 2646
      }                                                                                                               // 2647
      validate_field($inputElement);                                                                                  // 2648
    });                                                                                                               // 2649
                                                                                                                      // 2650
    window.validate_field = function(object) {                                                                        // 2651
      var hasLength = object.attr('length') !== undefined;                                                            // 2652
      var lenAttr = parseInt(object.attr('length'));                                                                  // 2653
      var len = object.val().length;                                                                                  // 2654
                                                                                                                      // 2655
      if (object.val().length === 0 && object[0].validity.badInput === false) {                                       // 2656
        if (object.hasClass('validate')) {                                                                            // 2657
          object.removeClass('valid');                                                                                // 2658
          object.removeClass('invalid');                                                                              // 2659
        }                                                                                                             // 2660
      }                                                                                                               // 2661
      else {                                                                                                          // 2662
        if (object.hasClass('validate')) {                                                                            // 2663
          // Check for character counter attributes                                                                   // 2664
          if ((object.is(':valid') && hasLength && (len <= lenAttr)) || (object.is(':valid') && !hasLength)) {        // 2665
            object.removeClass('invalid');                                                                            // 2666
            object.addClass('valid');                                                                                 // 2667
          }                                                                                                           // 2668
          else {                                                                                                      // 2669
            object.removeClass('valid');                                                                              // 2670
            object.addClass('invalid');                                                                               // 2671
          }                                                                                                           // 2672
        }                                                                                                             // 2673
      }                                                                                                               // 2674
    };                                                                                                                // 2675
                                                                                                                      // 2676
                                                                                                                      // 2677
    // Textarea Auto Resize                                                                                           // 2678
    var hiddenDiv = $('.hiddendiv').first();                                                                          // 2679
    if (!hiddenDiv.length) {                                                                                          // 2680
      hiddenDiv = $('<div class="hiddendiv common"></div>');                                                          // 2681
      $('body').append(hiddenDiv);                                                                                    // 2682
    }                                                                                                                 // 2683
    var text_area_selector = '.materialize-textarea';                                                                 // 2684
                                                                                                                      // 2685
    function textareaAutoResize($textarea) {                                                                          // 2686
      // Set font properties of hiddenDiv                                                                             // 2687
                                                                                                                      // 2688
      var fontFamily = $textarea.css('font-family');                                                                  // 2689
      var fontSize = $textarea.css('font-size');                                                                      // 2690
                                                                                                                      // 2691
      if (fontSize) { hiddenDiv.css('font-size', fontSize); }                                                         // 2692
      if (fontFamily) { hiddenDiv.css('font-family', fontFamily); }                                                   // 2693
                                                                                                                      // 2694
      if ($textarea.attr('wrap') === "off") {                                                                         // 2695
        hiddenDiv.css('overflow-wrap', "normal")                                                                      // 2696
                 .css('white-space', "pre");                                                                          // 2697
      }                                                                                                               // 2698
                                                                                                                      // 2699
      hiddenDiv.text($textarea.val() + '\n');                                                                         // 2700
      var content = hiddenDiv.html().replace(/\n/g, '<br>');                                                          // 2701
      hiddenDiv.html(content);                                                                                        // 2702
                                                                                                                      // 2703
                                                                                                                      // 2704
      // When textarea is hidden, width goes crazy.                                                                   // 2705
      // Approximate with half of window size                                                                         // 2706
                                                                                                                      // 2707
      if ($textarea.is(':visible')) {                                                                                 // 2708
        hiddenDiv.css('width', $textarea.width());                                                                    // 2709
      }                                                                                                               // 2710
      else {                                                                                                          // 2711
        hiddenDiv.css('width', $(window).width()/2);                                                                  // 2712
      }                                                                                                               // 2713
                                                                                                                      // 2714
      $textarea.css('height', hiddenDiv.height());                                                                    // 2715
    }                                                                                                                 // 2716
                                                                                                                      // 2717
    $(text_area_selector).each(function () {                                                                          // 2718
      var $textarea = $(this);                                                                                        // 2719
      if ($textarea.val().length) {                                                                                   // 2720
        textareaAutoResize($textarea);                                                                                // 2721
      }                                                                                                               // 2722
    });                                                                                                               // 2723
                                                                                                                      // 2724
    $('body').on('keyup keydown autoresize', text_area_selector, function () {                                        // 2725
      textareaAutoResize($(this));                                                                                    // 2726
    });                                                                                                               // 2727
                                                                                                                      // 2728
    // File Input Path                                                                                                // 2729
    $(document).on('change', '.file-field input[type="file"]', function () {                                          // 2730
      var file_field = $(this).closest('.file-field');                                                                // 2731
      var path_input = file_field.find('input.file-path');                                                            // 2732
      var files      = $(this)[0].files;                                                                              // 2733
      var file_names = [];                                                                                            // 2734
      for (var i = 0; i < files.length; i++) {                                                                        // 2735
        file_names.push(files[i].name);                                                                               // 2736
      }                                                                                                               // 2737
      path_input.val(file_names.join(", "));                                                                          // 2738
      path_input.trigger('change');                                                                                   // 2739
    });                                                                                                               // 2740
                                                                                                                      // 2741
    /****************                                                                                                 // 2742
    *  Range Input  *                                                                                                 // 2743
    ****************/                                                                                                 // 2744
                                                                                                                      // 2745
    var range_type = 'input[type=range]';                                                                             // 2746
    var range_mousedown = false;                                                                                      // 2747
    var left;                                                                                                         // 2748
                                                                                                                      // 2749
    $(range_type).each(function () {                                                                                  // 2750
      var thumb = $('<span class="thumb"><span class="value"></span></span>');                                        // 2751
      $(this).after(thumb);                                                                                           // 2752
    });                                                                                                               // 2753
                                                                                                                      // 2754
    var range_wrapper = '.range-field';                                                                               // 2755
    $(document).on('change', range_type, function(e) {                                                                // 2756
      var thumb = $(this).siblings('.thumb');                                                                         // 2757
      thumb.find('.value').html($(this).val());                                                                       // 2758
    });                                                                                                               // 2759
                                                                                                                      // 2760
    $(document).on('input mousedown touchstart', range_type, function(e) {                                            // 2761
      var thumb = $(this).siblings('.thumb');                                                                         // 2762
      var width = $(this).outerWidth();                                                                               // 2763
                                                                                                                      // 2764
      // If thumb indicator does not exist yet, create it                                                             // 2765
      if (thumb.length <= 0) {                                                                                        // 2766
        thumb = $('<span class="thumb"><span class="value"></span></span>');                                          // 2767
        $(this).after(thumb);                                                                                         // 2768
      }                                                                                                               // 2769
                                                                                                                      // 2770
      // Set indicator value                                                                                          // 2771
      thumb.find('.value').html($(this).val());                                                                       // 2772
                                                                                                                      // 2773
      range_mousedown = true;                                                                                         // 2774
      $(this).addClass('active');                                                                                     // 2775
                                                                                                                      // 2776
      if (!thumb.hasClass('active')) {                                                                                // 2777
        thumb.velocity({ height: "30px", width: "30px", top: "-20px", marginLeft: "-15px"}, { duration: 300, easing: 'easeOutExpo' });
      }                                                                                                               // 2779
                                                                                                                      // 2780
      if (e.type !== 'input') {                                                                                       // 2781
        if(e.pageX === undefined || e.pageX === null){//mobile                                                        // 2782
           left = e.originalEvent.touches[0].pageX - $(this).offset().left;                                           // 2783
        }                                                                                                             // 2784
        else{ // desktop                                                                                              // 2785
           left = e.pageX - $(this).offset().left;                                                                    // 2786
        }                                                                                                             // 2787
        if (left < 0) {                                                                                               // 2788
          left = 0;                                                                                                   // 2789
        }                                                                                                             // 2790
        else if (left > width) {                                                                                      // 2791
          left = width;                                                                                               // 2792
        }                                                                                                             // 2793
        thumb.addClass('active').css('left', left);                                                                   // 2794
      }                                                                                                               // 2795
                                                                                                                      // 2796
      thumb.find('.value').html($(this).val());                                                                       // 2797
    });                                                                                                               // 2798
                                                                                                                      // 2799
    $(document).on('mouseup touchend', range_wrapper, function() {                                                    // 2800
      range_mousedown = false;                                                                                        // 2801
      $(this).removeClass('active');                                                                                  // 2802
    });                                                                                                               // 2803
                                                                                                                      // 2804
    $(document).on('mousemove touchmove', range_wrapper, function(e) {                                                // 2805
      var thumb = $(this).children('.thumb');                                                                         // 2806
      var left;                                                                                                       // 2807
      if (range_mousedown) {                                                                                          // 2808
        if (!thumb.hasClass('active')) {                                                                              // 2809
          thumb.velocity({ height: '30px', width: '30px', top: '-20px', marginLeft: '-15px'}, { duration: 300, easing: 'easeOutExpo' });
        }                                                                                                             // 2811
        if (e.pageX === undefined || e.pageX === null) { //mobile                                                     // 2812
          left = e.originalEvent.touches[0].pageX - $(this).offset().left;                                            // 2813
        }                                                                                                             // 2814
        else{ // desktop                                                                                              // 2815
          left = e.pageX - $(this).offset().left;                                                                     // 2816
        }                                                                                                             // 2817
        var width = $(this).outerWidth();                                                                             // 2818
                                                                                                                      // 2819
        if (left < 0) {                                                                                               // 2820
          left = 0;                                                                                                   // 2821
        }                                                                                                             // 2822
        else if (left > width) {                                                                                      // 2823
          left = width;                                                                                               // 2824
        }                                                                                                             // 2825
        thumb.addClass('active').css('left', left);                                                                   // 2826
        thumb.find('.value').html(thumb.siblings(range_type).val());                                                  // 2827
      }                                                                                                               // 2828
    });                                                                                                               // 2829
                                                                                                                      // 2830
    $(document).on('mouseout touchleave', range_wrapper, function() {                                                 // 2831
      if (!range_mousedown) {                                                                                         // 2832
                                                                                                                      // 2833
        var thumb = $(this).children('.thumb');                                                                       // 2834
                                                                                                                      // 2835
        if (thumb.hasClass('active')) {                                                                               // 2836
          thumb.velocity({ height: '0', width: '0', top: '10px', marginLeft: '-6px'}, { duration: 100 });             // 2837
        }                                                                                                             // 2838
        thumb.removeClass('active');                                                                                  // 2839
      }                                                                                                               // 2840
    });                                                                                                               // 2841
  }); // End of $(document).ready                                                                                     // 2842
                                                                                                                      // 2843
  /*******************                                                                                                // 2844
   *  Select Plugin  *                                                                                                // 2845
   ******************/                                                                                                // 2846
  $.fn.material_select = function (callback) {                                                                        // 2847
    $(this).each(function(){                                                                                          // 2848
      var $select = $(this);                                                                                          // 2849
                                                                                                                      // 2850
      if ($select.hasClass('browser-default')) {                                                                      // 2851
        return; // Continue to next (return false breaks out of entire loop)                                          // 2852
      }                                                                                                               // 2853
                                                                                                                      // 2854
      var multiple = $select.attr('multiple') ? true : false,                                                         // 2855
          lastID = $select.data('select-id'); // Tear down structure if Select needs to be rebuilt                    // 2856
                                                                                                                      // 2857
      if (lastID) {                                                                                                   // 2858
        $select.parent().find('span.caret').remove();                                                                 // 2859
        $select.parent().find('input').remove();                                                                      // 2860
                                                                                                                      // 2861
        $select.unwrap();                                                                                             // 2862
        $('ul#select-options-'+lastID).remove();                                                                      // 2863
      }                                                                                                               // 2864
                                                                                                                      // 2865
      // If destroying the select, remove the selelct-id and reset it to it's uninitialized state.                    // 2866
      if(callback === 'destroy') {                                                                                    // 2867
        $select.data('select-id', null).removeClass('initialized');                                                   // 2868
        return;                                                                                                       // 2869
      }                                                                                                               // 2870
                                                                                                                      // 2871
      var uniqueID = Materialize.guid();                                                                              // 2872
      $select.data('select-id', uniqueID);                                                                            // 2873
      var wrapper = $('<div class="select-wrapper"></div>');                                                          // 2874
      wrapper.addClass($select.attr('class'));                                                                        // 2875
      var options = $('<ul id="select-options-' + uniqueID +'" class="dropdown-content select-dropdown ' + (multiple ? 'multiple-select-dropdown' : '') + '"></ul>'),
          selectChildren = $select.children('option, optgroup'),                                                      // 2877
          valuesSelected = [],                                                                                        // 2878
          optionsHover = false;                                                                                       // 2879
                                                                                                                      // 2880
      var label = $select.find('option:selected').html() || $select.find('option:first').html() || "";                // 2881
                                                                                                                      // 2882
      // Function that renders and appends the option taking into                                                     // 2883
      // account type and possible image icon.                                                                        // 2884
      var appendOptionWithIcon = function(select, option, type) {                                                     // 2885
        // Add disabled attr if disabled                                                                              // 2886
        var disabledClass = (option.is(':disabled')) ? 'disabled ' : '';                                              // 2887
                                                                                                                      // 2888
        // add icons                                                                                                  // 2889
        var icon_url = option.data('icon');                                                                           // 2890
        var classes = option.attr('class');                                                                           // 2891
        if (!!icon_url) {                                                                                             // 2892
          var classString = '';                                                                                       // 2893
          if (!!classes) classString = ' class="' + classes + '"';                                                    // 2894
                                                                                                                      // 2895
          // Check for multiple type.                                                                                 // 2896
          if (type === 'multiple') {                                                                                  // 2897
            options.append($('<li class="' + disabledClass + '"><img src="' + icon_url + '"' + classString + '><span><input type="checkbox"' + disabledClass + '/><label></label>' + option.html() + '</span></li>'));
          } else {                                                                                                    // 2899
            options.append($('<li class="' + disabledClass + '"><img src="' + icon_url + '"' + classString + '><span>' + option.html() + '</span></li>'));
          }                                                                                                           // 2901
          return true;                                                                                                // 2902
        }                                                                                                             // 2903
                                                                                                                      // 2904
        // Check for multiple type.                                                                                   // 2905
        if (type === 'multiple') {                                                                                    // 2906
          options.append($('<li class="' + disabledClass + '"><span><input type="checkbox"' + disabledClass + '/><label></label>' + option.html() + '</span></li>'));
        } else {                                                                                                      // 2908
          options.append($('<li class="' + disabledClass + '"><span>' + option.html() + '</span></li>'));             // 2909
        }                                                                                                             // 2910
      };                                                                                                              // 2911
                                                                                                                      // 2912
      /* Create dropdown structure. */                                                                                // 2913
      if (selectChildren.length) {                                                                                    // 2914
        selectChildren.each(function() {                                                                              // 2915
          if ($(this).is('option')) {                                                                                 // 2916
            // Direct descendant option.                                                                              // 2917
            if (multiple) {                                                                                           // 2918
              appendOptionWithIcon($select, $(this), 'multiple');                                                     // 2919
                                                                                                                      // 2920
            } else {                                                                                                  // 2921
              appendOptionWithIcon($select, $(this));                                                                 // 2922
            }                                                                                                         // 2923
          } else if ($(this).is('optgroup')) {                                                                        // 2924
            // Optgroup.                                                                                              // 2925
            var selectOptions = $(this).children('option');                                                           // 2926
            options.append($('<li class="optgroup"><span>' + $(this).attr('label') + '</span></li>'));                // 2927
                                                                                                                      // 2928
            selectOptions.each(function() {                                                                           // 2929
              appendOptionWithIcon($select, $(this));                                                                 // 2930
            });                                                                                                       // 2931
          }                                                                                                           // 2932
        });                                                                                                           // 2933
      }                                                                                                               // 2934
                                                                                                                      // 2935
      options.find('li:not(.optgroup)').each(function (i) {                                                           // 2936
        $(this).click(function (e) {                                                                                  // 2937
          // Check if option element is disabled                                                                      // 2938
          if (!$(this).hasClass('disabled') && !$(this).hasClass('optgroup')) {                                       // 2939
            var selected = true;                                                                                      // 2940
                                                                                                                      // 2941
            if (multiple) {                                                                                           // 2942
              $('input[type="checkbox"]', this).prop('checked', function(i, v) { return !v; });                       // 2943
              selected = toggleEntryFromArray(valuesSelected, $(this).index(), $select);                              // 2944
              $newSelect.trigger('focus');                                                                            // 2945
            } else {                                                                                                  // 2946
              options.find('li').removeClass('active');                                                               // 2947
              $(this).toggleClass('active');                                                                          // 2948
              $newSelect.val($(this).text());                                                                         // 2949
            }                                                                                                         // 2950
                                                                                                                      // 2951
            activateOption(options, $(this));                                                                         // 2952
            $select.find('option').eq(i).prop('selected', selected);                                                  // 2953
            // Trigger onchange() event                                                                               // 2954
            $select.trigger('change');                                                                                // 2955
            if (typeof callback !== 'undefined') callback();                                                          // 2956
          }                                                                                                           // 2957
                                                                                                                      // 2958
          e.stopPropagation();                                                                                        // 2959
        });                                                                                                           // 2960
      });                                                                                                             // 2961
                                                                                                                      // 2962
      // Wrap Elements                                                                                                // 2963
      $select.wrap(wrapper);                                                                                          // 2964
      // Add Select Display Element                                                                                   // 2965
      var dropdownIcon = $('<span class="caret">&#9660;</span>');                                                     // 2966
      if ($select.is(':disabled'))                                                                                    // 2967
        dropdownIcon.addClass('disabled');                                                                            // 2968
                                                                                                                      // 2969
      // escape double quotes                                                                                         // 2970
      var sanitizedLabelHtml = label.replace(/"/g, '&quot;');                                                         // 2971
                                                                                                                      // 2972
      var $newSelect = $('<input type="text" class="select-dropdown" readonly="true" ' + (($select.is(':disabled')) ? 'disabled' : '') + ' data-activates="select-options-' + uniqueID +'" value="'+ sanitizedLabelHtml +'"/>');
      $select.before($newSelect);                                                                                     // 2974
      $newSelect.before(dropdownIcon);                                                                                // 2975
                                                                                                                      // 2976
      $newSelect.after(options);                                                                                      // 2977
      // Check if section element is disabled                                                                         // 2978
      if (!$select.is(':disabled')) {                                                                                 // 2979
        $newSelect.dropdown({'hover': false, 'closeOnClick': false});                                                 // 2980
      }                                                                                                               // 2981
                                                                                                                      // 2982
      // Copy tabindex                                                                                                // 2983
      if ($select.attr('tabindex')) {                                                                                 // 2984
        $($newSelect[0]).attr('tabindex', $select.attr('tabindex'));                                                  // 2985
      }                                                                                                               // 2986
                                                                                                                      // 2987
      $select.addClass('initialized');                                                                                // 2988
                                                                                                                      // 2989
      $newSelect.on({                                                                                                 // 2990
        'focus': function (){                                                                                         // 2991
          if ($('ul.select-dropdown').not(options[0]).is(':visible')) {                                               // 2992
            $('input.select-dropdown').trigger('close');                                                              // 2993
          }                                                                                                           // 2994
          if (!options.is(':visible')) {                                                                              // 2995
            $(this).trigger('open', ['focus']);                                                                       // 2996
            var label = $(this).val();                                                                                // 2997
            var selectedOption = options.find('li').filter(function() {                                               // 2998
              return $(this).text().toLowerCase() === label.toLowerCase();                                            // 2999
            })[0];                                                                                                    // 3000
            activateOption(options, selectedOption);                                                                  // 3001
          }                                                                                                           // 3002
        },                                                                                                            // 3003
        'click': function (e){                                                                                        // 3004
          e.stopPropagation();                                                                                        // 3005
        }                                                                                                             // 3006
      });                                                                                                             // 3007
                                                                                                                      // 3008
      $newSelect.on('blur', function() {                                                                              // 3009
        if (!multiple) {                                                                                              // 3010
          $(this).trigger('close');                                                                                   // 3011
        }                                                                                                             // 3012
        options.find('li.selected').removeClass('selected');                                                          // 3013
      });                                                                                                             // 3014
                                                                                                                      // 3015
      options.hover(function() {                                                                                      // 3016
        optionsHover = true;                                                                                          // 3017
      }, function () {                                                                                                // 3018
        optionsHover = false;                                                                                         // 3019
      });                                                                                                             // 3020
                                                                                                                      // 3021
      $(window).on({                                                                                                  // 3022
        'click': function () {                                                                                        // 3023
          multiple && (optionsHover || $newSelect.trigger('close'));                                                  // 3024
        }                                                                                                             // 3025
      });                                                                                                             // 3026
                                                                                                                      // 3027
      // Add initial multiple selections.                                                                             // 3028
      if (multiple) {                                                                                                 // 3029
        $select.find("option:selected:not(:disabled)").each(function () {                                             // 3030
          var index = $(this).index();                                                                                // 3031
                                                                                                                      // 3032
          toggleEntryFromArray(valuesSelected, index, $select);                                                       // 3033
          options.find("li").eq(index).find(":checkbox").prop("checked", true);                                       // 3034
        });                                                                                                           // 3035
      }                                                                                                               // 3036
                                                                                                                      // 3037
      // Make option as selected and scroll to selected position                                                      // 3038
      activateOption = function(collection, newOption) {                                                              // 3039
        if (newOption) {                                                                                              // 3040
          collection.find('li.selected').removeClass('selected');                                                     // 3041
          var option = $(newOption);                                                                                  // 3042
          option.addClass('selected');                                                                                // 3043
          options.scrollTo(option);                                                                                   // 3044
        }                                                                                                             // 3045
      };                                                                                                              // 3046
                                                                                                                      // 3047
      // Allow user to search by typing                                                                               // 3048
      // this array is cleared after 1 second                                                                         // 3049
      var filterQuery = [],                                                                                           // 3050
          onKeyDown = function(e){                                                                                    // 3051
            // TAB - switch to another input                                                                          // 3052
            if(e.which == 9){                                                                                         // 3053
              $newSelect.trigger('close');                                                                            // 3054
              return;                                                                                                 // 3055
            }                                                                                                         // 3056
                                                                                                                      // 3057
            // ARROW DOWN WHEN SELECT IS CLOSED - open select options                                                 // 3058
            if(e.which == 40 && !options.is(':visible')){                                                             // 3059
              $newSelect.trigger('open');                                                                             // 3060
              return;                                                                                                 // 3061
            }                                                                                                         // 3062
                                                                                                                      // 3063
            // ENTER WHEN SELECT IS CLOSED - submit form                                                              // 3064
            if(e.which == 13 && !options.is(':visible')){                                                             // 3065
              return;                                                                                                 // 3066
            }                                                                                                         // 3067
                                                                                                                      // 3068
            e.preventDefault();                                                                                       // 3069
                                                                                                                      // 3070
            // CASE WHEN USER TYPE LETTERS                                                                            // 3071
            var letter = String.fromCharCode(e.which).toLowerCase(),                                                  // 3072
                nonLetters = [9,13,27,38,40];                                                                         // 3073
            if (letter && (nonLetters.indexOf(e.which) === -1)) {                                                     // 3074
              filterQuery.push(letter);                                                                               // 3075
                                                                                                                      // 3076
              var string = filterQuery.join(''),                                                                      // 3077
                  newOption = options.find('li').filter(function() {                                                  // 3078
                    return $(this).text().toLowerCase().indexOf(string) === 0;                                        // 3079
                  })[0];                                                                                              // 3080
                                                                                                                      // 3081
              if (newOption) {                                                                                        // 3082
                activateOption(options, newOption);                                                                   // 3083
              }                                                                                                       // 3084
            }                                                                                                         // 3085
                                                                                                                      // 3086
            // ENTER - select option and close when select options are opened                                         // 3087
            if (e.which == 13) {                                                                                      // 3088
              var activeOption = options.find('li.selected:not(.disabled)')[0];                                       // 3089
              if(activeOption){                                                                                       // 3090
                $(activeOption).trigger('click');                                                                     // 3091
                if (!multiple) {                                                                                      // 3092
                  $newSelect.trigger('close');                                                                        // 3093
                }                                                                                                     // 3094
              }                                                                                                       // 3095
            }                                                                                                         // 3096
                                                                                                                      // 3097
            // ARROW DOWN - move to next not disabled option                                                          // 3098
            if (e.which == 40) {                                                                                      // 3099
              if (options.find('li.selected').length) {                                                               // 3100
                newOption = options.find('li.selected').next('li:not(.disabled)')[0];                                 // 3101
              } else {                                                                                                // 3102
                newOption = options.find('li:not(.disabled)')[0];                                                     // 3103
              }                                                                                                       // 3104
              activateOption(options, newOption);                                                                     // 3105
            }                                                                                                         // 3106
                                                                                                                      // 3107
            // ESC - close options                                                                                    // 3108
            if (e.which == 27) {                                                                                      // 3109
              $newSelect.trigger('close');                                                                            // 3110
            }                                                                                                         // 3111
                                                                                                                      // 3112
            // ARROW UP - move to previous not disabled option                                                        // 3113
            if (e.which == 38) {                                                                                      // 3114
              newOption = options.find('li.selected').prev('li:not(.disabled)')[0];                                   // 3115
              if(newOption)                                                                                           // 3116
                activateOption(options, newOption);                                                                   // 3117
            }                                                                                                         // 3118
                                                                                                                      // 3119
            // Automaticaly clean filter query so user can search again by starting letters                           // 3120
            setTimeout(function(){ filterQuery = []; }, 1000);                                                        // 3121
          };                                                                                                          // 3122
                                                                                                                      // 3123
      $newSelect.on('keydown', onKeyDown);                                                                            // 3124
    });                                                                                                               // 3125
                                                                                                                      // 3126
    function toggleEntryFromArray(entriesArray, entryIndex, select) {                                                 // 3127
      var index = entriesArray.indexOf(entryIndex),                                                                   // 3128
          notAdded = index === -1;                                                                                    // 3129
                                                                                                                      // 3130
      if (notAdded) {                                                                                                 // 3131
        entriesArray.push(entryIndex);                                                                                // 3132
      } else {                                                                                                        // 3133
        entriesArray.splice(index, 1);                                                                                // 3134
      }                                                                                                               // 3135
                                                                                                                      // 3136
      select.siblings('ul.dropdown-content').find('li').eq(entryIndex).toggleClass('active');                         // 3137
                                                                                                                      // 3138
      // use notAdded instead of true (to detect if the option is selected or not)                                    // 3139
      select.find('option').eq(entryIndex).prop('selected', notAdded);                                                // 3140
      setValueToInput(entriesArray, select);                                                                          // 3141
                                                                                                                      // 3142
      return notAdded;                                                                                                // 3143
    }                                                                                                                 // 3144
                                                                                                                      // 3145
    function setValueToInput(entriesArray, select) {                                                                  // 3146
      var value = '';                                                                                                 // 3147
                                                                                                                      // 3148
      for (var i = 0, count = entriesArray.length; i < count; i++) {                                                  // 3149
        var text = select.find('option').eq(entriesArray[i]).text();                                                  // 3150
                                                                                                                      // 3151
        i === 0 ? value += text : value += ', ' + text;                                                               // 3152
      }                                                                                                               // 3153
                                                                                                                      // 3154
      if (value === '') {                                                                                             // 3155
        value = select.find('option:disabled').eq(0).text();                                                          // 3156
      }                                                                                                               // 3157
                                                                                                                      // 3158
      select.siblings('input.select-dropdown').val(value);                                                            // 3159
    }                                                                                                                 // 3160
  };                                                                                                                  // 3161
                                                                                                                      // 3162
}( jQuery ));                                                                                                         // 3163
;(function ($) {                                                                                                      // 3164
                                                                                                                      // 3165
  var methods = {                                                                                                     // 3166
                                                                                                                      // 3167
    init : function(options) {                                                                                        // 3168
      var defaults = {                                                                                                // 3169
        indicators: true,                                                                                             // 3170
        height: 400,                                                                                                  // 3171
        transition: 500,                                                                                              // 3172
        interval: 6000                                                                                                // 3173
      };                                                                                                              // 3174
      options = $.extend(defaults, options);                                                                          // 3175
                                                                                                                      // 3176
      return this.each(function() {                                                                                   // 3177
                                                                                                                      // 3178
        // For each slider, we want to keep track of                                                                  // 3179
        // which slide is active and its associated content                                                           // 3180
        var $this = $(this);                                                                                          // 3181
        var $slider = $this.find('ul.slides').first();                                                                // 3182
        var $slides = $slider.find('li');                                                                             // 3183
        var $active_index = $slider.find('.active').index();                                                          // 3184
        var $active, $indicators, $interval;                                                                          // 3185
        if ($active_index != -1) { $active = $slides.eq($active_index); }                                             // 3186
                                                                                                                      // 3187
        // Transitions the caption depending on alignment                                                             // 3188
        function captionTransition(caption, duration) {                                                               // 3189
          if (caption.hasClass("center-align")) {                                                                     // 3190
            caption.velocity({opacity: 0, translateY: -100}, {duration: duration, queue: false});                     // 3191
          }                                                                                                           // 3192
          else if (caption.hasClass("right-align")) {                                                                 // 3193
            caption.velocity({opacity: 0, translateX: 100}, {duration: duration, queue: false});                      // 3194
          }                                                                                                           // 3195
          else if (caption.hasClass("left-align")) {                                                                  // 3196
            caption.velocity({opacity: 0, translateX: -100}, {duration: duration, queue: false});                     // 3197
          }                                                                                                           // 3198
        }                                                                                                             // 3199
                                                                                                                      // 3200
        // This function will transition the slide to any index of the next slide                                     // 3201
        function moveToSlide(index) {                                                                                 // 3202
          // Wrap around indices.                                                                                     // 3203
          if (index >= $slides.length) index = 0;                                                                     // 3204
          else if (index < 0) index = $slides.length -1;                                                              // 3205
                                                                                                                      // 3206
          $active_index = $slider.find('.active').index();                                                            // 3207
                                                                                                                      // 3208
          // Only do if index changes                                                                                 // 3209
          if ($active_index != index) {                                                                               // 3210
            $active = $slides.eq($active_index);                                                                      // 3211
            $caption = $active.find('.caption');                                                                      // 3212
                                                                                                                      // 3213
            $active.removeClass('active');                                                                            // 3214
            $active.velocity({opacity: 0}, {duration: options.transition, queue: false, easing: 'easeOutQuad',        // 3215
                              complete: function() {                                                                  // 3216
                                $slides.not('.active').velocity({opacity: 0, translateX: 0, translateY: 0}, {duration: 0, queue: false});
                              } });                                                                                   // 3218
            captionTransition($caption, options.transition);                                                          // 3219
                                                                                                                      // 3220
                                                                                                                      // 3221
            // Update indicators                                                                                      // 3222
            if (options.indicators) {                                                                                 // 3223
              $indicators.eq($active_index).removeClass('active');                                                    // 3224
            }                                                                                                         // 3225
                                                                                                                      // 3226
            $slides.eq(index).velocity({opacity: 1}, {duration: options.transition, queue: false, easing: 'easeOutQuad'});
            $slides.eq(index).find('.caption').velocity({opacity: 1, translateX: 0, translateY: 0}, {duration: options.transition, delay: options.transition, queue: false, easing: 'easeOutQuad'});
            $slides.eq(index).addClass('active');                                                                     // 3229
                                                                                                                      // 3230
                                                                                                                      // 3231
            // Update indicators                                                                                      // 3232
            if (options.indicators) {                                                                                 // 3233
              $indicators.eq(index).addClass('active');                                                               // 3234
            }                                                                                                         // 3235
          }                                                                                                           // 3236
        }                                                                                                             // 3237
                                                                                                                      // 3238
        // Set height of slider                                                                                       // 3239
        // If fullscreen, do nothing                                                                                  // 3240
        if (!$this.hasClass('fullscreen')) {                                                                          // 3241
          if (options.indicators) {                                                                                   // 3242
            // Add height if indicators are present                                                                   // 3243
            $this.height(options.height + 40);                                                                        // 3244
          }                                                                                                           // 3245
          else {                                                                                                      // 3246
            $this.height(options.height);                                                                             // 3247
          }                                                                                                           // 3248
          $slider.height(options.height);                                                                             // 3249
        }                                                                                                             // 3250
                                                                                                                      // 3251
                                                                                                                      // 3252
        // Set initial positions of captions                                                                          // 3253
        $slides.find('.caption').each(function () {                                                                   // 3254
          captionTransition($(this), 0);                                                                              // 3255
        });                                                                                                           // 3256
                                                                                                                      // 3257
        // Move img src into background-image                                                                         // 3258
        $slides.find('img').each(function () {                                                                        // 3259
          var placeholderBase64 = 'data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
          if ($(this).attr('src') !== placeholderBase64) {                                                            // 3261
            $(this).css('background-image', 'url(' + $(this).attr('src') + ')' );                                     // 3262
            $(this).attr('src', placeholderBase64);                                                                   // 3263
          }                                                                                                           // 3264
        });                                                                                                           // 3265
                                                                                                                      // 3266
        // dynamically add indicators                                                                                 // 3267
        if (options.indicators) {                                                                                     // 3268
          $indicators = $('<ul class="indicators"></ul>');                                                            // 3269
          $slides.each(function( index ) {                                                                            // 3270
            var $indicator = $('<li class="indicator-item"></li>');                                                   // 3271
                                                                                                                      // 3272
            // Handle clicks on indicators                                                                            // 3273
            $indicator.click(function () {                                                                            // 3274
              var $parent = $slider.parent();                                                                         // 3275
              var curr_index = $parent.find($(this)).index();                                                         // 3276
              moveToSlide(curr_index);                                                                                // 3277
                                                                                                                      // 3278
              // reset interval                                                                                       // 3279
              clearInterval($interval);                                                                               // 3280
              $interval = setInterval(                                                                                // 3281
                function(){                                                                                           // 3282
                  $active_index = $slider.find('.active').index();                                                    // 3283
                  if ($slides.length == $active_index + 1) $active_index = 0; // loop to start                        // 3284
                  else $active_index += 1;                                                                            // 3285
                                                                                                                      // 3286
                  moveToSlide($active_index);                                                                         // 3287
                                                                                                                      // 3288
                }, options.transition + options.interval                                                              // 3289
              );                                                                                                      // 3290
            });                                                                                                       // 3291
            $indicators.append($indicator);                                                                           // 3292
          });                                                                                                         // 3293
          $this.append($indicators);                                                                                  // 3294
          $indicators = $this.find('ul.indicators').find('li.indicator-item');                                        // 3295
        }                                                                                                             // 3296
                                                                                                                      // 3297
        if ($active) {                                                                                                // 3298
          $active.show();                                                                                             // 3299
        }                                                                                                             // 3300
        else {                                                                                                        // 3301
          $slides.first().addClass('active').velocity({opacity: 1}, {duration: options.transition, queue: false, easing: 'easeOutQuad'});
                                                                                                                      // 3303
          $active_index = 0;                                                                                          // 3304
          $active = $slides.eq($active_index);                                                                        // 3305
                                                                                                                      // 3306
          // Update indicators                                                                                        // 3307
          if (options.indicators) {                                                                                   // 3308
            $indicators.eq($active_index).addClass('active');                                                         // 3309
          }                                                                                                           // 3310
        }                                                                                                             // 3311
                                                                                                                      // 3312
        // Adjust height to current slide                                                                             // 3313
        $active.find('img').each(function() {                                                                         // 3314
          $active.find('.caption').velocity({opacity: 1, translateX: 0, translateY: 0}, {duration: options.transition, queue: false, easing: 'easeOutQuad'});
        });                                                                                                           // 3316
                                                                                                                      // 3317
        // auto scroll                                                                                                // 3318
        $interval = setInterval(                                                                                      // 3319
          function(){                                                                                                 // 3320
            $active_index = $slider.find('.active').index();                                                          // 3321
            moveToSlide($active_index + 1);                                                                           // 3322
                                                                                                                      // 3323
          }, options.transition + options.interval                                                                    // 3324
        );                                                                                                            // 3325
                                                                                                                      // 3326
                                                                                                                      // 3327
        // HammerJS, Swipe navigation                                                                                 // 3328
                                                                                                                      // 3329
        // Touch Event                                                                                                // 3330
        var panning = false;                                                                                          // 3331
        var swipeLeft = false;                                                                                        // 3332
        var swipeRight = false;                                                                                       // 3333
                                                                                                                      // 3334
        $this.hammer({                                                                                                // 3335
            prevent_default: false                                                                                    // 3336
        }).bind('pan', function(e) {                                                                                  // 3337
          if (e.gesture.pointerType === "touch") {                                                                    // 3338
                                                                                                                      // 3339
            // reset interval                                                                                         // 3340
            clearInterval($interval);                                                                                 // 3341
                                                                                                                      // 3342
            var direction = e.gesture.direction;                                                                      // 3343
            var x = e.gesture.deltaX;                                                                                 // 3344
            var velocityX = e.gesture.velocityX;                                                                      // 3345
                                                                                                                      // 3346
            $curr_slide = $slider.find('.active');                                                                    // 3347
            $curr_slide.velocity({ translateX: x                                                                      // 3348
                }, {duration: 50, queue: false, easing: 'easeOutQuad'});                                              // 3349
                                                                                                                      // 3350
            // Swipe Left                                                                                             // 3351
            if (direction === 4 && (x > ($this.innerWidth() / 2) || velocityX < -0.65)) {                             // 3352
              swipeRight = true;                                                                                      // 3353
            }                                                                                                         // 3354
            // Swipe Right                                                                                            // 3355
            else if (direction === 2 && (x < (-1 * $this.innerWidth() / 2) || velocityX > 0.65)) {                    // 3356
              swipeLeft = true;                                                                                       // 3357
            }                                                                                                         // 3358
                                                                                                                      // 3359
            // Make Slide Behind active slide visible                                                                 // 3360
            var next_slide;                                                                                           // 3361
            if (swipeLeft) {                                                                                          // 3362
              next_slide = $curr_slide.next();                                                                        // 3363
              if (next_slide.length === 0) {                                                                          // 3364
                next_slide = $slides.first();                                                                         // 3365
              }                                                                                                       // 3366
              next_slide.velocity({ opacity: 1                                                                        // 3367
                  }, {duration: 300, queue: false, easing: 'easeOutQuad'});                                           // 3368
            }                                                                                                         // 3369
            if (swipeRight) {                                                                                         // 3370
              next_slide = $curr_slide.prev();                                                                        // 3371
              if (next_slide.length === 0) {                                                                          // 3372
                next_slide = $slides.last();                                                                          // 3373
              }                                                                                                       // 3374
              next_slide.velocity({ opacity: 1                                                                        // 3375
                  }, {duration: 300, queue: false, easing: 'easeOutQuad'});                                           // 3376
            }                                                                                                         // 3377
                                                                                                                      // 3378
                                                                                                                      // 3379
          }                                                                                                           // 3380
                                                                                                                      // 3381
        }).bind('panend', function(e) {                                                                               // 3382
          if (e.gesture.pointerType === "touch") {                                                                    // 3383
                                                                                                                      // 3384
            $curr_slide = $slider.find('.active');                                                                    // 3385
            panning = false;                                                                                          // 3386
            curr_index = $slider.find('.active').index();                                                             // 3387
                                                                                                                      // 3388
            if (!swipeRight && !swipeLeft) {                                                                          // 3389
              // Return to original spot                                                                              // 3390
              $curr_slide.velocity({ translateX: 0                                                                    // 3391
                  }, {duration: 300, queue: false, easing: 'easeOutQuad'});                                           // 3392
            }                                                                                                         // 3393
            else if (swipeLeft) {                                                                                     // 3394
              moveToSlide(curr_index + 1);                                                                            // 3395
              $curr_slide.velocity({translateX: -1 * $this.innerWidth() }, {duration: 300, queue: false, easing: 'easeOutQuad',
                                    complete: function() {                                                            // 3397
                                      $curr_slide.velocity({opacity: 0, translateX: 0}, {duration: 0, queue: false});
                                    } });                                                                             // 3399
            }                                                                                                         // 3400
            else if (swipeRight) {                                                                                    // 3401
              moveToSlide(curr_index - 1);                                                                            // 3402
              $curr_slide.velocity({translateX: $this.innerWidth() }, {duration: 300, queue: false, easing: 'easeOutQuad',
                                    complete: function() {                                                            // 3404
                                      $curr_slide.velocity({opacity: 0, translateX: 0}, {duration: 0, queue: false});
                                    } });                                                                             // 3406
            }                                                                                                         // 3407
            swipeLeft = false;                                                                                        // 3408
            swipeRight = false;                                                                                       // 3409
                                                                                                                      // 3410
            // Restart interval                                                                                       // 3411
            clearInterval($interval);                                                                                 // 3412
            $interval = setInterval(                                                                                  // 3413
              function(){                                                                                             // 3414
                $active_index = $slider.find('.active').index();                                                      // 3415
                if ($slides.length == $active_index + 1) $active_index = 0; // loop to start                          // 3416
                else $active_index += 1;                                                                              // 3417
                                                                                                                      // 3418
                moveToSlide($active_index);                                                                           // 3419
                                                                                                                      // 3420
              }, options.transition + options.interval                                                                // 3421
            );                                                                                                        // 3422
          }                                                                                                           // 3423
        });                                                                                                           // 3424
                                                                                                                      // 3425
        $this.on('sliderPause', function() {                                                                          // 3426
          clearInterval($interval);                                                                                   // 3427
        });                                                                                                           // 3428
                                                                                                                      // 3429
        $this.on('sliderStart', function() {                                                                          // 3430
          clearInterval($interval);                                                                                   // 3431
          $interval = setInterval(                                                                                    // 3432
            function(){                                                                                               // 3433
              $active_index = $slider.find('.active').index();                                                        // 3434
              if ($slides.length == $active_index + 1) $active_index = 0; // loop to start                            // 3435
              else $active_index += 1;                                                                                // 3436
                                                                                                                      // 3437
              moveToSlide($active_index);                                                                             // 3438
                                                                                                                      // 3439
            }, options.transition + options.interval                                                                  // 3440
          );                                                                                                          // 3441
        });                                                                                                           // 3442
                                                                                                                      // 3443
        $this.on('sliderNext', function() {                                                                           // 3444
          $active_index = $slider.find('.active').index();                                                            // 3445
          moveToSlide($active_index + 1);                                                                             // 3446
        });                                                                                                           // 3447
                                                                                                                      // 3448
        $this.on('sliderPrev', function() {                                                                           // 3449
          $active_index = $slider.find('.active').index();                                                            // 3450
          moveToSlide($active_index - 1);                                                                             // 3451
        });                                                                                                           // 3452
                                                                                                                      // 3453
      });                                                                                                             // 3454
                                                                                                                      // 3455
                                                                                                                      // 3456
                                                                                                                      // 3457
    },                                                                                                                // 3458
    pause : function() {                                                                                              // 3459
      $(this).trigger('sliderPause');                                                                                 // 3460
    },                                                                                                                // 3461
    start : function() {                                                                                              // 3462
      $(this).trigger('sliderStart');                                                                                 // 3463
    },                                                                                                                // 3464
    next : function() {                                                                                               // 3465
      $(this).trigger('sliderNext');                                                                                  // 3466
    },                                                                                                                // 3467
    prev : function() {                                                                                               // 3468
      $(this).trigger('sliderPrev');                                                                                  // 3469
    }                                                                                                                 // 3470
  };                                                                                                                  // 3471
                                                                                                                      // 3472
                                                                                                                      // 3473
    $.fn.slider = function(methodOrOptions) {                                                                         // 3474
      if ( methods[methodOrOptions] ) {                                                                               // 3475
        return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));                   // 3476
      } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {                                        // 3477
        // Default to "init"                                                                                          // 3478
        return methods.init.apply( this, arguments );                                                                 // 3479
      } else {                                                                                                        // 3480
        $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.tooltip' );                                // 3481
      }                                                                                                               // 3482
    }; // Plugin end                                                                                                  // 3483
}( jQuery ));;(function ($) {                                                                                         // 3484
  $(document).ready(function() {                                                                                      // 3485
                                                                                                                      // 3486
    $(document).on('click.card', '.card', function (e) {                                                              // 3487
      if ($(this).find('> .card-reveal').length) {                                                                    // 3488
        if ($(e.target).is($('.card-reveal .card-title')) || $(e.target).is($('.card-reveal .card-title i'))) {       // 3489
          // Make Reveal animate down and display none                                                                // 3490
          $(this).find('.card-reveal').velocity(                                                                      // 3491
            {translateY: 0}, {                                                                                        // 3492
              duration: 225,                                                                                          // 3493
              queue: false,                                                                                           // 3494
              easing: 'easeInOutQuad',                                                                                // 3495
              complete: function() { $(this).css({ display: 'none'}); }                                               // 3496
            }                                                                                                         // 3497
          );                                                                                                          // 3498
        }                                                                                                             // 3499
        else if ($(e.target).is($('.card .activator')) ||                                                             // 3500
                 $(e.target).is($('.card .activator i')) ) {                                                          // 3501
          $(e.target).closest('.card').css('overflow', 'hidden');                                                     // 3502
          $(this).find('.card-reveal').css({ display: 'block'}).velocity("stop", false).velocity({translateY: '-100%'}, {duration: 300, queue: false, easing: 'easeInOutQuad'});
        }                                                                                                             // 3504
      }                                                                                                               // 3505
                                                                                                                      // 3506
      $('.card-reveal').closest('.card').css('overflow', 'hidden');                                                   // 3507
                                                                                                                      // 3508
    });                                                                                                               // 3509
                                                                                                                      // 3510
  });                                                                                                                 // 3511
}( jQuery ));;(function ($) {                                                                                         // 3512
  $(document).ready(function() {                                                                                      // 3513
                                                                                                                      // 3514
    $(document).on('click.chip', '.chip .material-icons', function (e) {                                              // 3515
      $(this).parent().remove();                                                                                      // 3516
    });                                                                                                               // 3517
                                                                                                                      // 3518
  });                                                                                                                 // 3519
}( jQuery ));;(function ($) {                                                                                         // 3520
  $(document).ready(function() {                                                                                      // 3521
                                                                                                                      // 3522
    $.fn.pushpin = function (options) {                                                                               // 3523
                                                                                                                      // 3524
      var defaults = {                                                                                                // 3525
        top: 0,                                                                                                       // 3526
        bottom: Infinity,                                                                                             // 3527
        offset: 0                                                                                                     // 3528
      }                                                                                                               // 3529
      options = $.extend(defaults, options);                                                                          // 3530
                                                                                                                      // 3531
      $index = 0;                                                                                                     // 3532
      return this.each(function() {                                                                                   // 3533
        var $uniqueId = Materialize.guid(),                                                                           // 3534
            $this = $(this),                                                                                          // 3535
            $original_offset = $(this).offset().top;                                                                  // 3536
                                                                                                                      // 3537
        function removePinClasses(object) {                                                                           // 3538
          object.removeClass('pin-top');                                                                              // 3539
          object.removeClass('pinned');                                                                               // 3540
          object.removeClass('pin-bottom');                                                                           // 3541
        }                                                                                                             // 3542
                                                                                                                      // 3543
        function updateElements(objects, scrolled) {                                                                  // 3544
          objects.each(function () {                                                                                  // 3545
            // Add position fixed (because its between top and bottom)                                                // 3546
            if (options.top <= scrolled && options.bottom >= scrolled && !$(this).hasClass('pinned')) {               // 3547
              removePinClasses($(this));                                                                              // 3548
              $(this).css('top', options.offset);                                                                     // 3549
              $(this).addClass('pinned');                                                                             // 3550
            }                                                                                                         // 3551
                                                                                                                      // 3552
            // Add pin-top (when scrolled position is above top)                                                      // 3553
            if (scrolled < options.top && !$(this).hasClass('pin-top')) {                                             // 3554
              removePinClasses($(this));                                                                              // 3555
              $(this).css('top', 0);                                                                                  // 3556
              $(this).addClass('pin-top');                                                                            // 3557
            }                                                                                                         // 3558
                                                                                                                      // 3559
            // Add pin-bottom (when scrolled position is below bottom)                                                // 3560
            if (scrolled > options.bottom && !$(this).hasClass('pin-bottom')) {                                       // 3561
              removePinClasses($(this));                                                                              // 3562
              $(this).addClass('pin-bottom');                                                                         // 3563
              $(this).css('top', options.bottom - $original_offset);                                                  // 3564
            }                                                                                                         // 3565
          });                                                                                                         // 3566
        }                                                                                                             // 3567
                                                                                                                      // 3568
        updateElements($this, $(window).scrollTop());                                                                 // 3569
        $(window).on('scroll.' + $uniqueId, function () {                                                             // 3570
          var $scrolled = $(window).scrollTop() + options.offset;                                                     // 3571
          updateElements($this, $scrolled);                                                                           // 3572
        });                                                                                                           // 3573
                                                                                                                      // 3574
      });                                                                                                             // 3575
                                                                                                                      // 3576
    };                                                                                                                // 3577
                                                                                                                      // 3578
                                                                                                                      // 3579
  });                                                                                                                 // 3580
}( jQuery ));;(function ($) {                                                                                         // 3581
  $(document).ready(function() {                                                                                      // 3582
                                                                                                                      // 3583
    // jQuery reverse                                                                                                 // 3584
    $.fn.reverse = [].reverse;                                                                                        // 3585
                                                                                                                      // 3586
    // Hover behaviour: make sure this doesn't work on .click-to-toggle FABs!                                         // 3587
    $(document).on('mouseenter.fixedActionBtn', '.fixed-action-btn:not(.click-to-toggle)', function(e) {              // 3588
      var $this = $(this);                                                                                            // 3589
      openFABMenu($this);                                                                                             // 3590
    });                                                                                                               // 3591
    $(document).on('mouseleave.fixedActionBtn', '.fixed-action-btn:not(.click-to-toggle)', function(e) {              // 3592
      var $this = $(this);                                                                                            // 3593
      closeFABMenu($this);                                                                                            // 3594
    });                                                                                                               // 3595
                                                                                                                      // 3596
    // Toggle-on-click behaviour.                                                                                     // 3597
    $(document).on('click.fixedActionBtn', '.fixed-action-btn.click-to-toggle > a', function(e) {                     // 3598
      var $this = $(this);                                                                                            // 3599
      var $menu = $this.parent();                                                                                     // 3600
      if ($menu.hasClass('active')) {                                                                                 // 3601
        closeFABMenu($menu);                                                                                          // 3602
      } else {                                                                                                        // 3603
        openFABMenu($menu);                                                                                           // 3604
      }                                                                                                               // 3605
    });                                                                                                               // 3606
                                                                                                                      // 3607
  });                                                                                                                 // 3608
                                                                                                                      // 3609
  $.fn.extend({                                                                                                       // 3610
    openFAB: function() {                                                                                             // 3611
      openFABMenu($(this));                                                                                           // 3612
    },                                                                                                                // 3613
    closeFAB: function() {                                                                                            // 3614
      closeFABMenu($(this));                                                                                          // 3615
    }                                                                                                                 // 3616
  });                                                                                                                 // 3617
                                                                                                                      // 3618
                                                                                                                      // 3619
  var openFABMenu = function (btn) {                                                                                  // 3620
    $this = btn;                                                                                                      // 3621
    if ($this.hasClass('active') === false) {                                                                         // 3622
                                                                                                                      // 3623
      // Get direction option                                                                                         // 3624
      var horizontal = $this.hasClass('horizontal');                                                                  // 3625
      var offsetY, offsetX;                                                                                           // 3626
                                                                                                                      // 3627
      if (horizontal === true) {                                                                                      // 3628
        offsetX = 40;                                                                                                 // 3629
      } else {                                                                                                        // 3630
        offsetY = 40;                                                                                                 // 3631
      }                                                                                                               // 3632
                                                                                                                      // 3633
      $this.addClass('active');                                                                                       // 3634
      $this.find('ul .btn-floating').velocity(                                                                        // 3635
        { scaleY: ".4", scaleX: ".4", translateY: offsetY + 'px', translateX: offsetX + 'px'},                        // 3636
        { duration: 0 });                                                                                             // 3637
                                                                                                                      // 3638
      var time = 0;                                                                                                   // 3639
      $this.find('ul .btn-floating').reverse().each( function () {                                                    // 3640
        $(this).velocity(                                                                                             // 3641
          { opacity: "1", scaleX: "1", scaleY: "1", translateY: "0", translateX: '0'},                                // 3642
          { duration: 80, delay: time });                                                                             // 3643
        time += 40;                                                                                                   // 3644
      });                                                                                                             // 3645
    }                                                                                                                 // 3646
  };                                                                                                                  // 3647
                                                                                                                      // 3648
  var closeFABMenu = function (btn) {                                                                                 // 3649
    $this = btn;                                                                                                      // 3650
    // Get direction option                                                                                           // 3651
    var horizontal = $this.hasClass('horizontal');                                                                    // 3652
    var offsetY, offsetX;                                                                                             // 3653
                                                                                                                      // 3654
    if (horizontal === true) {                                                                                        // 3655
      offsetX = 40;                                                                                                   // 3656
    } else {                                                                                                          // 3657
      offsetY = 40;                                                                                                   // 3658
    }                                                                                                                 // 3659
                                                                                                                      // 3660
    $this.removeClass('active');                                                                                      // 3661
    var time = 0;                                                                                                     // 3662
    $this.find('ul .btn-floating').velocity("stop", true);                                                            // 3663
    $this.find('ul .btn-floating').velocity(                                                                          // 3664
      { opacity: "0", scaleX: ".4", scaleY: ".4", translateY: offsetY + 'px', translateX: offsetX + 'px'},            // 3665
      { duration: 80 }                                                                                                // 3666
    );                                                                                                                // 3667
  };                                                                                                                  // 3668
                                                                                                                      // 3669
                                                                                                                      // 3670
}( jQuery ));                                                                                                         // 3671
;(function ($) {                                                                                                      // 3672
  // Image transition function                                                                                        // 3673
  Materialize.fadeInImage =  function(selector){                                                                      // 3674
    var element = $(selector);                                                                                        // 3675
    element.css({opacity: 0});                                                                                        // 3676
    $(element).velocity({opacity: 1}, {                                                                               // 3677
        duration: 650,                                                                                                // 3678
        queue: false,                                                                                                 // 3679
        easing: 'easeOutSine'                                                                                         // 3680
      });                                                                                                             // 3681
    $(element).velocity({opacity: 1}, {                                                                               // 3682
          duration: 1300,                                                                                             // 3683
          queue: false,                                                                                               // 3684
          easing: 'swing',                                                                                            // 3685
          step: function(now, fx) {                                                                                   // 3686
              fx.start = 100;                                                                                         // 3687
              var grayscale_setting = now/100;                                                                        // 3688
              var brightness_setting = 150 - (100 - now)/1.75;                                                        // 3689
                                                                                                                      // 3690
              if (brightness_setting < 100) {                                                                         // 3691
                brightness_setting = 100;                                                                             // 3692
              }                                                                                                       // 3693
              if (now >= 0) {                                                                                         // 3694
                $(this).css({                                                                                         // 3695
                    "-webkit-filter": "grayscale("+grayscale_setting+")" + "brightness("+brightness_setting+"%)",     // 3696
                    "filter": "grayscale("+grayscale_setting+")" + "brightness("+brightness_setting+"%)"              // 3697
                });                                                                                                   // 3698
              }                                                                                                       // 3699
          }                                                                                                           // 3700
      });                                                                                                             // 3701
  };                                                                                                                  // 3702
                                                                                                                      // 3703
  // Horizontal staggered list                                                                                        // 3704
  Materialize.showStaggeredList = function(selector) {                                                                // 3705
    var time = 0;                                                                                                     // 3706
    $(selector).find('li').velocity(                                                                                  // 3707
        { translateX: "-100px"},                                                                                      // 3708
        { duration: 0 });                                                                                             // 3709
                                                                                                                      // 3710
    $(selector).find('li').each(function() {                                                                          // 3711
      $(this).velocity(                                                                                               // 3712
        { opacity: "1", translateX: "0"},                                                                             // 3713
        { duration: 800, delay: time, easing: [60, 10] });                                                            // 3714
      time += 120;                                                                                                    // 3715
    });                                                                                                               // 3716
  };                                                                                                                  // 3717
                                                                                                                      // 3718
                                                                                                                      // 3719
  $(document).ready(function() {                                                                                      // 3720
    // Hardcoded .staggered-list scrollFire                                                                           // 3721
    // var staggeredListOptions = [];                                                                                 // 3722
    // $('ul.staggered-list').each(function (i) {                                                                     // 3723
                                                                                                                      // 3724
    //   var label = 'scrollFire-' + i;                                                                               // 3725
    //   $(this).addClass(label);                                                                                     // 3726
    //   staggeredListOptions.push(                                                                                   // 3727
    //     {selector: 'ul.staggered-list.' + label,                                                                   // 3728
    //      offset: 200,                                                                                              // 3729
    //      callback: 'showStaggeredList("ul.staggered-list.' + label + '")'});                                       // 3730
    // });                                                                                                            // 3731
    // scrollFire(staggeredListOptions);                                                                              // 3732
                                                                                                                      // 3733
    // HammerJS, Swipe navigation                                                                                     // 3734
                                                                                                                      // 3735
    // Touch Event                                                                                                    // 3736
    var swipeLeft = false;                                                                                            // 3737
    var swipeRight = false;                                                                                           // 3738
                                                                                                                      // 3739
                                                                                                                      // 3740
    // Dismissible Collections                                                                                        // 3741
    $('.dismissable').each(function() {                                                                               // 3742
      $(this).hammer({                                                                                                // 3743
        prevent_default: false                                                                                        // 3744
      }).bind('pan', function(e) {                                                                                    // 3745
        if (e.gesture.pointerType === "touch") {                                                                      // 3746
          var $this = $(this);                                                                                        // 3747
          var direction = e.gesture.direction;                                                                        // 3748
          var x = e.gesture.deltaX;                                                                                   // 3749
          var velocityX = e.gesture.velocityX;                                                                        // 3750
                                                                                                                      // 3751
          $this.velocity({ translateX: x                                                                              // 3752
              }, {duration: 50, queue: false, easing: 'easeOutQuad'});                                                // 3753
                                                                                                                      // 3754
          // Swipe Left                                                                                               // 3755
          if (direction === 4 && (x > ($this.innerWidth() / 2) || velocityX < -0.75)) {                               // 3756
            swipeLeft = true;                                                                                         // 3757
          }                                                                                                           // 3758
                                                                                                                      // 3759
          // Swipe Right                                                                                              // 3760
          if (direction === 2 && (x < (-1 * $this.innerWidth() / 2) || velocityX > 0.75)) {                           // 3761
            swipeRight = true;                                                                                        // 3762
          }                                                                                                           // 3763
        }                                                                                                             // 3764
      }).bind('panend', function(e) {                                                                                 // 3765
        // Reset if collection is moved back into original position                                                   // 3766
        if (Math.abs(e.gesture.deltaX) < ($(this).innerWidth() / 2)) {                                                // 3767
          swipeRight = false;                                                                                         // 3768
          swipeLeft = false;                                                                                          // 3769
        }                                                                                                             // 3770
                                                                                                                      // 3771
        if (e.gesture.pointerType === "touch") {                                                                      // 3772
          var $this = $(this);                                                                                        // 3773
          if (swipeLeft || swipeRight) {                                                                              // 3774
            var fullWidth;                                                                                            // 3775
            if (swipeLeft) { fullWidth = $this.innerWidth(); }                                                        // 3776
            else { fullWidth = -1 * $this.innerWidth(); }                                                             // 3777
                                                                                                                      // 3778
            $this.velocity({ translateX: fullWidth,                                                                   // 3779
              }, {duration: 100, queue: false, easing: 'easeOutQuad', complete:                                       // 3780
              function() {                                                                                            // 3781
                $this.css('border', 'none');                                                                          // 3782
                $this.velocity({ height: 0, padding: 0,                                                               // 3783
                  }, {duration: 200, queue: false, easing: 'easeOutQuad', complete:                                   // 3784
                    function() { $this.remove(); }                                                                    // 3785
                  });                                                                                                 // 3786
              }                                                                                                       // 3787
            });                                                                                                       // 3788
          }                                                                                                           // 3789
          else {                                                                                                      // 3790
            $this.velocity({ translateX: 0,                                                                           // 3791
              }, {duration: 100, queue: false, easing: 'easeOutQuad'});                                               // 3792
          }                                                                                                           // 3793
          swipeLeft = false;                                                                                          // 3794
          swipeRight = false;                                                                                         // 3795
        }                                                                                                             // 3796
      });                                                                                                             // 3797
                                                                                                                      // 3798
    });                                                                                                               // 3799
                                                                                                                      // 3800
                                                                                                                      // 3801
    // time = 0                                                                                                       // 3802
    // // Vertical Staggered list                                                                                     // 3803
    // $('ul.staggered-list.vertical li').velocity(                                                                   // 3804
    //     { translateY: "100px"},                                                                                    // 3805
    //     { duration: 0 });                                                                                          // 3806
                                                                                                                      // 3807
    // $('ul.staggered-list.vertical li').each(function() {                                                           // 3808
    //   $(this).velocity(                                                                                            // 3809
    //     { opacity: "1", translateY: "0"},                                                                          // 3810
    //     { duration: 800, delay: time, easing: [60, 25] });                                                         // 3811
    //   time += 120;                                                                                                 // 3812
    // });                                                                                                            // 3813
                                                                                                                      // 3814
    // // Fade in and Scale                                                                                           // 3815
    // $('.fade-in.scale').velocity(                                                                                  // 3816
    //     { scaleX: .4, scaleY: .4, translateX: -600},                                                               // 3817
    //     { duration: 0});                                                                                           // 3818
    // $('.fade-in').each(function() {                                                                                // 3819
    //   $(this).velocity(                                                                                            // 3820
    //     { opacity: "1", scaleX: 1, scaleY: 1, translateX: 0},                                                      // 3821
    //     { duration: 800, easing: [60, 10] });                                                                      // 3822
    // });                                                                                                            // 3823
  });                                                                                                                 // 3824
}( jQuery ));                                                                                                         // 3825
;(function($) {                                                                                                       // 3826
                                                                                                                      // 3827
  // Input: Array of JSON objects {selector, offset, callback}                                                        // 3828
                                                                                                                      // 3829
  Materialize.scrollFire = function(options) {                                                                        // 3830
                                                                                                                      // 3831
    var didScroll = false;                                                                                            // 3832
                                                                                                                      // 3833
    window.addEventListener("scroll", function() {                                                                    // 3834
      didScroll = true;                                                                                               // 3835
    });                                                                                                               // 3836
                                                                                                                      // 3837
    // Rate limit to 100ms                                                                                            // 3838
    setInterval(function() {                                                                                          // 3839
      if(didScroll) {                                                                                                 // 3840
          didScroll = false;                                                                                          // 3841
                                                                                                                      // 3842
          var windowScroll = window.pageYOffset + window.innerHeight;                                                 // 3843
                                                                                                                      // 3844
          for (var i = 0 ; i < options.length; i++) {                                                                 // 3845
            // Get options from each line                                                                             // 3846
            var value = options[i];                                                                                   // 3847
            var selector = value.selector,                                                                            // 3848
                offset = value.offset,                                                                                // 3849
                callback = value.callback;                                                                            // 3850
                                                                                                                      // 3851
            var currentElement = document.querySelector(selector);                                                    // 3852
            if ( currentElement !== null) {                                                                           // 3853
              var elementOffset = currentElement.getBoundingClientRect().top + window.pageYOffset;                    // 3854
                                                                                                                      // 3855
              if (windowScroll > (elementOffset + offset)) {                                                          // 3856
                if (value.done !== true) {                                                                            // 3857
                  var callbackFunc = new Function(callback);                                                          // 3858
                  callbackFunc();                                                                                     // 3859
                  value.done = true;                                                                                  // 3860
                }                                                                                                     // 3861
              }                                                                                                       // 3862
            }                                                                                                         // 3863
          }                                                                                                           // 3864
      }                                                                                                               // 3865
    }, 100);                                                                                                          // 3866
  };                                                                                                                  // 3867
                                                                                                                      // 3868
})(jQuery);;/*!                                                                                                       // 3869
 * pickadate.js v3.5.0, 2014/04/13                                                                                    // 3870
 * By Amsul, http://amsul.ca                                                                                          // 3871
 * Hosted on http://amsul.github.io/pickadate.js                                                                      // 3872
 * Licensed under MIT                                                                                                 // 3873
 */                                                                                                                   // 3874
                                                                                                                      // 3875
(function ( factory ) {                                                                                               // 3876
                                                                                                                      // 3877
    // AMD.                                                                                                           // 3878
    if ( typeof define == 'function' && define.amd )                                                                  // 3879
        define( 'picker', ['jquery'], factory )                                                                       // 3880
                                                                                                                      // 3881
    // Node.js/browserify.                                                                                            // 3882
    else if ( typeof exports == 'object' )                                                                            // 3883
        module.exports = factory( require('jquery') )                                                                 // 3884
                                                                                                                      // 3885
    // Browser globals.                                                                                               // 3886
    else this.Picker = factory( jQuery )                                                                              // 3887
                                                                                                                      // 3888
}(function( $ ) {                                                                                                     // 3889
                                                                                                                      // 3890
var $window = $( window )                                                                                             // 3891
var $document = $( document )                                                                                         // 3892
var $html = $( document.documentElement )                                                                             // 3893
                                                                                                                      // 3894
                                                                                                                      // 3895
/**                                                                                                                   // 3896
 * The picker constructor that creates a blank picker.                                                                // 3897
 */                                                                                                                   // 3898
function PickerConstructor( ELEMENT, NAME, COMPONENT, OPTIONS ) {                                                     // 3899
                                                                                                                      // 3900
    // If there’s no element, return the picker constructor.                                                          // 3901
    if ( !ELEMENT ) return PickerConstructor                                                                          // 3902
                                                                                                                      // 3903
                                                                                                                      // 3904
    var                                                                                                               // 3905
        IS_DEFAULT_THEME = false,                                                                                     // 3906
                                                                                                                      // 3907
                                                                                                                      // 3908
        // The state of the picker.                                                                                   // 3909
        STATE = {                                                                                                     // 3910
            id: ELEMENT.id || 'P' + Math.abs( ~~(Math.random() * new Date()) )                                        // 3911
        },                                                                                                            // 3912
                                                                                                                      // 3913
                                                                                                                      // 3914
        // Merge the defaults and options passed.                                                                     // 3915
        SETTINGS = COMPONENT ? $.extend( true, {}, COMPONENT.defaults, OPTIONS ) : OPTIONS || {},                     // 3916
                                                                                                                      // 3917
                                                                                                                      // 3918
        // Merge the default classes with the settings classes.                                                       // 3919
        CLASSES = $.extend( {}, PickerConstructor.klasses(), SETTINGS.klass ),                                        // 3920
                                                                                                                      // 3921
                                                                                                                      // 3922
        // The element node wrapper into a jQuery object.                                                             // 3923
        $ELEMENT = $( ELEMENT ),                                                                                      // 3924
                                                                                                                      // 3925
                                                                                                                      // 3926
        // Pseudo picker constructor.                                                                                 // 3927
        PickerInstance = function() {                                                                                 // 3928
            return this.start()                                                                                       // 3929
        },                                                                                                            // 3930
                                                                                                                      // 3931
                                                                                                                      // 3932
        // The picker prototype.                                                                                      // 3933
        P = PickerInstance.prototype = {                                                                              // 3934
                                                                                                                      // 3935
            constructor: PickerInstance,                                                                              // 3936
                                                                                                                      // 3937
            $node: $ELEMENT,                                                                                          // 3938
                                                                                                                      // 3939
                                                                                                                      // 3940
            /**                                                                                                       // 3941
             * Initialize everything                                                                                  // 3942
             */                                                                                                       // 3943
            start: function() {                                                                                       // 3944
                                                                                                                      // 3945
                // If it’s already started, do nothing.                                                               // 3946
                if ( STATE && STATE.start ) return P                                                                  // 3947
                                                                                                                      // 3948
                                                                                                                      // 3949
                // Update the picker states.                                                                          // 3950
                STATE.methods = {}                                                                                    // 3951
                STATE.start = true                                                                                    // 3952
                STATE.open = false                                                                                    // 3953
                STATE.type = ELEMENT.type                                                                             // 3954
                                                                                                                      // 3955
                                                                                                                      // 3956
                // Confirm focus state, convert into text input to remove UA stylings,                                // 3957
                // and set as readonly to prevent keyboard popup.                                                     // 3958
                ELEMENT.autofocus = ELEMENT == getActiveElement()                                                     // 3959
                ELEMENT.readOnly = !SETTINGS.editable                                                                 // 3960
                ELEMENT.id = ELEMENT.id || STATE.id                                                                   // 3961
                if ( ELEMENT.type != 'text' ) {                                                                       // 3962
                    ELEMENT.type = 'text'                                                                             // 3963
                }                                                                                                     // 3964
                                                                                                                      // 3965
                                                                                                                      // 3966
                // Create a new picker component with the settings.                                                   // 3967
                P.component = new COMPONENT(P, SETTINGS)                                                              // 3968
                                                                                                                      // 3969
                                                                                                                      // 3970
                // Create the picker root with a holder and then prepare it.                                          // 3971
                P.$root = $( PickerConstructor._.node('div', createWrappedComponent(), CLASSES.picker, 'id="' + ELEMENT.id + '_root" tabindex="0"') )
                prepareElementRoot()                                                                                  // 3973
                                                                                                                      // 3974
                                                                                                                      // 3975
                // If there’s a format for the hidden input element, create the element.                              // 3976
                if ( SETTINGS.formatSubmit ) {                                                                        // 3977
                    prepareElementHidden()                                                                            // 3978
                }                                                                                                     // 3979
                                                                                                                      // 3980
                                                                                                                      // 3981
                // Prepare the input element.                                                                         // 3982
                prepareElement()                                                                                      // 3983
                                                                                                                      // 3984
                                                                                                                      // 3985
                // Insert the root as specified in the settings.                                                      // 3986
                if ( SETTINGS.container ) $( SETTINGS.container ).append( P.$root )                                   // 3987
                else $ELEMENT.after( P.$root )                                                                        // 3988
                                                                                                                      // 3989
                                                                                                                      // 3990
                // Bind the default component and settings events.                                                    // 3991
                P.on({                                                                                                // 3992
                    start: P.component.onStart,                                                                       // 3993
                    render: P.component.onRender,                                                                     // 3994
                    stop: P.component.onStop,                                                                         // 3995
                    open: P.component.onOpen,                                                                         // 3996
                    close: P.component.onClose,                                                                       // 3997
                    set: P.component.onSet                                                                            // 3998
                }).on({                                                                                               // 3999
                    start: SETTINGS.onStart,                                                                          // 4000
                    render: SETTINGS.onRender,                                                                        // 4001
                    stop: SETTINGS.onStop,                                                                            // 4002
                    open: SETTINGS.onOpen,                                                                            // 4003
                    close: SETTINGS.onClose,                                                                          // 4004
                    set: SETTINGS.onSet                                                                               // 4005
                })                                                                                                    // 4006
                                                                                                                      // 4007
                                                                                                                      // 4008
                // Once we’re all set, check the theme in use.                                                        // 4009
                IS_DEFAULT_THEME = isUsingDefaultTheme( P.$root.children()[ 0 ] )                                     // 4010
                                                                                                                      // 4011
                                                                                                                      // 4012
                // If the element has autofocus, open the picker.                                                     // 4013
                if ( ELEMENT.autofocus ) {                                                                            // 4014
                    P.open()                                                                                          // 4015
                }                                                                                                     // 4016
                                                                                                                      // 4017
                                                                                                                      // 4018
                // Trigger queued the “start” and “render” events.                                                    // 4019
                return P.trigger( 'start' ).trigger( 'render' )                                                       // 4020
            }, //start                                                                                                // 4021
                                                                                                                      // 4022
                                                                                                                      // 4023
            /**                                                                                                       // 4024
             * Render a new picker                                                                                    // 4025
             */                                                                                                       // 4026
            render: function( entireComponent ) {                                                                     // 4027
                                                                                                                      // 4028
                // Insert a new component holder in the root or box.                                                  // 4029
                if ( entireComponent ) P.$root.html( createWrappedComponent() )                                       // 4030
                else P.$root.find( '.' + CLASSES.box ).html( P.component.nodes( STATE.open ) )                        // 4031
                                                                                                                      // 4032
                // Trigger the queued “render” events.                                                                // 4033
                return P.trigger( 'render' )                                                                          // 4034
            }, //render                                                                                               // 4035
                                                                                                                      // 4036
                                                                                                                      // 4037
            /**                                                                                                       // 4038
             * Destroy everything                                                                                     // 4039
             */                                                                                                       // 4040
            stop: function() {                                                                                        // 4041
                                                                                                                      // 4042
                // If it’s already stopped, do nothing.                                                               // 4043
                if ( !STATE.start ) return P                                                                          // 4044
                                                                                                                      // 4045
                // Then close the picker.                                                                             // 4046
                P.close()                                                                                             // 4047
                                                                                                                      // 4048
                // Remove the hidden field.                                                                           // 4049
                if ( P._hidden ) {                                                                                    // 4050
                    P._hidden.parentNode.removeChild( P._hidden )                                                     // 4051
                }                                                                                                     // 4052
                                                                                                                      // 4053
                // Remove the root.                                                                                   // 4054
                P.$root.remove()                                                                                      // 4055
                                                                                                                      // 4056
                // Remove the input class, remove the stored data, and unbind                                         // 4057
                // the events (after a tick for IE - see `P.close`).                                                  // 4058
                $ELEMENT.removeClass( CLASSES.input ).removeData( NAME )                                              // 4059
                setTimeout( function() {                                                                              // 4060
                    $ELEMENT.off( '.' + STATE.id )                                                                    // 4061
                }, 0)                                                                                                 // 4062
                                                                                                                      // 4063
                // Restore the element state                                                                          // 4064
                ELEMENT.type = STATE.type                                                                             // 4065
                ELEMENT.readOnly = false                                                                              // 4066
                                                                                                                      // 4067
                // Trigger the queued “stop” events.                                                                  // 4068
                P.trigger( 'stop' )                                                                                   // 4069
                                                                                                                      // 4070
                // Reset the picker states.                                                                           // 4071
                STATE.methods = {}                                                                                    // 4072
                STATE.start = false                                                                                   // 4073
                                                                                                                      // 4074
                return P                                                                                              // 4075
            }, //stop                                                                                                 // 4076
                                                                                                                      // 4077
                                                                                                                      // 4078
            /**                                                                                                       // 4079
             * Open up the picker                                                                                     // 4080
             */                                                                                                       // 4081
            open: function( dontGiveFocus ) {                                                                         // 4082
                                                                                                                      // 4083
                // If it’s already open, do nothing.                                                                  // 4084
                if ( STATE.open ) return P                                                                            // 4085
                                                                                                                      // 4086
                // Add the “active” class.                                                                            // 4087
                $ELEMENT.addClass( CLASSES.active )                                                                   // 4088
                aria( ELEMENT, 'expanded', true )                                                                     // 4089
                                                                                                                      // 4090
                // * A Firefox bug, when `html` has `overflow:hidden`, results in                                     // 4091
                //   killing transitions :(. So add the “opened” state on the next tick.                              // 4092
                //   Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289                                         // 4093
                setTimeout( function() {                                                                              // 4094
                                                                                                                      // 4095
                    // Add the “opened” class to the picker root.                                                     // 4096
                    P.$root.addClass( CLASSES.opened )                                                                // 4097
                    aria( P.$root[0], 'hidden', false )                                                               // 4098
                                                                                                                      // 4099
                }, 0 )                                                                                                // 4100
                                                                                                                      // 4101
                // If we have to give focus, bind the element and doc events.                                         // 4102
                if ( dontGiveFocus !== false ) {                                                                      // 4103
                                                                                                                      // 4104
                    // Set it as open.                                                                                // 4105
                    STATE.open = true                                                                                 // 4106
                                                                                                                      // 4107
                    // Prevent the page from scrolling.                                                               // 4108
                    if ( IS_DEFAULT_THEME ) {                                                                         // 4109
                        $html.                                                                                        // 4110
                            css( 'overflow', 'hidden' ).                                                              // 4111
                            css( 'padding-right', '+=' + getScrollbarWidth() )                                        // 4112
                    }                                                                                                 // 4113
                                                                                                                      // 4114
                    // Pass focus to the root element’s jQuery object.                                                // 4115
                    // * Workaround for iOS8 to bring the picker’s root into view.                                    // 4116
                    P.$root[0].focus()                                                                                // 4117
                                                                                                                      // 4118
                    // Bind the document events.                                                                      // 4119
                    $document.on( 'click.' + STATE.id + ' focusin.' + STATE.id, function( event ) {                   // 4120
                                                                                                                      // 4121
                        var target = event.target                                                                     // 4122
                                                                                                                      // 4123
                        // If the target of the event is not the element, close the picker picker.                    // 4124
                        // * Don’t worry about clicks or focusins on the root because those don’t bubble up.          // 4125
                        //   Also, for Firefox, a click on an `option` element bubbles up directly                    // 4126
                        //   to the doc. So make sure the target wasn't the doc.                                      // 4127
                        // * In Firefox stopPropagation() doesn’t prevent right-click events from bubbling,           // 4128
                        //   which causes the picker to unexpectedly close when right-clicking it. So make            // 4129
                        //   sure the event wasn’t a right-click.                                                     // 4130
                        if ( target != ELEMENT && target != document && event.which != 3 ) {                          // 4131
                                                                                                                      // 4132
                            // If the target was the holder that covers the screen,                                   // 4133
                            // keep the element focused to maintain tabindex.                                         // 4134
                            P.close( target === P.$root.children()[0] )                                               // 4135
                        }                                                                                             // 4136
                                                                                                                      // 4137
                    }).on( 'keydown.' + STATE.id, function( event ) {                                                 // 4138
                                                                                                                      // 4139
                        var                                                                                           // 4140
                            // Get the keycode.                                                                       // 4141
                            keycode = event.keyCode,                                                                  // 4142
                                                                                                                      // 4143
                            // Translate that to a selection change.                                                  // 4144
                            keycodeToMove = P.component.key[ keycode ],                                               // 4145
                                                                                                                      // 4146
                            // Grab the target.                                                                       // 4147
                            target = event.target                                                                     // 4148
                                                                                                                      // 4149
                                                                                                                      // 4150
                        // On escape, close the picker and give focus.                                                // 4151
                        if ( keycode == 27 ) {                                                                        // 4152
                            P.close( true )                                                                           // 4153
                        }                                                                                             // 4154
                                                                                                                      // 4155
                                                                                                                      // 4156
                        // Check if there is a key movement or “enter” keypress on the element.                       // 4157
                        else if ( target == P.$root[0] && ( keycodeToMove || keycode == 13 ) ) {                      // 4158
                                                                                                                      // 4159
                            // Prevent the default action to stop page movement.                                      // 4160
                            event.preventDefault()                                                                    // 4161
                                                                                                                      // 4162
                            // Trigger the key movement action.                                                       // 4163
                            if ( keycodeToMove ) {                                                                    // 4164
                                PickerConstructor._.trigger( P.component.key.go, P, [ PickerConstructor._.trigger( keycodeToMove ) ] )
                            }                                                                                         // 4166
                                                                                                                      // 4167
                            // On “enter”, if the highlighted item isn’t disabled, set the value and close.           // 4168
                            else if ( !P.$root.find( '.' + CLASSES.highlighted ).hasClass( CLASSES.disabled ) ) {     // 4169
                                P.set( 'select', P.component.item.highlight ).close()                                 // 4170
                            }                                                                                         // 4171
                        }                                                                                             // 4172
                                                                                                                      // 4173
                                                                                                                      // 4174
                        // If the target is within the root and “enter” is pressed,                                   // 4175
                        // prevent the default action and trigger a click on the target instead.                      // 4176
                        else if ( $.contains( P.$root[0], target ) && keycode == 13 ) {                               // 4177
                            event.preventDefault()                                                                    // 4178
                            target.click()                                                                            // 4179
                        }                                                                                             // 4180
                    })                                                                                                // 4181
                }                                                                                                     // 4182
                                                                                                                      // 4183
                // Trigger the queued “open” events.                                                                  // 4184
                return P.trigger( 'open' )                                                                            // 4185
            }, //open                                                                                                 // 4186
                                                                                                                      // 4187
                                                                                                                      // 4188
            /**                                                                                                       // 4189
             * Close the picker                                                                                       // 4190
             */                                                                                                       // 4191
            close: function( giveFocus ) {                                                                            // 4192
                                                                                                                      // 4193
                // If we need to give focus, do it before changing states.                                            // 4194
                if ( giveFocus ) {                                                                                    // 4195
                    // ....ah yes! It would’ve been incomplete without a crazy workaround for IE :|                   // 4196
                    // The focus is triggered *after* the close has completed - causing it                            // 4197
                    // to open again. So unbind and rebind the event at the next tick.                                // 4198
                    P.$root.off( 'focus.toOpen' )[0].focus()                                                          // 4199
                    setTimeout( function() {                                                                          // 4200
                        P.$root.on( 'focus.toOpen', handleFocusToOpenEvent )                                          // 4201
                    }, 0 )                                                                                            // 4202
                }                                                                                                     // 4203
                                                                                                                      // 4204
                // Remove the “active” class.                                                                         // 4205
                $ELEMENT.removeClass( CLASSES.active )                                                                // 4206
                aria( ELEMENT, 'expanded', false )                                                                    // 4207
                                                                                                                      // 4208
                // * A Firefox bug, when `html` has `overflow:hidden`, results in                                     // 4209
                //   killing transitions :(. So remove the “opened” state on the next tick.                           // 4210
                //   Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289                                         // 4211
                setTimeout( function() {                                                                              // 4212
                                                                                                                      // 4213
                    // Remove the “opened” and “focused” class from the picker root.                                  // 4214
                    P.$root.removeClass( CLASSES.opened + ' ' + CLASSES.focused )                                     // 4215
                    aria( P.$root[0], 'hidden', true )                                                                // 4216
                                                                                                                      // 4217
                }, 0 )                                                                                                // 4218
                                                                                                                      // 4219
                // If it’s already closed, do nothing more.                                                           // 4220
                if ( !STATE.open ) return P                                                                           // 4221
                                                                                                                      // 4222
                // Set it as closed.                                                                                  // 4223
                STATE.open = false                                                                                    // 4224
                                                                                                                      // 4225
                // Allow the page to scroll.                                                                          // 4226
                if ( IS_DEFAULT_THEME ) {                                                                             // 4227
                    $html.                                                                                            // 4228
                        css( 'overflow', '' ).                                                                        // 4229
                        css( 'padding-right', '-=' + getScrollbarWidth() )                                            // 4230
                }                                                                                                     // 4231
                                                                                                                      // 4232
                // Unbind the document events.                                                                        // 4233
                $document.off( '.' + STATE.id )                                                                       // 4234
                                                                                                                      // 4235
                // Trigger the queued “close” events.                                                                 // 4236
                return P.trigger( 'close' )                                                                           // 4237
            }, //close                                                                                                // 4238
                                                                                                                      // 4239
                                                                                                                      // 4240
            /**                                                                                                       // 4241
             * Clear the values                                                                                       // 4242
             */                                                                                                       // 4243
            clear: function( options ) {                                                                              // 4244
                return P.set( 'clear', null, options )                                                                // 4245
            }, //clear                                                                                                // 4246
                                                                                                                      // 4247
                                                                                                                      // 4248
            /**                                                                                                       // 4249
             * Set something                                                                                          // 4250
             */                                                                                                       // 4251
            set: function( thing, value, options ) {                                                                  // 4252
                                                                                                                      // 4253
                var thingItem, thingValue,                                                                            // 4254
                    thingIsObject = $.isPlainObject( thing ),                                                         // 4255
                    thingObject = thingIsObject ? thing : {}                                                          // 4256
                                                                                                                      // 4257
                // Make sure we have usable options.                                                                  // 4258
                options = thingIsObject && $.isPlainObject( value ) ? value : options || {}                           // 4259
                                                                                                                      // 4260
                if ( thing ) {                                                                                        // 4261
                                                                                                                      // 4262
                    // If the thing isn’t an object, make it one.                                                     // 4263
                    if ( !thingIsObject ) {                                                                           // 4264
                        thingObject[ thing ] = value                                                                  // 4265
                    }                                                                                                 // 4266
                                                                                                                      // 4267
                    // Go through the things of items to set.                                                         // 4268
                    for ( thingItem in thingObject ) {                                                                // 4269
                                                                                                                      // 4270
                        // Grab the value of the thing.                                                               // 4271
                        thingValue = thingObject[ thingItem ]                                                         // 4272
                                                                                                                      // 4273
                        // First, if the item exists and there’s a value, set it.                                     // 4274
                        if ( thingItem in P.component.item ) {                                                        // 4275
                            if ( thingValue === undefined ) thingValue = null                                         // 4276
                            P.component.set( thingItem, thingValue, options )                                         // 4277
                        }                                                                                             // 4278
                                                                                                                      // 4279
                        // Then, check to update the element value and broadcast a change.                            // 4280
                        if ( thingItem == 'select' || thingItem == 'clear' ) {                                        // 4281
                            $ELEMENT.                                                                                 // 4282
                                val( thingItem == 'clear' ? '' : P.get( thingItem, SETTINGS.format ) ).               // 4283
                                trigger( 'change' )                                                                   // 4284
                        }                                                                                             // 4285
                    }                                                                                                 // 4286
                                                                                                                      // 4287
                    // Render a new picker.                                                                           // 4288
                    P.render()                                                                                        // 4289
                }                                                                                                     // 4290
                                                                                                                      // 4291
                // When the method isn’t muted, trigger queued “set” events and pass the `thingObject`.               // 4292
                return options.muted ? P : P.trigger( 'set', thingObject )                                            // 4293
            }, //set                                                                                                  // 4294
                                                                                                                      // 4295
                                                                                                                      // 4296
            /**                                                                                                       // 4297
             * Get something                                                                                          // 4298
             */                                                                                                       // 4299
            get: function( thing, format ) {                                                                          // 4300
                                                                                                                      // 4301
                // Make sure there’s something to get.                                                                // 4302
                thing = thing || 'value'                                                                              // 4303
                                                                                                                      // 4304
                // If a picker state exists, return that.                                                             // 4305
                if ( STATE[ thing ] != null ) {                                                                       // 4306
                    return STATE[ thing ]                                                                             // 4307
                }                                                                                                     // 4308
                                                                                                                      // 4309
                // Return the submission value, if that.                                                              // 4310
                if ( thing == 'valueSubmit' ) {                                                                       // 4311
                    if ( P._hidden ) {                                                                                // 4312
                        return P._hidden.value                                                                        // 4313
                    }                                                                                                 // 4314
                    thing = 'value'                                                                                   // 4315
                }                                                                                                     // 4316
                                                                                                                      // 4317
                // Return the value, if that.                                                                         // 4318
                if ( thing == 'value' ) {                                                                             // 4319
                    return ELEMENT.value                                                                              // 4320
                }                                                                                                     // 4321
                                                                                                                      // 4322
                // Check if a component item exists, return that.                                                     // 4323
                if ( thing in P.component.item ) {                                                                    // 4324
                    if ( typeof format == 'string' ) {                                                                // 4325
                        var thingValue = P.component.get( thing )                                                     // 4326
                        return thingValue ?                                                                           // 4327
                            PickerConstructor._.trigger(                                                              // 4328
                                P.component.formats.toString,                                                         // 4329
                                P.component,                                                                          // 4330
                                [ format, thingValue ]                                                                // 4331
                            ) : ''                                                                                    // 4332
                    }                                                                                                 // 4333
                    return P.component.get( thing )                                                                   // 4334
                }                                                                                                     // 4335
            }, //get                                                                                                  // 4336
                                                                                                                      // 4337
                                                                                                                      // 4338
                                                                                                                      // 4339
            /**                                                                                                       // 4340
             * Bind events on the things.                                                                             // 4341
             */                                                                                                       // 4342
            on: function( thing, method, internal ) {                                                                 // 4343
                                                                                                                      // 4344
                var thingName, thingMethod,                                                                           // 4345
                    thingIsObject = $.isPlainObject( thing ),                                                         // 4346
                    thingObject = thingIsObject ? thing : {}                                                          // 4347
                                                                                                                      // 4348
                if ( thing ) {                                                                                        // 4349
                                                                                                                      // 4350
                    // If the thing isn’t an object, make it one.                                                     // 4351
                    if ( !thingIsObject ) {                                                                           // 4352
                        thingObject[ thing ] = method                                                                 // 4353
                    }                                                                                                 // 4354
                                                                                                                      // 4355
                    // Go through the things to bind to.                                                              // 4356
                    for ( thingName in thingObject ) {                                                                // 4357
                                                                                                                      // 4358
                        // Grab the method of the thing.                                                              // 4359
                        thingMethod = thingObject[ thingName ]                                                        // 4360
                                                                                                                      // 4361
                        // If it was an internal binding, prefix it.                                                  // 4362
                        if ( internal ) {                                                                             // 4363
                            thingName = '_' + thingName                                                               // 4364
                        }                                                                                             // 4365
                                                                                                                      // 4366
                        // Make sure the thing methods collection exists.                                             // 4367
                        STATE.methods[ thingName ] = STATE.methods[ thingName ] || []                                 // 4368
                                                                                                                      // 4369
                        // Add the method to the relative method collection.                                          // 4370
                        STATE.methods[ thingName ].push( thingMethod )                                                // 4371
                    }                                                                                                 // 4372
                }                                                                                                     // 4373
                                                                                                                      // 4374
                return P                                                                                              // 4375
            }, //on                                                                                                   // 4376
                                                                                                                      // 4377
                                                                                                                      // 4378
                                                                                                                      // 4379
            /**                                                                                                       // 4380
             * Unbind events on the things.                                                                           // 4381
             */                                                                                                       // 4382
            off: function() {                                                                                         // 4383
                var i, thingName,                                                                                     // 4384
                    names = arguments;                                                                                // 4385
                for ( i = 0, namesCount = names.length; i < namesCount; i += 1 ) {                                    // 4386
                    thingName = names[i]                                                                              // 4387
                    if ( thingName in STATE.methods ) {                                                               // 4388
                        delete STATE.methods[thingName]                                                               // 4389
                    }                                                                                                 // 4390
                }                                                                                                     // 4391
                return P                                                                                              // 4392
            },                                                                                                        // 4393
                                                                                                                      // 4394
                                                                                                                      // 4395
            /**                                                                                                       // 4396
             * Fire off method events.                                                                                // 4397
             */                                                                                                       // 4398
            trigger: function( name, data ) {                                                                         // 4399
                var _trigger = function( name ) {                                                                     // 4400
                    var methodList = STATE.methods[ name ]                                                            // 4401
                    if ( methodList ) {                                                                               // 4402
                        methodList.map( function( method ) {                                                          // 4403
                            PickerConstructor._.trigger( method, P, [ data ] )                                        // 4404
                        })                                                                                            // 4405
                    }                                                                                                 // 4406
                }                                                                                                     // 4407
                _trigger( '_' + name )                                                                                // 4408
                _trigger( name )                                                                                      // 4409
                return P                                                                                              // 4410
            } //trigger                                                                                               // 4411
        } //PickerInstance.prototype                                                                                  // 4412
                                                                                                                      // 4413
                                                                                                                      // 4414
    /**                                                                                                               // 4415
     * Wrap the picker holder components together.                                                                    // 4416
     */                                                                                                               // 4417
    function createWrappedComponent() {                                                                               // 4418
                                                                                                                      // 4419
        // Create a picker wrapper holder                                                                             // 4420
        return PickerConstructor._.node( 'div',                                                                       // 4421
                                                                                                                      // 4422
            // Create a picker wrapper node                                                                           // 4423
            PickerConstructor._.node( 'div',                                                                          // 4424
                                                                                                                      // 4425
                // Create a picker frame                                                                              // 4426
                PickerConstructor._.node( 'div',                                                                      // 4427
                                                                                                                      // 4428
                    // Create a picker box node                                                                       // 4429
                    PickerConstructor._.node( 'div',                                                                  // 4430
                                                                                                                      // 4431
                        // Create the components nodes.                                                               // 4432
                        P.component.nodes( STATE.open ),                                                              // 4433
                                                                                                                      // 4434
                        // The picker box class                                                                       // 4435
                        CLASSES.box                                                                                   // 4436
                    ),                                                                                                // 4437
                                                                                                                      // 4438
                    // Picker wrap class                                                                              // 4439
                    CLASSES.wrap                                                                                      // 4440
                ),                                                                                                    // 4441
                                                                                                                      // 4442
                // Picker frame class                                                                                 // 4443
                CLASSES.frame                                                                                         // 4444
            ),                                                                                                        // 4445
                                                                                                                      // 4446
            // Picker holder class                                                                                    // 4447
            CLASSES.holder                                                                                            // 4448
        ) //endreturn                                                                                                 // 4449
    } //createWrappedComponent                                                                                        // 4450
                                                                                                                      // 4451
                                                                                                                      // 4452
                                                                                                                      // 4453
    /**                                                                                                               // 4454
     * Prepare the input element with all bindings.                                                                   // 4455
     */                                                                                                               // 4456
    function prepareElement() {                                                                                       // 4457
                                                                                                                      // 4458
        $ELEMENT.                                                                                                     // 4459
                                                                                                                      // 4460
            // Store the picker data by component name.                                                               // 4461
            data(NAME, P).                                                                                            // 4462
                                                                                                                      // 4463
            // Add the “input” class name.                                                                            // 4464
            addClass(CLASSES.input).                                                                                  // 4465
                                                                                                                      // 4466
            // Remove the tabindex.                                                                                   // 4467
            attr('tabindex', -1).                                                                                     // 4468
                                                                                                                      // 4469
            // If there’s a `data-value`, update the value of the element.                                            // 4470
            val( $ELEMENT.data('value') ?                                                                             // 4471
                P.get('select', SETTINGS.format) :                                                                    // 4472
                ELEMENT.value                                                                                         // 4473
            )                                                                                                         // 4474
                                                                                                                      // 4475
                                                                                                                      // 4476
        // Only bind keydown events if the element isn’t editable.                                                    // 4477
        if ( !SETTINGS.editable ) {                                                                                   // 4478
                                                                                                                      // 4479
            $ELEMENT.                                                                                                 // 4480
                                                                                                                      // 4481
                // On focus/click, focus onto the root to open it up.                                                 // 4482
                on( 'focus.' + STATE.id + ' click.' + STATE.id, function( event ) {                                   // 4483
                    event.preventDefault()                                                                            // 4484
                    P.$root[0].focus()                                                                                // 4485
                }).                                                                                                   // 4486
                                                                                                                      // 4487
                // Handle keyboard event based on the picker being opened or not.                                     // 4488
                on( 'keydown.' + STATE.id, handleKeydownEvent )                                                       // 4489
        }                                                                                                             // 4490
                                                                                                                      // 4491
                                                                                                                      // 4492
        // Update the aria attributes.                                                                                // 4493
        aria(ELEMENT, {                                                                                               // 4494
            haspopup: true,                                                                                           // 4495
            expanded: false,                                                                                          // 4496
            readonly: false,                                                                                          // 4497
            owns: ELEMENT.id + '_root'                                                                                // 4498
        })                                                                                                            // 4499
    }                                                                                                                 // 4500
                                                                                                                      // 4501
                                                                                                                      // 4502
    /**                                                                                                               // 4503
     * Prepare the root picker element with all bindings.                                                             // 4504
     */                                                                                                               // 4505
    function prepareElementRoot() {                                                                                   // 4506
                                                                                                                      // 4507
        P.$root.                                                                                                      // 4508
                                                                                                                      // 4509
            on({                                                                                                      // 4510
                                                                                                                      // 4511
                // For iOS8.                                                                                          // 4512
                keydown: handleKeydownEvent,                                                                          // 4513
                                                                                                                      // 4514
                // When something within the root is focused, stop from bubbling                                      // 4515
                // to the doc and remove the “focused” state from the root.                                           // 4516
                focusin: function( event ) {                                                                          // 4517
                    P.$root.removeClass( CLASSES.focused )                                                            // 4518
                    event.stopPropagation()                                                                           // 4519
                },                                                                                                    // 4520
                                                                                                                      // 4521
                // When something within the root holder is clicked, stop it                                          // 4522
                // from bubbling to the doc.                                                                          // 4523
                'mousedown click': function( event ) {                                                                // 4524
                                                                                                                      // 4525
                    var target = event.target                                                                         // 4526
                                                                                                                      // 4527
                    // Make sure the target isn’t the root holder so it can bubble up.                                // 4528
                    if ( target != P.$root.children()[ 0 ] ) {                                                        // 4529
                                                                                                                      // 4530
                        event.stopPropagation()                                                                       // 4531
                                                                                                                      // 4532
                        // * For mousedown events, cancel the default action in order to                              // 4533
                        //   prevent cases where focus is shifted onto external elements                              // 4534
                        //   when using things like jQuery mobile or MagnificPopup (ref: #249 & #120).                // 4535
                        //   Also, for Firefox, don’t prevent action on the `option` element.                         // 4536
                        if ( event.type == 'mousedown' && !$( target ).is( 'input, select, textarea, button, option' )) {
                                                                                                                      // 4538
                            event.preventDefault()                                                                    // 4539
                                                                                                                      // 4540
                            // Re-focus onto the root so that users can click away                                    // 4541
                            // from elements focused within the picker.                                               // 4542
                            P.$root[0].focus()                                                                        // 4543
                        }                                                                                             // 4544
                    }                                                                                                 // 4545
                }                                                                                                     // 4546
            }).                                                                                                       // 4547
                                                                                                                      // 4548
            // Add/remove the “target” class on focus and blur.                                                       // 4549
            on({                                                                                                      // 4550
                focus: function() {                                                                                   // 4551
                    $ELEMENT.addClass( CLASSES.target )                                                               // 4552
                },                                                                                                    // 4553
                blur: function() {                                                                                    // 4554
                    $ELEMENT.removeClass( CLASSES.target )                                                            // 4555
                }                                                                                                     // 4556
            }).                                                                                                       // 4557
                                                                                                                      // 4558
            // Open the picker and adjust the root “focused” state                                                    // 4559
            on( 'focus.toOpen', handleFocusToOpenEvent ).                                                             // 4560
                                                                                                                      // 4561
            // If there’s a click on an actionable element, carry out the actions.                                    // 4562
            on( 'click', '[data-pick], [data-nav], [data-clear], [data-close]', function() {                          // 4563
                                                                                                                      // 4564
                var $target = $( this ),                                                                              // 4565
                    targetData = $target.data(),                                                                      // 4566
                    targetDisabled = $target.hasClass( CLASSES.navDisabled ) || $target.hasClass( CLASSES.disabled ),
                                                                                                                      // 4568
                    // * For IE, non-focusable elements can be active elements as well                                // 4569
                    //   (http://stackoverflow.com/a/2684561).                                                        // 4570
                    activeElement = getActiveElement()                                                                // 4571
                    activeElement = activeElement && ( activeElement.type || activeElement.href )                     // 4572
                                                                                                                      // 4573
                // If it’s disabled or nothing inside is actively focused, re-focus the element.                      // 4574
                if ( targetDisabled || activeElement && !$.contains( P.$root[0], activeElement ) ) {                  // 4575
                    P.$root[0].focus()                                                                                // 4576
                }                                                                                                     // 4577
                                                                                                                      // 4578
                // If something is superficially changed, update the `highlight` based on the `nav`.                  // 4579
                if ( !targetDisabled && targetData.nav ) {                                                            // 4580
                    P.set( 'highlight', P.component.item.highlight, { nav: targetData.nav } )                         // 4581
                }                                                                                                     // 4582
                                                                                                                      // 4583
                // If something is picked, set `select` then close with focus.                                        // 4584
                else if ( !targetDisabled && 'pick' in targetData ) {                                                 // 4585
                    P.set( 'select', targetData.pick )                                                                // 4586
                }                                                                                                     // 4587
                                                                                                                      // 4588
                // If a “clear” button is pressed, empty the values and close with focus.                             // 4589
                else if ( targetData.clear ) {                                                                        // 4590
                    P.clear().close( true )                                                                           // 4591
                }                                                                                                     // 4592
                                                                                                                      // 4593
                else if ( targetData.close ) {                                                                        // 4594
                    P.close( true )                                                                                   // 4595
                }                                                                                                     // 4596
                                                                                                                      // 4597
            }) //P.$root                                                                                              // 4598
                                                                                                                      // 4599
        aria( P.$root[0], 'hidden', true )                                                                            // 4600
    }                                                                                                                 // 4601
                                                                                                                      // 4602
                                                                                                                      // 4603
     /**                                                                                                              // 4604
      * Prepare the hidden input element along with all bindings.                                                     // 4605
      */                                                                                                              // 4606
    function prepareElementHidden() {                                                                                 // 4607
                                                                                                                      // 4608
        var name                                                                                                      // 4609
                                                                                                                      // 4610
        if ( SETTINGS.hiddenName === true ) {                                                                         // 4611
            name = ELEMENT.name                                                                                       // 4612
            ELEMENT.name = ''                                                                                         // 4613
        }                                                                                                             // 4614
        else {                                                                                                        // 4615
            name = [                                                                                                  // 4616
                typeof SETTINGS.hiddenPrefix == 'string' ? SETTINGS.hiddenPrefix : '',                                // 4617
                typeof SETTINGS.hiddenSuffix == 'string' ? SETTINGS.hiddenSuffix : '_submit'                          // 4618
            ]                                                                                                         // 4619
            name = name[0] + ELEMENT.name + name[1]                                                                   // 4620
        }                                                                                                             // 4621
                                                                                                                      // 4622
        P._hidden = $(                                                                                                // 4623
            '<input ' +                                                                                               // 4624
            'type=hidden ' +                                                                                          // 4625
                                                                                                                      // 4626
            // Create the name using the original input’s with a prefix and suffix.                                   // 4627
            'name="' + name + '"' +                                                                                   // 4628
                                                                                                                      // 4629
            // If the element has a value, set the hidden value as well.                                              // 4630
            (                                                                                                         // 4631
                $ELEMENT.data('value') || ELEMENT.value ?                                                             // 4632
                    ' value="' + P.get('select', SETTINGS.formatSubmit) + '"' :                                       // 4633
                    ''                                                                                                // 4634
            ) +                                                                                                       // 4635
            '>'                                                                                                       // 4636
        )[0]                                                                                                          // 4637
                                                                                                                      // 4638
        $ELEMENT.                                                                                                     // 4639
                                                                                                                      // 4640
            // If the value changes, update the hidden input with the correct format.                                 // 4641
            on('change.' + STATE.id, function() {                                                                     // 4642
                P._hidden.value = ELEMENT.value ?                                                                     // 4643
                    P.get('select', SETTINGS.formatSubmit) :                                                          // 4644
                    ''                                                                                                // 4645
            })                                                                                                        // 4646
                                                                                                                      // 4647
                                                                                                                      // 4648
        // Insert the hidden input as specified in the settings.                                                      // 4649
        if ( SETTINGS.container ) $( SETTINGS.container ).append( P._hidden )                                         // 4650
        else $ELEMENT.after( P._hidden )                                                                              // 4651
    }                                                                                                                 // 4652
                                                                                                                      // 4653
                                                                                                                      // 4654
    // For iOS8.                                                                                                      // 4655
    function handleKeydownEvent( event ) {                                                                            // 4656
                                                                                                                      // 4657
        var keycode = event.keyCode,                                                                                  // 4658
                                                                                                                      // 4659
            // Check if one of the delete keys was pressed.                                                           // 4660
            isKeycodeDelete = /^(8|46)$/.test(keycode)                                                                // 4661
                                                                                                                      // 4662
        // For some reason IE clears the input value on “escape”.                                                     // 4663
        if ( keycode == 27 ) {                                                                                        // 4664
            P.close()                                                                                                 // 4665
            return false                                                                                              // 4666
        }                                                                                                             // 4667
                                                                                                                      // 4668
        // Check if `space` or `delete` was pressed or the picker is closed with a key movement.                      // 4669
        if ( keycode == 32 || isKeycodeDelete || !STATE.open && P.component.key[keycode] ) {                          // 4670
                                                                                                                      // 4671
            // Prevent it from moving the page and bubbling to doc.                                                   // 4672
            event.preventDefault()                                                                                    // 4673
            event.stopPropagation()                                                                                   // 4674
                                                                                                                      // 4675
            // If `delete` was pressed, clear the values and close the picker.                                        // 4676
            // Otherwise open the picker.                                                                             // 4677
            if ( isKeycodeDelete ) { P.clear().close() }                                                              // 4678
            else { P.open() }                                                                                         // 4679
        }                                                                                                             // 4680
    }                                                                                                                 // 4681
                                                                                                                      // 4682
                                                                                                                      // 4683
    // Separated for IE                                                                                               // 4684
    function handleFocusToOpenEvent( event ) {                                                                        // 4685
                                                                                                                      // 4686
        // Stop the event from propagating to the doc.                                                                // 4687
        event.stopPropagation()                                                                                       // 4688
                                                                                                                      // 4689
        // If it’s a focus event, add the “focused” class to the root.                                                // 4690
        if ( event.type == 'focus' ) {                                                                                // 4691
            P.$root.addClass( CLASSES.focused )                                                                       // 4692
        }                                                                                                             // 4693
                                                                                                                      // 4694
        // And then finally open the picker.                                                                          // 4695
        P.open()                                                                                                      // 4696
    }                                                                                                                 // 4697
                                                                                                                      // 4698
                                                                                                                      // 4699
    // Return a new picker instance.                                                                                  // 4700
    return new PickerInstance()                                                                                       // 4701
} //PickerConstructor                                                                                                 // 4702
                                                                                                                      // 4703
                                                                                                                      // 4704
                                                                                                                      // 4705
/**                                                                                                                   // 4706
 * The default classes and prefix to use for the HTML classes.                                                        // 4707
 */                                                                                                                   // 4708
PickerConstructor.klasses = function( prefix ) {                                                                      // 4709
    prefix = prefix || 'picker'                                                                                       // 4710
    return {                                                                                                          // 4711
                                                                                                                      // 4712
        picker: prefix,                                                                                               // 4713
        opened: prefix + '--opened',                                                                                  // 4714
        focused: prefix + '--focused',                                                                                // 4715
                                                                                                                      // 4716
        input: prefix + '__input',                                                                                    // 4717
        active: prefix + '__input--active',                                                                           // 4718
        target: prefix + '__input--target',                                                                           // 4719
                                                                                                                      // 4720
        holder: prefix + '__holder',                                                                                  // 4721
                                                                                                                      // 4722
        frame: prefix + '__frame',                                                                                    // 4723
        wrap: prefix + '__wrap',                                                                                      // 4724
                                                                                                                      // 4725
        box: prefix + '__box'                                                                                         // 4726
    }                                                                                                                 // 4727
} //PickerConstructor.klasses                                                                                         // 4728
                                                                                                                      // 4729
                                                                                                                      // 4730
                                                                                                                      // 4731
/**                                                                                                                   // 4732
 * Check if the default theme is being used.                                                                          // 4733
 */                                                                                                                   // 4734
function isUsingDefaultTheme( element ) {                                                                             // 4735
                                                                                                                      // 4736
    var theme,                                                                                                        // 4737
        prop = 'position'                                                                                             // 4738
                                                                                                                      // 4739
    // For IE.                                                                                                        // 4740
    if ( element.currentStyle ) {                                                                                     // 4741
        theme = element.currentStyle[prop]                                                                            // 4742
    }                                                                                                                 // 4743
                                                                                                                      // 4744
    // For normal browsers.                                                                                           // 4745
    else if ( window.getComputedStyle ) {                                                                             // 4746
        theme = getComputedStyle( element )[prop]                                                                     // 4747
    }                                                                                                                 // 4748
                                                                                                                      // 4749
    return theme == 'fixed'                                                                                           // 4750
}                                                                                                                     // 4751
                                                                                                                      // 4752
                                                                                                                      // 4753
                                                                                                                      // 4754
/**                                                                                                                   // 4755
 * Get the width of the browser’s scrollbar.                                                                          // 4756
 * Taken from: https://github.com/VodkaBears/Remodal/blob/master/src/jquery.remodal.js                                // 4757
 */                                                                                                                   // 4758
function getScrollbarWidth() {                                                                                        // 4759
                                                                                                                      // 4760
    if ( $html.height() <= $window.height() ) {                                                                       // 4761
        return 0                                                                                                      // 4762
    }                                                                                                                 // 4763
                                                                                                                      // 4764
    var $outer = $( '<div style="visibility:hidden;width:100px" />' ).                                                // 4765
        appendTo( 'body' )                                                                                            // 4766
                                                                                                                      // 4767
    // Get the width without scrollbars.                                                                              // 4768
    var widthWithoutScroll = $outer[0].offsetWidth                                                                    // 4769
                                                                                                                      // 4770
    // Force adding scrollbars.                                                                                       // 4771
    $outer.css( 'overflow', 'scroll' )                                                                                // 4772
                                                                                                                      // 4773
    // Add the inner div.                                                                                             // 4774
    var $inner = $( '<div style="width:100%" />' ).appendTo( $outer )                                                 // 4775
                                                                                                                      // 4776
    // Get the width with scrollbars.                                                                                 // 4777
    var widthWithScroll = $inner[0].offsetWidth                                                                       // 4778
                                                                                                                      // 4779
    // Remove the divs.                                                                                               // 4780
    $outer.remove()                                                                                                   // 4781
                                                                                                                      // 4782
    // Return the difference between the widths.                                                                      // 4783
    return widthWithoutScroll - widthWithScroll                                                                       // 4784
}                                                                                                                     // 4785
                                                                                                                      // 4786
                                                                                                                      // 4787
                                                                                                                      // 4788
/**                                                                                                                   // 4789
 * PickerConstructor helper methods.                                                                                  // 4790
 */                                                                                                                   // 4791
PickerConstructor._ = {                                                                                               // 4792
                                                                                                                      // 4793
    /**                                                                                                               // 4794
     * Create a group of nodes. Expects:                                                                              // 4795
     * `                                                                                                              // 4796
        {                                                                                                             // 4797
            min:    {Integer},                                                                                        // 4798
            max:    {Integer},                                                                                        // 4799
            i:      {Integer},                                                                                        // 4800
            node:   {String},                                                                                         // 4801
            item:   {Function}                                                                                        // 4802
        }                                                                                                             // 4803
     * `                                                                                                              // 4804
     */                                                                                                               // 4805
    group: function( groupObject ) {                                                                                  // 4806
                                                                                                                      // 4807
        var                                                                                                           // 4808
            // Scope for the looped object                                                                            // 4809
            loopObjectScope,                                                                                          // 4810
                                                                                                                      // 4811
            // Create the nodes list                                                                                  // 4812
            nodesList = '',                                                                                           // 4813
                                                                                                                      // 4814
            // The counter starts from the `min`                                                                      // 4815
            counter = PickerConstructor._.trigger( groupObject.min, groupObject )                                     // 4816
                                                                                                                      // 4817
                                                                                                                      // 4818
        // Loop from the `min` to `max`, incrementing by `i`                                                          // 4819
        for ( ; counter <= PickerConstructor._.trigger( groupObject.max, groupObject, [ counter ] ); counter += groupObject.i ) {
                                                                                                                      // 4821
            // Trigger the `item` function within scope of the object                                                 // 4822
            loopObjectScope = PickerConstructor._.trigger( groupObject.item, groupObject, [ counter ] )               // 4823
                                                                                                                      // 4824
            // Splice the subgroup and create nodes out of the sub nodes                                              // 4825
            nodesList += PickerConstructor._.node(                                                                    // 4826
                groupObject.node,                                                                                     // 4827
                loopObjectScope[ 0 ],   // the node                                                                   // 4828
                loopObjectScope[ 1 ],   // the classes                                                                // 4829
                loopObjectScope[ 2 ]    // the attributes                                                             // 4830
            )                                                                                                         // 4831
        }                                                                                                             // 4832
                                                                                                                      // 4833
        // Return the list of nodes                                                                                   // 4834
        return nodesList                                                                                              // 4835
    }, //group                                                                                                        // 4836
                                                                                                                      // 4837
                                                                                                                      // 4838
    /**                                                                                                               // 4839
     * Create a dom node string                                                                                       // 4840
     */                                                                                                               // 4841
    node: function( wrapper, item, klass, attribute ) {                                                               // 4842
                                                                                                                      // 4843
        // If the item is false-y, just return an empty string                                                        // 4844
        if ( !item ) return ''                                                                                        // 4845
                                                                                                                      // 4846
        // If the item is an array, do a join                                                                         // 4847
        item = $.isArray( item ) ? item.join( '' ) : item                                                             // 4848
                                                                                                                      // 4849
        // Check for the class                                                                                        // 4850
        klass = klass ? ' class="' + klass + '"' : ''                                                                 // 4851
                                                                                                                      // 4852
        // Check for any attributes                                                                                   // 4853
        attribute = attribute ? ' ' + attribute : ''                                                                  // 4854
                                                                                                                      // 4855
        // Return the wrapped item                                                                                    // 4856
        return '<' + wrapper + klass + attribute + '>' + item + '</' + wrapper + '>'                                  // 4857
    }, //node                                                                                                         // 4858
                                                                                                                      // 4859
                                                                                                                      // 4860
    /**                                                                                                               // 4861
     * Lead numbers below 10 with a zero.                                                                             // 4862
     */                                                                                                               // 4863
    lead: function( number ) {                                                                                        // 4864
        return ( number < 10 ? '0': '' ) + number                                                                     // 4865
    },                                                                                                                // 4866
                                                                                                                      // 4867
                                                                                                                      // 4868
    /**                                                                                                               // 4869
     * Trigger a function otherwise return the value.                                                                 // 4870
     */                                                                                                               // 4871
    trigger: function( callback, scope, args ) {                                                                      // 4872
        return typeof callback == 'function' ? callback.apply( scope, args || [] ) : callback                         // 4873
    },                                                                                                                // 4874
                                                                                                                      // 4875
                                                                                                                      // 4876
    /**                                                                                                               // 4877
     * If the second character is a digit, length is 2 otherwise 1.                                                   // 4878
     */                                                                                                               // 4879
    digits: function( string ) {                                                                                      // 4880
        return ( /\d/ ).test( string[ 1 ] ) ? 2 : 1                                                                   // 4881
    },                                                                                                                // 4882
                                                                                                                      // 4883
                                                                                                                      // 4884
    /**                                                                                                               // 4885
     * Tell if something is a date object.                                                                            // 4886
     */                                                                                                               // 4887
    isDate: function( value ) {                                                                                       // 4888
        return {}.toString.call( value ).indexOf( 'Date' ) > -1 && this.isInteger( value.getDate() )                  // 4889
    },                                                                                                                // 4890
                                                                                                                      // 4891
                                                                                                                      // 4892
    /**                                                                                                               // 4893
     * Tell if something is an integer.                                                                               // 4894
     */                                                                                                               // 4895
    isInteger: function( value ) {                                                                                    // 4896
        return {}.toString.call( value ).indexOf( 'Number' ) > -1 && value % 1 === 0                                  // 4897
    },                                                                                                                // 4898
                                                                                                                      // 4899
                                                                                                                      // 4900
    /**                                                                                                               // 4901
     * Create ARIA attribute strings.                                                                                 // 4902
     */                                                                                                               // 4903
    ariaAttr: ariaAttr                                                                                                // 4904
} //PickerConstructor._                                                                                               // 4905
                                                                                                                      // 4906
                                                                                                                      // 4907
                                                                                                                      // 4908
/**                                                                                                                   // 4909
 * Extend the picker with a component and defaults.                                                                   // 4910
 */                                                                                                                   // 4911
PickerConstructor.extend = function( name, Component ) {                                                              // 4912
                                                                                                                      // 4913
    // Extend jQuery.                                                                                                 // 4914
    $.fn[ name ] = function( options, action ) {                                                                      // 4915
                                                                                                                      // 4916
        // Grab the component data.                                                                                   // 4917
        var componentData = this.data( name )                                                                         // 4918
                                                                                                                      // 4919
        // If the picker is requested, return the data object.                                                        // 4920
        if ( options == 'picker' ) {                                                                                  // 4921
            return componentData                                                                                      // 4922
        }                                                                                                             // 4923
                                                                                                                      // 4924
        // If the component data exists and `options` is a string, carry out the action.                              // 4925
        if ( componentData && typeof options == 'string' ) {                                                          // 4926
            return PickerConstructor._.trigger( componentData[ options ], componentData, [ action ] )                 // 4927
        }                                                                                                             // 4928
                                                                                                                      // 4929
        // Otherwise go through each matched element and if the component                                             // 4930
        // doesn’t exist, create a new picker using `this` element                                                    // 4931
        // and merging the defaults and options with a deep copy.                                                     // 4932
        return this.each( function() {                                                                                // 4933
            var $this = $( this )                                                                                     // 4934
            if ( !$this.data( name ) ) {                                                                              // 4935
                new PickerConstructor( this, name, Component, options )                                               // 4936
            }                                                                                                         // 4937
        })                                                                                                            // 4938
    }                                                                                                                 // 4939
                                                                                                                      // 4940
    // Set the defaults.                                                                                              // 4941
    $.fn[ name ].defaults = Component.defaults                                                                        // 4942
} //PickerConstructor.extend                                                                                          // 4943
                                                                                                                      // 4944
                                                                                                                      // 4945
                                                                                                                      // 4946
function aria(element, attribute, value) {                                                                            // 4947
    if ( $.isPlainObject(attribute) ) {                                                                               // 4948
        for ( var key in attribute ) {                                                                                // 4949
            ariaSet(element, key, attribute[key])                                                                     // 4950
        }                                                                                                             // 4951
    }                                                                                                                 // 4952
    else {                                                                                                            // 4953
        ariaSet(element, attribute, value)                                                                            // 4954
    }                                                                                                                 // 4955
}                                                                                                                     // 4956
function ariaSet(element, attribute, value) {                                                                         // 4957
    element.setAttribute(                                                                                             // 4958
        (attribute == 'role' ? '' : 'aria-') + attribute,                                                             // 4959
        value                                                                                                         // 4960
    )                                                                                                                 // 4961
}                                                                                                                     // 4962
function ariaAttr(attribute, data) {                                                                                  // 4963
    if ( !$.isPlainObject(attribute) ) {                                                                              // 4964
        attribute = { attribute: data }                                                                               // 4965
    }                                                                                                                 // 4966
    data = ''                                                                                                         // 4967
    for ( var key in attribute ) {                                                                                    // 4968
        var attr = (key == 'role' ? '' : 'aria-') + key,                                                              // 4969
            attrVal = attribute[key]                                                                                  // 4970
        data += attrVal == null ? '' : attr + '="' + attribute[key] + '"'                                             // 4971
    }                                                                                                                 // 4972
    return data                                                                                                       // 4973
}                                                                                                                     // 4974
                                                                                                                      // 4975
// IE8 bug throws an error for activeElements within iframes.                                                         // 4976
function getActiveElement() {                                                                                         // 4977
    try {                                                                                                             // 4978
        return document.activeElement                                                                                 // 4979
    } catch ( err ) { }                                                                                               // 4980
}                                                                                                                     // 4981
                                                                                                                      // 4982
                                                                                                                      // 4983
                                                                                                                      // 4984
// Expose the picker constructor.                                                                                     // 4985
return PickerConstructor                                                                                              // 4986
                                                                                                                      // 4987
                                                                                                                      // 4988
}));                                                                                                                  // 4989
                                                                                                                      // 4990
                                                                                                                      // 4991
;/*!                                                                                                                  // 4992
 * Date picker for pickadate.js v3.5.0                                                                                // 4993
 * http://amsul.github.io/pickadate.js/date.htm                                                                       // 4994
 */                                                                                                                   // 4995
                                                                                                                      // 4996
(function ( factory ) {                                                                                               // 4997
                                                                                                                      // 4998
    // AMD.                                                                                                           // 4999
    if ( typeof define == 'function' && define.amd )                                                                  // 5000
        define( ['picker', 'jquery'], factory )                                                                       // 5001
                                                                                                                      // 5002
    // Node.js/browserify.                                                                                            // 5003
    else if ( typeof exports == 'object' )                                                                            // 5004
        module.exports = factory( require('./picker.js'), require('jquery') )                                         // 5005
                                                                                                                      // 5006
    // Browser globals.                                                                                               // 5007
    else factory( Picker, jQuery )                                                                                    // 5008
                                                                                                                      // 5009
}(function( Picker, $ ) {                                                                                             // 5010
                                                                                                                      // 5011
                                                                                                                      // 5012
/**                                                                                                                   // 5013
 * Globals and constants                                                                                              // 5014
 */                                                                                                                   // 5015
var DAYS_IN_WEEK = 7,                                                                                                 // 5016
    WEEKS_IN_CALENDAR = 6,                                                                                            // 5017
    _ = Picker._                                                                                                      // 5018
                                                                                                                      // 5019
                                                                                                                      // 5020
                                                                                                                      // 5021
/**                                                                                                                   // 5022
 * The date picker constructor                                                                                        // 5023
 */                                                                                                                   // 5024
function DatePicker( picker, settings ) {                                                                             // 5025
                                                                                                                      // 5026
    var calendar = this,                                                                                              // 5027
        element = picker.$node[ 0 ],                                                                                  // 5028
        elementValue = element.value,                                                                                 // 5029
        elementDataValue = picker.$node.data( 'value' ),                                                              // 5030
        valueString = elementDataValue || elementValue,                                                               // 5031
        formatString = elementDataValue ? settings.formatSubmit : settings.format,                                    // 5032
        isRTL = function() {                                                                                          // 5033
                                                                                                                      // 5034
            return element.currentStyle ?                                                                             // 5035
                                                                                                                      // 5036
                // For IE.                                                                                            // 5037
                element.currentStyle.direction == 'rtl' :                                                             // 5038
                                                                                                                      // 5039
                // For normal browsers.                                                                               // 5040
                getComputedStyle( picker.$root[0] ).direction == 'rtl'                                                // 5041
        }                                                                                                             // 5042
                                                                                                                      // 5043
    calendar.settings = settings                                                                                      // 5044
    calendar.$node = picker.$node                                                                                     // 5045
                                                                                                                      // 5046
    // The queue of methods that will be used to build item objects.                                                  // 5047
    calendar.queue = {                                                                                                // 5048
        min: 'measure create',                                                                                        // 5049
        max: 'measure create',                                                                                        // 5050
        now: 'now create',                                                                                            // 5051
        select: 'parse create validate',                                                                              // 5052
        highlight: 'parse navigate create validate',                                                                  // 5053
        view: 'parse create validate viewset',                                                                        // 5054
        disable: 'deactivate',                                                                                        // 5055
        enable: 'activate'                                                                                            // 5056
    }                                                                                                                 // 5057
                                                                                                                      // 5058
    // The component's item object.                                                                                   // 5059
    calendar.item = {}                                                                                                // 5060
                                                                                                                      // 5061
    calendar.item.clear = null                                                                                        // 5062
    calendar.item.disable = ( settings.disable || [] ).slice( 0 )                                                     // 5063
    calendar.item.enable = -(function( collectionDisabled ) {                                                         // 5064
        return collectionDisabled[ 0 ] === true ? collectionDisabled.shift() : -1                                     // 5065
    })( calendar.item.disable )                                                                                       // 5066
                                                                                                                      // 5067
    calendar.                                                                                                         // 5068
        set( 'min', settings.min ).                                                                                   // 5069
        set( 'max', settings.max ).                                                                                   // 5070
        set( 'now' )                                                                                                  // 5071
                                                                                                                      // 5072
    // When there’s a value, set the `select`, which in turn                                                          // 5073
    // also sets the `highlight` and `view`.                                                                          // 5074
    if ( valueString ) {                                                                                              // 5075
        calendar.set( 'select', valueString, { format: formatString })                                                // 5076
    }                                                                                                                 // 5077
                                                                                                                      // 5078
    // If there’s no value, default to highlighting “today”.                                                          // 5079
    else {                                                                                                            // 5080
        calendar.                                                                                                     // 5081
            set( 'select', null ).                                                                                    // 5082
            set( 'highlight', calendar.item.now )                                                                     // 5083
    }                                                                                                                 // 5084
                                                                                                                      // 5085
                                                                                                                      // 5086
    // The keycode to movement mapping.                                                                               // 5087
    calendar.key = {                                                                                                  // 5088
        40: 7, // Down                                                                                                // 5089
        38: -7, // Up                                                                                                 // 5090
        39: function() { return isRTL() ? -1 : 1 }, // Right                                                          // 5091
        37: function() { return isRTL() ? 1 : -1 }, // Left                                                           // 5092
        go: function( timeChange ) {                                                                                  // 5093
            var highlightedObject = calendar.item.highlight,                                                          // 5094
                targetDate = new Date( highlightedObject.year, highlightedObject.month, highlightedObject.date + timeChange )
            calendar.set(                                                                                             // 5096
                'highlight',                                                                                          // 5097
                targetDate,                                                                                           // 5098
                { interval: timeChange }                                                                              // 5099
            )                                                                                                         // 5100
            this.render()                                                                                             // 5101
        }                                                                                                             // 5102
    }                                                                                                                 // 5103
                                                                                                                      // 5104
                                                                                                                      // 5105
    // Bind some picker events.                                                                                       // 5106
    picker.                                                                                                           // 5107
        on( 'render', function() {                                                                                    // 5108
            picker.$root.find( '.' + settings.klass.selectMonth ).on( 'change', function() {                          // 5109
                var value = this.value                                                                                // 5110
                if ( value ) {                                                                                        // 5111
                    picker.set( 'highlight', [ picker.get( 'view' ).year, value, picker.get( 'highlight' ).date ] )   // 5112
                    picker.$root.find( '.' + settings.klass.selectMonth ).trigger( 'focus' )                          // 5113
                }                                                                                                     // 5114
            })                                                                                                        // 5115
            picker.$root.find( '.' + settings.klass.selectYear ).on( 'change', function() {                           // 5116
                var value = this.value                                                                                // 5117
                if ( value ) {                                                                                        // 5118
                    picker.set( 'highlight', [ value, picker.get( 'view' ).month, picker.get( 'highlight' ).date ] )  // 5119
                    picker.$root.find( '.' + settings.klass.selectYear ).trigger( 'focus' )                           // 5120
                }                                                                                                     // 5121
            })                                                                                                        // 5122
        }, 1 ).                                                                                                       // 5123
        on( 'open', function() {                                                                                      // 5124
            var includeToday = ''                                                                                     // 5125
            if ( calendar.disabled( calendar.get('now') ) ) {                                                         // 5126
                includeToday = ':not(.' + settings.klass.buttonToday + ')'                                            // 5127
            }                                                                                                         // 5128
            picker.$root.find( 'button' + includeToday + ', select' ).attr( 'disabled', false )                       // 5129
        }, 1 ).                                                                                                       // 5130
        on( 'close', function() {                                                                                     // 5131
            picker.$root.find( 'button, select' ).attr( 'disabled', true )                                            // 5132
        }, 1 )                                                                                                        // 5133
                                                                                                                      // 5134
} //DatePicker                                                                                                        // 5135
                                                                                                                      // 5136
                                                                                                                      // 5137
/**                                                                                                                   // 5138
 * Set a datepicker item object.                                                                                      // 5139
 */                                                                                                                   // 5140
DatePicker.prototype.set = function( type, value, options ) {                                                         // 5141
                                                                                                                      // 5142
    var calendar = this,                                                                                              // 5143
        calendarItem = calendar.item                                                                                  // 5144
                                                                                                                      // 5145
    // If the value is `null` just set it immediately.                                                                // 5146
    if ( value === null ) {                                                                                           // 5147
        if ( type == 'clear' ) type = 'select'                                                                        // 5148
        calendarItem[ type ] = value                                                                                  // 5149
        return calendar                                                                                               // 5150
    }                                                                                                                 // 5151
                                                                                                                      // 5152
    // Otherwise go through the queue of methods, and invoke the functions.                                           // 5153
    // Update this as the time unit, and set the final value as this item.                                            // 5154
    // * In the case of `enable`, keep the queue but set `disable` instead.                                           // 5155
    //   And in the case of `flip`, keep the queue but set `enable` instead.                                          // 5156
    calendarItem[ ( type == 'enable' ? 'disable' : type == 'flip' ? 'enable' : type ) ] = calendar.queue[ type ].split( ' ' ).map( function( method ) {
        value = calendar[ method ]( type, value, options )                                                            // 5158
        return value                                                                                                  // 5159
    }).pop()                                                                                                          // 5160
                                                                                                                      // 5161
    // Check if we need to cascade through more updates.                                                              // 5162
    if ( type == 'select' ) {                                                                                         // 5163
        calendar.set( 'highlight', calendarItem.select, options )                                                     // 5164
    }                                                                                                                 // 5165
    else if ( type == 'highlight' ) {                                                                                 // 5166
        calendar.set( 'view', calendarItem.highlight, options )                                                       // 5167
    }                                                                                                                 // 5168
    else if ( type.match( /^(flip|min|max|disable|enable)$/ ) ) {                                                     // 5169
        if ( calendarItem.select && calendar.disabled( calendarItem.select ) ) {                                      // 5170
            calendar.set( 'select', calendarItem.select, options )                                                    // 5171
        }                                                                                                             // 5172
        if ( calendarItem.highlight && calendar.disabled( calendarItem.highlight ) ) {                                // 5173
            calendar.set( 'highlight', calendarItem.highlight, options )                                              // 5174
        }                                                                                                             // 5175
    }                                                                                                                 // 5176
                                                                                                                      // 5177
    return calendar                                                                                                   // 5178
} //DatePicker.prototype.set                                                                                          // 5179
                                                                                                                      // 5180
                                                                                                                      // 5181
/**                                                                                                                   // 5182
 * Get a datepicker item object.                                                                                      // 5183
 */                                                                                                                   // 5184
DatePicker.prototype.get = function( type ) {                                                                         // 5185
    return this.item[ type ]                                                                                          // 5186
} //DatePicker.prototype.get                                                                                          // 5187
                                                                                                                      // 5188
                                                                                                                      // 5189
/**                                                                                                                   // 5190
 * Create a picker date object.                                                                                       // 5191
 */                                                                                                                   // 5192
DatePicker.prototype.create = function( type, value, options ) {                                                      // 5193
                                                                                                                      // 5194
    var isInfiniteValue,                                                                                              // 5195
        calendar = this                                                                                               // 5196
                                                                                                                      // 5197
    // If there’s no value, use the type as the value.                                                                // 5198
    value = value === undefined ? type : value                                                                        // 5199
                                                                                                                      // 5200
                                                                                                                      // 5201
    // If it’s infinity, update the value.                                                                            // 5202
    if ( value == -Infinity || value == Infinity ) {                                                                  // 5203
        isInfiniteValue = value                                                                                       // 5204
    }                                                                                                                 // 5205
                                                                                                                      // 5206
    // If it’s an object, use the native date object.                                                                 // 5207
    else if ( $.isPlainObject( value ) && _.isInteger( value.pick ) ) {                                               // 5208
        value = value.obj                                                                                             // 5209
    }                                                                                                                 // 5210
                                                                                                                      // 5211
    // If it’s an array, convert it into a date and make sure                                                         // 5212
    // that it’s a valid date – otherwise default to today.                                                           // 5213
    else if ( $.isArray( value ) ) {                                                                                  // 5214
        value = new Date( value[ 0 ], value[ 1 ], value[ 2 ] )                                                        // 5215
        value = _.isDate( value ) ? value : calendar.create().obj                                                     // 5216
    }                                                                                                                 // 5217
                                                                                                                      // 5218
    // If it’s a number or date object, make a normalized date.                                                       // 5219
    else if ( _.isInteger( value ) || _.isDate( value ) ) {                                                           // 5220
        value = calendar.normalize( new Date( value ), options )                                                      // 5221
    }                                                                                                                 // 5222
                                                                                                                      // 5223
    // If it’s a literal true or any other case, set it to now.                                                       // 5224
    else /*if ( value === true )*/ {                                                                                  // 5225
        value = calendar.now( type, value, options )                                                                  // 5226
    }                                                                                                                 // 5227
                                                                                                                      // 5228
    // Return the compiled object.                                                                                    // 5229
    return {                                                                                                          // 5230
        year: isInfiniteValue || value.getFullYear(),                                                                 // 5231
        month: isInfiniteValue || value.getMonth(),                                                                   // 5232
        date: isInfiniteValue || value.getDate(),                                                                     // 5233
        day: isInfiniteValue || value.getDay(),                                                                       // 5234
        obj: isInfiniteValue || value,                                                                                // 5235
        pick: isInfiniteValue || value.getTime()                                                                      // 5236
    }                                                                                                                 // 5237
} //DatePicker.prototype.create                                                                                       // 5238
                                                                                                                      // 5239
                                                                                                                      // 5240
/**                                                                                                                   // 5241
 * Create a range limit object using an array, date object,                                                           // 5242
 * literal “true”, or integer relative to another time.                                                               // 5243
 */                                                                                                                   // 5244
DatePicker.prototype.createRange = function( from, to ) {                                                             // 5245
                                                                                                                      // 5246
    var calendar = this,                                                                                              // 5247
        createDate = function( date ) {                                                                               // 5248
            if ( date === true || $.isArray( date ) || _.isDate( date ) ) {                                           // 5249
                return calendar.create( date )                                                                        // 5250
            }                                                                                                         // 5251
            return date                                                                                               // 5252
        }                                                                                                             // 5253
                                                                                                                      // 5254
    // Create objects if possible.                                                                                    // 5255
    if ( !_.isInteger( from ) ) {                                                                                     // 5256
        from = createDate( from )                                                                                     // 5257
    }                                                                                                                 // 5258
    if ( !_.isInteger( to ) ) {                                                                                       // 5259
        to = createDate( to )                                                                                         // 5260
    }                                                                                                                 // 5261
                                                                                                                      // 5262
    // Create relative dates.                                                                                         // 5263
    if ( _.isInteger( from ) && $.isPlainObject( to ) ) {                                                             // 5264
        from = [ to.year, to.month, to.date + from ];                                                                 // 5265
    }                                                                                                                 // 5266
    else if ( _.isInteger( to ) && $.isPlainObject( from ) ) {                                                        // 5267
        to = [ from.year, from.month, from.date + to ];                                                               // 5268
    }                                                                                                                 // 5269
                                                                                                                      // 5270
    return {                                                                                                          // 5271
        from: createDate( from ),                                                                                     // 5272
        to: createDate( to )                                                                                          // 5273
    }                                                                                                                 // 5274
} //DatePicker.prototype.createRange                                                                                  // 5275
                                                                                                                      // 5276
                                                                                                                      // 5277
/**                                                                                                                   // 5278
 * Check if a date unit falls within a date range object.                                                             // 5279
 */                                                                                                                   // 5280
DatePicker.prototype.withinRange = function( range, dateUnit ) {                                                      // 5281
    range = this.createRange(range.from, range.to)                                                                    // 5282
    return dateUnit.pick >= range.from.pick && dateUnit.pick <= range.to.pick                                         // 5283
}                                                                                                                     // 5284
                                                                                                                      // 5285
                                                                                                                      // 5286
/**                                                                                                                   // 5287
 * Check if two date range objects overlap.                                                                           // 5288
 */                                                                                                                   // 5289
DatePicker.prototype.overlapRanges = function( one, two ) {                                                           // 5290
                                                                                                                      // 5291
    var calendar = this                                                                                               // 5292
                                                                                                                      // 5293
    // Convert the ranges into comparable dates.                                                                      // 5294
    one = calendar.createRange( one.from, one.to )                                                                    // 5295
    two = calendar.createRange( two.from, two.to )                                                                    // 5296
                                                                                                                      // 5297
    return calendar.withinRange( one, two.from ) || calendar.withinRange( one, two.to ) ||                            // 5298
        calendar.withinRange( two, one.from ) || calendar.withinRange( two, one.to )                                  // 5299
}                                                                                                                     // 5300
                                                                                                                      // 5301
                                                                                                                      // 5302
/**                                                                                                                   // 5303
 * Get the date today.                                                                                                // 5304
 */                                                                                                                   // 5305
DatePicker.prototype.now = function( type, value, options ) {                                                         // 5306
    value = new Date()                                                                                                // 5307
    if ( options && options.rel ) {                                                                                   // 5308
        value.setDate( value.getDate() + options.rel )                                                                // 5309
    }                                                                                                                 // 5310
    return this.normalize( value, options )                                                                           // 5311
}                                                                                                                     // 5312
                                                                                                                      // 5313
                                                                                                                      // 5314
/**                                                                                                                   // 5315
 * Navigate to next/prev month.                                                                                       // 5316
 */                                                                                                                   // 5317
DatePicker.prototype.navigate = function( type, value, options ) {                                                    // 5318
                                                                                                                      // 5319
    var targetDateObject,                                                                                             // 5320
        targetYear,                                                                                                   // 5321
        targetMonth,                                                                                                  // 5322
        targetDate,                                                                                                   // 5323
        isTargetArray = $.isArray( value ),                                                                           // 5324
        isTargetObject = $.isPlainObject( value ),                                                                    // 5325
        viewsetObject = this.item.view/*,                                                                             // 5326
        safety = 100*/                                                                                                // 5327
                                                                                                                      // 5328
                                                                                                                      // 5329
    if ( isTargetArray || isTargetObject ) {                                                                          // 5330
                                                                                                                      // 5331
        if ( isTargetObject ) {                                                                                       // 5332
            targetYear = value.year                                                                                   // 5333
            targetMonth = value.month                                                                                 // 5334
            targetDate = value.date                                                                                   // 5335
        }                                                                                                             // 5336
        else {                                                                                                        // 5337
            targetYear = +value[0]                                                                                    // 5338
            targetMonth = +value[1]                                                                                   // 5339
            targetDate = +value[2]                                                                                    // 5340
        }                                                                                                             // 5341
                                                                                                                      // 5342
        // If we’re navigating months but the view is in a different                                                  // 5343
        // month, navigate to the view’s year and month.                                                              // 5344
        if ( options && options.nav && viewsetObject && viewsetObject.month !== targetMonth ) {                       // 5345
            targetYear = viewsetObject.year                                                                           // 5346
            targetMonth = viewsetObject.month                                                                         // 5347
        }                                                                                                             // 5348
                                                                                                                      // 5349
        // Figure out the expected target year and month.                                                             // 5350
        targetDateObject = new Date( targetYear, targetMonth + ( options && options.nav ? options.nav : 0 ), 1 )      // 5351
        targetYear = targetDateObject.getFullYear()                                                                   // 5352
        targetMonth = targetDateObject.getMonth()                                                                     // 5353
                                                                                                                      // 5354
        // If the month we’re going to doesn’t have enough days,                                                      // 5355
        // keep decreasing the date until we reach the month’s last date.                                             // 5356
        while ( /*safety &&*/ new Date( targetYear, targetMonth, targetDate ).getMonth() !== targetMonth ) {          // 5357
            targetDate -= 1                                                                                           // 5358
            /*safety -= 1                                                                                             // 5359
            if ( !safety ) {                                                                                          // 5360
                throw 'Fell into an infinite loop while navigating to ' + new Date( targetYear, targetMonth, targetDate ) + '.'
            }*/                                                                                                       // 5362
        }                                                                                                             // 5363
                                                                                                                      // 5364
        value = [ targetYear, targetMonth, targetDate ]                                                               // 5365
    }                                                                                                                 // 5366
                                                                                                                      // 5367
    return value                                                                                                      // 5368
} //DatePicker.prototype.navigate                                                                                     // 5369
                                                                                                                      // 5370
                                                                                                                      // 5371
/**                                                                                                                   // 5372
 * Normalize a date by setting the hours to midnight.                                                                 // 5373
 */                                                                                                                   // 5374
DatePicker.prototype.normalize = function( value/*, options*/ ) {                                                     // 5375
    value.setHours( 0, 0, 0, 0 )                                                                                      // 5376
    return value                                                                                                      // 5377
}                                                                                                                     // 5378
                                                                                                                      // 5379
                                                                                                                      // 5380
/**                                                                                                                   // 5381
 * Measure the range of dates.                                                                                        // 5382
 */                                                                                                                   // 5383
DatePicker.prototype.measure = function( type, value/*, options*/ ) {                                                 // 5384
                                                                                                                      // 5385
    var calendar = this                                                                                               // 5386
                                                                                                                      // 5387
    // If it’s anything false-y, remove the limits.                                                                   // 5388
    if ( !value ) {                                                                                                   // 5389
        value = type == 'min' ? -Infinity : Infinity                                                                  // 5390
    }                                                                                                                 // 5391
                                                                                                                      // 5392
    // If it’s a string, parse it.                                                                                    // 5393
    else if ( typeof value == 'string' ) {                                                                            // 5394
        value = calendar.parse( type, value )                                                                         // 5395
    }                                                                                                                 // 5396
                                                                                                                      // 5397
    // If it's an integer, get a date relative to today.                                                              // 5398
    else if ( _.isInteger( value ) ) {                                                                                // 5399
        value = calendar.now( type, value, { rel: value } )                                                           // 5400
    }                                                                                                                 // 5401
                                                                                                                      // 5402
    return value                                                                                                      // 5403
} ///DatePicker.prototype.measure                                                                                     // 5404
                                                                                                                      // 5405
                                                                                                                      // 5406
/**                                                                                                                   // 5407
 * Create a viewset object based on navigation.                                                                       // 5408
 */                                                                                                                   // 5409
DatePicker.prototype.viewset = function( type, dateObject/*, options*/ ) {                                            // 5410
    return this.create([ dateObject.year, dateObject.month, 1 ])                                                      // 5411
}                                                                                                                     // 5412
                                                                                                                      // 5413
                                                                                                                      // 5414
/**                                                                                                                   // 5415
 * Validate a date as enabled and shift if needed.                                                                    // 5416
 */                                                                                                                   // 5417
DatePicker.prototype.validate = function( type, dateObject, options ) {                                               // 5418
                                                                                                                      // 5419
    var calendar = this,                                                                                              // 5420
                                                                                                                      // 5421
        // Keep a reference to the original date.                                                                     // 5422
        originalDateObject = dateObject,                                                                              // 5423
                                                                                                                      // 5424
        // Make sure we have an interval.                                                                             // 5425
        interval = options && options.interval ? options.interval : 1,                                                // 5426
                                                                                                                      // 5427
        // Check if the calendar enabled dates are inverted.                                                          // 5428
        isFlippedBase = calendar.item.enable === -1,                                                                  // 5429
                                                                                                                      // 5430
        // Check if we have any enabled dates after/before now.                                                       // 5431
        hasEnabledBeforeTarget, hasEnabledAfterTarget,                                                                // 5432
                                                                                                                      // 5433
        // The min & max limits.                                                                                      // 5434
        minLimitObject = calendar.item.min,                                                                           // 5435
        maxLimitObject = calendar.item.max,                                                                           // 5436
                                                                                                                      // 5437
        // Check if we’ve reached the limit during shifting.                                                          // 5438
        reachedMin, reachedMax,                                                                                       // 5439
                                                                                                                      // 5440
        // Check if the calendar is inverted and at least one weekday is enabled.                                     // 5441
        hasEnabledWeekdays = isFlippedBase && calendar.item.disable.filter( function( value ) {                       // 5442
                                                                                                                      // 5443
            // If there’s a date, check where it is relative to the target.                                           // 5444
            if ( $.isArray( value ) ) {                                                                               // 5445
                var dateTime = calendar.create( value ).pick                                                          // 5446
                if ( dateTime < dateObject.pick ) hasEnabledBeforeTarget = true                                       // 5447
                else if ( dateTime > dateObject.pick ) hasEnabledAfterTarget = true                                   // 5448
            }                                                                                                         // 5449
                                                                                                                      // 5450
            // Return only integers for enabled weekdays.                                                             // 5451
            return _.isInteger( value )                                                                               // 5452
        }).length/*,                                                                                                  // 5453
                                                                                                                      // 5454
        safety = 100*/                                                                                                // 5455
                                                                                                                      // 5456
                                                                                                                      // 5457
                                                                                                                      // 5458
    // Cases to validate for:                                                                                         // 5459
    // [1] Not inverted and date disabled.                                                                            // 5460
    // [2] Inverted and some dates enabled.                                                                           // 5461
    // [3] Not inverted and out of range.                                                                             // 5462
    //                                                                                                                // 5463
    // Cases to **not** validate for:                                                                                 // 5464
    // • Navigating months.                                                                                           // 5465
    // • Not inverted and date enabled.                                                                               // 5466
    // • Inverted and all dates disabled.                                                                             // 5467
    // • ..and anything else.                                                                                         // 5468
    if ( !options || !options.nav ) if (                                                                              // 5469
        /* 1 */ ( !isFlippedBase && calendar.disabled( dateObject ) ) ||                                              // 5470
        /* 2 */ ( isFlippedBase && calendar.disabled( dateObject ) && ( hasEnabledWeekdays || hasEnabledBeforeTarget || hasEnabledAfterTarget ) ) ||
        /* 3 */ ( !isFlippedBase && (dateObject.pick <= minLimitObject.pick || dateObject.pick >= maxLimitObject.pick) )
    ) {                                                                                                               // 5473
                                                                                                                      // 5474
                                                                                                                      // 5475
        // When inverted, flip the direction if there aren’t any enabled weekdays                                     // 5476
        // and there are no enabled dates in the direction of the interval.                                           // 5477
        if ( isFlippedBase && !hasEnabledWeekdays && ( ( !hasEnabledAfterTarget && interval > 0 ) || ( !hasEnabledBeforeTarget && interval < 0 ) ) ) {
            interval *= -1                                                                                            // 5479
        }                                                                                                             // 5480
                                                                                                                      // 5481
                                                                                                                      // 5482
        // Keep looping until we reach an enabled date.                                                               // 5483
        while ( /*safety &&*/ calendar.disabled( dateObject ) ) {                                                     // 5484
                                                                                                                      // 5485
            /*safety -= 1                                                                                             // 5486
            if ( !safety ) {                                                                                          // 5487
                throw 'Fell into an infinite loop while validating ' + dateObject.obj + '.'                           // 5488
            }*/                                                                                                       // 5489
                                                                                                                      // 5490
                                                                                                                      // 5491
            // If we’ve looped into the next/prev month with a large interval, return to the original date and flatten the interval.
            if ( Math.abs( interval ) > 1 && ( dateObject.month < originalDateObject.month || dateObject.month > originalDateObject.month ) ) {
                dateObject = originalDateObject                                                                       // 5494
                interval = interval > 0 ? 1 : -1                                                                      // 5495
            }                                                                                                         // 5496
                                                                                                                      // 5497
                                                                                                                      // 5498
            // If we’ve reached the min/max limit, reverse the direction, flatten the interval and set it to the limit.
            if ( dateObject.pick <= minLimitObject.pick ) {                                                           // 5500
                reachedMin = true                                                                                     // 5501
                interval = 1                                                                                          // 5502
                dateObject = calendar.create([                                                                        // 5503
                    minLimitObject.year,                                                                              // 5504
                    minLimitObject.month,                                                                             // 5505
                    minLimitObject.date + (dateObject.pick === minLimitObject.pick ? 0 : -1)                          // 5506
                ])                                                                                                    // 5507
            }                                                                                                         // 5508
            else if ( dateObject.pick >= maxLimitObject.pick ) {                                                      // 5509
                reachedMax = true                                                                                     // 5510
                interval = -1                                                                                         // 5511
                dateObject = calendar.create([                                                                        // 5512
                    maxLimitObject.year,                                                                              // 5513
                    maxLimitObject.month,                                                                             // 5514
                    maxLimitObject.date + (dateObject.pick === maxLimitObject.pick ? 0 : 1)                           // 5515
                ])                                                                                                    // 5516
            }                                                                                                         // 5517
                                                                                                                      // 5518
                                                                                                                      // 5519
            // If we’ve reached both limits, just break out of the loop.                                              // 5520
            if ( reachedMin && reachedMax ) {                                                                         // 5521
                break                                                                                                 // 5522
            }                                                                                                         // 5523
                                                                                                                      // 5524
                                                                                                                      // 5525
            // Finally, create the shifted date using the interval and keep looping.                                  // 5526
            dateObject = calendar.create([ dateObject.year, dateObject.month, dateObject.date + interval ])           // 5527
        }                                                                                                             // 5528
                                                                                                                      // 5529
    } //endif                                                                                                         // 5530
                                                                                                                      // 5531
                                                                                                                      // 5532
    // Return the date object settled on.                                                                             // 5533
    return dateObject                                                                                                 // 5534
} //DatePicker.prototype.validate                                                                                     // 5535
                                                                                                                      // 5536
                                                                                                                      // 5537
/**                                                                                                                   // 5538
 * Check if a date is disabled.                                                                                       // 5539
 */                                                                                                                   // 5540
DatePicker.prototype.disabled = function( dateToVerify ) {                                                            // 5541
                                                                                                                      // 5542
    var                                                                                                               // 5543
        calendar = this,                                                                                              // 5544
                                                                                                                      // 5545
        // Filter through the disabled dates to check if this is one.                                                 // 5546
        isDisabledMatch = calendar.item.disable.filter( function( dateToDisable ) {                                   // 5547
                                                                                                                      // 5548
            // If the date is a number, match the weekday with 0index and `firstDay` check.                           // 5549
            if ( _.isInteger( dateToDisable ) ) {                                                                     // 5550
                return dateToVerify.day === ( calendar.settings.firstDay ? dateToDisable : dateToDisable - 1 ) % 7    // 5551
            }                                                                                                         // 5552
                                                                                                                      // 5553
            // If it’s an array or a native JS date, create and match the exact date.                                 // 5554
            if ( $.isArray( dateToDisable ) || _.isDate( dateToDisable ) ) {                                          // 5555
                return dateToVerify.pick === calendar.create( dateToDisable ).pick                                    // 5556
            }                                                                                                         // 5557
                                                                                                                      // 5558
            // If it’s an object, match a date within the “from” and “to” range.                                      // 5559
            if ( $.isPlainObject( dateToDisable ) ) {                                                                 // 5560
                return calendar.withinRange( dateToDisable, dateToVerify )                                            // 5561
            }                                                                                                         // 5562
        })                                                                                                            // 5563
                                                                                                                      // 5564
    // If this date matches a disabled date, confirm it’s not inverted.                                               // 5565
    isDisabledMatch = isDisabledMatch.length && !isDisabledMatch.filter(function( dateToDisable ) {                   // 5566
        return $.isArray( dateToDisable ) && dateToDisable[3] == 'inverted' ||                                        // 5567
            $.isPlainObject( dateToDisable ) && dateToDisable.inverted                                                // 5568
    }).length                                                                                                         // 5569
                                                                                                                      // 5570
    // Check the calendar “enabled” flag and respectively flip the                                                    // 5571
    // disabled state. Then also check if it’s beyond the min/max limits.                                             // 5572
    return calendar.item.enable === -1 ? !isDisabledMatch : isDisabledMatch ||                                        // 5573
        dateToVerify.pick < calendar.item.min.pick ||                                                                 // 5574
        dateToVerify.pick > calendar.item.max.pick                                                                    // 5575
                                                                                                                      // 5576
} //DatePicker.prototype.disabled                                                                                     // 5577
                                                                                                                      // 5578
                                                                                                                      // 5579
/**                                                                                                                   // 5580
 * Parse a string into a usable type.                                                                                 // 5581
 */                                                                                                                   // 5582
DatePicker.prototype.parse = function( type, value, options ) {                                                       // 5583
                                                                                                                      // 5584
    var calendar = this,                                                                                              // 5585
        parsingObject = {}                                                                                            // 5586
                                                                                                                      // 5587
    // If it’s already parsed, we’re good.                                                                            // 5588
    if ( !value || typeof value != 'string' ) {                                                                       // 5589
        return value                                                                                                  // 5590
    }                                                                                                                 // 5591
                                                                                                                      // 5592
    // We need a `.format` to parse the value with.                                                                   // 5593
    if ( !( options && options.format ) ) {                                                                           // 5594
        options = options || {}                                                                                       // 5595
        options.format = calendar.settings.format                                                                     // 5596
    }                                                                                                                 // 5597
                                                                                                                      // 5598
    // Convert the format into an array and then map through it.                                                      // 5599
    calendar.formats.toArray( options.format ).map( function( label ) {                                               // 5600
                                                                                                                      // 5601
        var                                                                                                           // 5602
            // Grab the formatting label.                                                                             // 5603
            formattingLabel = calendar.formats[ label ],                                                              // 5604
                                                                                                                      // 5605
            // The format length is from the formatting label function or the                                         // 5606
            // label length without the escaping exclamation (!) mark.                                                // 5607
            formatLength = formattingLabel ? _.trigger( formattingLabel, calendar, [ value, parsingObject ] ) : label.replace( /^!/, '' ).length
                                                                                                                      // 5609
        // If there's a format label, split the value up to the format length.                                        // 5610
        // Then add it to the parsing object with appropriate label.                                                  // 5611
        if ( formattingLabel ) {                                                                                      // 5612
            parsingObject[ label ] = value.substr( 0, formatLength )                                                  // 5613
        }                                                                                                             // 5614
                                                                                                                      // 5615
        // Update the value as the substring from format length to end.                                               // 5616
        value = value.substr( formatLength )                                                                          // 5617
    })                                                                                                                // 5618
                                                                                                                      // 5619
    // Compensate for month 0index.                                                                                   // 5620
    return [                                                                                                          // 5621
        parsingObject.yyyy || parsingObject.yy,                                                                       // 5622
        +( parsingObject.mm || parsingObject.m ) - 1,                                                                 // 5623
        parsingObject.dd || parsingObject.d                                                                           // 5624
    ]                                                                                                                 // 5625
} //DatePicker.prototype.parse                                                                                        // 5626
                                                                                                                      // 5627
                                                                                                                      // 5628
/**                                                                                                                   // 5629
 * Various formats to display the object in.                                                                          // 5630
 */                                                                                                                   // 5631
DatePicker.prototype.formats = (function() {                                                                          // 5632
                                                                                                                      // 5633
    // Return the length of the first word in a collection.                                                           // 5634
    function getWordLengthFromCollection( string, collection, dateObject ) {                                          // 5635
                                                                                                                      // 5636
        // Grab the first word from the string.                                                                       // 5637
        var word = string.match( /\w+/ )[ 0 ]                                                                         // 5638
                                                                                                                      // 5639
        // If there's no month index, add it to the date object                                                       // 5640
        if ( !dateObject.mm && !dateObject.m ) {                                                                      // 5641
            dateObject.m = collection.indexOf( word ) + 1                                                             // 5642
        }                                                                                                             // 5643
                                                                                                                      // 5644
        // Return the length of the word.                                                                             // 5645
        return word.length                                                                                            // 5646
    }                                                                                                                 // 5647
                                                                                                                      // 5648
    // Get the length of the first word in a string.                                                                  // 5649
    function getFirstWordLength( string ) {                                                                           // 5650
        return string.match( /\w+/ )[ 0 ].length                                                                      // 5651
    }                                                                                                                 // 5652
                                                                                                                      // 5653
    return {                                                                                                          // 5654
                                                                                                                      // 5655
        d: function( string, dateObject ) {                                                                           // 5656
                                                                                                                      // 5657
            // If there's string, then get the digits length.                                                         // 5658
            // Otherwise return the selected date.                                                                    // 5659
            return string ? _.digits( string ) : dateObject.date                                                      // 5660
        },                                                                                                            // 5661
        dd: function( string, dateObject ) {                                                                          // 5662
                                                                                                                      // 5663
            // If there's a string, then the length is always 2.                                                      // 5664
            // Otherwise return the selected date with a leading zero.                                                // 5665
            return string ? 2 : _.lead( dateObject.date )                                                             // 5666
        },                                                                                                            // 5667
        ddd: function( string, dateObject ) {                                                                         // 5668
                                                                                                                      // 5669
            // If there's a string, then get the length of the first word.                                            // 5670
            // Otherwise return the short selected weekday.                                                           // 5671
            return string ? getFirstWordLength( string ) : this.settings.weekdaysShort[ dateObject.day ]              // 5672
        },                                                                                                            // 5673
        dddd: function( string, dateObject ) {                                                                        // 5674
                                                                                                                      // 5675
            // If there's a string, then get the length of the first word.                                            // 5676
            // Otherwise return the full selected weekday.                                                            // 5677
            return string ? getFirstWordLength( string ) : this.settings.weekdaysFull[ dateObject.day ]               // 5678
        },                                                                                                            // 5679
        m: function( string, dateObject ) {                                                                           // 5680
                                                                                                                      // 5681
            // If there's a string, then get the length of the digits                                                 // 5682
            // Otherwise return the selected month with 0index compensation.                                          // 5683
            return string ? _.digits( string ) : dateObject.month + 1                                                 // 5684
        },                                                                                                            // 5685
        mm: function( string, dateObject ) {                                                                          // 5686
                                                                                                                      // 5687
            // If there's a string, then the length is always 2.                                                      // 5688
            // Otherwise return the selected month with 0index and leading zero.                                      // 5689
            return string ? 2 : _.lead( dateObject.month + 1 )                                                        // 5690
        },                                                                                                            // 5691
        mmm: function( string, dateObject ) {                                                                         // 5692
                                                                                                                      // 5693
            var collection = this.settings.monthsShort                                                                // 5694
                                                                                                                      // 5695
            // If there's a string, get length of the relevant month from the short                                   // 5696
            // months collection. Otherwise return the selected month from that collection.                           // 5697
            return string ? getWordLengthFromCollection( string, collection, dateObject ) : collection[ dateObject.month ]
        },                                                                                                            // 5699
        mmmm: function( string, dateObject ) {                                                                        // 5700
                                                                                                                      // 5701
            var collection = this.settings.monthsFull                                                                 // 5702
                                                                                                                      // 5703
            // If there's a string, get length of the relevant month from the full                                    // 5704
            // months collection. Otherwise return the selected month from that collection.                           // 5705
            return string ? getWordLengthFromCollection( string, collection, dateObject ) : collection[ dateObject.month ]
        },                                                                                                            // 5707
        yy: function( string, dateObject ) {                                                                          // 5708
                                                                                                                      // 5709
            // If there's a string, then the length is always 2.                                                      // 5710
            // Otherwise return the selected year by slicing out the first 2 digits.                                  // 5711
            return string ? 2 : ( '' + dateObject.year ).slice( 2 )                                                   // 5712
        },                                                                                                            // 5713
        yyyy: function( string, dateObject ) {                                                                        // 5714
                                                                                                                      // 5715
            // If there's a string, then the length is always 4.                                                      // 5716
            // Otherwise return the selected year.                                                                    // 5717
            return string ? 4 : dateObject.year                                                                       // 5718
        },                                                                                                            // 5719
                                                                                                                      // 5720
        // Create an array by splitting the formatting string passed.                                                 // 5721
        toArray: function( formatString ) { return formatString.split( /(d{1,4}|m{1,4}|y{4}|yy|!.)/g ) },             // 5722
                                                                                                                      // 5723
        // Format an object into a string using the formatting options.                                               // 5724
        toString: function ( formatString, itemObject ) {                                                             // 5725
            var calendar = this                                                                                       // 5726
            return calendar.formats.toArray( formatString ).map( function( label ) {                                  // 5727
                return _.trigger( calendar.formats[ label ], calendar, [ 0, itemObject ] ) || label.replace( /^!/, '' )
            }).join( '' )                                                                                             // 5729
        }                                                                                                             // 5730
    }                                                                                                                 // 5731
})() //DatePicker.prototype.formats                                                                                   // 5732
                                                                                                                      // 5733
                                                                                                                      // 5734
                                                                                                                      // 5735
                                                                                                                      // 5736
/**                                                                                                                   // 5737
 * Check if two date units are the exact.                                                                             // 5738
 */                                                                                                                   // 5739
DatePicker.prototype.isDateExact = function( one, two ) {                                                             // 5740
                                                                                                                      // 5741
    var calendar = this                                                                                               // 5742
                                                                                                                      // 5743
    // When we’re working with weekdays, do a direct comparison.                                                      // 5744
    if (                                                                                                              // 5745
        ( _.isInteger( one ) && _.isInteger( two ) ) ||                                                               // 5746
        ( typeof one == 'boolean' && typeof two == 'boolean' )                                                        // 5747
     ) {                                                                                                              // 5748
        return one === two                                                                                            // 5749
    }                                                                                                                 // 5750
                                                                                                                      // 5751
    // When we’re working with date representations, compare the “pick” value.                                        // 5752
    if (                                                                                                              // 5753
        ( _.isDate( one ) || $.isArray( one ) ) &&                                                                    // 5754
        ( _.isDate( two ) || $.isArray( two ) )                                                                       // 5755
    ) {                                                                                                               // 5756
        return calendar.create( one ).pick === calendar.create( two ).pick                                            // 5757
    }                                                                                                                 // 5758
                                                                                                                      // 5759
    // When we’re working with range objects, compare the “from” and “to”.                                            // 5760
    if ( $.isPlainObject( one ) && $.isPlainObject( two ) ) {                                                         // 5761
        return calendar.isDateExact( one.from, two.from ) && calendar.isDateExact( one.to, two.to )                   // 5762
    }                                                                                                                 // 5763
                                                                                                                      // 5764
    return false                                                                                                      // 5765
}                                                                                                                     // 5766
                                                                                                                      // 5767
                                                                                                                      // 5768
/**                                                                                                                   // 5769
 * Check if two date units overlap.                                                                                   // 5770
 */                                                                                                                   // 5771
DatePicker.prototype.isDateOverlap = function( one, two ) {                                                           // 5772
                                                                                                                      // 5773
    var calendar = this,                                                                                              // 5774
        firstDay = calendar.settings.firstDay ? 1 : 0                                                                 // 5775
                                                                                                                      // 5776
    // When we’re working with a weekday index, compare the days.                                                     // 5777
    if ( _.isInteger( one ) && ( _.isDate( two ) || $.isArray( two ) ) ) {                                            // 5778
        one = one % 7 + firstDay                                                                                      // 5779
        return one === calendar.create( two ).day + 1                                                                 // 5780
    }                                                                                                                 // 5781
    if ( _.isInteger( two ) && ( _.isDate( one ) || $.isArray( one ) ) ) {                                            // 5782
        two = two % 7 + firstDay                                                                                      // 5783
        return two === calendar.create( one ).day + 1                                                                 // 5784
    }                                                                                                                 // 5785
                                                                                                                      // 5786
    // When we’re working with range objects, check if the ranges overlap.                                            // 5787
    if ( $.isPlainObject( one ) && $.isPlainObject( two ) ) {                                                         // 5788
        return calendar.overlapRanges( one, two )                                                                     // 5789
    }                                                                                                                 // 5790
                                                                                                                      // 5791
    return false                                                                                                      // 5792
}                                                                                                                     // 5793
                                                                                                                      // 5794
                                                                                                                      // 5795
/**                                                                                                                   // 5796
 * Flip the “enabled” state.                                                                                          // 5797
 */                                                                                                                   // 5798
DatePicker.prototype.flipEnable = function(val) {                                                                     // 5799
    var itemObject = this.item                                                                                        // 5800
    itemObject.enable = val || (itemObject.enable == -1 ? 1 : -1)                                                     // 5801
}                                                                                                                     // 5802
                                                                                                                      // 5803
                                                                                                                      // 5804
/**                                                                                                                   // 5805
 * Mark a collection of dates as “disabled”.                                                                          // 5806
 */                                                                                                                   // 5807
DatePicker.prototype.deactivate = function( type, datesToDisable ) {                                                  // 5808
                                                                                                                      // 5809
    var calendar = this,                                                                                              // 5810
        disabledItems = calendar.item.disable.slice(0)                                                                // 5811
                                                                                                                      // 5812
                                                                                                                      // 5813
    // If we’re flipping, that’s all we need to do.                                                                   // 5814
    if ( datesToDisable == 'flip' ) {                                                                                 // 5815
        calendar.flipEnable()                                                                                         // 5816
    }                                                                                                                 // 5817
                                                                                                                      // 5818
    else if ( datesToDisable === false ) {                                                                            // 5819
        calendar.flipEnable(1)                                                                                        // 5820
        disabledItems = []                                                                                            // 5821
    }                                                                                                                 // 5822
                                                                                                                      // 5823
    else if ( datesToDisable === true ) {                                                                             // 5824
        calendar.flipEnable(-1)                                                                                       // 5825
        disabledItems = []                                                                                            // 5826
    }                                                                                                                 // 5827
                                                                                                                      // 5828
    // Otherwise go through the dates to disable.                                                                     // 5829
    else {                                                                                                            // 5830
                                                                                                                      // 5831
        datesToDisable.map(function( unitToDisable ) {                                                                // 5832
                                                                                                                      // 5833
            var matchFound                                                                                            // 5834
                                                                                                                      // 5835
            // When we have disabled items, check for matches.                                                        // 5836
            // If something is matched, immediately break out.                                                        // 5837
            for ( var index = 0; index < disabledItems.length; index += 1 ) {                                         // 5838
                if ( calendar.isDateExact( unitToDisable, disabledItems[index] ) ) {                                  // 5839
                    matchFound = true                                                                                 // 5840
                    break                                                                                             // 5841
                }                                                                                                     // 5842
            }                                                                                                         // 5843
                                                                                                                      // 5844
            // If nothing was found, add the validated unit to the collection.                                        // 5845
            if ( !matchFound ) {                                                                                      // 5846
                if (                                                                                                  // 5847
                    _.isInteger( unitToDisable ) ||                                                                   // 5848
                    _.isDate( unitToDisable ) ||                                                                      // 5849
                    $.isArray( unitToDisable ) ||                                                                     // 5850
                    ( $.isPlainObject( unitToDisable ) && unitToDisable.from && unitToDisable.to )                    // 5851
                ) {                                                                                                   // 5852
                    disabledItems.push( unitToDisable )                                                               // 5853
                }                                                                                                     // 5854
            }                                                                                                         // 5855
        })                                                                                                            // 5856
    }                                                                                                                 // 5857
                                                                                                                      // 5858
    // Return the updated collection.                                                                                 // 5859
    return disabledItems                                                                                              // 5860
} //DatePicker.prototype.deactivate                                                                                   // 5861
                                                                                                                      // 5862
                                                                                                                      // 5863
/**                                                                                                                   // 5864
 * Mark a collection of dates as “enabled”.                                                                           // 5865
 */                                                                                                                   // 5866
DatePicker.prototype.activate = function( type, datesToEnable ) {                                                     // 5867
                                                                                                                      // 5868
    var calendar = this,                                                                                              // 5869
        disabledItems = calendar.item.disable,                                                                        // 5870
        disabledItemsCount = disabledItems.length                                                                     // 5871
                                                                                                                      // 5872
    // If we’re flipping, that’s all we need to do.                                                                   // 5873
    if ( datesToEnable == 'flip' ) {                                                                                  // 5874
        calendar.flipEnable()                                                                                         // 5875
    }                                                                                                                 // 5876
                                                                                                                      // 5877
    else if ( datesToEnable === true ) {                                                                              // 5878
        calendar.flipEnable(1)                                                                                        // 5879
        disabledItems = []                                                                                            // 5880
    }                                                                                                                 // 5881
                                                                                                                      // 5882
    else if ( datesToEnable === false ) {                                                                             // 5883
        calendar.flipEnable(-1)                                                                                       // 5884
        disabledItems = []                                                                                            // 5885
    }                                                                                                                 // 5886
                                                                                                                      // 5887
    // Otherwise go through the disabled dates.                                                                       // 5888
    else {                                                                                                            // 5889
                                                                                                                      // 5890
        datesToEnable.map(function( unitToEnable ) {                                                                  // 5891
                                                                                                                      // 5892
            var matchFound,                                                                                           // 5893
                disabledUnit,                                                                                         // 5894
                index,                                                                                                // 5895
                isExactRange                                                                                          // 5896
                                                                                                                      // 5897
            // Go through the disabled items and try to find a match.                                                 // 5898
            for ( index = 0; index < disabledItemsCount; index += 1 ) {                                               // 5899
                                                                                                                      // 5900
                disabledUnit = disabledItems[index]                                                                   // 5901
                                                                                                                      // 5902
                // When an exact match is found, remove it from the collection.                                       // 5903
                if ( calendar.isDateExact( disabledUnit, unitToEnable ) ) {                                           // 5904
                    matchFound = disabledItems[index] = null                                                          // 5905
                    isExactRange = true                                                                               // 5906
                    break                                                                                             // 5907
                }                                                                                                     // 5908
                                                                                                                      // 5909
                // When an overlapped match is found, add the “inverted” state to it.                                 // 5910
                else if ( calendar.isDateOverlap( disabledUnit, unitToEnable ) ) {                                    // 5911
                    if ( $.isPlainObject( unitToEnable ) ) {                                                          // 5912
                        unitToEnable.inverted = true                                                                  // 5913
                        matchFound = unitToEnable                                                                     // 5914
                    }                                                                                                 // 5915
                    else if ( $.isArray( unitToEnable ) ) {                                                           // 5916
                        matchFound = unitToEnable                                                                     // 5917
                        if ( !matchFound[3] ) matchFound.push( 'inverted' )                                           // 5918
                    }                                                                                                 // 5919
                    else if ( _.isDate( unitToEnable ) ) {                                                            // 5920
                        matchFound = [ unitToEnable.getFullYear(), unitToEnable.getMonth(), unitToEnable.getDate(), 'inverted' ]
                    }                                                                                                 // 5922
                    break                                                                                             // 5923
                }                                                                                                     // 5924
            }                                                                                                         // 5925
                                                                                                                      // 5926
            // If a match was found, remove a previous duplicate entry.                                               // 5927
            if ( matchFound ) for ( index = 0; index < disabledItemsCount; index += 1 ) {                             // 5928
                if ( calendar.isDateExact( disabledItems[index], unitToEnable ) ) {                                   // 5929
                    disabledItems[index] = null                                                                       // 5930
                    break                                                                                             // 5931
                }                                                                                                     // 5932
            }                                                                                                         // 5933
                                                                                                                      // 5934
            // In the event that we’re dealing with an exact range of dates,                                          // 5935
            // make sure there are no “inverted” dates because of it.                                                 // 5936
            if ( isExactRange ) for ( index = 0; index < disabledItemsCount; index += 1 ) {                           // 5937
                if ( calendar.isDateOverlap( disabledItems[index], unitToEnable ) ) {                                 // 5938
                    disabledItems[index] = null                                                                       // 5939
                    break                                                                                             // 5940
                }                                                                                                     // 5941
            }                                                                                                         // 5942
                                                                                                                      // 5943
            // If something is still matched, add it into the collection.                                             // 5944
            if ( matchFound ) {                                                                                       // 5945
                disabledItems.push( matchFound )                                                                      // 5946
            }                                                                                                         // 5947
        })                                                                                                            // 5948
    }                                                                                                                 // 5949
                                                                                                                      // 5950
    // Return the updated collection.                                                                                 // 5951
    return disabledItems.filter(function( val ) { return val != null })                                               // 5952
} //DatePicker.prototype.activate                                                                                     // 5953
                                                                                                                      // 5954
                                                                                                                      // 5955
/**                                                                                                                   // 5956
 * Create a string for the nodes in the picker.                                                                       // 5957
 */                                                                                                                   // 5958
DatePicker.prototype.nodes = function( isOpen ) {                                                                     // 5959
                                                                                                                      // 5960
    var                                                                                                               // 5961
        calendar = this,                                                                                              // 5962
        settings = calendar.settings,                                                                                 // 5963
        calendarItem = calendar.item,                                                                                 // 5964
        nowObject = calendarItem.now,                                                                                 // 5965
        selectedObject = calendarItem.select,                                                                         // 5966
        highlightedObject = calendarItem.highlight,                                                                   // 5967
        viewsetObject = calendarItem.view,                                                                            // 5968
        disabledCollection = calendarItem.disable,                                                                    // 5969
        minLimitObject = calendarItem.min,                                                                            // 5970
        maxLimitObject = calendarItem.max,                                                                            // 5971
                                                                                                                      // 5972
                                                                                                                      // 5973
        // Create the calendar table head using a copy of weekday labels collection.                                  // 5974
        // * We do a copy so we don't mutate the original array.                                                      // 5975
        tableHead = (function( collection, fullCollection ) {                                                         // 5976
                                                                                                                      // 5977
            // If the first day should be Monday, move Sunday to the end.                                             // 5978
            if ( settings.firstDay ) {                                                                                // 5979
                collection.push( collection.shift() )                                                                 // 5980
                fullCollection.push( fullCollection.shift() )                                                         // 5981
            }                                                                                                         // 5982
                                                                                                                      // 5983
            // Create and return the table head group.                                                                // 5984
            return _.node(                                                                                            // 5985
                'thead',                                                                                              // 5986
                _.node(                                                                                               // 5987
                    'tr',                                                                                             // 5988
                    _.group({                                                                                         // 5989
                        min: 0,                                                                                       // 5990
                        max: DAYS_IN_WEEK - 1,                                                                        // 5991
                        i: 1,                                                                                         // 5992
                        node: 'th',                                                                                   // 5993
                        item: function( counter ) {                                                                   // 5994
                            return [                                                                                  // 5995
                                collection[ counter ],                                                                // 5996
                                settings.klass.weekdays,                                                              // 5997
                                'scope=col title="' + fullCollection[ counter ] + '"'                                 // 5998
                            ]                                                                                         // 5999
                        }                                                                                             // 6000
                    })                                                                                                // 6001
                )                                                                                                     // 6002
            ) //endreturn                                                                                             // 6003
                                                                                                                      // 6004
        // Materialize modified                                                                                       // 6005
        })( ( settings.showWeekdaysFull ? settings.weekdaysFull : settings.weekdaysLetter ).slice( 0 ), settings.weekdaysFull.slice( 0 ) ), //tableHead
                                                                                                                      // 6007
                                                                                                                      // 6008
        // Create the nav for next/prev month.                                                                        // 6009
        createMonthNav = function( next ) {                                                                           // 6010
                                                                                                                      // 6011
            // Otherwise, return the created month tag.                                                               // 6012
            return _.node(                                                                                            // 6013
                'div',                                                                                                // 6014
                ' ',                                                                                                  // 6015
                settings.klass[ 'nav' + ( next ? 'Next' : 'Prev' ) ] + (                                              // 6016
                                                                                                                      // 6017
                    // If the focused month is outside the range, disabled the button.                                // 6018
                    ( next && viewsetObject.year >= maxLimitObject.year && viewsetObject.month >= maxLimitObject.month ) ||
                    ( !next && viewsetObject.year <= minLimitObject.year && viewsetObject.month <= minLimitObject.month ) ?
                    ' ' + settings.klass.navDisabled : ''                                                             // 6021
                ),                                                                                                    // 6022
                'data-nav=' + ( next || -1 ) + ' ' +                                                                  // 6023
                _.ariaAttr({                                                                                          // 6024
                    role: 'button',                                                                                   // 6025
                    controls: calendar.$node[0].id + '_table'                                                         // 6026
                }) + ' ' +                                                                                            // 6027
                'title="' + (next ? settings.labelMonthNext : settings.labelMonthPrev ) + '"'                         // 6028
            ) //endreturn                                                                                             // 6029
        }, //createMonthNav                                                                                           // 6030
                                                                                                                      // 6031
                                                                                                                      // 6032
        // Create the month label.                                                                                    // 6033
        //Materialize modified                                                                                        // 6034
        createMonthLabel = function(override) {                                                                       // 6035
                                                                                                                      // 6036
            var monthsCollection = settings.showMonthsShort ? settings.monthsShort : settings.monthsFull              // 6037
                                                                                                                      // 6038
             // Materialize modified                                                                                  // 6039
            if (override == "short_months") {                                                                         // 6040
              monthsCollection = settings.monthsShort;                                                                // 6041
            }                                                                                                         // 6042
                                                                                                                      // 6043
            // If there are months to select, add a dropdown menu.                                                    // 6044
            if ( settings.selectMonths  && override == undefined) {                                                   // 6045
                                                                                                                      // 6046
                return _.node( 'select',                                                                              // 6047
                    _.group({                                                                                         // 6048
                        min: 0,                                                                                       // 6049
                        max: 11,                                                                                      // 6050
                        i: 1,                                                                                         // 6051
                        node: 'option',                                                                               // 6052
                        item: function( loopedMonth ) {                                                               // 6053
                                                                                                                      // 6054
                            return [                                                                                  // 6055
                                                                                                                      // 6056
                                // The looped month and no classes.                                                   // 6057
                                monthsCollection[ loopedMonth ], 0,                                                   // 6058
                                                                                                                      // 6059
                                // Set the value and selected index.                                                  // 6060
                                'value=' + loopedMonth +                                                              // 6061
                                ( viewsetObject.month == loopedMonth ? ' selected' : '' ) +                           // 6062
                                (                                                                                     // 6063
                                    (                                                                                 // 6064
                                        ( viewsetObject.year == minLimitObject.year && loopedMonth < minLimitObject.month ) ||
                                        ( viewsetObject.year == maxLimitObject.year && loopedMonth > maxLimitObject.month )
                                    ) ?                                                                               // 6067
                                    ' disabled' : ''                                                                  // 6068
                                )                                                                                     // 6069
                            ]                                                                                         // 6070
                        }                                                                                             // 6071
                    }),                                                                                               // 6072
                    settings.klass.selectMonth + ' browser-default',                                                  // 6073
                    ( isOpen ? '' : 'disabled' ) + ' ' +                                                              // 6074
                    _.ariaAttr({ controls: calendar.$node[0].id + '_table' }) + ' ' +                                 // 6075
                    'title="' + settings.labelMonthSelect + '"'                                                       // 6076
                )                                                                                                     // 6077
            }                                                                                                         // 6078
                                                                                                                      // 6079
            // Materialize modified                                                                                   // 6080
            if (override == "short_months")                                                                           // 6081
                if (selectedObject != null)                                                                           // 6082
                return _.node( 'div', monthsCollection[ selectedObject.month ] );                                     // 6083
                else return _.node( 'div', monthsCollection[ viewsetObject.month ] );                                 // 6084
                                                                                                                      // 6085
            // If there's a need for a month selector                                                                 // 6086
            return _.node( 'div', monthsCollection[ viewsetObject.month ], settings.klass.month )                     // 6087
        }, //createMonthLabel                                                                                         // 6088
                                                                                                                      // 6089
                                                                                                                      // 6090
        // Create the year label.                                                                                     // 6091
        // Materialize modified                                                                                       // 6092
        createYearLabel = function(override) {                                                                        // 6093
                                                                                                                      // 6094
            var focusedYear = viewsetObject.year,                                                                     // 6095
                                                                                                                      // 6096
            // If years selector is set to a literal "true", set it to 5. Otherwise                                   // 6097
            // divide in half to get half before and half after focused year.                                         // 6098
            numberYears = settings.selectYears === true ? 5 : ~~( settings.selectYears / 2 )                          // 6099
                                                                                                                      // 6100
            // If there are years to select, add a dropdown menu.                                                     // 6101
            if ( numberYears ) {                                                                                      // 6102
                                                                                                                      // 6103
                var                                                                                                   // 6104
                    minYear = minLimitObject.year,                                                                    // 6105
                    maxYear = maxLimitObject.year,                                                                    // 6106
                    lowestYear = focusedYear - numberYears,                                                           // 6107
                    highestYear = focusedYear + numberYears                                                           // 6108
                                                                                                                      // 6109
                // If the min year is greater than the lowest year, increase the highest year                         // 6110
                // by the difference and set the lowest year to the min year.                                         // 6111
                if ( minYear > lowestYear ) {                                                                         // 6112
                    highestYear += minYear - lowestYear                                                               // 6113
                    lowestYear = minYear                                                                              // 6114
                }                                                                                                     // 6115
                                                                                                                      // 6116
                // If the max year is less than the highest year, decrease the lowest year                            // 6117
                // by the lower of the two: available and needed years. Then set the                                  // 6118
                // highest year to the max year.                                                                      // 6119
                if ( maxYear < highestYear ) {                                                                        // 6120
                                                                                                                      // 6121
                    var availableYears = lowestYear - minYear,                                                        // 6122
                        neededYears = highestYear - maxYear                                                           // 6123
                                                                                                                      // 6124
                    lowestYear -= availableYears > neededYears ? neededYears : availableYears                         // 6125
                    highestYear = maxYear                                                                             // 6126
                }                                                                                                     // 6127
                                                                                                                      // 6128
                if ( settings.selectYears  && override == undefined ) {                                               // 6129
                    return _.node( 'select',                                                                          // 6130
                        _.group({                                                                                     // 6131
                            min: lowestYear,                                                                          // 6132
                            max: highestYear,                                                                         // 6133
                            i: 1,                                                                                     // 6134
                            node: 'option',                                                                           // 6135
                            item: function( loopedYear ) {                                                            // 6136
                                return [                                                                              // 6137
                                                                                                                      // 6138
                                    // The looped year and no classes.                                                // 6139
                                    loopedYear, 0,                                                                    // 6140
                                                                                                                      // 6141
                                    // Set the value and selected index.                                              // 6142
                                    'value=' + loopedYear + ( focusedYear == loopedYear ? ' selected' : '' )          // 6143
                                ]                                                                                     // 6144
                            }                                                                                         // 6145
                        }),                                                                                           // 6146
                        settings.klass.selectYear + ' browser-default',                                               // 6147
                        ( isOpen ? '' : 'disabled' ) + ' ' + _.ariaAttr({ controls: calendar.$node[0].id + '_table' }) + ' ' +
                        'title="' + settings.labelYearSelect + '"'                                                    // 6149
                    )                                                                                                 // 6150
                }                                                                                                     // 6151
            }                                                                                                         // 6152
                                                                                                                      // 6153
            // Materialize modified                                                                                   // 6154
            if (override == "raw")                                                                                    // 6155
                return _.node( 'div', focusedYear )                                                                   // 6156
                                                                                                                      // 6157
            // Otherwise just return the year focused                                                                 // 6158
            return _.node( 'div', focusedYear, settings.klass.year )                                                  // 6159
        } //createYearLabel                                                                                           // 6160
                                                                                                                      // 6161
                                                                                                                      // 6162
        // Materialize modified                                                                                       // 6163
        createDayLabel = function() {                                                                                 // 6164
                if (selectedObject != null)                                                                           // 6165
                    return _.node( 'div', selectedObject.date)                                                        // 6166
                else return _.node( 'div', nowObject.date)                                                            // 6167
            }                                                                                                         // 6168
        createWeekdayLabel = function() {                                                                             // 6169
            var display_day;                                                                                          // 6170
                                                                                                                      // 6171
            if (selectedObject != null)                                                                               // 6172
                display_day = selectedObject.day;                                                                     // 6173
            else                                                                                                      // 6174
                display_day = nowObject.day;                                                                          // 6175
            var weekday = settings.weekdaysFull[ display_day ]                                                        // 6176
            return weekday                                                                                            // 6177
        }                                                                                                             // 6178
                                                                                                                      // 6179
                                                                                                                      // 6180
    // Create and return the entire calendar.                                                                         // 6181
return _.node(                                                                                                        // 6182
        // Date presentation View                                                                                     // 6183
        'div',                                                                                                        // 6184
            _.node(                                                                                                   // 6185
                'div',                                                                                                // 6186
                createWeekdayLabel(),                                                                                 // 6187
                "picker__weekday-display"                                                                             // 6188
            )+                                                                                                        // 6189
            _.node(                                                                                                   // 6190
                // Div for short Month                                                                                // 6191
                'div',                                                                                                // 6192
                createMonthLabel("short_months"),                                                                     // 6193
                settings.klass.month_display                                                                          // 6194
            )+                                                                                                        // 6195
            _.node(                                                                                                   // 6196
                // Div for Day                                                                                        // 6197
                'div',                                                                                                // 6198
                createDayLabel() ,                                                                                    // 6199
                settings.klass.day_display                                                                            // 6200
            )+                                                                                                        // 6201
            _.node(                                                                                                   // 6202
                // Div for Year                                                                                       // 6203
                'div',                                                                                                // 6204
                createYearLabel("raw") ,                                                                              // 6205
                settings.klass.year_display                                                                           // 6206
            ),                                                                                                        // 6207
        settings.klass.date_display                                                                                   // 6208
    )+                                                                                                                // 6209
    // Calendar container                                                                                             // 6210
    _.node('div',                                                                                                     // 6211
        _.node('div',                                                                                                 // 6212
        ( settings.selectYears ?  createMonthLabel() + createYearLabel() : createMonthLabel() + createYearLabel() ) +
        createMonthNav() + createMonthNav( 1 ),                                                                       // 6214
        settings.klass.header                                                                                         // 6215
    ) + _.node(                                                                                                       // 6216
        'table',                                                                                                      // 6217
        tableHead +                                                                                                   // 6218
        _.node(                                                                                                       // 6219
            'tbody',                                                                                                  // 6220
            _.group({                                                                                                 // 6221
                min: 0,                                                                                               // 6222
                max: WEEKS_IN_CALENDAR - 1,                                                                           // 6223
                i: 1,                                                                                                 // 6224
                node: 'tr',                                                                                           // 6225
                item: function( rowCounter ) {                                                                        // 6226
                                                                                                                      // 6227
                    // If Monday is the first day and the month starts on Sunday, shift the date back a week.         // 6228
                    var shiftDateBy = settings.firstDay && calendar.create([ viewsetObject.year, viewsetObject.month, 1 ]).day === 0 ? -7 : 0
                                                                                                                      // 6230
                    return [                                                                                          // 6231
                        _.group({                                                                                     // 6232
                            min: DAYS_IN_WEEK * rowCounter - viewsetObject.day + shiftDateBy + 1, // Add 1 for weekday 0index
                            max: function() {                                                                         // 6234
                                return this.min + DAYS_IN_WEEK - 1                                                    // 6235
                            },                                                                                        // 6236
                            i: 1,                                                                                     // 6237
                            node: 'td',                                                                               // 6238
                            item: function( targetDate ) {                                                            // 6239
                                                                                                                      // 6240
                                // Convert the time date from a relative date to a target date.                       // 6241
                                targetDate = calendar.create([ viewsetObject.year, viewsetObject.month, targetDate + ( settings.firstDay ? 1 : 0 ) ])
                                                                                                                      // 6243
                                var isSelected = selectedObject && selectedObject.pick == targetDate.pick,            // 6244
                                    isHighlighted = highlightedObject && highlightedObject.pick == targetDate.pick,   // 6245
                                    isDisabled = disabledCollection && calendar.disabled( targetDate ) || targetDate.pick < minLimitObject.pick || targetDate.pick > maxLimitObject.pick,
                                    formattedDate = _.trigger( calendar.formats.toString, calendar, [ settings.format, targetDate ] )
                                                                                                                      // 6248
                                return [                                                                              // 6249
                                    _.node(                                                                           // 6250
                                        'div',                                                                        // 6251
                                        targetDate.date,                                                              // 6252
                                        (function( klasses ) {                                                        // 6253
                                                                                                                      // 6254
                                            // Add the `infocus` or `outfocus` classes based on month in view.        // 6255
                                            klasses.push( viewsetObject.month == targetDate.month ? settings.klass.infocus : settings.klass.outfocus )
                                                                                                                      // 6257
                                            // Add the `today` class if needed.                                       // 6258
                                            if ( nowObject.pick == targetDate.pick ) {                                // 6259
                                                klasses.push( settings.klass.now )                                    // 6260
                                            }                                                                         // 6261
                                                                                                                      // 6262
                                            // Add the `selected` class if something's selected and the time matches.
                                            if ( isSelected ) {                                                       // 6264
                                                klasses.push( settings.klass.selected )                               // 6265
                                            }                                                                         // 6266
                                                                                                                      // 6267
                                            // Add the `highlighted` class if something's highlighted and the time matches.
                                            if ( isHighlighted ) {                                                    // 6269
                                                klasses.push( settings.klass.highlighted )                            // 6270
                                            }                                                                         // 6271
                                                                                                                      // 6272
                                            // Add the `disabled` class if something's disabled and the object matches.
                                            if ( isDisabled ) {                                                       // 6274
                                                klasses.push( settings.klass.disabled )                               // 6275
                                            }                                                                         // 6276
                                                                                                                      // 6277
                                            return klasses.join( ' ' )                                                // 6278
                                        })([ settings.klass.day ]),                                                   // 6279
                                        'data-pick=' + targetDate.pick + ' ' + _.ariaAttr({                           // 6280
                                            role: 'gridcell',                                                         // 6281
                                            label: formattedDate,                                                     // 6282
                                            selected: isSelected && calendar.$node.val() === formattedDate ? true : null,
                                            activedescendant: isHighlighted ? true : null,                            // 6284
                                            disabled: isDisabled ? true : null                                        // 6285
                                        })                                                                            // 6286
                                    ),                                                                                // 6287
                                    '',                                                                               // 6288
                                    _.ariaAttr({ role: 'presentation' })                                              // 6289
                                ] //endreturn                                                                         // 6290
                            }                                                                                         // 6291
                        })                                                                                            // 6292
                    ] //endreturn                                                                                     // 6293
                }                                                                                                     // 6294
            })                                                                                                        // 6295
        ),                                                                                                            // 6296
        settings.klass.table,                                                                                         // 6297
        'id="' + calendar.$node[0].id + '_table' + '" ' + _.ariaAttr({                                                // 6298
            role: 'grid',                                                                                             // 6299
            controls: calendar.$node[0].id,                                                                           // 6300
            readonly: true                                                                                            // 6301
        })                                                                                                            // 6302
    )                                                                                                                 // 6303
    , settings.klass.calendar_container) // end calendar                                                              // 6304
                                                                                                                      // 6305
     +                                                                                                                // 6306
                                                                                                                      // 6307
    // * For Firefox forms to submit, make sure to set the buttons’ `type` attributes as “button”.                    // 6308
    _.node(                                                                                                           // 6309
        'div',                                                                                                        // 6310
        _.node( 'button', settings.today, "btn-flat picker__today",                                                   // 6311
            'type=button data-pick=' + nowObject.pick +                                                               // 6312
            ( isOpen && !calendar.disabled(nowObject) ? '' : ' disabled' ) + ' ' +                                    // 6313
            _.ariaAttr({ controls: calendar.$node[0].id }) ) +                                                        // 6314
        _.node( 'button', settings.clear, "btn-flat picker__clear",                                                   // 6315
            'type=button data-clear=1' +                                                                              // 6316
            ( isOpen ? '' : ' disabled' ) + ' ' +                                                                     // 6317
            _.ariaAttr({ controls: calendar.$node[0].id }) ) +                                                        // 6318
        _.node('button', settings.close, "btn-flat picker__close",                                                    // 6319
            'type=button data-close=true ' +                                                                          // 6320
            ( isOpen ? '' : ' disabled' ) + ' ' +                                                                     // 6321
            _.ariaAttr({ controls: calendar.$node[0].id }) ),                                                         // 6322
        settings.klass.footer                                                                                         // 6323
    ) //endreturn                                                                                                     // 6324
} //DatePicker.prototype.nodes                                                                                        // 6325
                                                                                                                      // 6326
                                                                                                                      // 6327
                                                                                                                      // 6328
                                                                                                                      // 6329
/**                                                                                                                   // 6330
 * The date picker defaults.                                                                                          // 6331
 */                                                                                                                   // 6332
DatePicker.defaults = (function( prefix ) {                                                                           // 6333
                                                                                                                      // 6334
    return {                                                                                                          // 6335
                                                                                                                      // 6336
        // The title label to use for the month nav buttons                                                           // 6337
        labelMonthNext: 'Next month',                                                                                 // 6338
        labelMonthPrev: 'Previous month',                                                                             // 6339
                                                                                                                      // 6340
        // The title label to use for the dropdown selectors                                                          // 6341
        labelMonthSelect: 'Select a month',                                                                           // 6342
        labelYearSelect: 'Select a year',                                                                             // 6343
                                                                                                                      // 6344
        // Months and weekdays                                                                                        // 6345
        monthsFull: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
        monthsShort: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],          // 6347
        weekdaysFull: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],               // 6348
        weekdaysShort: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],                                           // 6349
                                                                                                                      // 6350
        // Materialize modified                                                                                       // 6351
        weekdaysLetter: [ 'S', 'M', 'T', 'W', 'T', 'F', 'S' ],                                                        // 6352
                                                                                                                      // 6353
        // Today and clear                                                                                            // 6354
        today: 'Today',                                                                                               // 6355
        clear: 'Clear',                                                                                               // 6356
        close: 'Close',                                                                                               // 6357
                                                                                                                      // 6358
        // The format to show on the `input` element                                                                  // 6359
        format: 'd mmmm, yyyy',                                                                                       // 6360
                                                                                                                      // 6361
        // Classes                                                                                                    // 6362
        klass: {                                                                                                      // 6363
                                                                                                                      // 6364
            table: prefix + 'table',                                                                                  // 6365
                                                                                                                      // 6366
            header: prefix + 'header',                                                                                // 6367
                                                                                                                      // 6368
                                                                                                                      // 6369
            // Materialize Added klasses                                                                              // 6370
            date_display: prefix + 'date-display',                                                                    // 6371
            day_display: prefix + 'day-display',                                                                      // 6372
            month_display: prefix + 'month-display',                                                                  // 6373
            year_display: prefix + 'year-display',                                                                    // 6374
            calendar_container: prefix + 'calendar-container',                                                        // 6375
            // end                                                                                                    // 6376
                                                                                                                      // 6377
                                                                                                                      // 6378
                                                                                                                      // 6379
            navPrev: prefix + 'nav--prev',                                                                            // 6380
            navNext: prefix + 'nav--next',                                                                            // 6381
            navDisabled: prefix + 'nav--disabled',                                                                    // 6382
                                                                                                                      // 6383
            month: prefix + 'month',                                                                                  // 6384
            year: prefix + 'year',                                                                                    // 6385
                                                                                                                      // 6386
            selectMonth: prefix + 'select--month',                                                                    // 6387
            selectYear: prefix + 'select--year',                                                                      // 6388
                                                                                                                      // 6389
            weekdays: prefix + 'weekday',                                                                             // 6390
                                                                                                                      // 6391
            day: prefix + 'day',                                                                                      // 6392
            disabled: prefix + 'day--disabled',                                                                       // 6393
            selected: prefix + 'day--selected',                                                                       // 6394
            highlighted: prefix + 'day--highlighted',                                                                 // 6395
            now: prefix + 'day--today',                                                                               // 6396
            infocus: prefix + 'day--infocus',                                                                         // 6397
            outfocus: prefix + 'day--outfocus',                                                                       // 6398
                                                                                                                      // 6399
            footer: prefix + 'footer',                                                                                // 6400
                                                                                                                      // 6401
            buttonClear: prefix + 'button--clear',                                                                    // 6402
            buttonToday: prefix + 'button--today',                                                                    // 6403
            buttonClose: prefix + 'button--close'                                                                     // 6404
        }                                                                                                             // 6405
    }                                                                                                                 // 6406
})( Picker.klasses().picker + '__' )                                                                                  // 6407
                                                                                                                      // 6408
                                                                                                                      // 6409
                                                                                                                      // 6410
                                                                                                                      // 6411
                                                                                                                      // 6412
/**                                                                                                                   // 6413
 * Extend the picker to add the date picker.                                                                          // 6414
 */                                                                                                                   // 6415
Picker.extend( 'pickadate', DatePicker )                                                                              // 6416
                                                                                                                      // 6417
                                                                                                                      // 6418
}));                                                                                                                  // 6419
                                                                                                                      // 6420
                                                                                                                      // 6421
;(function ($) {                                                                                                      // 6422
                                                                                                                      // 6423
  $.fn.characterCounter = function(){                                                                                 // 6424
    return this.each(function(){                                                                                      // 6425
                                                                                                                      // 6426
      var itHasLengthAttribute = $(this).attr('length') !== undefined;                                                // 6427
                                                                                                                      // 6428
      if(itHasLengthAttribute){                                                                                       // 6429
        $(this).on('input', updateCounter);                                                                           // 6430
        $(this).on('focus', updateCounter);                                                                           // 6431
        $(this).on('blur', removeCounterElement);                                                                     // 6432
                                                                                                                      // 6433
        addCounterElement($(this));                                                                                   // 6434
      }                                                                                                               // 6435
                                                                                                                      // 6436
    });                                                                                                               // 6437
  };                                                                                                                  // 6438
                                                                                                                      // 6439
  function updateCounter(){                                                                                           // 6440
    var maxLength     = +$(this).attr('length'),                                                                      // 6441
    actualLength      = +$(this).val().length,                                                                        // 6442
    isValidLength     = actualLength <= maxLength;                                                                    // 6443
                                                                                                                      // 6444
    $(this).parent().find('span[class="character-counter"]')                                                          // 6445
                    .html( actualLength + '/' + maxLength);                                                           // 6446
                                                                                                                      // 6447
    addInputStyle(isValidLength, $(this));                                                                            // 6448
  }                                                                                                                   // 6449
                                                                                                                      // 6450
  function addCounterElement($input){                                                                                 // 6451
    var $counterElement = $('<span/>')                                                                                // 6452
                        .addClass('character-counter')                                                                // 6453
                        .css('float','right')                                                                         // 6454
                        .css('font-size','12px')                                                                      // 6455
                        .css('height', 1);                                                                            // 6456
                                                                                                                      // 6457
    $input.parent().append($counterElement);                                                                          // 6458
  }                                                                                                                   // 6459
                                                                                                                      // 6460
  function removeCounterElement(){                                                                                    // 6461
    $(this).parent().find('span[class="character-counter"]').html('');                                                // 6462
  }                                                                                                                   // 6463
                                                                                                                      // 6464
  function addInputStyle(isValidLength, $input){                                                                      // 6465
    var inputHasInvalidClass = $input.hasClass('invalid');                                                            // 6466
    if (isValidLength && inputHasInvalidClass) {                                                                      // 6467
      $input.removeClass('invalid');                                                                                  // 6468
    }                                                                                                                 // 6469
    else if(!isValidLength && !inputHasInvalidClass){                                                                 // 6470
      $input.removeClass('valid');                                                                                    // 6471
      $input.addClass('invalid');                                                                                     // 6472
    }                                                                                                                 // 6473
  }                                                                                                                   // 6474
                                                                                                                      // 6475
  $(document).ready(function(){                                                                                       // 6476
    $('input, textarea').characterCounter();                                                                          // 6477
  });                                                                                                                 // 6478
                                                                                                                      // 6479
}( jQuery ));                                                                                                         // 6480
;(function ($) {                                                                                                      // 6481
                                                                                                                      // 6482
  var methods = {                                                                                                     // 6483
                                                                                                                      // 6484
    init : function(options) {                                                                                        // 6485
      var defaults = {                                                                                                // 6486
        time_constant: 200, // ms                                                                                     // 6487
        dist: -100, // zoom scale TODO: make this more intuitive as an option                                         // 6488
        shift: 0, // spacing for center image                                                                         // 6489
        padding: 0, // Padding between non center items                                                               // 6490
        full_width: false // Change to full width styles                                                              // 6491
      };                                                                                                              // 6492
      options = $.extend(defaults, options);                                                                          // 6493
                                                                                                                      // 6494
      return this.each(function() {                                                                                   // 6495
                                                                                                                      // 6496
        var images, offset, center, pressed, dim, count,                                                              // 6497
            reference, referenceY, amplitude, target, velocity,                                                       // 6498
            xform, frame, timestamp, ticker, dragged, vertical_dragged;                                               // 6499
                                                                                                                      // 6500
        // Initialize                                                                                                 // 6501
        var view = $(this);                                                                                           // 6502
        // Don't double initialize.                                                                                   // 6503
        if (view.hasClass('initialized')) {                                                                           // 6504
          return true;                                                                                                // 6505
        }                                                                                                             // 6506
                                                                                                                      // 6507
        // Options                                                                                                    // 6508
        if (options.full_width) {                                                                                     // 6509
          options.dist = 0;                                                                                           // 6510
          imageHeight = view.find('.carousel-item img').first().load(function(){                                      // 6511
            view.css('height', $(this).height());                                                                     // 6512
          });                                                                                                         // 6513
        }                                                                                                             // 6514
                                                                                                                      // 6515
        view.addClass('initialized');                                                                                 // 6516
        pressed = false;                                                                                              // 6517
        offset = target = 0;                                                                                          // 6518
        images = [];                                                                                                  // 6519
        item_width = view.find('.carousel-item').first().innerWidth();                                                // 6520
        dim = item_width * 2 + options.padding;                                                                       // 6521
                                                                                                                      // 6522
        view.find('.carousel-item').each(function () {                                                                // 6523
          images.push($(this)[0]);                                                                                    // 6524
        });                                                                                                           // 6525
                                                                                                                      // 6526
        count = images.length;                                                                                        // 6527
                                                                                                                      // 6528
                                                                                                                      // 6529
        function setupEvents() {                                                                                      // 6530
          if (typeof window.ontouchstart !== 'undefined') {                                                           // 6531
            view[0].addEventListener('touchstart', tap);                                                              // 6532
            view[0].addEventListener('touchmove', drag);                                                              // 6533
            view[0].addEventListener('touchend', release);                                                            // 6534
          }                                                                                                           // 6535
          view[0].addEventListener('mousedown', tap);                                                                 // 6536
          view[0].addEventListener('mousemove', drag);                                                                // 6537
          view[0].addEventListener('mouseup', release);                                                               // 6538
          view[0].addEventListener('click', click);                                                                   // 6539
        }                                                                                                             // 6540
                                                                                                                      // 6541
        function xpos(e) {                                                                                            // 6542
          // touch event                                                                                              // 6543
          if (e.targetTouches && (e.targetTouches.length >= 1)) {                                                     // 6544
            return e.targetTouches[0].clientX;                                                                        // 6545
          }                                                                                                           // 6546
                                                                                                                      // 6547
          // mouse event                                                                                              // 6548
          return e.clientX;                                                                                           // 6549
        }                                                                                                             // 6550
                                                                                                                      // 6551
        function ypos(e) {                                                                                            // 6552
          // touch event                                                                                              // 6553
          if (e.targetTouches && (e.targetTouches.length >= 1)) {                                                     // 6554
            return e.targetTouches[0].clientY;                                                                        // 6555
          }                                                                                                           // 6556
                                                                                                                      // 6557
          // mouse event                                                                                              // 6558
          return e.clientY;                                                                                           // 6559
        }                                                                                                             // 6560
                                                                                                                      // 6561
        function wrap(x) {                                                                                            // 6562
          return (x >= count) ? (x % count) : (x < 0) ? wrap(count + (x % count)) : x;                                // 6563
        }                                                                                                             // 6564
                                                                                                                      // 6565
        function scroll(x) {                                                                                          // 6566
          var i, half, delta, dir, tween, el, alignment, xTranslation;                                                // 6567
                                                                                                                      // 6568
          offset = (typeof x === 'number') ? x : offset;                                                              // 6569
          center = Math.floor((offset + dim / 2) / dim);                                                              // 6570
          delta = offset - center * dim;                                                                              // 6571
          dir = (delta < 0) ? 1 : -1;                                                                                 // 6572
          tween = -dir * delta * 2 / dim;                                                                             // 6573
                                                                                                                      // 6574
          if (!options.full_width) {                                                                                  // 6575
            alignment = 'translateX(' + (view[0].clientWidth - item_width) / 2 + 'px) ';                              // 6576
            alignment += 'translateY(' + (view[0].clientHeight - item_width) / 2 + 'px)';                             // 6577
          } else {                                                                                                    // 6578
            alignment = 'translateX(0)';                                                                              // 6579
          }                                                                                                           // 6580
                                                                                                                      // 6581
          // center                                                                                                   // 6582
          el = images[wrap(center)];                                                                                  // 6583
          el.style[xform] = alignment +                                                                               // 6584
            ' translateX(' + (-delta / 2) + 'px)' +                                                                   // 6585
            ' translateX(' + (dir * options.shift * tween * i) + 'px)' +                                              // 6586
            ' translateZ(' + (options.dist * tween) + 'px)';                                                          // 6587
          el.style.zIndex = 0;                                                                                        // 6588
          if (options.full_width) { tweenedOpacity = 1; }                                                             // 6589
          else { tweenedOpacity = 1 - 0.2 * tween; }                                                                  // 6590
          el.style.opacity = tweenedOpacity;                                                                          // 6591
          half = count >> 1;                                                                                          // 6592
                                                                                                                      // 6593
          for (i = 1; i <= half; ++i) {                                                                               // 6594
            // right side                                                                                             // 6595
            if (options.full_width) {                                                                                 // 6596
              zTranslation = options.dist;                                                                            // 6597
              tweenedOpacity = (i === half && delta < 0) ? 1 - tween : 1;                                             // 6598
            } else {                                                                                                  // 6599
              zTranslation = options.dist * (i * 2 + tween * dir);                                                    // 6600
              tweenedOpacity = 1 - 0.2 * (i * 2 + tween * dir);                                                       // 6601
            }                                                                                                         // 6602
            el = images[wrap(center + i)];                                                                            // 6603
            el.style[xform] = alignment +                                                                             // 6604
              ' translateX(' + (options.shift + (dim * i - delta) / 2) + 'px)' +                                      // 6605
              ' translateZ(' + zTranslation + 'px)';                                                                  // 6606
            el.style.zIndex = -i;                                                                                     // 6607
            el.style.opacity = tweenedOpacity;                                                                        // 6608
                                                                                                                      // 6609
                                                                                                                      // 6610
            // left side                                                                                              // 6611
            if (options.full_width) {                                                                                 // 6612
              zTranslation = options.dist;                                                                            // 6613
              tweenedOpacity = (i === half && delta > 0) ? 1 - tween : 1;                                             // 6614
            } else {                                                                                                  // 6615
              zTranslation = options.dist * (i * 2 - tween * dir);                                                    // 6616
              tweenedOpacity = 1 - 0.2 * (i * 2 - tween * dir);                                                       // 6617
            }                                                                                                         // 6618
            el = images[wrap(center - i)];                                                                            // 6619
            el.style[xform] = alignment +                                                                             // 6620
              ' translateX(' + (-options.shift + (-dim * i - delta) / 2) + 'px)' +                                    // 6621
              ' translateZ(' + zTranslation + 'px)';                                                                  // 6622
            el.style.zIndex = -i;                                                                                     // 6623
            el.style.opacity = tweenedOpacity;                                                                        // 6624
          }                                                                                                           // 6625
                                                                                                                      // 6626
          // center                                                                                                   // 6627
          el = images[wrap(center)];                                                                                  // 6628
          el.style[xform] = alignment +                                                                               // 6629
            ' translateX(' + (-delta / 2) + 'px)' +                                                                   // 6630
            ' translateX(' + (dir * options.shift * tween) + 'px)' +                                                  // 6631
            ' translateZ(' + (options.dist * tween) + 'px)';                                                          // 6632
          el.style.zIndex = 0;                                                                                        // 6633
          if (options.full_width) { tweenedOpacity = 1; }                                                             // 6634
          else { tweenedOpacity = 1 - 0.2 * tween; }                                                                  // 6635
          el.style.opacity = tweenedOpacity;                                                                          // 6636
        }                                                                                                             // 6637
                                                                                                                      // 6638
        function track() {                                                                                            // 6639
          var now, elapsed, delta, v;                                                                                 // 6640
                                                                                                                      // 6641
          now = Date.now();                                                                                           // 6642
          elapsed = now - timestamp;                                                                                  // 6643
          timestamp = now;                                                                                            // 6644
          delta = offset - frame;                                                                                     // 6645
          frame = offset;                                                                                             // 6646
                                                                                                                      // 6647
          v = 1000 * delta / (1 + elapsed);                                                                           // 6648
          velocity = 0.8 * v + 0.2 * velocity;                                                                        // 6649
        }                                                                                                             // 6650
                                                                                                                      // 6651
        function autoScroll() {                                                                                       // 6652
          var elapsed, delta;                                                                                         // 6653
                                                                                                                      // 6654
          if (amplitude) {                                                                                            // 6655
            elapsed = Date.now() - timestamp;                                                                         // 6656
            delta = amplitude * Math.exp(-elapsed / options.time_constant);                                           // 6657
            if (delta > 2 || delta < -2) {                                                                            // 6658
                scroll(target - delta);                                                                               // 6659
                requestAnimationFrame(autoScroll);                                                                    // 6660
            } else {                                                                                                  // 6661
                scroll(target);                                                                                       // 6662
            }                                                                                                         // 6663
          }                                                                                                           // 6664
        }                                                                                                             // 6665
                                                                                                                      // 6666
        function click(e) {                                                                                           // 6667
          // Disable clicks if carousel was dragged.                                                                  // 6668
          if (dragged) {                                                                                              // 6669
            e.preventDefault();                                                                                       // 6670
            e.stopPropagation();                                                                                      // 6671
            return false;                                                                                             // 6672
                                                                                                                      // 6673
          } else if (!options.full_width) {                                                                           // 6674
            var clickedIndex = $(e.target).closest('.carousel-item').index();                                         // 6675
            var diff = (center % count) - clickedIndex;                                                               // 6676
                                                                                                                      // 6677
            // Account for wraparound.                                                                                // 6678
            if (diff < 0) {                                                                                           // 6679
              if (Math.abs(diff + count) < Math.abs(diff)) { diff += count; }                                         // 6680
                                                                                                                      // 6681
            } else if (diff > 0) {                                                                                    // 6682
              if (Math.abs(diff - count) < diff) { diff -= count; }                                                   // 6683
            }                                                                                                         // 6684
                                                                                                                      // 6685
            // Call prev or next accordingly.                                                                         // 6686
            if (diff < 0) {                                                                                           // 6687
              $(this).trigger('carouselNext', [Math.abs(diff)]);                                                      // 6688
                                                                                                                      // 6689
            } else if (diff > 0) {                                                                                    // 6690
              $(this).trigger('carouselPrev', [diff]);                                                                // 6691
            }                                                                                                         // 6692
          }                                                                                                           // 6693
        }                                                                                                             // 6694
                                                                                                                      // 6695
        function tap(e) {                                                                                             // 6696
          pressed = true;                                                                                             // 6697
          dragged = false;                                                                                            // 6698
          vertical_dragged = false;                                                                                   // 6699
          reference = xpos(e);                                                                                        // 6700
          referenceY = ypos(e);                                                                                       // 6701
                                                                                                                      // 6702
          velocity = amplitude = 0;                                                                                   // 6703
          frame = offset;                                                                                             // 6704
          timestamp = Date.now();                                                                                     // 6705
          clearInterval(ticker);                                                                                      // 6706
          ticker = setInterval(track, 100);                                                                           // 6707
                                                                                                                      // 6708
        }                                                                                                             // 6709
                                                                                                                      // 6710
        function drag(e) {                                                                                            // 6711
          var x, delta, deltaY;                                                                                       // 6712
          if (pressed) {                                                                                              // 6713
            x = xpos(e);                                                                                              // 6714
            y = ypos(e);                                                                                              // 6715
            delta = reference - x;                                                                                    // 6716
            deltaY = Math.abs(referenceY - y);                                                                        // 6717
            if (deltaY < 30 && !vertical_dragged) {                                                                   // 6718
              // If vertical scrolling don't allow dragging.                                                          // 6719
              if (delta > 2 || delta < -2) {                                                                          // 6720
                dragged = true;                                                                                       // 6721
                reference = x;                                                                                        // 6722
                scroll(offset + delta);                                                                               // 6723
              }                                                                                                       // 6724
                                                                                                                      // 6725
            } else if (dragged) {                                                                                     // 6726
              // If dragging don't allow vertical scroll.                                                             // 6727
              e.preventDefault();                                                                                     // 6728
              e.stopPropagation();                                                                                    // 6729
              return false;                                                                                           // 6730
                                                                                                                      // 6731
            } else {                                                                                                  // 6732
              // Vertical scrolling.                                                                                  // 6733
              vertical_dragged = true;                                                                                // 6734
            }                                                                                                         // 6735
          }                                                                                                           // 6736
                                                                                                                      // 6737
          if (dragged) {                                                                                              // 6738
            // If dragging don't allow vertical scroll.                                                               // 6739
            e.preventDefault();                                                                                       // 6740
            e.stopPropagation();                                                                                      // 6741
            return false;                                                                                             // 6742
          }                                                                                                           // 6743
        }                                                                                                             // 6744
                                                                                                                      // 6745
        function release(e) {                                                                                         // 6746
          pressed = false;                                                                                            // 6747
                                                                                                                      // 6748
          clearInterval(ticker);                                                                                      // 6749
          target = offset;                                                                                            // 6750
          if (velocity > 10 || velocity < -10) {                                                                      // 6751
            amplitude = 0.9 * velocity;                                                                               // 6752
            target = offset + amplitude;                                                                              // 6753
          }                                                                                                           // 6754
          target = Math.round(target / dim) * dim;                                                                    // 6755
          amplitude = target - offset;                                                                                // 6756
          timestamp = Date.now();                                                                                     // 6757
          requestAnimationFrame(autoScroll);                                                                          // 6758
                                                                                                                      // 6759
          e.preventDefault();                                                                                         // 6760
          e.stopPropagation();                                                                                        // 6761
          return false;                                                                                               // 6762
        }                                                                                                             // 6763
                                                                                                                      // 6764
        xform = 'transform';                                                                                          // 6765
        ['webkit', 'Moz', 'O', 'ms'].every(function (prefix) {                                                        // 6766
          var e = prefix + 'Transform';                                                                               // 6767
          if (typeof document.body.style[e] !== 'undefined') {                                                        // 6768
            xform = e;                                                                                                // 6769
            return false;                                                                                             // 6770
          }                                                                                                           // 6771
          return true;                                                                                                // 6772
        });                                                                                                           // 6773
                                                                                                                      // 6774
                                                                                                                      // 6775
                                                                                                                      // 6776
        window.onresize = scroll;                                                                                     // 6777
                                                                                                                      // 6778
        setupEvents();                                                                                                // 6779
        scroll(offset);                                                                                               // 6780
                                                                                                                      // 6781
        $(this).on('carouselNext', function(e, n) {                                                                   // 6782
          if (n === undefined) {                                                                                      // 6783
            n = 1;                                                                                                    // 6784
          }                                                                                                           // 6785
          target = offset + dim * n;                                                                                  // 6786
          if (offset !== target) {                                                                                    // 6787
            amplitude = target - offset;                                                                              // 6788
            timestamp = Date.now();                                                                                   // 6789
            requestAnimationFrame(autoScroll);                                                                        // 6790
          }                                                                                                           // 6791
        });                                                                                                           // 6792
                                                                                                                      // 6793
        $(this).on('carouselPrev', function(e, n) {                                                                   // 6794
          if (n === undefined) {                                                                                      // 6795
            n = 1;                                                                                                    // 6796
          }                                                                                                           // 6797
          target = offset - dim * n;                                                                                  // 6798
          if (offset !== target) {                                                                                    // 6799
            amplitude = target - offset;                                                                              // 6800
            timestamp = Date.now();                                                                                   // 6801
            requestAnimationFrame(autoScroll);                                                                        // 6802
          }                                                                                                           // 6803
        });                                                                                                           // 6804
                                                                                                                      // 6805
      });                                                                                                             // 6806
                                                                                                                      // 6807
                                                                                                                      // 6808
                                                                                                                      // 6809
    },                                                                                                                // 6810
    next : function(n) {                                                                                              // 6811
      $(this).trigger('carouselNext', [n]);                                                                           // 6812
    },                                                                                                                // 6813
    prev : function(n) {                                                                                              // 6814
      $(this).trigger('carouselPrev', [n]);                                                                           // 6815
    },                                                                                                                // 6816
  };                                                                                                                  // 6817
                                                                                                                      // 6818
                                                                                                                      // 6819
    $.fn.carousel = function(methodOrOptions) {                                                                       // 6820
      if ( methods[methodOrOptions] ) {                                                                               // 6821
        return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));                   // 6822
      } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {                                        // 6823
        // Default to "init"                                                                                          // 6824
        return methods.init.apply( this, arguments );                                                                 // 6825
      } else {                                                                                                        // 6826
        $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.carousel' );                               // 6827
      }                                                                                                               // 6828
    }; // Plugin end                                                                                                  // 6829
}( jQuery ));                                                                                                         // 6830
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['materialize:materialize'] = {
  Materialize: Materialize
};

})();
