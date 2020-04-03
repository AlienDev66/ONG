const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controller/OngController');
const IncidentController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileController');
const LoginController = require('./controller/LoginController');

const routes = express.Router();

routes.post('/Login', LoginController.CreateLogin)

routes.get('/ongs_list', OngController.list)


routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required().min(12).max(13),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}) , OngController.create);



routes.get('/Profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown()
}) , ProfileController.ListEspecify);


routes.post('/incidents', IncidentController.create);


routes.get('/incidents_list', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}) , IncidentController.List);


routes.delete('/incidents_delete/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}) ,IncidentController.delete);


module.exports = routes;