const express = require('express');
const mysql = require('mysql');
const app = express();
const port = process.env.PORT || 3000;

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  host: 'dguerrero.helioho.st', // Cambia esto por tu host
  port: 3306,
  user: 'dguerrero_pruebaaccess', // Cambia esto por tu usuario
  password: 'EstaEsUnaFraseMuyCompleja123@_', // Cambia esto por tu contraseña
  database: 'dguerrero_prueba' // Cambia esto por el nombre de tu base de datos
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos');
});

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Ruta para realizar una consulta SELECT
app.get('/data', (req, res) => {
  const query = 'SELECT * FROM prueba'; // Cambia esto por tu consulta
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error ejecutando la consulta:', err);
      res.status(500).send('Error en la consulta');
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
