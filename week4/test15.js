const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// your code goes here
for (const day of days) {
    console.log(day[0].toUpperCase() + day.slice(1));
}

const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
console.log(...books); // 和python的解包没有区别

const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
console.log(...primes);

const first = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);
const second = new Map([
    [4, 'one'],
    [2, 'two6'],
    [3, 'threes'],
]);
const mergedMap = new Map([...first, ...second]);
console.log(mergedMap);
console.log([...first, ...second]);
console.log(...first);
// 等效于
console.log([1, 'one'], [2, 'two'], [3, 'three']);



const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

const produce = [...fruits, ...vegetables];

console.log(produce);

const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);


function sum(...nums) {
    console.log('arguments', arguments);
    console.log('arguments to array', [...arguments]);
    console.log('nums', nums);
    let total = 0;
    for (const num of nums) {
        total += num;
    }
    return total;
}

console.log(sum(1, 2));
console.log(sum(10, 36, 7, 84, 90, 110));
console.log(sum(-23, 3000, 575000));


function average(...nums) {
    let total = 0;
    for (const num of nums) {
        total += num;
    }
    if (nums.length > 0) {
        return total / nums.length;
    } else {
        return 0;
    }
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());