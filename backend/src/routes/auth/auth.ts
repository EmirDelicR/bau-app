import { Router } from 'express';

const authRouter = Router();
const authController = require('../../controllers/auth');

/**
 * POST /auth/login
 */
authRouter.post('/login', authController.login);

export default authRouter;
