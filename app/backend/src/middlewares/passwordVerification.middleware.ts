import { NextFunction, Request, Response } from 'express';

const invalidPassword = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const passwordVerify = req.body.password;

  if (!passwordVerify) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  next();
};

export default invalidPassword;
