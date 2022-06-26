import { Router } from 'express'
import { getGeneros,postGeneros,putGeneros,deleteGeneros } from '../controllers/generoControllers.js';

const router = Router();

router.get('/',getGeneros);
router.post('/',postGeneros);
router.put('/',putGeneros);
router.delete('/',deleteGeneros);

export default router;