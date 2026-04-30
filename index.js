const express = require("express");

const app = express();
const PORT = 3000;

// rendre public accessible
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log("Serveur lancé sur http://localhost:3000");
});