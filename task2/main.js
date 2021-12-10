function Shape(width, height) {
    if (this.constructor == Shape) {
        throw ("you can't create object from shape");
    }
    else {
        this.width = width;
        this.height = height;
    }
}
Shape.prototype.toString = function () {
    var width = this.width;
    var height = this.height;
    var area = this.area();
    var perimeter = this.perimeter();
    console.log(width);
    console.log(height);
    console.log(area);
    console.log(perimeter);
}
function Rectangle(width, height) {
    Shape.call(this, width, height);
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.area = function () {
    return this.width * this.height;
}
Rectangle.prototype.perimeter = function () {
    return 2 * this.width + 2 * this.height;
}
function Square(width) {
    Shape.call(this, width);
}
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;
Square.prototype.area = function () {
    return this.width * this.width;
}
Square.prototype.perimeter = function () {
    return this.width * 4;
}
Square.prototype.toString = function () {
    var width = this.width;
    var area = this.area();
    var perimeter = this.perimeter();
    console.log(width);
    console.log(area);
    console.log(perimeter);
}
var r = new Rectangle(2, 3);
r.toString();
var s = new Square(2);
s.toString();

var sh=new Shape();