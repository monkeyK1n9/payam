require('dotenv').config()

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host : process.env.IP_ADDRESS || '127.0.0.1',
        port : 3306,
        user : 'user',
        password : 'user',
        database : 'mydb'
    }
});

module.exports = {
    knex
}