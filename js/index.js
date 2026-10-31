// 1. Importar el framework Express que instalamos previamente en el proyecto
const express = require('express');

// 2. Crear una instancia de Express para inicializar nuestra aplicación de servidor
const app = express();

// 3. Definir el número de puerto (3000) donde la aplicación va a escuchar las solicitudes
const PUERTO = 3000;

// 4. Configurar un middleware para que el servidor pueda leer y entender datos en formato JSON
app.use(express.json());

// 5. Configurar una ruta GET para la página principal ('/')
// 'req' representa la petición que hace el cliente y 'res' lo que el servidor responde
app.get('/', (req, res) => {
    res.send('¡Hola, Thompson! Servidor backend conectado y funcionando con éxito.');
});

// 6. Encender el servidor y ponerlo a escuchar en el puerto 3000
app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en http://localhost:${PUERTO}`);
});