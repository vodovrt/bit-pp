var pBroj
var rezultat = 0
for (var pBroj = 0; pBroj < 1000; pBroj++) {
    if (pBroj % 3 === 0 && pBroj % 5 === 0) {
        rezultat += pBroj
    }
} console.log(rezultat)


//komentar
var rez = 0;

for (var i = 0; i < 1000; i++) {




    if (i % 3 === 0 && i % 5 === 0) {
        rez = i + rez
    }
}
console.log(rez)


//komentar


var brojevi = [1, 2, 3, 4]
var zbir = 0;
var proizvod = 1;



for (var i = 0; i < brojevi.length; i++) {
    zbir = zbir + brojevi[i]
    proizvod = proizvod * brojevi[i];

}
console.log(proizvod)
console.log(zbir)

