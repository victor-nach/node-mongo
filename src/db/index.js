const mongoose = require("mongoose");

require('dotenv').config();

module.exports = class Db {
    static connect = async () => {
        return new Promise((resolve, reject) => {
            try {
                const mongoURI = process.env.MONGO_URI;
        
                const options = {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                };
                mongoose.connect(mongoURI, options);
        
                const db = mongoose.connection;
                db.on('error', (err) => { throw new Error('Could not connect to db') });
        
                // this would work even if the db doesn't exist but won't work if there's a problem with connecting to the mongo server
                db.once('open', () => {
                    console.log('db connected.');
                    resolve();
                });
        
            } catch (error) {
                console.log(error);   
            }
        });
    }
}