const { pool } = require('../config');

class ClientDAO {
    // Método para obtener todos los clientes
    async getAllClients() {
        try {
            const clients = await pool.query('SELECT * FROM pos_client');
            return clients.rows;
        } catch (error) {
            throw error;
        }
    }

    // Método para obtener un cliente por su id
    async getClientById(id) {
        try {
            const client = await pool.query('SELECT * FROM pos_client WHERE client_id = $1', [id]);
            return client.rows;
        } catch (error) {
            throw error;
        }
    }

};

module.exports = ClientDAO;