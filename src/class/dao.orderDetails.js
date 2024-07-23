const { pool } = require('../config');

class OrderDetailsDAO {
    // Método para obtener todos los detalles de una orden
    async getOrderDetailsByOrderId() {
        try {
            const orderDetails = await pool.query('SELECT * FROM pos_order_details');
            return orderDetails.rows;
        } catch (error) {
            throw error;
        }
    }

    // Método para obtener un detalle de una orden por su id
    async getOrderDetailById(id) {
        try {
            const orderDetail = await pool.query('SELECT * FROM pos_order_details WHERE order_detail_id = $1', [id]);
            return orderDetail.rows;
        } catch (error) {
            throw error;
        }
    }

    // Método para obtener todos los detalles de una orden por su id
    async getOrderDetailsByOrderId(id) {
        try {
            const orderDetails = await pool.query('SELECT * FROM pos_order_details WHERE order_id = $1', [id]);
            return orderDetails.rows;
        } catch (error) {
            throw error;
        }
    }

    // Método para crear un detalle de una orden
    async createOrderDetail(orderDetail) {
        try {
            const { order_id, product_id, quantity, price } = orderDetail;
            const newOrderDetail = await pool.query('INSERT INTO pos_order_details (order_id, product_id, quantity, price) VALUES ($1, $2, $3, $4) RETURNING *', [order_id, product_id, quantity, price]);
            return newOrderDetail.rows;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = OrderDetailsDAO;