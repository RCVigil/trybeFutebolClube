import { Request, Response } from 'express';
import { getToken } from '../utils/jwToken';
import UserService from '../service/user.service';
import HttpException from '../utils/HttpException';

class UserController {
  constructor(
    private service = new UserService(),
  ) {
    this.login = this.login.bind(this);
  }

  public async login(req: Request, res: Response) {
    const token = await this.service.postUserService(req.body);

    res.status(200).json({ token });
  }
}

export const validated = (req: Request, res: Response) => {
  const { authorization } = req.headers;

  if (authorization) {
    const token = getToken(authorization);
    console.log(token);

    return res.status(200).json({ role: token });
  }
  console.log('ENTROU NA !authorization');

  throw new HttpException(401, 'token invalido');
};

export default UserController;
