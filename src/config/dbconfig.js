const dotenv = require("dotenv")
dotenv.config();
const db = {
    connection_url: process.env.connection_url
}

module.exports = db