//Importando a ORM Sequelize
import  Sequelize from "sequelize";

// Definindo os dados de conexão com o banco de dados
const connection = new Sequelize({
    //Tipo do banco
    dialect: 'mysql',
    //Endereço do banco
    host: 'localhost',
    //Nome do usário do banco
    username: 'root',
    //Senha do banco
    password: '',
    //Fuso Horário do banco
    timezone: '-03:00',
    //Nome do banco de dados que será usado na aplicação
    database: 'sistemaloja'
});
//Exportando o Módulo 
export default connection;