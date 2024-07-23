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

    // Método para crear un cliente
    async createClient(client) {
        try {
            const { client_name, client_email, client_phone } = client;
            const newClient = await pool.query('INSERT INTO pos_client (client_name, client_email, client_phone) VALUES ($1, $2, $3) RETURNING *', [client_name, client_email, client_phone]);
            return newClient.rows;
        } catch (error) {
            throw error;
        }
    }

    // Método para actualizar un cliente
    async updateClient(client) {
        try {
            const { client_id, client_name, client_email, client_phone } = client;
            const updatedClient = await pool.query('UPDATE pos_client SET client_name = $1, client_email = $2, client_phone = $3 WHERE client_id = $4 RETURNING *', [client_name, client_email, client_phone, client_id]);
            return updatedClient.rows;
        } catch (error) {
            throw error;
        }
    }

    // Método para eliminar un cliente
    async deleteClient(id) {
        try {
            const deletedClient = await pool.query('DELETE FROM pos_client WHERE client_id = $1 RETURNING *', [id]);
            return deletedClient.rows;
        } catch (error) {
            throw error;
        }
    }

};

module.exports = ClientDAO;