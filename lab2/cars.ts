// Abstract class
abstract class Car {
    protected power: string;
    protected model: string;
    protected seats: number;  
    public color: string;
    
    constructor(power: string, color: string, model: string, seats: number) {
        this.power = power;
        this.color = color;
        this.model = model;
        this.seats = seats;
    } 
    
    about(): void {
        console.log(`Колір: ${this.color}`);
        console.log(`Потужність: ${this.power}`);
        console.log(`К-ть сидінь: ${this.seats}`);
    }
}

// Derived classes

class Volkswagen extends Car {
    private fuelEfficiency: number;
    private hybrid: boolean;
    private safetyRating: number;

    constructor(power: string, color: string, model: string, seats: number, 
        fuelEfficiency: number, hybrid: boolean, safetyRating: number) {
        super(power, color, model, seats);
        
        this.fuelEfficiency = fuelEfficiency;
        this.hybrid = hybrid;
        this.safetyRating = safetyRating;
    }
    
    about(): void {
        console.log(`Volkswagen ${this.model}`);
        super.about();
        console.log(`Витрати палива: ${this.fuelEfficiency} л/100 км`)
        console.log('Гібридна система: ' + (this.hybrid ? 'наявна' : 'відсутня'));
        console.log(`Рейтинг безпеки: ${this.safetyRating}`);
    }
}

class BMW extends Car {
    private luxuryLevel: string;
    private sportMode: boolean;
    private driveType: string;

    constructor(power: string, color: string, model: string, seats: number, 
        luxuryLevel: string, sportMode: boolean, driveType: string) {
        super(power, color, model, seats);

        this.luxuryLevel = luxuryLevel;
        this.sportMode = sportMode;
        this.driveType = driveType;
    }

    about(): void {
        console.log(`BMW ${this.model}`);
        super.about();
        console.log(`Рівень комфорту: ${this.luxuryLevel}`);
        console.log('Спортивний режим: ' + (this.sportMode ? 'є' : 'немає'));
        console.log(`Тип приводу: ${this.driveType}`);
    }
}

class Tesla extends Car {
    private batteryCapacity: number;
    private autopilot: boolean;
    private chargingTime: number;

    constructor(power: string, color: string, model: string, seats: number, 
        batteryCapacity: number, autopilot: boolean, chargingTime: number) {
        super(power, color, model, seats);

        this.batteryCapacity = batteryCapacity;
        this.autopilot = autopilot;
        this.chargingTime = chargingTime;
    }

    about(): void {
        console.log(`Tesla ${this.model}`);
        super.about();
        console.log(`Ємність батареї: ${this.batteryCapacity} кВт·год`);
        console.log('Автопілот: ' + (this.autopilot ? 'підтримується' : 'немає'));
        console.log(`Час зарядки: ${this.chargingTime} год.`);
    }
}

// Creating objects and outputting the data.
const vw1 = new Volkswagen("150 к.с.", "сріблястий", "Golf", 5, 6.5, true, 5);
const vw2 = new Volkswagen("110 к.с.", "білий", "Polo", 5, 5.8, false, 4);

const bmw1 = new BMW("250 к.с.", "чорний", "X5", 5, "Преміум", true, "Повний");
const bmw2 = new BMW("190 к.с.", "синій", "3 Series", 5, "Комфорт", false, "Задній");

const tesla1 = new Tesla("350 к.с.", "білий", "Model S", 5, 100, true, 1.5);
const tesla2 = new Tesla("280 к.с.", "червоний", "Model 3", 5, 75, false, 2.0);

vw1.about();
console.log("---------------");
vw2.about();
console.log("---------------");
bmw1.about();
console.log("---------------");
bmw2.about();
console.log("---------------");
tesla1.about();
console.log("---------------");
tesla2.about();
