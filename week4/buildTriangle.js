function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* "
    }
    return line + "\n";
}

function buildTriangle(row) {
    let result = '';
    for (let n = 1; n <= row; n++) {
        result += makeLine(n);
    }
    return result;

}

console.log(buildTriangle(20));