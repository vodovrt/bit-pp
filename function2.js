function a() {
    var text
    for (var i = 0; i < arguments.length; i++) {
        text = " "
        for (j = 0; j < arguments[i]; j++) {
            text = text + " * "
        }
        console.log(text);
    }
}
a(5, 3, 7)

