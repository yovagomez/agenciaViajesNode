import { Viaje } from '../models/Viaje.js';
import { Comentario } from '../models/Comentarios.js';

const paginaInicio = async (req, res) => { 

    const promiseDB = [];

    promiseDB.push(Viaje.findAll({limit: 3}))
    promiseDB.push(Comentario.findAll({limit: 3}))

    try {
        // Query 3 trips from Viaje Model and 3 comments from Comentarios Model
        const resultado = await Promise.all(promiseDB);

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            comentarios: resultado[1]
        });
    } catch (error) {
        console.log(error);
    }
}

const paginaNosotros = (req, res) => { 
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res) => { 

    // Query database
    const viajes = await Viaje.findAll();
    console.log(viajes);

    res.render('viajes', {
        pagina: 'Viajes',
        viajes,
    });
}

const paginaComentarios = async (req, res) => { 
    try {
        const comentarios = await Comentario.findAll();

        res.render('comentarios', {
            pagina: 'Comentarios',
            comentarios
        });
    } catch (error) {
        console.log(error);
    }
}

// Show a trip for your slug
const paginaDetalleViaje = async (req, res) => {
    
    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne({where : { slug }});

        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        })
    } catch (error) {
        console.log(error);
    }
}


export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaComentarios,
    paginaDetalleViaje  
}
