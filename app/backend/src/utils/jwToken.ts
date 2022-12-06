import { config } from 'dotenv';
import { sign, SignOptions } from 'jsonwebtoken';
import { IUser } from '../interfaces/users.Interface';

config();

class Token {
  private _SECRET = process.env.JWT_SECRET as string || 'jwt_secret1952=ABC-5891';
  private _jwtDefaultConfig: SignOptions = {
    expiresIn: '7h',
    algorithm: 'HS256',
  };

  createdToken = (payload: IUser): string => {
    const tokenCreat = sign(
      payload,
      this._SECRET,
      this._jwtDefaultConfig,
    );
    console.log(tokenCreat);

    return tokenCreat;
  };
}

export default Token;
