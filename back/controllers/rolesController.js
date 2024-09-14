const db = require('../config/db');

const getRoles = (req, res) => {
  const query = 'SELECT * FROM Roles';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error ejecutando la consulta:', err);
      res.status(500).send('Error en la consulta');
      return;
    }
    res.json(results);
  });
};

module.exports = {
  getRoles
};
