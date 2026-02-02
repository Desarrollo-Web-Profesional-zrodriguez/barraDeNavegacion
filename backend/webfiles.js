import { createServer } from "node:http";
import { readFile, appendFile } from "node:fs/promises";
const date = new Date()
const fecha = `[${date.getDate()}-${(date.getMonth()) + 1}-${date.getFullYear()}]`
const server = createServer(async (req, res) => {
    // 1. Lógica del Logger (appendFile)
    await appendFile('access.log', `${fecha} visitó ${req.url} \n`)
    // 2. Lógica de rutas y métodos
    if (req.method === 'GET' && req.url === '/users') {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(await readFile('usuarios.json'));
    } else if (req.method === 'POST' && req.url === '/users') {
        res.statusCode = 405;
        res.setHeader("Content-Type", "text/plain");
        res.end("Todavía no aceptamos datos, solo lectura\n");
    } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.end("Error 404: Recurso no encontrado\n");
    }
});

server.listen(3000, () => console.log("Servidor Pro en el puerto 3000"));
