const express = require("express");
const bodyParser = require("body-parser");
const { ResHelpers } = require("./utils");
const routes = require('./routes');

const Db = require('./db');

Db.connect().then( () => {
    const app = express();
    const PORT = process.env.PORT || 5000;
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(routes);

    app.get('/', (req, res) => ResHelpers.res(res, "Welcome !!"));
    
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
});
