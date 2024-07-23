const express = require("express");
const router = express.Router();
const OrderDetailsDAO = require("../../class/dao.orderDetails");

const OrderDetails = new OrderDetailsDAO();

// Obtener todos los detalles de una orden
router.get("/", async (_, res) => {
    try {
        const orderDetails = await OrderDetails.getOrderDetailsByOrderId();
        res.json(orderDetails);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obtener un detalle de una orden por su id
router.get("/:id", async (req, res) => {
    try {
        const orderDetail = await OrderDetails.getOrderDetailById(req.params.id);
        res.json(orderDetail);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obtener todos los detalles de una orden por su id
router.get("/order/:id", async (req, res) => {
    try {
        const orderDetails = await OrderDetails.getOrderDetailsByOrderId(req.params.id);
        res.json(orderDetails);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Crear un detalle de una orden
router.post("/", async (req, res) => {
    try {
        const newOrderDetail = await OrderDetails.createOrderDetail(req.body);
        res.json(newOrderDetail);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;