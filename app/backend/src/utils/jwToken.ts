import { config } from 'dotenv';
import * as jwt from 'jsonwebtoken';
import { SignOptions } from 'jsonwebtoken';
import { IUser } from '../interfaces/users.Interface';
import HttpException from './HttpException';

config();

class Token {
  private _SECRET = (process.env.JWT_SECRET as string) || 'jwt_secret1952=ABC-5891';

  private _jwtDefaultConfig: SignOptions = {
    expiresIn: '2 days',
    algorithm: 'HS256',
  };

  createdToken = (payload: IUser): string => {
    const tokenCreat = jwt.sign(payload, this._SECRET, this._jwtDefaultConfig);

    return tokenCreat;
  };
}

export const getToken = (authorization: string): any => {
  const token = authorization;

  const ScretJwt = process.env.JWT_SECRET as string || 'jwt_secret1952=ABC-5891';

  try {
    const payload = jwt.verify(token, ScretJwt);
    console.log(payload);
    return payload;
  } catch (err) {
    throw new HttpException(401, 'Token must be a valid token');
  }
};

export default Token;
