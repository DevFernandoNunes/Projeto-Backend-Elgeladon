const express = require('express');
const port = 3000;
const app = express();
const cors = require('cors');
const routes = require('./src/routes/paleta.route');

app.use(cors());
app.use(express.json());
app.use('/paleta', routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
