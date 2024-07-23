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

// Crear un cliente
router.post("/", async (req, res) => {
    try {
        const newClient = await Client.createClient(req.body);
        res.json(newClient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Actualizar un cliente
router.put("/:id", async (req, res) => {
    try {
        const updatedClient = await Client.updateClient(req.body);
        res.json(updatedClient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Eliminar un cliente
router.delete("/:id", async (req, res) => {
    try {
        const deletedClient = await Client.deleteClient(req.params.id);
        res.json(deletedClient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;