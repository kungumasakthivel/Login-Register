const mongoose = require('mongoose');
require('dotenv').config()

async function dbConnect() {
    mongoose.connect(
        process.env.DB_URL,
    )
    .then(() => {
        console.log("Successfully connected to Mongodb")
    })
    .catch((err) => {
        console.log("Unable to connect to Mongodb")
        console.error(err)
    });
}

module.exports = dbConnect;