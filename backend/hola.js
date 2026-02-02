/**
 * @author Zahir Andrés Rodríguez Mora
 * @description Este archivo es un ejemplo de cómo usar Node.js para obtener información del sistema operativo.
*/

/** importaciones necesarias */

const os = require('node:os');

/** Funciones que nos van a ayudar para mostrar mejor los datos */

// convertir bytes -> GB
function bytesToGB(bytes) {
    return (bytes / (1024 ** 3)).toFixed(2) + ' GB';
}

// Porcentajes de la memoria usada

function getMemoryUsagePercent() {
    const TOTAL = os.totalmem();
    const FREE = os.freemem();
    const USED = TOTAL - FREE;
    return ((USED/ TOTAL) * 100).toFixed(2) + '%';
}

/** Mostrar información */

// Sistema operativo

console.log('****** SISTEMA OPERATIVO *****')
console.log(`   Tipo: ${os.type()}`);
console.log(`   Plataforma: ${os.platform()}`);
console.log(`   Arquitectura: ${os.arch()}`);
console.log(`   Versión: ${os.release()}`);

// Memoria RAM

console.log(`\n**** Memoria RAM ****`);
console.log(`   Total: ${bytesToGB(os.totalmem())}`);
console.log(`   Libre: ${bytesToGB(os.freemem())}`);
console.log(`   En uso: ${bytesToGB(os.totalmem() - os.freemem())}`);
console.log(`   Total: ${getMemoryUsagePercent()}\n`);

// CPU

console.log(`**** Procesador ****`);
const CPUS = os.cpus();
console.log(`   Modelo: ${CPUS[0].model}`);
console.log(`   Núcleos: ${CPUS.length}`);
console.log(`   Velocidad: ${CPUS[0].speed} MHz\n`);

// Usuarios

console.log(`**** Usuario ****`);
const USER_INFO = os.userInfo();
console.log(`   Nombre: ${USER_INFO.username}`);
console.log(`   Directorio home: ${USER_INFO.homedir} \n`);

// Disco duro 

console.log(`**** Disco duro ****`);
const { execSync} = require('child_process');

// obtener infomación
const diskCmd = execSync(
    'powershell "Get-PSDrive -PSProvider FileSystem | Where-Object {$_.Used -ne $null} | Select-Object Name,Used,Free | ConvertTo-Json"',
    { encoding: 'utf-8' }
);

// conversion de datos
const disks = JSON.parse(diskCmd);
const diskArray = Array.isArray(disks) ? disks : [disks];

// exploracion del array
diskArray.forEach(disk => {
    const totalSize = disk.Used + disk.Free;
    const percentUsed = ((disk.Used / totalSize) * 100).toFixed(2);
    
    console.log(`   Unidad: ${disk.Name}:`);
    console.log(`   Total: ${bytesToGB(totalSize)}`);
    console.log(`   Usado: ${bytesToGB(disk.Used)} (${percentUsed}%)`);
    console.log(`   Libre: ${bytesToGB(disk.Free)}\n`);
});









