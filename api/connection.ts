import 'dotenv/config'
import KNEX from 'knex'

export const knex = KNEX({
    client: 'mysql',
    connection: {
        host : process.env.IP_ADDRESS,
        port : 3306,
        user : 'user',
        password : 'user',
        database : 'mydb'
    }
});