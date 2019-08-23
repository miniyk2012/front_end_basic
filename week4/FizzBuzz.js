/*
 * Programming Quiz: JuliaJames (4-1)
 编写一个满足以下要求的 while 循环：

从数字 1 循环访问到 20
如果数字可以被 3 整除，则输出 “Julia”
如果可以被 5 整除，则输出 “James”
如果可以同时被 3 和 5 整除，则输出 “JuliaJames”
如果不能被 3 或 5 整除，则输出该数字

 */

var x = 1;

while (x <= 20) {
    if (x % 3 === 0 && x % 5 === 0) {
        console.log('Julia');
    } else if (x % 3 === 0) {
        console.log('James');
    } else if (x % 5 === 0) {
        console.log('JuliaJames');
    } else {
        console.log(x);
    }
    x += 1;
}
