// Tipos de funções
// funções simples
function showMessage() {
  const message = "<h2> Olá, bem vindo!!</h2>";
  document.write(message);
}
//Invocar a função
showMessage();

//Função com parâmetro / Argumento
const user = "Elias";
function showUserMessage(user) {
  // Essa função recebe um parâmetro
  document.write(`<h3> O que deseja fazer hoje, ${user}?</h3>`);
}
showUserMessage(user); // Envio de argumento

// Função com mais de um parâmetro
const n1 = 10;
const n2 = 5;

function sum(n1, n2) {
  // Essa função recebe dois parâmetros
  let result = n1 + n2;
  document.write(`<p> A soma de ${n1} + ${n2} é igual a ${result}.<p/>`);
}
// Invocando a função
sum(n1, n2); // Enviando os argumentos

// Função com retorno
const num1 = 50;
const num2 = 3;

// é indicado que as funções possua, o mínimo de responsabilidades possíveis

// Essa função irá multiplicar dois números
function mult(num1, num2) {
  return num1 * num2;
}
document.write(`O resultado da multplicação é ${mult(num1, num2)}`);

// Função com retorno condicional
const number = 5;
function parImpar(number) {
  if (number % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}
document.write(`<p> O número ${number} é ${parImpar(number)}.</p>`);

// Função Anônima
const divisao = function (n) {
  return n / 2;
};
let numero = 200;

document.write(`<p> A metade de ${numero} é ${divisao(numero)}.</p>`);

// Função seta (Arrow Function) -> é um tipo de função anônima
const dobro = (x) =>{
    return x *2;
};
const x = 300;
document.write(`<p>O dobro de ${x} é ${dobro(x)}.</p>`)
// Arrow function com mais de um parâmetro
const calculadora = (a, operador, b) => {
  return eval(`${a} ${operador} ${b}`);
};
document.write(`O resultado da operação matemática é ${calculadora(1100, "-",1)}.`)

