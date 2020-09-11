'use strict'
const express = require('express');
const ProjectController = require('../controllers/project');
const router = express.Router();

router.get('/home',ProjectController.home);
router.post('/test',ProjectController.test);
router.post('/save-project',ProjectController.saveProject);
router.get ('/project/:id?', ProjectController.getProject);


module.exports = router;