//primimo broj
//obradimo input
//ispisemo dan u nedelji (tekstualno) na osnovu inputa= output
var input = 4

switch (input) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5: {
        console.log("radni dan");
        break;
    }
    case 6:
    case 7: {
        console.log("weekend");
        break;
    }
    default: {
        console.log("input mora da bude broj od 1 - 7")
        break;

    }

}

