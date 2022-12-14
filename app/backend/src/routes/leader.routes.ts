import { Router } from 'express';
import getLeaderboardCont from '../Controllers/leaderboard.controller';

const router = Router();

router.get('/home', getLeaderboardCont);

export default router;
