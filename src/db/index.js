const mongoose = require("mongoose");
const { MongoMemoryServer } = require('mongodb-memory-server');
require('dotenv').config();

const testMongoURI = async () => {
  const mongod = new MongoMemoryServer();
  return await mongod.getUri();
}

module.exports = class Db {
    static connect = async () => {
        return new Promise(async (resolve, reject) => {
            try {
                const mongoURI = process.env.NODE_ENV === 'test' ? await testMongoURI() : process.env.MONGO_URI;
                const options = {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                };
                mongoose.connect(mongoURI, options);
        
                const db = mongoose.connection;
                db.on('error', (err) => { throw new Error('Could not connect to db') });
        
                // this would work even if the db doesn't exist but won't work if there's a problem with connecting to the mongo server
                db.once('open', () => {
                    console.log(`${process.env.NODE_ENV === 'test' ? 'test' :''} db connected.`);
                    resolve();
                });
        
            } catch (error) {
                console.log(error);   
            }
        });
    }
}