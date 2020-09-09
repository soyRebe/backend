'use strict'

const { model } = require("mongoose");

const controller = {

    home : function(req, res){
        return res.status(200).send({
            message: 'soy la home'
        });

    },
    test : function( req, res){
        return res.status(200).send ({

            message:'soy el metodo o accion test del controlador de project'
        });

    }
};

module.exports = controller;
