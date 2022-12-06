import { NextFunction, Request, Response } from 'express';

const emailVerification = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const emailVerify = req.body.email;
  const regEmail = (/\S+@\S+\.\S+/);
  console.log('O EMAIL VERIFY É ===   ', emailVerify);

  if (!emailVerify || !regEmail.test(emailVerify)) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  next();
};

export default emailVerification;
