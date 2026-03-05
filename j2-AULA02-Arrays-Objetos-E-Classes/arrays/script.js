//Declaração e Exibindo itens de um Array
let produtos = [];
const nome = "Elias"
document.write(typeof produtos);

let products = ["Computador", "Notebook", "Celular", "Tablet"];
document.write(`<p>${products}</p>`);

document.write(`<p>Exibindo os elementos os do vetor através do índice:</p>`);
document.write(`<p> ${products[0]}</p>`);
document.write(`<p> ${products[1]}</p>`);
document.write(`<p> ${products[2]}</p>`);
document.write(`<p> ${products[3]}</p>`);

document.write('<p>Exibindo elementos do vetor através do forEach:</p>')
products.forEach(function(product){
    document.write(`<p>${product}</p>`);
});

document.write('<p>Exibindo elementos do vetor através do forEach COM OS ÌNDICES:</p>')
products.forEach((product, i) => {
    document.write(`<p>${i+1} - ${product}</p>`)
});

//MÉTODOS DE MANIPILAÇÃO DE VETORES
let frutas = ['Laranja','Maça', 'Banana']
document.write(`<p>Nossa lista de frutas é : ${frutas}</p>`);
frutas[3] = 'Morango'
document.write(`<p>Adicionando uma fruta: ${frutas}</p>`);

document.write('<h4>Adicionando uma fruta com o método push:</h4>')
frutas.push('Abacaxi');
document.write(`<p>Adicionando uma fruta: ${frutas}</p>`);

document.write('<h4>Adicionando uma fruta com o método unshift:</h4>')
frutas.unshift('Pera');
document.write(`<p>Adicionando uma fruta: ${frutas}</p>`);

//COMO CONTAR OS ELEMENTOS DE UM VETOR - Método LENGTH
const items = frutas.length
document.write(`<p>Na nossa lista temos ${items} frutas</p>`);
