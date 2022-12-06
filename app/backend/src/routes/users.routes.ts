import { Router } from 'express';
import 'express-async-errors';

import UserController from '../Controllers/user.controller';

const router = Router();
const userRoutesCont = new UserController();

router.post('/', userRoutesCont.login);

export default router;
