
const mysql = require('mysql2/promise');

async function connect() {
    if (global.connection && global.connection.state !== 'disconnected') {
        return global.connection;
    }

    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            port: 3306, // Porta do MySQL
            user: 'root',
            password: 'root',
            database: 'sisram2',
            connectTimeout: 10000 // Timeout em milissegundos
        });

        console.log('Conectou no MySQL!');
        global.connection = connection;

        // Adiciona um listener para reconectar em caso de erro
        connection.on('error', async (err) => {
            if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                console.error('Conexão perdida. Tentando reconectar...');
                global.connection = await connect();
            } else {
                throw err;
            }
        });

        return connection;
    } catch (err) {
        console.error('Erro ao conectar no MySQL:', err);
        throw err;
    }
}
// Exportando o router para ser utilizado pelo Express

connect();

//funcao para listar todos atestatados da tabela enviar_atestado
async function listarAtestado() { 
    const conn = await connect();
    const [rows] = await conn.query('SELECT id,matricula,nome,curso, turma, data_afast, periodo, img_atest from enviar_atestado');
    return rows;
}

module.exports = {listarAtestado }