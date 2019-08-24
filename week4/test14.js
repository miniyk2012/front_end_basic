/*
 * Programming Quiz: Build an HTML Fragment (1-2)
 */

const cheetah = {
    name: 'Cheetah',
    scientificName: 'Acinonyx jubatus',
    lifespan: '10-12 years',
    speed: '68-75 mph',
    diet: 'carnivore',
    summary: 'Fastest mammal on land, the cheetah can reach speeds of 60 or perhaps even 70 miles (97 or 113 kilometers) an hour over short distances. It usually chases its prey at only about half that speed, however. After a chase, a cheetah needs half an hour to catch its breath before it can eat.',
    fact: 'Cheetahs have “tear marks” that run from the inside corners of their eyes down to the outside edges of their mouth.'
};

// creates an animal trading card
function createAnimalTradingCardHTML(animal) {
    const cardHTML = `<div class="card">
    <h3 class="name">${animal.name}</h3> 
    <img src="${animal.name}.jpg" alt="${animal.name}" class="picture">
    <div class="description"> 
        <p class="fact">${animal.fact}</p> 
        <ul class="details"> 
            <li><span class="bold">Scientific Name</span>:${animal.scientificName} </li> 
            <li><span class="bold">Average Lifespan</span>:${animal.lifespan}</li> 
            <li><span class="bold">Average Speed</span>:${animal.speed}</li> 
            <li><span class="bold">Diet</span>:${animal.diet}</li> 
        </ul>
        <p class="brief">${animal.summary}</p> 
    </div> 
</div>`;

    return cardHTML;
}

console.log(createAnimalTradingCardHTML(cheetah));


let positions = ['Gabrielle', 'Jarrod', 'Kate', 'Fernando', 'Mike', 'Walter'];
let [first, second, third, ...tail] = positions;
console.log(first);
console.log(second);
console.log(third);
console.log(tail);

const circle = {
    radius: 10,
    color: 'orange',
    getArea: function () {
        return Math.PI * this.radius * this.radius;
    },
    getCircumference: function () {
        return 2 * Math.PI * this.radius;
    }
};
console.log(circle.getArea());
let {
    radius,
    getArea,
    getCircumference
} = circle;

console.log(getCircumference);
console.log(getCircumference()); // NaN, 在解构该对象并将 getArea() 方法存储到 getArea 变量中时，它无法再访问 circle 对象中的 this，得出面积 NaN


const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

const [one, , , two, , , , three] = things;
const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;

console.log(colors);


let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {
    type,
    color,
    carat,
    calculateWorth() {
        return `${this.color} ${this.type} cost ${this.carat}`;
    }
}
const {
    calculateWorth
} = gemstone;
console.log(gemstone.calculateWorth());
console.log(calculateWorth());


Array.prototype.decimalfy = function () {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].toFixed(2);
    }
};

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const index in digits) {
    console.log(index, digits[index]);  // 会把decimalfy也打印出来
}

for (const index of digits) {
    console.log(index, digits[index]);  // 不会把decimalfy也打印出来
}

digits.forEach(function(value) {
    console.log(value);
});
digits.decimalfy();
console.log(digits);
