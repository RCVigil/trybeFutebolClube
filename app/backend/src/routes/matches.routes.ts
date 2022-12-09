import { Router } from 'express';
import 'express-async-errors';
import getMatches from '../Controllers/matche.controller';

const router = Router();

router.get('/', getMatches);

export default router;
