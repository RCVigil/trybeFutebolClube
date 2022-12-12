import { Router } from 'express';
import 'express-async-errors';
import getMatches, { getMatchesId, insertMatches } from '../Controllers/matche.controller';

const router = Router();

router.get('/', getMatches);
router.post('/', insertMatches);
router.get('/:id', getMatchesId);

export default router;
