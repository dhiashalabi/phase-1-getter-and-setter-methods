// Add your Circle class here

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(diameter) {
        this.radius = diameter / 2;
    }

    get circumference() {
        return 2 * Math.PI * this.radius;
    }

    set circumference(circumference) {
        this.radius = circumference / (2 * Math.PI);
    }

    get area() {
        return Math.PI * this.radius ** 2;
    }

    set area(area) {
        this.radius = Math.sqrt(area / Math.PI);
    }
}

const circleObj = new Circle(5);

console.log(circleObj.diameter);
circleObj.diameter = 12;
console.log(circleObj.radius);

console.log(circleObj.circumference);
circleObj.circumference = 35;
console.log(circleObj.radius);

console.log(circleObj.area);
circleObj.area = 90;
console.log(circleObj.radius);
