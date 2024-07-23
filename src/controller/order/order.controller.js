const express = require("express");
const router = express.Router();
const OrderDAO = require("../../class/dao.order");

const Order = new OrderDAO();

// Obtener todas las ordenes
router.get("/", async (_, res) => {
    try {
        const orders = await Order.getAllOrders();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obtener una orden por su id
router.get("/:id", async (req, res) => {
    try {
        const order = await Order.getOrderById(req.params.id);
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obtener todas las ordenes de un cliente
router.get("/client/:id", async (req, res) => {
    try {
        const orders = await Order.getOrdersByClientId(req.params.id);
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Crear una orden
router.post("/", async (req, res) => {
    try {
        const newOrder = await Order.createOrder(req.body);
        res.json(newOrder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Actualizar una orden
router.put("/:id", async (req, res) => {
    try {
        const updatedOrder = await Order.updateOrder(req.body);
        res.json(updatedOrder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Eliminar una orden
router.delete("/:id", async (req, res) => {
    try {
        const deletedOrder = await Order.deleteOrder(req.params.id);
        res.json(deletedOrder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;