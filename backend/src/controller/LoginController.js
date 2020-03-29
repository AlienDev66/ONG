const Connection = require('../database/connection');

module.exports = {
    async CreateLogin(request,response) {
        const { id } = request.body;

        const ong = await Connection('ongs')
        .where('id', id)
        .select('name')
        .first();

        if(!ong){
            return response.status(400).json({ error: 'No ONG found with this id' });
        }
        return response.json(ong);
    }
}