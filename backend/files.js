import { writeFileSync, readFileSync, existsSync } from "node:fs";
import { writeFile, readFile } from "node:fs/promises"

async function gestionarUsuarios() {
    let usuarios = []
    let o = false;
    // confirmamos que existe si no es así, lo creamos
    if (existsSync('usuarios.json')) {
        const contenido = await readFile('usuarios.json', 'utf-8');
        usuarios = JSON.parse(contenido);
        o = true;
    }
    // Crea un arreglo con datos de usuarios
    const usuarioNuevo = [
        { nombre: "Janja Rodriguez", email: "janja@climb.ing" }
    ];

    usuarios.push(usuarioNuevo[0]);
    // Convierte el arreglo de usuarios a formato JSON
    const usersJson = JSON.stringify(usuarios)

    // Escribe el archivo users.json con los datos de usuarios
    await writeFile('usuarios.json', usersJson)

    // Lee el archivo users.json y lo parsea a un objeto JavaScript
    const readUsersJson = await readFile('usuarios.json')
    const readUsers = JSON.parse(readUsersJson)
    console.log(readUsers)


    // Muestra los datos leídos en la consola
    return `${o ? 'Archivo actualizado' : 'Archivo creado'}`
}

gestionarUsuarios().then(console.log);
