import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import { cors, error } from './middleware/middleware';
import registerRoutes from './routes/index';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ debug: true });
}

const app = express();

app.use(bodyParser.json());

app.use(cors);

registerRoutes(app);

app.use(error);

const PORT: number = parseInt(process.env.PORT!, 10) || 3000;
const HOST: string = process.env.HOST!;

app.listen(PORT, HOST, () => {
  console.info(`Server running at http://${HOST}:${PORT}/`);
});
