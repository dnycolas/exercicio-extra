// === Exemplo de condicionais ===
// 1. Utilize uma estrutura condicional para descobrir se a pessoa é maior de idade.
let idade = 18;

if (idade <= 18) {

    console.log("você é de menor");


} else {

    console.log("você é maior de idade");

}



let nomes = ["Thor", "Hulk", "Homem de ferro", "Homem-aranha"];
// === Exemplos de laço de repetição
// 1. Utilize a estrutura de repetição while para listar todos os nomes da lista no console.



// let indice = -1

// while (indice < 3) {

//     indice++

//     console.log(nomes[indice])

// }


// 2. Utilize a estrutura de repetição for para listar todos os nomes da lista no console.


// nomes.forEach(element => {

//     console.log(element)

// });


// 3. Utilize a estrutura de repetição map para listar todos os nomes da lista no console.


let novaLista =  nomes.map(myFunction);

function myFunction(nome)
{

    return console.log(nome);

}

