let fullName: string = 'Artem Biliakov';

let salary: number = 1090223;

let gay: boolean = true;

console.log(fullName, salary, gay);

const names: string[] = ['Bill', 'Alex', 'Sophie'];
const epicNumbers: number[] = [1, 3, 5];

type cool = {
    id: number,
    cool: boolean
};

const ids: cool[] = [
    {id: 1, cool: true},
    {id: 2, cool: false},
    {id: 3, cool: true},
];

console.log(names, epicNumbers, ids);
