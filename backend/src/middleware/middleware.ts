import {
  ErrorRequestHandler, Request, Response, NextFunction,
} from 'express';

export const cors = (req: Request, res: Response, next: NextFunction) => {
  // Set this to your client side - like localhost:3000/
  // * means allow to all
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE, PATCH, GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
};

export const error: ErrorRequestHandler = (err, req, res) => {
  // TODO write to log file or use sentry;
  const { statusCode = 500, data = null, message } = err;
  res.status(statusCode).json({ message, data });
};
