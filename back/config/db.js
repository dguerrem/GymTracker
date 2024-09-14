const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'dguerrero.helioho.st',
  port: 3306,
  user: 'dguerrero_pruebaaccess',
  password: 'EstaEsUnaFraseMuyCompleja123@_',
  database: 'dguerrero_prueba'
});

db.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos');
});

module.exports = db;
