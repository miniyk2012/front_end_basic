var a = 1;
var b = 2;

if (a > b) {
    console.log("a大于b");
} else {
    console.log("a小于或等于b");
}

/*
 * Programming Quiz: Even or Odd (3-2)
 *
 * Write an if...else statement that prints `even` if the 
 * number is even and prints `odd` if the number is odd.
 *
 * Note - make sure to print only the string "even" or the string "odd"
 */

// change the value of `number` to test your if...else statement
var number = 2;

if (number % 2 === 0) {
    console.log('even');
} else {
    console.log('odd');
}

// change the value of `musicians` to test your conditional statements
/*
如果音乐人人数小于或等于 0 人，则输出 "not a group"
如果音乐人人数等于 1 人，则输出 "solo"
如果音乐人人数等于 2 人，则输出 "duet"
如果音乐人人数等于 3 人，则输出 "trio"
如果音乐人人数等于 4 人，则输出 "quartet"
如果音乐人人数大于 4 人，则输出 "this is a large group"
*/
var musicians = 5;

// your code goes here
if (musicians <= 0) {
    console.log('not a group');
} else if (musicians === 1) {
    console.log('solo');
} else if (musicians === 2) {
    console.log('duet');
} else if (musicians === 3) {
    console.log('trio');
} else if (musicians === 4) {
    console.log('quartet');
} else {
    console.log('this is a large group');
}


// change the value of `room` and `suspect` to test your code
var room = "dining room";
var suspect = "Mr. Parkes";
var weapon = "";
var solved = false;

if (room === 'ballroom') {
    weapon = 'poison';
    if (suspect === 'Mr. Kalehoff') {
        solved = true;
    }
} else if (room === 'gallery') {
    weapon = 'trophy';
    if (suspect === 'Ms. Van Cleve') {
        solved = true;
    }
} else if (room === 'billiards room') {
    weapon = 'pool stick';
    if (suspect === 'Mrs. Sparr') {
        solved = true;
    }
} else {
    weapon = 'knife';
    if (suspect === 'Mr. Parkes') {
        solved = true;
    }
}

if (solved) {
    console.log(`${suspect} did it in the ${room} with the ${weapon}!`);
}

/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 325.00;
var checkBalance = true;
var isActive = false;

// your code goes here
if (!checkBalance) {
    console.log('Thank you. Have a nice day!');
} else {
    if (isActive && balance > 0) {
        console.log('Your balance is $' + balance.toFixed(2) + '.');
    } else if (!isActive) {
        console.log('Your account is no long active.');
    } else if (balance === 0) {
        console.log('Your account is empty.');
    } else {
        console.log('Your balance is negative. Please contact bank.');
    }
}

/*
 * Programming Quiz: Ice Cream (3-6)
 *
 * Write a single if statement that logs out the message:
 * 
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 * 
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators. 
 * It's okay if the output string doesn't match exactly.
 */

// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "strawberry";
var vessel = "cone";
var toppings = "cookies";

// Add your code here
var message = `I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}.`;
if ((flavor === "vanilla" || flavor === "chocolate") && (vessel === "cone" || vessel === "bowl") && (toppings === "sprinkles" || toppings === "peanuts")) {
    console.log(message);
}

var isGoing = true;
var color;
color = isGoing ? 'green' : 'red';
console.log(color);

/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = true;

var category = eatsAnimals ? (eatsPlants ? 'omnivore' : 'carnivore') : (eatsPlants ? 'herbivore' : undefined);

console.log(category);

var month = 2;

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        days = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        days = 30;
        break;
    case 2:
        days = 28;
}

console.log("There are " + days + " days in this month.");


// change the value of `education` to test your code
var education = 'no high school diploma';

// set the value of this based on a person's education
var salary = 0;
var message = '{0} is dead, but {1} is alive! {1} {2}'
// your code goes here
switch (education) {
    case "no high school diploma" :
        salary = 25636;
        break;
    case "a high school diploma" :
        salary = 35256;
        break;
    case "an Associate's degree" :
        salary = 41496;
        break;
    case "a Bachelor's degree" :
        salary = 59124;
        break;
    case "a Master's degree" :
        salary = 69732;
        break;
    case "a Professional degree" :
        salary = 89960;
        break;
    case "a Doctoral degree" :
        salary = 84396;
}
console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");
