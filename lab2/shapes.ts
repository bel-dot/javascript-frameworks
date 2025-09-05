// The needed interface
interface Shape {
    getArea(): number,
    getPerimeter(): number,
};

// Classes
class Circle implements Shape {
    radius: number;
    
    constructor(radius: number) {
        this.radius = radius;
    }
    
    getArea(): number {
        return Math.round(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
    }
    
    getPerimeter(): number {
        return Math.round(2 * Math.PI * this.radius * 100) / 100;
    }
    
    scale(factor: number): void {
        this.radius *= factor;
    }
}

class Rectangle implements Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    
    getArea(): number {
        return this.width * this.height;
    }
    
    getPerimeter(): number {
        return 2 * this.width + 2 * this.height;
    }
    
    scale(factor: number): void {
        this.width *= factor;
        this.height *= factor;
    }
}

class Triangle implements Shape {
    l1: number;
    l2: number;
    l3: number;
    
    constructor(l1: number, l2: number, l3: number) {
        this.l1 = l1;
        this.l2 = l2;
        this.l3 = l3;
    }
    
    getPerimeter(): number {
        return this.l1 + this.l2 + this.l3;
    }
    
    getArea(): number {
        const s = this.getPerimeter() / 2;
        
        return Math.round(Math.sqrt(s * (s - this.l1) * (s - this.l2) * (s - this.l3)) * 100) / 100;
    }

    scale(factor: number): void {
        this.l1 *= factor;
        this.l2 *= factor;
        this.l3 *= factor;
    }
}

// 4th sub-task
const shapes: Shape[] = [
    new Circle(3),
    new Rectangle(5, 7),
    new Triangle(2, 2, 3),
    new Circle(9),
    new Triangle(4, 5, 8),
];

let generalArea: number = 0, generalPerimeter: number = 0

shapes.forEach(shape => {
    generalArea += shape.getArea();
    generalPerimeter += shape.getPerimeter();
});

console.log(`General shapes area: ${generalArea}`);
console.log(`General shapes perimeter: ${generalPerimeter}`);
