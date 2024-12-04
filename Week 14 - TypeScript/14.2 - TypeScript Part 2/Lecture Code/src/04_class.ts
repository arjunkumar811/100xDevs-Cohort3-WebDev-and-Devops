// Create a Shape class with an area function

class Shape {
    area(): void {
        console.log("This is the area of the shape");
        
    }
}

class Circle extends Shape {
    area(): void {
        console.log("this is the area of the circle");
        
    }

    radius(): void {
        console.log("this is the radius of the circle");
        
    }

}

let circle = new Circle();
circle.area();  // this is the area of the circle
circle.radius(); // this is the radius of the circle

