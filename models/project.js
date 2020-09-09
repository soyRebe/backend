'use strict'
const moongose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = Schema ({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: [String]
});

module.exports = moongose.model('Project', ProjectSchema);
// projects --> guarda los documentos en la coleccion