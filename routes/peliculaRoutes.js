import { Router } from 'express'
import { getPeliculas,postPelicula,putPelicula,deletePelicula,getPeliculaById } from '../controllers/peliculaControllers.js';

const router = Router();

router.get('/',getPeliculas);
router.post('/',postPelicula);
router.put('/',putPelicula);
router.delete('/',deletePelicula);
router.delete('/',getPeliculaById);

export default router;
