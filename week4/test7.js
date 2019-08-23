// 函数表达式 catSays
var catSays = function (max) {
    var catMessage = "";
    for (var i = 0; i < max; i++) {
        catMessage += "meow ";
    }
    return catMessage;
};

// 函数声明 helloCat 接受一个回调
function helloCat(callbackFunc) {
    return "Hello " + callbackFunc(3);
}

// catSays 作为回调函数传入
var output = helloCat(catSays);
console.log(output);

var fav = function movie() {
    console.log('movie');
}

fav()
// movie()  声明movie函数的同时将其赋给fav，则原名称不会有效


// 函数声明需要两个参数：一个显示消息的函数，以及一个电影名称
function movies(messageFunction, name) {
    messageFunction(name);
}

// 调用 movies 函数，传入一个函数和电影名称
movies(function displayFavorite(movieName) {
    console.log("My favorite movie is " + movieName);
}, "Finding Nemo");
var cry = function printBoohoo() {
    return "boohoo!"
}
console.log(cry());


function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}
function laugh(nums) {
    let ret = '';
    for (let i=0; i<nums; i++) {
        ret += 'ha';
    }
    return ret + '!';
}
emotions('happy', laugh);