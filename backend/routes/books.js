const {
    Router
} = require('express');
const router = Router();

const Book = require('../models/book');

router.get('/', async (req, res) => {
    const books = await Book.find();
    res.send(books);
});

router.post('/', async (req, res) => {
    const {
        title,
        author,
        isbn
    } = req.body;
    const newBook = new Book({
        title,
        author,
        isbn
    });
    await newBook.save();
    res.json({
        message: 'Libro guardado'
    });
});

router.delete('/:id', async (req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id);
    res.json({
        message: 'Libro eliminado'
    });
});

module.exports = router;