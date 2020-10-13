function findChar(char, text) {
    var position = -1;

    for (var i = 0; i < text.length; i++) {
        if (text[i] === char) {
            position = i + 1
            return i
        }
    }
    return position
}