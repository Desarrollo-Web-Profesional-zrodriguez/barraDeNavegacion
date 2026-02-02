import { createServer } from "node:http";
import { MongoClient, ObjectId } from "mongodb";


// Configuración de conexión a MongoDB
const url = "mongodb://localhost:27017/";
const dbName = "test";
const client = new MongoClient(url);


// Conectar a MongoDB
try {
    await client.connect();
    console.log("Se ha conectado a la base de datos!");
} catch (err) {
    console.error("Error de Conexión a la base de datos:", err);
}


// Crear servidor HTTP
const server = createServer(async (req, res) => {
    const db = client.db(dbName);
    const users = db.collection("usuarios");
    const projects = db.collection("proyectos");

    if (req.method === 'GET' && req.url === '/users') {
        const usersList = await users.find().toArray();
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(usersList));
    }
    // Proyectos
    if (req.method === 'GET' && req.url === '/projects') { // todos los proyectos
        const projectsList = await projects.find().toArray();
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(projectsList));
    } else if (req.method === 'GET' && req.url === '/projects-asc') { // proyectos ascendentes
        const projectsList = await projects.find().sort({ name: 1 }).toArray();
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(projectsList));
    } else if (req.method === 'GET' && req.url === '/projects-desc') { // proyectos descendetes
        const projectsList = await projects.find().sort({ name: -1 }).toArray();
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(projectsList));
    } else if (req.method === 'GET' && req.url === '/projects-filtrados') { //proyectos filtrados por puntos > 10
        const projectsList = await projects.find({points: {$gte: 10}}).sort({points: 1}).toArray();
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(projectsList));
    } else if (req.method === 'GET' && req.url.startsWith('/project/')) { // proyecto específico
        const projectName = decodeURIComponent(req.url.split('/')[2]);
        const project = await projects.findOne({ name: projectName });
        res.statusCode = project ? 200 : 404;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(project || { error: "Proyecto no encontrado" }));
    } else if (req.method === 'POST' && req.url === '/projects') { // insertar proyecto
        let body = '';
        // recibimos los datos en partes
        req.on('data', chunk => {
            body += chunk.toString();
        });
        // cuando ya no tenga más datos
        req.on('end', async () => {
            const newProject = JSON.parse(body);

            if (!newProject.name) {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: "Debe de tener nombre" }));
                return
            }
            const result = await projects.insertOne(newProject);
            res.statusCode = 201;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({
                message: "Proyecto creado",
                id: result.insertedId
            }));
        });
    } else if (req.method === 'PUT' && req.url === '/project') { // actualizar proyecto
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', async () => {
            const projectUpdate = JSON.parse(body);
            const id = projectUpdate._id;

            if (!id) {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: "Debe de tener _id" }));
                return;
            }

            delete projectUpdate._id;
            const result = await projects.findOneAndUpdate(
                { _id: new ObjectId(id) },
                { $set: projectUpdate },
                { returnDocument: "after" }
            );

            if (!result) {
                res.statusCode = 404;
                res.end(JSON.stringify({ error: "Proyecto no encontrado" }));
                return;
            }

            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({
                message: "Proyecto actualizado",
                project: result
            }));
        });
    } else if (req.method === 'DELETE' && req.url.startsWith('/project/')) { // eliminar proyecto
        const projectName = decodeURIComponent(req.url.split('/')[2]);
        const result = await projects.deleteOne({ name: projectName });
        res.statusCode = result.deletedCount ? 200 : 404;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({
            message: result.deletedCount ? "Proyecto eliminado" : "Proyecto no encontrado"
        }));
    }
});


// Iniciar el servidor
const host = 'localhost'
const port = 3000
server.listen(port, host, () => {
    console.log(`Servidor Escuchando en http://${host}:${port}`)
})
