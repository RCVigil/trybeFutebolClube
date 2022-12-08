import { Router } from 'express';
import 'express-async-errors';
import getTeams, { getTeamId } from '../Controllers/team.controller';

const router = Router();

router.get('/', getTeams);
router.get('/:id', getTeamId);

export default router;
