// === Exercícios de Condicionais ===
// 1. Verifique se uma pessoa pode votar com base em sua idade.




// function podeVotar(idade) {


//     idade = parseInt(prompt("digite sua idade"))

//     if (idade > 18) {

//         console.log("Você é pode votar");

//     }
//     else  {

//         console.log("você é menor, não pode votar");


//     }


// }


// document.addEventListener("DOMContentLoaded", podeVotar())


// 2. Determine o maior número entre três números.
// function maiorNumero(a, b, c) {



//     a = parseInt(prompt("coloque 1° numero"))
//     b = parseInt(prompt("coloque 2° numero"))
//     c = parseInt(prompt("coloque 3° numero"))

//     console.log(a);
//     console.log(b);
//     console.log(c);


//     if (a > b && a > c)
//     {

//         console.log("o primeiro numero " + "( "+ a + " )" + " é o maior numero");

//     }
//     else if (b > c && b > a)
//     {

//         console.log("o segundo numero " +  "( "+   b   + " )" + " é o maior numero");

//     }
//     else
//     {

//         console.log( "o terceiro numero " + "( " + c + " ) ," + " é o maior numero");

//     }

// }

// document.addEventListener("DOMContentLoaded", maiorNumero())

// 3. Avalie se um número é positivo, negativo ou zero.
// function tipoNumero(num) {



//         num = parseInt(prompt("coloque um numero positivo, negativo ou zero"))


//         console.log(num);


//         if (num > 1)
//         {

//             console.log("positivo");

//         }
//         else if (num < 0)
//         {

//             console.log("negativo");

//         }
//         else
//         {

//             console.log( "o numero é zero");

//         }

//     }

//     document.addEventListener("DOMContentLoaded", tipoNumero())

// 4. Determine se uma loja está aberta com base na hora atual (0-23).


function lojaAberta(hora) {

    hora = (prompt("Horario?"));


    
    console.log(hora);

}


document.addEventListener("DOMContentLoaded", lojaAberta())
// 5. Avalie se uma palavra é longa (mais de 10 caracteres).



// === Exercícios de Laços de Repetição ===
// 1. Imprima os números de 1 a 10 usando um laço for.



// 2. Use um for-of para imprimir cada letra de uma palavra.
let palavra = "JavaScript";



// 3. Utilize for-of para imprimir cada palavra desta lista.
let listaDePalavras = ["Fernando", "Eduardo", "Brasil", "Reino Unido", "Japão", "Croácia"];



// 4. Some os números de 1 a 100 usando while.



// 5. Use o método map para criar um novo array com o dobro dos valores do array original.



// 6. Conte os números pares de 1 a 20 usando um laço for.



// === Exercícios de Métodos de Array ===
// 1. Use filter para encontrar todos os números maiores que 5 em um array.
let nums = [3, 7, 1, 8, 2, 9];



// 2. Use find para localizar o primeiro número ímpar em um array.
let numerosAleatorios = [2, 4, 6, 7, 10, 12];



// 3. Filtre os nomes que começam com a letra "A".
let nomes = ["Ana", "João", "Amanda", "Carlos", "Alice"];



// 4. Localize o primeiro número maior que 50 em um array.
let valores = [10, 20, 55, 40, 60];



// 5. Use filter para encontrar palavras com mais de 4 letras.
let palavras = ["gato", "elefante", "sol", "mar", "montanha"];


// 6. Use filter para encontrar quais filmes tem o genero ação.
let filmes = [
    {
        nome: "Os Vingadores",
        genero: "Açâo"
    },
    {
        nome: "A Lagoa Azul",
        genero: "Romance"
    },
    {
        nome: "O Bug da linha 42.",
        genero: "Terror"
    }
];
