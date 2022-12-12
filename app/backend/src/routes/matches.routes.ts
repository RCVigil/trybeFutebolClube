import { Router } from 'express';
import 'express-async-errors';
import { getToken } from '../utils/jwToken';
import getMatches, { getMatchesId, insertMatches } from '../Controllers/matche.controller';

const router = Router();

router.get('/', getMatches);
router.post('/', getToken, insertMatches);
router.get('/:id', getToken, getMatchesId);

export default router;
