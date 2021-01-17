import { Router } from 'express';

import { authController } from 'src/controllers/auth';

const authRouter = Router();
/**
 * POST /auth/login
 */
authRouter.post('/login', authController.login);

export default authRouter;
