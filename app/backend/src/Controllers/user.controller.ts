import { Request, Response } from 'express';
import IUsersAdd from '../interfaces/users.Interface';
import UserService from '../service/user.service';

class UserController {
  constructor(
    private service = new UserService(),
  ) {
    this.userController = this.userController.bind(this);
  }

  public async userController(req: Request<IUsersAdd>, res: Response) {
    const Token = await this.service.postUserService(req.body);
    const { status, message } = Token;

    res.status(status).json(`Token: ${message}`);
  }
}

export default UserController;
