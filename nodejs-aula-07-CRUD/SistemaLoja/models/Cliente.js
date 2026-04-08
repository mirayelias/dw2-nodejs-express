import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

//Criando Model
// O método define() do Sequelize cria uma tabela no bd
const Cliente = connection.define("clientes", {
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf:{
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco:{
        type: Sequelize.STRING,
        allowNull: false
    },
});
// O método sync() sincronza os dados com o banco
// force: false : não recria a tabela caso ela já exista
Cliente.sync({force: false});
export default Cliente;