import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

import Console from 'src/util/logger/console';
import { middleware } from 'src/middleware/middleware';
import { requestStream } from 'src/util/logger/file';
import registerRoutes from 'src/routes/index';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ debug: true });
}

const PORT: number = parseInt(process.env.PORT!, 10) || 3000;
const HOST: string = process.env.HOST!;

const app = express();

app.use(morgan('combined', { stream: requestStream }));
app.use(bodyParser.json());
app.use(helmet());
app.use(middleware.cors);

registerRoutes(app);

app.use(middleware.error);

app.listen(PORT, HOST, () => {
  Console.info(`Server running at http://${HOST}:${PORT}/`);
});
