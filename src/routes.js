const express = require("express");
const routes = express.Router();


routes.get("/", (req, res) => {
    // return res.send("OK rodando");
    return res.json({hello: "World"});
});

module.exports = routes;