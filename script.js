//complete this code
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }
  set width(newWidth){
	this._width=newWidth;
  }
  get height() {
    return this._height;
  }
  set height(newHeight){
	  this._height=newHeight
  }
  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(side) {
	  
    super(side, side);
	  this._side=side
  }

  getPerimeter() {
    return 4 * this._width;
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
