function str2arr(text) {
    result = []
    for (i = 0; i < text.length; i++) {
        if (text[i] === ' ') {

            result[result.length] = null

        } else {
            result[result.length] = text[i]
        }

    }





    return result
}
var a = str2arr('petar pertovic pera')
console.log(a)