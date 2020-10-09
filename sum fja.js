function sum() {

    var c = 0;

    for (var i = 0; i < arguments.length; i++) {
        c = c + arguments[i];
    }
    return c;
}
var result = sum(1, 2)
console.log(result)