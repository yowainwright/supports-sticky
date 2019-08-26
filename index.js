"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_debounce_1 = __importDefault(require("lodash.debounce"));
exports.browserPrefixes = ['', '-o-', '-webkit-', '-moz-', '-ms-'];
exports.supportsSticky = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.prefixes, prefixes = _c === void 0 ? exports.browserPrefixes : _c, _d = _b.testEl, testEl = _d === void 0 ? document.head.style : _d;
    var test = testEl;
    prefixes.forEach(function (prefix) { return test.position
        ? test.position
        : test.position = prefix + "sticky"; });
    var stickyPosition = test.position || 'fixed';
    return {
        stickyPosition: stickyPosition,
        stickySupport: stickyPosition !== 'fixed' ? true : false,
    };
};
exports.setSelector = function (element) {
    return element instanceof HTMLElement
        ? element
        : document.querySelector(element);
};
exports.distanceToElement = function (element) {
    var el = exports.setSelector(element);
    return !el ? null : el.getBoundingClientRect().top;
};
exports.monitorDistanceToElement = function (element, time) {
    if (time === void 0) { time = 100; }
    exports.distanceToElement(element);
    window.addEventListener("resize", lodash_debounce_1.default(function () { return exports.distanceToElement(element); }, time));
};
//# sourceMappingURL=index.js.map