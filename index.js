"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.browserPrefixes = ['', '-o-', '-webkit-', '-moz-', '-ms-'];
exports.supportsSticky = function supportsSticky(_a) {
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
//# sourceMappingURL=index.js.map