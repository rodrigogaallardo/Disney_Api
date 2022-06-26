import { Router } from 'express'
import { registro,login } from '../controllers/usuarioControllers.js';

const router = Router();

router.post('/register',registro);
router.post('/login',login);

export default router;