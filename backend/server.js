'use strict'
const authRoutes = require('./auth/auth.routes');
const express = require('express');
const properties = require('./config/properties');
const DB = require('./config/db');

DB();

const app = express();
const router = express.Router();

app.use('/api', router);
authRoutes(router);
router.get('/', (req, res) => 
{
    res.send('Bienvenido');
});
app.use(router);
app.listen(properties.PORT, ()=> console.log(`sver runing ${properties.PORT}`));
