const express = require("express");
const server = express();
const routes = require("./routes");
const dbConfig = require("../config/config.json");
const Sequelize = require("sequelize");
const dbconn = new Sequelize(dbConfig.development);


server.use(express.json());
server.use(routes);

server.listen(3000, () => {
    dbconn.authenticate()
        .then(function () {
            console.log("Express rodando e MySQL conectado! ...");
        })
        .catch(function (err) {
            console.log("Express rodando, mas conexão com MySQL falhou! ...");
        })
        .done();
});