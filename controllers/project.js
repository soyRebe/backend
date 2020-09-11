'use strict'

//const { model } = require("mongoose");
const Project = require('../models/project');

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

    },
    
    saveProject: function( req, res){
        const project = new Project();
        const params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        project.save( (err, projectStored ) =>{

            if(err) return res.status(500).send({
                message:'Error el guardar el documento'
            });

            if(!projectStored) return res.status(404).send({
                message:'No se ha podido guardar el proyecto'
            });

            return res.status(200).send({ project : projectStored });

        });


        
        return res.status(200).send ({
            project :project,
            message: 'Metodo saveProject'
        });
    },
    getProject: function( req, res ){

        const projectId = req.params.id;
        if(projectId == null) {
            return res.status(404).send({
                message:'El proyecto no existe'
            });
        }

        Project.findById(projectId, (err, project) => {

            if(err) return res.status(500).send ({
                message:'Error al devolver los datos'
            });

            if(!project) return res.status(404).send({
                message:'El proyecto no existe'
            });

            return res.status(200).send({ project });

        });
    },

};

module.exports = controller;
