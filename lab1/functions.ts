export function printAge(name: string, age: number = 6): string {
        return `${name} is ${age} years old`;
}

console.log(printAge("Artem", 19));
console.log(printAge("Mark"));