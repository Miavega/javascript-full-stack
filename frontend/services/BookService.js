class BookService {

    constructor() {
        this.URI = 'http://localhost:3000/api/books';
    }

    async getBooks() {
        const res = await fetch(this.URI);
        const books = res.json();
        return books;
    }

    async postBook(book) {
        const res = await fetch(this.URI, {
            method: 'POST',
            body: book
        });
        const data = await res.json();
        console.log(data);
    }

    async deleteBook(bookId) {
        const res = await fetch(`${this.URI}/${bookId}`, {
            headers: {
                'Content-Type': 'applications/json'
            },
            method: 'DELETE'
        });
        const data = await res.json();
        console.log(data);
    }

}

export default BookService;