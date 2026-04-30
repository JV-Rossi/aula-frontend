/**
 * Exercicio 3
 */

//solicitar um número e grava-lo
let numero = parseFloat(prompt("Digite um número:"));

// Verifica se a entrada é um número negativo, positivo ou zero.
if (numero > 0) {
    console.log("Número positivo");
}   else if (numero < 0) {
    console.log("Número negativo");
}   else {
    console.log("Número zero")
}



/**
 * Exercicio 5
 */

//solicitar uma nota e grava-la
let nota = parseFloat(prompt("Digite a nota:"));

// Verifica se a nota é aprovado, reprovado ou recuperação.
if (nota >= 7) {
    console.log("APROVADO");
}   else if (nota >= 5) {
    console.log("Recuperação");
}   else {
    console.log("REPROVADO")
}



/**
 * Exercicio 6
 */

let nivel = parseFloat(prompt("Digite o nivel:"));

switch (nivel) {
    case 1:
        console.log("Iniciante");
        break;
    case 2:
        console.log("Intermediário");
        break;
    case 3:
        console.log("avançado");
        break;
    default:
        console.log("Indeterminado");
}


/**
 * Exercicio 7
 */

let idade = parseFloat(prompt("Digite a idade:"));

let resultado = (idade >= 18) ? "Maior de idade" : "Menor de idade";
console.log(resultado);