const express = require("express");
const router = express.Router();
const ClientDAO = require("../../class/dao.client");

const Client = new ClientDAO();

// Obtener todos los clientes
router.get("/", async (_, res) => {
    try {
        const clients = await Client.getAllClients();
        res.json(clients);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obtener un cliente por su id
router.get("/:id", async (req, res) => {
    try {
        const client = await Client.getClientById(req.params.id);
        res.json(client);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;