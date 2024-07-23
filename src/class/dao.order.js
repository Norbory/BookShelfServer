const { pool } = require('../config');

class OrderDAO {
    // Método para obtener todas las ordenes
    async getAllOrders() {
        try {
            const orders = await pool.query('SELECT * FROM pos_order');
            return orders.rows;
        } catch (error) {
            throw error;
        }
    }

    // Método para obtener una orden por su id
    async getOrderById(id) {
        try {
            const order = await pool.query('SELECT * FROM pos_order WHERE order_id = $1', [id]);
            return order.rows;
        } catch (error) {
            throw error;
        }
    }

    // Método para obtener todas las ordenes de un cliente
    async getOrdersByClientId(id) {
        try {
            const orders = await pool.query('SELECT * FROM pos_order WHERE client_id = $1', [id]);
            return orders.rows;
        } catch (error) {
            throw error;
        }
    }

    // Método para crear una orden
    async createOrder(order) {
        try {
            const { client_id, total, doc_type, doc_number, created_at } = order;
            const newOrder = await pool.query('INSERT INTO pos_order (client_id, total, doc_type, doc_number, created_at) VALUES ($1, $2, $3, $4, $5) RETURNING *', [client_id, total, doc_type, doc_number, created_at]);
            return newOrder.rows;
        } catch (error) {
            throw error;
        }
    }

    // Método para actualizar una orden
    async updateOrder(order) {
        try {
            const { order_id, client_id, created_at, order_total } = order;
            const updatedOrder = await pool.query('UPDATE pos_order SET client_id = $1, created_at = $2, order_total = $3 WHERE order_id = $4 RETURNING *', [client_id, created_at, order_total, order_id]);
            return updatedOrder.rows;
        } catch (error) {
            throw error;
        }
    }

    // Método para eliminar una orden
    async deleteOrder(id) {
        try {
            const deletedOrder = await pool.query('DELETE FROM pos_order WHERE order_id = $1 RETURNING *', [id]);
            return deletedOrder.rows;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = OrderDAO;