const express = require("express");
const app = express();
const dbConfig = require("./config/config.json");
const Sequelize = require("sequelize");
const dbconn = new Sequelize(dbConfig.development);

app.use(express.json());

app.get("/", (req, resp) => {
    resp.send("OK rodando");
});

app.listen(3000, () => {
    dbconn.authenticate()
        .then(function () {
            console.log("Express rodando e MySQL conectado...");
        })
        .catch(function (err) {
            console.log("Express falhou.");

        })
        .done();
});