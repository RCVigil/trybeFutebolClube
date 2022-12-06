import { compare } from 'bcryptjs';
import IUserAdd, { IUser } from '../interfaces/users.Interface';
import user from '../database/models/UsersModel';
import Token from '../utils/jwToken';
import HttpException from '../utils/HttpException';

class UserService {
  postUserService = async (body: IUserAdd) => {
    const { email } = body;
    const token = new Token();

    const userRes = await user.findOne({ where: { email } });

    if (userRes !== undefined) {
      const userAprov = userRes && await compare(body.password, userRes.dataValues.password);
      if (userAprov) {
        const payload: IUser = {
          username: userRes.dataValues.username,
          role: userRes.dataValues.role,
          email: userRes.dataValues.email,
        };
        const tokenRes = token.createdToken(payload);

        return tokenRes;
      }
    }
    throw new HttpException(401, 'Incorrect email or password');
  };
}

export default UserService;
