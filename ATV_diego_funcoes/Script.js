// ===============================
// 1 - Função que mostra informações pessoais
// ===============================

// Função sem argumentos (não recebe parâmetros)
function showMessagem (){

    // Variável que guarda o texto HTML que será exibido
    const messagem ="<h2> 1- Meu nome é Elias<br><br> Eu tenho 18 anos de idade<br><br> Moro em Pariquera-Açu</h2>";

    // document.write escreve conteúdo diretamente na página
    document.write(messagem);
}

// Chamada da função
showMessagem();

document.write("<hr>");


// ===============================
// 2 - Função de divisão
// ===============================

// Variáveis que serão usadas como argumentos
const n1 = 10;
const n2 = 5;

// Função que recebe dois parâmetros:
// n1 = primeiro número
// n2 = segundo número
function divisao(n1, n2) {

    // calcula a divisão dos dois números
    let result = n1 / n2;

    // retorna o resultado
    return result;
}

// Guardando o retorno da função em uma variável
let resultado = divisao(n1, n2);

// Mostrando o resultado na tela
document.write(`<h2>2- A divisão de ${n1} por ${n2} é igual a ${resultado}</h2>`);

document.write("<hr>");


// ===============================
// 3 - Função de multiplicação
// ===============================

// Variáveis usadas na multiplicação
const num1 = 30;
const num2 = 20;
const num3 = 10;

// Função que recebe 3 argumentos:
// num1 = primeiro número
// num2 = segundo número
// num3 = terceiro número
function mutiplicacao(num1, num2, num3) {

    // retorna a multiplicação dos três números
    return num1 * num2 * num3;
}

// Exibe o resultado chamando a função
document.write(`<h2>3- A multiplicação de ${num1} por ${num2} por ${num3} é igual a ${mutiplicacao(num1, num2, num3)}.</h2>`);

document.write("<hr>");


// ===============================
// 4 - Função que verifica idade
// ===============================

// Função que recebe um argumento:
// idade = idade da pessoa
function verificardoridade(idade) {

    // Se a idade for maior ou igual a 18
    if (idade >= 18) {

        // retorna mensagem de maior de idade
        return "4- Você é Maior de idade";

    } else {

        // retorna mensagem de menor de idade
        return "4- Você é Menor de idade";
    }
}

// Mostra o resultado da função
document.write(`<h2>${verificardoridade(19)}</h2>`);

document.write("<hr>");


// ===============================
// 5 - Função anônima que calcula média
// ===============================

// Função anônima armazenada em uma variável
// Recebe dois argumentos:
// nota1 = primeira nota
// nota2 = segunda nota
const result = function(nota1, nota2) {

    // calcula a média
    const media = (nota1 + nota2) / 2;

    let resultado;

    // verifica se a média é suficiente para aprovação
    if (media >= 7) {
        resultado = "5- Aprovado";
    } else {
        resultado = "5- Reprovado";
    }

    // retorna o resultado
    return resultado;
}

// Mostra o resultado
document.write(`<h2>${result(8, 6)}</h2>`);

document.write("<hr>");


// ===============================
// 6 - Arrow Function (função de seta)
// ===============================

// Arrow Function que calcula o triplo de um número
// x = número recebido como argumento
const triplo = x => x * 3;

// Número que será usado
const x = 200;

// Mostra o resultado
document.write(`<h2>6- O triplo de ${x} é ${triplo(x)}.</h2>`);

document.write("<hr>");


// ===============================
// 7 - Arrow Function de soma
// ===============================

// Função que soma quatro números
// x, y, z, r = números recebidos como argumentos
const somar = (x, y, z, r) => {
    return x + y + z + r;
};

// Variáveis que serão somadas
let numb1 = 1, numb2 = 2, n3 = 3, n4 = 4;

// Mostra o resultado
document.write(`<h2>7- O resultado ${numb1} + ${numb2} + ${n3} + ${n4} = ${somar(numb1, numb2, n3, n4)}</h2>`);