const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
;
async function connectToDb() {
    try {
        const dbUri = process.env.MONGODB_URL;
        await mongoose.connect(dbUri, {
            dbName: 'Urfine',

        });

        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
}
}
module.exports = connectToDb;