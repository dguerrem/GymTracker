const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const rolesRoutes = require('./routes/rolesRoutes');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.use('/api', rolesRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
