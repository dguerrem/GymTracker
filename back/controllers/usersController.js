const db = require("../config/db");

function getAllUsers(req, res) {
  const query = "SELECT * FROM Usuarios";
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send("Error en la consulta");
      return;
    }
    res.json(results);
  });
}

function login(req, res) {
  const { email, password } = req.query;
  const query = "SELECT * FROM Usuarios WHERE Email = ? AND Password = ?";

  db.query(query, [email, password], (err, results) => {
    if (err) {
      res.status(500).send("Error en la consulta");
      return;
    }
    
    if (results.length > 0) {
      res.status(200).send("OK")
      return
    }
    res.status(401).send("Datos incorrectos");
  });
}

function register(req, res) {
  const { IdRol, Nombre, Apellidos, Email, Password } = req.body;
  const query =
    "INSERT INTO Usuarios (IdRol, Nombre, Apellidos, Email, Password) VALUES (?, ?, ?, ?, ?)";

  db.query(
    query,
    [IdRol, Nombre, Apellidos, Email, Password],
    (err, results) => {
      if (err) {
        res.status(500).send("Error en la consulta");
        return;
      }

      res.status(201).send("Usuario registrado con éxito");
    }
  );
}

module.exports = {
  getAllUsers,
  login,
  register,
};
