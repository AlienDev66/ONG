const express = require('express');

const OngController = require('./controller/OngController');
const IncidentController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileController');
const LoginController = require('./controller/LoginController');

const routes = express.Router();

routes.post('/Login', LoginController.CreateLogin)

routes.get('/ongs_list', OngController.list)
routes.post('/ongs', OngController.create);

routes.get('/Profile', ProfileController.ListEspecify);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents_list', IncidentController.List);
routes.delete('/incidents_delete/:id',IncidentController.delete);


module.exports = routes;