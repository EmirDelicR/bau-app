import swaggerUi from 'swagger-ui-express';
import { Application } from 'express';

import authRoutes from 'src/routes/auth/auth';
import { swaggerDocument } from 'src/swagger/swagger';

const registerRoutes = (app: Application) => {
  app.use(authRoutes);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.use('/', (req, res) => {
    res.send('Hello World!');
  });
};

export default registerRoutes;
