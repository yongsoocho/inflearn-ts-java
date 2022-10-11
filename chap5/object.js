var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var a = {
    value: 25
};
var b = {
    value: 25
};
var c = __assign({}, a);
console.log(a == b, a == c);
c.value = 999;
console.log(a, c);
