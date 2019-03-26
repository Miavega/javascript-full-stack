import './styles/app.css';
import BookService from './services/BookService';

document.getElementById('book-form')
    .addEventListener('submit', e => {

        const title = document.getElementById('titulo').value;
        const author = document.getElementById('autor').value;
        const isbn = document.getElementById('isbn').value;
        const image = document.getElementById('imagen').files;

        const formData = new FormData();
        formData.append('image', image[0]);
        formData.append('title', title);
        formData.append('author', author);
        formData.append('isbn', isbn);

        const bookService = new BookService();
        bookService.postBook(formData);

        e.preventDefault();

    });