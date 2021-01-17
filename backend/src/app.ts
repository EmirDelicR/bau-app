import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import { middleware } from 'src/middleware/middleware';
import registerRoutes from 'src/routes/index';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ debug: true });
}

const app = express();

app.use(bodyParser.json());

app.use(middleware.cors);

registerRoutes(app);

app.use(middleware.error);

const PORT: number = parseInt(process.env.PORT!, 10) || 3000;
const HOST: string = process.env.HOST!;

app.listen(PORT, HOST, () => {
  console.info(`Server running at http://${HOST}:${PORT}/`);
});
