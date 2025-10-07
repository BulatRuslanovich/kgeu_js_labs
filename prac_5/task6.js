function Parallelepiped(width, length, height) {
  this._width = width;
  this._length = length;
  this._height = height;

  this.getWidth = function() { return this._width; };
  this.getLength = function() { return this._length; };
  this.getHeight = function() { return this._height; };

  this.calcVolume = function() {
    return this._width * this._length * this._height;
  };

  this.calcSurfaceArea = function() {
    return 2 * (this._width * this._length + this._width * this._height + this._length * this._height);
  };
}

const box = new Parallelepiped(2, 3, 4);
console.log(box.getWidth());  // 2
console.log(box.getLength()); // 3
console.log(box.getHeight()); // 4
console.log(box.calcVolume()); // 24
console.log(box.calcSurfaceArea()); // 52 (2*(6 + 8 + 12) = 52)

