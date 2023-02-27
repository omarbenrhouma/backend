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

const server = app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`);
});

module.exports = server
