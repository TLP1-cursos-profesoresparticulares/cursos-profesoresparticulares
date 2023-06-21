const express = require('express');
const morgan = require('morgan');
const cors = require ('cors');
const path = require ('path');
const { sequelize } = require('./src/database/connection');
require('ejs');
require('./src/models/typesUsers.model');


sequelize.sync();
sequelize.authenticate()
    .then(() => console.log('Conectado'))
    .catch((error) => console.log('Error', error));


const app = express();


app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');


//rutas
app.use(require('./src/routes/views.routes'));
app.use(require('./src/routes/auth.routes'));




app.listen(3000, ()=>console.log('Servidor corriendo en el puerto 3000'));