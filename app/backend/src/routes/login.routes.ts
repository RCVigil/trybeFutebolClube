import { Router } from 'express';
import 'express-async-errors';
import emailVerification from '../middlewares/emailVerification.middleware';

import UserController, { validated } from '../Controllers/user.controller';
import invalidPassword from '../middlewares/passwordVerification.middleware';

const router = Router();
const userRoutesCont = new UserController();

router.post('/', emailVerification, invalidPassword, userRoutesCont.login);
router.get('/validate', validated);

export default router;
