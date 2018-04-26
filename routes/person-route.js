//
const express = require('express');
const routes = express.Router();
const person_controller = require('../controllers/person-controller.js');

routes.get('/person', person_controller.getAllPersons);

routes.get('/person/:id', person_controller.getPersonByID);

routes.post('/person', person_controller.createPerson);
module.exports = routes;