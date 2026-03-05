document.write(`<h4>Objetos literais possuem Atributos (propriedades) e Métodos (funções)</h4>`);
const pessoa = {};
document.write(typeof(pessoa))

//Criando um objeto
const carro = {
    //PROPRIEDADES
    modelo: "Lancer",
    cor: "preto",
    //Métodos
    acelerar(){
        return "Acelerando...";
    },
    frear(){
        return "Freando...";
    },
};
document.write(`<p>Modelo: ${carro.modelo}</p>`);
document.write(`<p>Cor do carro: ${carro.cor}</p>`);
document.write(`<p>Pisando no acelerador: ${carro.acelerar()}</p>`);
document.write(`<p>Pisando no freio: ${carro.frear()}</p>`);

//MANIPULANDO ARRAYS DE OBJETOS
const productlist = [
{
    nome: "Computador",
    marca: "Lenovo",
    preco: 3500,
    descricao: "Pc moderno com um bom desempenho"

},
{
    nome: "Celular",
    marca: "Iphone",
    preco: 10500,
    descricao: "Lançamento da Apple, com um design moderno e um desempenho incrível"   
},
{
    nome: "Video Game",
    marca: "PS5",
    preco: 5000,
    descricao: "Video game de última geração, com gráficos impressionantes e uma vasta biblioteca de jogos"

},
];

// EXIBINDO O ARRAY DE OBJETOS ATRAVÉS DO FOREACH
document.write("<h4>Exibindo o array de objetos através do forEach</h4>")
productlist.forEach((product) => {
    document.write(`
        produto: ${product.nome} <br>
        marca: ${product.marca} <br>
        preço: R$${product.preco} <br>
        descrição: ${product.descricao} <br><br>
    `);
});