function a(n) {
    var text;
    for (var i = 0; i < n; i++) {
        text = ""
        for (var j = 0; j < n; j++) {
            if (i === 0 || j === 0 || i === n - 1 || j === n - 1) {
                text += "*"

            } else {
                text += " "
            }
        }
        console.log(text);
    }
}

a(5)