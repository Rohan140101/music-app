const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

var PORT = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});