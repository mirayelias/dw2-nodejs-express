//O arquivo idex.js é o arquivo principal do projeto

// Importado o MODULO do Express
const express = require("express");

//Criando uma instâcia do Express
const app = express();

//CONFIGURANDO O EJS
app.set("view engine", "ejs");

//CRIANDO A ROTA PRINCIPAL DO SITE("/")
app.get("/", function (req, res) {
  // res.send("<h1>Bem-vindo ao meu primeiro site em Node.js e Express.js</h1>");
  res.render("index");
});

//CRIANDO A ROTA DE PERFIL DO USUARIO
app.get("/perfil", function (req, res) {
  // res.send("<h2>Bem-vindo ao seu perfil</h2>");
  res.render("perfil");
});


//CRIANDO A ROTA DO CLIENTES
app.get("/clientes", function (req, res) {
  // res.send("<h2>Bem-vindo Cliente</h2>");
  const listaClientes = ["Thais", "Kaua", "Heloisa", "Neymar"];
  res.render("clientes", { listaClientes: listaClientes });
});

//CRIANDO A ROTA DO CLIENTES - com parametro
app.get("/clientes/:cliente", function (req, res) {
  // res.send("<h2>Bem-vindo Cliente</h2>");
  const cliente = req.params.cliente;
  res.render("detalhesCliente", { cliente: cliente });
});

//CRIANDO A ROTA DO PRODUTOS
app.get("/produtos", function (req, res) {
  // res.send("<h2>Bem-vindo aos produtosd</h2>");
  const listaProdutos = ["Notebook", "Celular", "Tablet", "Video-Game"];
  res.render("produtos", { 
    // Enviando variaveis para o HTML
    listaProdutos: listaProdutos
  });
});


//CRIANDO A ROTA DO PRODUTOS - COM parametro
app.get("/produtos/:produto", function (req, res) {
  // res.send("<h2>Bem-vindo aos produtosd</h2>");
  const produto = req.params.produto;
  res.render("detalhesProduto", { produto: produto, });
});
// Rota de serviços
app.get("/servicos", function (req, res) {

  //Array de Objetos
  const servicos = [
    {servico: "Desenvolvimento Web", descricao: "Criação de sites com Node.Js e integração ao banco de dados", preco: 3.500},
    {servico: "Auditoria de UX/UI", descricao: "Avaliação de usabilidade de sistemas com sugestões de melhoria", preco: 1.800},
    {servico: "Infraestrutura em nuvem", descricao: "Configuração de servidores e hospedagem de aplicações", preco: 2.900},
    {servico: "Chatbot com IA", descricao: "Desenvolvimento de chatbots com inteligência artificial", preco: 2.750},
  ]
  res.render("servicos", { servicos: servicos });
});


//CRIANDO A ROTA DE SERVICOS
app.get("/servicos", function (req, res) {
  // res.send("<h2>Bem-vindo ao servicos</h2>");
  res.render("servicos");
});

// Iniciando o servidor na porta 8080
const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log("Ocorreu um erro ao iniciar o servidor!" + error);
  } else {
    console.log(
      `Servidor iniciado com sucesso no endereço: http://localhost:${port}`,
    );
  }
});
