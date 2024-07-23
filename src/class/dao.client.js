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

    // Método para obtener un cliente por su número de documento
    async getClientByDocNumber(doc_number) {
        try {
            const client = await pool.query('SELECT * FROM pos_client WHERE doc_number = $1', [doc_number]);
            return client.rows;
        } catch (error) {
            throw error;
        }
    }

    // Método para crear un cliente
    async createClient(client) {
        try {
            const { doc_type, doc_number, first_name, last_name, phone, email } = client;
            const newClient = await pool.query('INSERT INTO pos_client (doc_type, doc_number, first_name, last_name, phone, email) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [doc_type, doc_number, first_name, last_name, phone, email]);
            return newClient.rows;
        } catch (error) {
            throw error;
        }
    }

    // Método para actualizar un cliente
    async updateClient(client,id) {
        try {
            const { doc_type, doc_number, first_name, last_name, phone, email } = client;
            const updatedClient = await pool.query('UPDATE pos_client SET doc_type = $1, doc_number = $2, first_name = $3, last_name = $4, phone = $5, email = $6 WHERE client_id = $7 RETURNING *', [doc_type, doc_number, first_name, last_name, phone, email, id]);
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