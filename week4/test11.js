class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

var a = function () {}
console.log(typeof Point);
console.log(typeof a);
console.log(typeof 11);
console.log(typeof 'a');
console.log(typeof [1, 2, 3]);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof true);
console.log();

var umbrella = {
    color: "pink",
    isOpen: true,
    open: function () {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    // your code goes here
    close: function () {
        if (umbrella.isOpen) {
            umbrella.isOpen = false;
            console.log('close the umbrella');
        } else {
            console.log('already close the umbrella');
        }
    }
};

umbrella.close();
umbrella.close();
umbrella.open();
umbrella.close();