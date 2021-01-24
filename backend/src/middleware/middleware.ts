import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import { writeErrorToFile } from 'src/util/logger/file';

const cors = (req: Request, res: Response, next: NextFunction) => {
  // Set this to your client side - like localhost:3000/
  // * means allow to all
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE, PATCH, GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
};

const error: ErrorRequestHandler = (err, req, res) => {
  // use sentry to log errors;
  const { statusCode = 500, data = null, message } = err;
  writeErrorToFile(message);
  res.status(statusCode).json({ message, data, statusCode });
};

export const middleware = {
  cors,
  error,
};
