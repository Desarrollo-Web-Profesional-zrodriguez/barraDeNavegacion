// backend/simpleweb.js
import { createServer } from "node:http";
import { usuarios } from './files.js';

// Crea un servidor HTTP simple
const server = createServer(async (req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Hola a todos \n");
    } else if (req.url === '/users') {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(await usuarios()));
    } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.end("Error 404: Recurso no encontrado\n");
    }
});



// Define el puerto donde el servidor escuchará
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Ejecutando servidor en  http://localhost:${PORT}/`);
});
