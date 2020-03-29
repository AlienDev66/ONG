const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async list (request,response) {
        const ong_list = await connection('ongs').select('*');
        return response.json(ong_list);
    },
    async create (request, response) {
        const {name, email, whatsapp, city, uf} = request.body;
        const id = crypto.randomBytes(4).toString('HEX');

       await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

    return response.json({ id });
    }
};