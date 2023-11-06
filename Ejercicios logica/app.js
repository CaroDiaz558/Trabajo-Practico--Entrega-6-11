// ----EJERCICIO 1----//

//Escribe una funcion que determine si un numero es primo o no

let num = 148;

function esPrimo(num) {
  let acum = 0;
  if (num > 0 && num <= 1) {
    acum = 1;
  }
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      acum++;
    }
  }

  if (acum == 1) {
    return true;
  } else {
    return false;
  }
 
}

if (esPrimo(num)) { 
  console.log(`El numero ${num} es primo`);
} else { 
  console.log(`El numero ${num} no es primo`);
}




// ----EJERCICIO 2----//

//Operaciones de matriz: Implementa una función que realice operaciones de matriz, como suma, resta o multiplicación, en dos matrices dadas.

// Operaciones dos arrays

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

function operacionesArray(array1,array2) {
  let suma = [];
  let resta = [];
  let multiplicacion = [];

  //Suma
  for (i = 0; i < array1.length; i++) {
    suma[i] = array1[i] + array2[i];
  }

  console.log(`La suma entre [${array1}] + [${array2}] = [${suma}]`);

  //Resta
  for (i = 0; i < array1.length; i++) {
    resta[i] = array1[i] - array2[i];
  }
  console.log(`La resta entre [${array1}] - [${array2}] = [${resta}]`);

  //Multiplicacion

  for (i = 0; i < array1.length; i++) {
    multiplicacion[i] = array1[i] * array2[i];
  }
  console.log(
    `La multiplicacion entre [${array1}] - [${array2}] = [${multiplicacion}]`
  );
}

// Operaciones dos Matrices

let matriz1 = [
  [1, 2],
  [4, 5],
];
let matriz2 = [
  [4, 5],
  [7, 8],
];
let sumaM = [[], []];
let restaM = [[], []];
let multiplicacionM = [[], []];

function operacionesMatriz(matriz1,matriz2) {
  for (let i = 0; i < matriz1.length; i++) {
    for (let j = 0; j < matriz1[i].length; j++) {
      sumaM[i][j] = matriz1[i][j] + matriz2[i][j];
    }
  }

  console.log(`El resultado de la suma de las matrices es: `);
  for (let i = 0; i < sumaM.length; i++) {
    for (let j = 0; j < sumaM[i].length; j++) {
      console.log(` [${i}${j}]=[${sumaM[i][j]}]`);
    }
  }

  for (let i = 0; i < matriz1.length; i++) {
    for (let j = 0; j < matriz1[i].length; j++) {
      restaM[i][j] = matriz1[i][j] - matriz2[i][j];
    }
  }

  console.log(`El resultado de la resta de las matrices es: `);
  for (let i = 0; i < restaM.length; i++) {
    for (let j = 0; j < restaM[i].length; j++) {
      console.log(` [${i}${j}]=[${restaM[i][j]}]`);
    }
  }

  for (let i = 0; i < matriz1.length; i++) {
    for (let j = 0; j < matriz1[i].length; j++) {
      multiplicacionM[i][j] = matriz1[i][j] * matriz2[i][j];
    }
  }

  console.log(`El resultado de la multiplicacion de las matrices es: `);
  for (let i = 0; i < multiplicacionM.length; i++) {
    for (let j = 0; j < multiplicacionM[i].length; j++) {
      console.log(` [${i}${j}]=[${multiplicacionM[i][j]}]`);
    }
  }
}

operacionesArray(array1,array2);
operacionesMatriz(matriz1,matriz2);


// ----EJERCICIO 3----//

//Suma de numeros en un rango. Escribe una funcion que calcule la suma de todos los numeros en un rango dado (por ejemplo de a a b)

function sumarIntervalo(a, b) {
  let sumaInt = 0;
  for (let i = a; i <= b; i++) {
    sumaInt = +i;
  }
  console.log(
    `La suma del intervalo que va desde ${a} a ${b} es de ${sumaInt}`
  );
}

sumarIntervalo(4, 10);

// ----EJERCICIO 4----//

//Contar vocales: Crea una función que cuente el número de vocales en una cadena de texto.

let string = "hola mundo";

function sumarVocales(string) {
  let vocal = "aeiou";
  let cont = 0;

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < vocal.length; j++) {
      if (string[i].includes(vocal[j])) {
        cont++;
      }
    }
  }

  console.log(`La cadena ${string} tiene ${cont} vocales`);
}

sumarVocales(string);

// ----EJERCICIO 5----//
//5-De una matriz devuelve una matriz con elementos únicos.(sin duplicados). Por eje: [“Sofia”, “Maria”, “Pedro, “Sofia”] → [“Sofia”, “Maria”, “Pedro”]

let nombres = ["Sofia", "Maria", "Pedro", "Sofia"]
let unique= [];

function duplicados(nombres){
   unique= nombres.filter((item,index)=>{
    return nombres.indexOf(item)===index;
   }) 

   console.log(unique);
};

duplicados(nombres);

// ----EJERCICIO 6----//

// Crea una función que invierta una cadena de texto sin usar reverse()

let cadena= "hola mundo";
let cadenaInvertida= "";

function invertir(cadena) {

  for (let i = cadena.length-1; i >= 0; i--) {
    cadenaInvertida += cadena[i];
  }

  console.log(cadenaInvertida);
  
};

invertir(cadena);
