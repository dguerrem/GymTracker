const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const rolesRoutes = require('./routes/rolesRoutes');
const usersRoutes = require('./routes/usersRoutes');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API GymTracker');
});

app.use('/roles', rolesRoutes);
app.use('/users', usersRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
