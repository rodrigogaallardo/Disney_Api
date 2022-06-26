import { Router } from 'express'
import { getPersonajes,postPersonajes,putPersonajes,deletePersonajes,getPersonaje } from '../controllers/personajeController.js';

const router = Router();

router.get('/',getPersonajes);
router.post('/',postPersonajes);
router.put('/:id',putPersonajes);
router.delete('/:id',deletePersonajes);
router.get('/:id',getPersonaje);

export default router;