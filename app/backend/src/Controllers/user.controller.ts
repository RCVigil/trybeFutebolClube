import { Request, Response } from 'express';
import UserService from '../service/user.service';

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

export default UserController;
