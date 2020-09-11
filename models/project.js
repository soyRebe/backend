'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = Schema ({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: String,
    image : String,
});

module.exports = mongoose.model('Project', ProjectSchema);
// projects --> guarda los documentos en la coleccion