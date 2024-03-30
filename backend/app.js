const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express() ;
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }), express.json(), cors());


app.get("/" , (req , res) => {
    res.send("Server is running") ;
});


module.exports = app ;