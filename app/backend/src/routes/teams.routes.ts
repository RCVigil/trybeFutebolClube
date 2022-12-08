import { Router } from 'express';
import 'express-async-errors';
import getTeams from '../Controllers/team.controller';

const router = Router();

router.get('/', getTeams);

export default router;
