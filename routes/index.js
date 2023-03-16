import express from 'express';
import { paginaInicio, paginaNosotros, paginaViajes, paginaComentarios, paginaDetalleViaje} from '../controllers/paginasController.js'; 
import { guardarComentario } from '../controllers/comentarioController.js';

const router = express.Router();

// request = lo que enviamos
// response = lo que express nos responde
router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

// Comodin que sirve para cargar una pagina para todos los detalles del viaje, solo cambia el slug que se le pasa
router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/comentarios', paginaComentarios);
router.post('/comentarios', guardarComentario);

export default router;