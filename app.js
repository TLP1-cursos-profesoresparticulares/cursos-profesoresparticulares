const express = require('express');
const morgan = require('morgan');
const cors = require ('cors');
const path = require ('path');
const { sequelize } = require('./src/database/connection');
require('ejs');


sequelize.authenticate()
    .then(() => console.log('Conectuwu'))
    .catch((error) => console.log('Erruwu', error));


const app = express();


app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');


//rutas
app.use(require('./src/routes/index.routes'));
app.use(require('./src/routes/login.routes'));
app.use(require('./src/routes/registro.routes'));
app.use(require('./src/routes/auth.routes'));




app.listen(3500);