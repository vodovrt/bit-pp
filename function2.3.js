function nifi(text, n) {
    var result = "";
    n = n || 1
    for (var i = 0; i < n; i++) {

        result += text
    }
    return result;

}
console.log(nifi("abc"))
console.log(nifi("abc", 3))