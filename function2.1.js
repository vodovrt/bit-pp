function isString(nesto) {

    var b = true
    if (typeof nesto === "string") {

    } else {
        b = false
    }
    return b;
}
console.log(isString("ja jesam string"));
console.log(isString(123));