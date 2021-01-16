const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

console.log(process.env.MONGO_URI);
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(() => {
        console.log('Connected!');
    })
    .catch(e => {
        console.error('Connection error', e.message)
    });

const db = mongoose.connection;

module.exports = db;
