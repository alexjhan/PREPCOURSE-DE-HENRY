// Bucle for.
var arr = [1, 2, 3, 4, 5];

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
};

// Recorrer las letras y encontrar la letra P.
function encontrarLetraP(strn1) {
    var letrasEnArray = strn1.split("");
    for (let i = 0; i < letrasEnArray.length; i++) {
        if (letrasEnArray[i] === "p" || letrasEnArray[i] === "P" ) {
            console.log ("si contiene a P");
        } else {
            console.log ("No contiene a P")
        }
    }
}
encontrarLetraP ("marciano")
encontrarLetraP ("pP")

// Bucle while
    var arr = [];
    while (arr.length < 5) {
        arr.push("pull");
    }
    console.log (arr);