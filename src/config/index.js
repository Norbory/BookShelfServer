const dotenv = require('dotenv');
const { Pool } = require('pg');

dotenv.config();

const pool = new Pool ({
    user: process.env.DBUSER,
    host: process.env.DBHOST,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
})

const port = process.env.PORT || 3000;

module.exports = {
    port,
    pool,
}