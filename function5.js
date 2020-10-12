var a = [2, 3, 5, 115]

function baba() {

    for (var i = 0; i <= 4; i++) {
        if (a[i] % 2 != 0) {
            console.log(a[i] + " je neparan");
        }

    }
    return "deda"
}

console.log(baba())