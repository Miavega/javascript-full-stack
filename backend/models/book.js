const {
    Schema
} = require('mongoose');

const BookSchema new Schema({
    title: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    imgPath: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('Book', BookSchema);