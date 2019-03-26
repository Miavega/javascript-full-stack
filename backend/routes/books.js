const { Router } = require('express');
const router = Router();
const { unlink } = require('fs-extra');
const path = require('path');

const Book = require('../models/book');

router.get('/', async (req, res) => {
    const books = await Book.find();
    res.send(books);
});

router.post('/', async (req, res) => {
    const { title, author, isbn } = req.body;
    const imgPath = '/uploads/' + req.file.filename;
    const newBook = new Book({ title, author, isbn, imgPath });
    await newBook.save();
    res.json({ message: 'Libro guardado' });
});

router.delete('/:id', async (req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id);
    await unlink(path.resolve('./backend/public/' + book.imgPath));
    res.json({ message: 'Libro eliminado' });
});

module.exports = router;