const express = require("express");

const PORT = process.env.PORT || 999;

const app = express();

app.use(express.static(__dirname + "public"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout : "main"}));

app.set("view engine", "handlebars");

const routes = require("./controllers/burger_controller");

app.use(routes);

app.listen(PORT, function() {
    console.log("app is now listening at localhost: " + PORT);
});