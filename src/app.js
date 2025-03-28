// https://www.youtube-nocookie.com/embed/VxRXlUrV6y0?playlist=VxRXlUrV6y0&autoplay=1&iv_load_policy=3&loop=1&start=
// EXPRESS
const express = require('express'); // Requerim express
const path = require('path'); // Requerim path per trobar les rutes
const morgan = require('morgan'); //Requerim morgan
const mysql = require('mysql'); // Requerim mysql
const myConnection = require('express-myconnection'); // Requerim express-myconnection
const { emitWarning } = require('process');


const app = express(); // Iniciem express en la constant app

// Importando rutas
const customerRoutes = require('./routes/customer'); // Guarda la informació del arxiu customer.js en aquesta variable

// Configurar Express
app.set('port', process.env.PORT || 3000); // Busca si hay un puerto libre y si no utiliza el 3000
app.set('view engine','ejs' ); // Indicamos a express el motor de plantillas ejs
app.set('views', path.join(__dirname,'views')); // Para indicar donde esta la carpeta views

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host:'localhost',
    user:'root',
    password: '',
    port: 3306,
    database:'crudnodejsmysql'
}, 'single'));

app.use(express.urlencoded({extended: false}));

// Rutas
app.use('/', customerRoutes); // Utilitzar les rutes del arxiu customer

// Archivos estaticos
app.use(express.static(path.join(__dirname,'public' ))); // Para indicar donde esta la carpeta public

// Inicia el servidor
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto 3000');
});