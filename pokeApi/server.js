const express = require('express');
const path = require('path');
const app = express();
let port = process.env.PORT

// Paginas publicas (estaticas)
app.use(express.static(path.join(__dirname, 'public')));

// Escuchemos en un puerto
app.listen(port,() => {
    console.log(" * Miniserver UP and Running en http://localhost:3000");
});
