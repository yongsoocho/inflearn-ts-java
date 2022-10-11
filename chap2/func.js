// 2. 1번 interface를 implements 한 class 구현
var Oper = /** @class */ (function () {
    function Oper() {
    }
    Oper.prototype.add = function (a, b) {
        return a + b;
    };
    Oper.prototype.minus = function (a, b) {
        return a - b;
    };
    return Oper;
}());
// 3. 1번에서 명세한 interface 를 type 으로 쓴다.
var op = new Oper();
console.log(op.add(1, 2));
console.log(op.minus(1, 2));
