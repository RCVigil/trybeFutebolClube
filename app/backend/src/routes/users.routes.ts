import { Router } from 'express';

import UserController from '../Controllers/user.controller';

const router = Router();
const userRoutesCont = new UserController();

router.post('/login', userRoutesCont.userController);

export default router;
