const express = require("express");
const router = express.Router();
const BookDAO = require("../../class/dao.book");

const Book = new BookDAO();

// Obtener todos los libros
router.get("/", async (_, res) => {
    try {
        const books = await Book.getAllBooks();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obtener un libro por su id
router.get("/:id", async (req, res) => {
    try {
        const book = await Book.getBookById(req.params.id);
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Actualizar un libro
router.put("/:id", async (req, res) => {
    try {
        const response = await Book.updateBook(req.params.id, req.body.stock);
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Crear un libro
router.post("/", async (req, res) => {
    try {
        const newBook = await Book.createBook(req.body);
        res.json(newBook);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Eliminar un libro
router.delete("/:id", async (req, res) => {
    try {
        const deletedBook = await Book.deleteBook(req.params.id);
        res.json(deletedBook);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;