import { Comentario } from '../models/Comentarios.js';

const guardarComentario = async (req, res) => {
    // Validate
    const { nombre, correo, mensaje } = req.body;

    //trim = remove whitespaces at the beginning
    const errores = [];

    if(nombre.trim() === ''){
        errores.push({mensaje: 'El nombre esta vacio'});
    }

    if(correo.trim() === ''){
        errores.push({mensaje: 'El correo esta vacio'});
    }

    if(mensaje.trim() === ''){
        errores.push({mensaje: 'El mensaje esta vacio'});
    }

    if(errores.length > 0) {

        // Query comentarios
        const comentarios = await Comentario.findAll();

        // Show view with errors
        res.render('comentarios', {
            pagina: 'Comentarios',
            errores,
            nombre,
            correo,
            mensaje,
            comentarios
        })
    } else {
        // Store it in the database
        try {
            await Comentario.create({
                nombre,
                correo,
                mensaje
            });
            
            res.redirect('/comentarios');

        } catch (error) {
            console.log(error);
        }
    }
}

export {
    guardarComentario
}