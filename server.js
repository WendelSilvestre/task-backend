const express = require("express");
const app = express();
const routes =  require("./routes");

app.use(routes);

app.listen(porta = 8000, () => {
    console.log("Executando");
});

app.set("view engine", "ejs");
app.set("views", "./view");
