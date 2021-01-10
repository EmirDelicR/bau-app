import { Request, Response, NextFunction } from 'express';

exports.login = async (req: Request, res: Response, next: NextFunction) => {
  const userData = {
    email: req.body.email,
    password: req.body.password,
  };

  try {
    res.status(200).json({ success: userData });
  } catch (err) {
    next(err);
  }
};
