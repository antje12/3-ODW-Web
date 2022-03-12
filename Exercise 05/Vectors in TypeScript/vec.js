var Vec = /** @class */ (function () {
    function Vec(x, y) {
        this.x = x;
        this.y = y;
    }
    Vec.prototype.plus = function (vec) {
        return new Vec(this.x + vec.x, this.y + vec.y);
    };
    Vec.prototype.minus = function (vec) {
        return new Vec(this.x - vec.x, this.y - vec.y);
    };
    Object.defineProperty(Vec.prototype, "length", {
        get: function () {
            var xSum = this.x * this.x;
            var ySum = this.y * this.y;
            var sum = xSum + ySum;
            return Math.sqrt(sum);
        },
        enumerable: false,
        configurable: true
    });
    return Vec;
}());
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);
