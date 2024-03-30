const express = require('express');
const config = require('./config');
require('./database/mongoose');
const userRoutes = require('./presentation/routes/user.routes');

const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
app.use(express.json());

app.use('/users', userRoutes);


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 80; // Utilisez le port 80 ou utilisez le port spécifié par l'environnement
const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = server
