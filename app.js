'use strict'
const express = require ('express');
const bodyParser = require ('body-parser');
const app = express();

// Archivos de  Rutas
const project_routes = require('./routes/project')

// Middlewares se ejecuta antes 

app.use( bodyParser.urlencoded( { extended:false }) );
app.use( bodyParser.json() );

// Cors


// Rutas
app.use('/api', project_routes);


// exportar
module.exports = app;