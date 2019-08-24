function f1() {
    console.log('in f1: x=' + x);
    try {
        console.log(y);
    } catch (err) {
        console.log('in f1: ' + err);
    }
    x = 12;
}

function f2() {
    var x = 5;
    var y = 11;

    f1();

    function f3() {
        console.log('in f3: y=' + y);
    }
    f3();
    console.log('in f2: x=' + x);
}

var x = 10;

console.log('before global, x=' + x);
f2();
console.log('after global, x=' + x);