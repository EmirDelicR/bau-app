import { Application } from 'express';

import authRoutes from './auth/auth';

const registerRoutes = (app: Application) => {
  app.use('/auth', authRoutes);
  app.use('/', (req, res) => {
    res.send('Hello World!');
  });
};

export default registerRoutes;
