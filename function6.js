function test(text) {
    var broj = 0;
    for (var i = 0; i < text.length; i++) {
        var slovo = text[i]
        if (slovo === "a") {
            broj++
        }
    }
    return broj;
}
var rezultat = test("blablablabla")
console.log(rezultat)