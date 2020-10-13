function getChars(text, x) {
    var result = ''
    for (var i = 0; i < x && i < text.lenght; i++) {
        result += text[i]


    }
    result += '...'
    return result;
}

console.log(getChars('deda'))