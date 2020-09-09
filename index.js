'use strict'
const mongoose = require('mongoose');
const app = require ('./app');
const port = 3700;
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio',  { useNewUrlParser:true, useUnifiedTopology: true })

    .then( () => {

        console.log( "Conexión a la base de datos establecida con éxito.." );

        // Creacion del servidor
        app.listen( port, () => {
            console.log('servidor corriendo correctamente en la url localhost 3700');
        });
    })
    .catch( err => 
           console.log(err));