import { Router } from 'express'
import { getPersonajes,postPersonajes,putPersonajes,deletePersonajes,getPersonaje } from '../controllers/personajeController.js';
import verificarToken from '../middleware/auth.js';

const router = Router();

router.get('/',getPersonajes); //listado de todos los personajes de la base de datos
router.get('/:id',getPersonaje); //busca un personaje y nos da su informacion
router.post('/',verificarToken,postPersonajes); //creacion de personaje
router.put('/:id',verificarToken,putPersonajes); //edicion de personaje
router.delete('/:id',verificarToken,deletePersonajes); //eliminacion de personaje


export default router;