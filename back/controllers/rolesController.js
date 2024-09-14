const db = require('../config/db');

function getRoles(req, res) {
  const query = 'SELECT Nombre FROM Roles';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send('Error en la consulta');
      return;
    }
    res.json(results);
  });
}

module.exports = {
  getRoles
};
