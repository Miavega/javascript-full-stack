import './styles/app.css';

import UI from './UI';

document.addEventListener('DOMContentLoaded', () => {
    const ui = new UI();
    ui.renderBooks();
});

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

        const ui = new UI();
        ui.addANewBook(formData);
        ui.renderMessage('Nuevo libro agregrado', 'success', 3000);

        e.preventDefault();

    });

document.getElementById('books-cards')
    .addEventListener('click', e => {
        if (e.target.classList.contains('delete')) {
            const ui = new UI();
            ui.deleteBook(e.target.getAttribute('_id'));
            ui.renderMessage('Libro agregrado', 'danger', 2000);
        }
        e.preventDefault();
    });