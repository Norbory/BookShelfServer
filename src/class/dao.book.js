const { pool } = require('../config');

class BookDAO {
    // Método para obtener todos los libros
    async getAllBooks() {
        try {
            const books = await pool.query('SELECT * FROM pos_book');
            return books.rows;
        } catch (error) {
            throw error;
        }
    }

    // Método para obtener un libro por su id
    async getBookById(id) {
        try {
            const book = await pool.query('SELECT * FROM pos_book WHERE book_id = $1', [id]);
            return book.rows;
        } catch (error) {
            throw error;
        }
    }

    // Metodo para actualizar un libro
    async updateBook(id, stock) {
        try {
            const response = await pool.query('UPDATE pos_book SET stock = $1 WHERE book_id = $2', [stock, id]);
            if (response && response.rowCount === 1) {
                return { message: 'Libro actualizado correctamente' };
            }
        } catch (error) {
            throw error;
        }
    }

    // Método para crear un libro
    async createBook(book) {
        try {
            const { title, author, price, stock } = book;
            const newBook = await pool.query('INSERT INTO pos_book (title, author, price, stock) VALUES ($1, $2, $3, $4) RETURNING *', [title, author, price, stock]);
            return newBook.rows;
        } catch (error) {
            throw error;
        }
    }

    // Método para eliminar un libro
    async deleteBook(id) {
        try {
            const deletedBook = await pool.query('DELETE FROM pos_book WHERE book_id = $1 RETURNING *', [id]);
            return deletedBook.rows;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = BookDAO;