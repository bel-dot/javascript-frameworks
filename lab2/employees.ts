// Abstract class
abstract class Employee {
    private name: string;
    private age: number;
    protected salary: number;
    
    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    
    abstract getAnnualBonus(): number;
}

// Derived classes
class Developer extends Employee implements Payable {
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }
    
    getAnnualBonus(): number {
        return this.salary * 0.1;
    }

    pay(): void {
        console.log('Dev pays his time to write code.');    
    }
}

class Manager extends Employee implements Payable {
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }
    
    getAnnualBonus(): number {
        return this.salary * 0.2;
    }
    
    pay(): void {
        console.log('Manager pays his nerves to manage devs.');    
    }
}

interface Payable {
    pay(): void;
}

const employees: Employee[] = [
    new Developer('Artem', 19, 300),
    new Developer('Mark', 19, 250),
    new Developer('Volodymyr', 20, 320),
    new Developer('Billy', 12, 10),
    new Developer('Steve', 14, 2009),
    new Manager('John', 37, 2500),
];

let bonusSum: number = 0;
employees.forEach(employee => {
    bonusSum += employee.getAnnualBonus();
});

console.log('Загальна кількість бонусів: ' + bonusSum);
