function strReplace(text, separator) {
    separator = separator || '-'
    var result = '';
    for (var i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
            result += separator
        } else {
            result += text[i]
        }
    }
    return result
}
console.log(strReplace("Evo", ""))