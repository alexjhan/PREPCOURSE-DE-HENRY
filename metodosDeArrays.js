var palabra = "Henri";

// Imprimimos la Palabra.
console.log(palabra);

// Comvertimos la palabra en un arreglo.
var palabraSeparada = palabra.split(""); 

// Imprimimos el nuevo arreglo.
console.log (palabraSeparada); 

// Eliminamos el ultimon elemento del arreglo que en este caso seria "i".
palabraSeparada.pop(); 

// Insertamos el elemento "y" en la ultima poscicion del arreglo.
palabraSeparada.push("y");

// Imprimimos el nuevo arreglo formado.
console.log (palabraSeparada); 

// Unimos las elementos del arreglo para formar la palabra.
var palabraArreglada = palabraSeparada.join("");

// Imprimimos e la consola la nueva palabra.
console.log (palabraArreglada);


// Metodo para cada uno forEach (realiza un accion sobre el arreglo).
var numeros = [1, 2, 3, 4];
numeros.forEach((num) => console.log(num));
numeros.forEach((num) => {
    if (num === 3) {
        console.log(num);
    }
})

// Este metodo crea una copia del arreglo original y le puede realizar cambios.
var masUno = numeros.map((num) => {
    return num + 1;
});
console.log(masUno);

// Metodos de clase aprendidos
    // PUSH y UNSHIFT
    var colores = ['Amarillo', 'Azul'];
    colores.push('Rojo'); // Metodo para agregar un elemnto en la ultima posición.
    colores.unshift('Verde'); // Metodo para agregar un elemento en la primera posicion.

    console.log(colores); // Imprimimos el nuevo arreglo.
    // POP y SHIFT
    colores.shift(); // Metodo para ELIMINAR el primer elemento.
    colores.pop(); // Metodo para ELIMINAR el ultimo elemento.

    console.log(colores)

// INCLUDES
    var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
    var existeDali = pintores.includes('Dalí'); // Metodo para seber si un elemento se encuentra en el array.

    console.log(existeDali);

// EVERY
    var numeros = [ 1, 6, 8, 9, 43 ];
    var cumplenCondicion = numeros.every( ( num ) => { num > 5 } ); // Metodo que determina si todo los elementos de un arreglo cumplen con una condicion.

    console.log(cumplenCondicion);
