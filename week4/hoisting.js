/*
变量_声明提升到了到其作用域的顶部（函数的顶部）。注意，是声明提升了，不是__赋值_。
这里的代码等于：

function sayHi(name) {
    var greeting;
    console.log(greeting + " " + name);
    greeting = "niubi";
}
sayHi('Julia');

JavaScript 会将函数声明和变量声明提升到当前作用域的顶部。
变量_赋值_不会提升。
在脚本的顶部声明函数和变量，这样语法和行为就会相互保持一致。
*/


sayHi('Julia');

function sayHi(name) {
    console.log(greeting + " " + name);
    var greeting = "niubi";
}