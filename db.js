require('dotenv/config');

async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
    
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:" + process.env.DB_PASSWORD + "@localhost:3306");
    console.log("Conectado");
    global.connection = connection;
    return connection;
}
connect();

module.exports = {};
