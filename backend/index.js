if (process.env.NODE_ENV === 'development') {
    require('dotenv').config();
    console.log('Ambiente de:', process.env.NODE_ENV);
}

const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

// Inicializaciones
const app = express();
require('./database');

// Configuraciones
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev'));
app.use(cors());
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename(req, file, cb) {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});
app.use(multer({ storage }).single('image'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Rutas
app.use('/api/books', require('./routes/books'));

// Archivos Estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar Sevidor
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port'));
});