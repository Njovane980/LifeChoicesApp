import {createPool} from "mysql";
import { config } from "dotenv";
config()
// database connection for mysql
import"dotenv/config"
let connection = createPool({
    host: process.DB_Host,
    database: process.env.DB_Name,
    user: process.env.DB_UserName,
    password: process.env.DB_UserPassword,
    multipleStatements: true,
    connectionLimit: 30
})
export{
    connection
}
