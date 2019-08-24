// var rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

rainbow.splice(2, 1, "Yellow", "Green");
rainbow.splice(rainbow.length, 0, 'Purple');
console.log(rainbow);



var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

function hasEnoughPlayers(team) {
    return team.length >= 7 ? true : false;
}

console.log(hasEnoughPlayers(team));