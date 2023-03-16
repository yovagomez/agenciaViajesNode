import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

// Conect the db
db.authenticate()
    .then( () => console.log('Base de datos conectada') )
    .catch( error => console.log(error) );

//  Define port 
const port = process.env.PORT || 4000;

// Enable pug
app.set('view engine', 'pug');

// Get the current year
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = "Agencia de Viajes";

    next();
})

// Add body parser to read the form data
app.use(express.urlencoded({extended: true}));

// Define the file public
app.use(express.static('public'));

// Add router
app.use('/', router)

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});