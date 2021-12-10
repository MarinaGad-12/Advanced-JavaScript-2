function Rectangle(width, height) {
    this.width = width;
    this.height = height;
    Rectangle.prototype.counter();
}
Rectangle.prototype.area = function () {
    return this.width * this.height;
}
Rectangle.prototype.perimeter = function () {
    return 2 * this.width + 2 * this.height;
}
Rectangle.prototype.displayInfo = function () {
    var width = this.width;
    var height = this.height;
    var area = this.area();
    var perimeter = this.perimeter();
    console.log(width);
    console.log(height);
    console.log(area);
    console.log(perimeter);
}
Rectangle.prototype.count=0;
Rectangle.prototype.counter = function () {
    this.count++;
}
var r = new Rectangle(2, 3);
r.displayInfo();
var r2 = new Rectangle(2, 3);
console.log("count="+r.count);