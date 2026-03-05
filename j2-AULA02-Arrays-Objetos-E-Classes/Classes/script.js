// Classes mo javascript

// Nomde de classes devem iniciar com a primeira letra maiúscula
class carro{
    // definindo atributos
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    //definindo os métodos
    buzinar(){
        return "buzinaaa";
    }
    acelerar(){
        return "Vruuuum";
    }
}

// instanciando objetos
const carroPopular = new carro("Fiat", "Uno", 2020);

document.write(`<p>O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano ${carroPopular.ano} e quando buzina ele faz ${carroPopular.buzinar()}</p>`);

// Objeto esportivo

const carroEsportivo = new carro("Mazda", "RX-7", 1995);
document.write(`<p>O carro ${carroEsportivo.marca} do modelo ${carroEsportivo.modelo} é do ano ${carroEsportivo.ano} e quando acelera ele faz ${carroEsportivo.acelerar()}</p>`);