//complete this code
class Rectangle {
	constructor(width,height){
		this.width=width;
		this.height=height;
	}
	Getter(){
		return (this.width,this.height)
	}
	calculate(){
		return (this.width*this.height)
	}
}

class Square extends Animal {
	constructor(side){
		this.side=side;
		super(width,height)
	}
	getPerimeter(){
		console.log(4*side)
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
