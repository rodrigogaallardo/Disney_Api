import { Router } from 'express'
import { getPeliculas,postPelicula,putPelicula,deletePelicula,getPeliculaById } from '../controllers/peliculaControllers.js';
import verificarToken from '../middleware/auth.js';
const router = Router();

router.get('/',getPeliculas); //nos da un listado de todas las peliculas
router.delete('/:id',getPeliculaById); //nos da el listado de una pelicula
router.post('/',verificarToken,postPelicula); // creacion de pelicula
router.put('/',verificarToken,putPelicula); // actualizacion de pelicula  
router.delete('/:id',verificarToken,deletePelicula);// eliminacion de una pelicula


export default router;
