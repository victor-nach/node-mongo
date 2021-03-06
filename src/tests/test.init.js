const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require("mongoose");

const mongod = new MongoMemoryServer();
mongod.getUri().then((mongoURI) => {
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    };
    mongoose.connect(mongoURI, options);

    const db = mongoose.connection;
    db.on('error', (err) => { throw new Error('Could not connect to db') });

    // this would work even if the db doesn't exist but won't work if there's a problem with connecting to the mongo server
    db.once('open', () => {
        console.log('test db connected...');
    });
    return
});
console.log('aaa...')