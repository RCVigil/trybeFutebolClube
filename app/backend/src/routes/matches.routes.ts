import { Router } from 'express';
import 'express-async-errors';
import getMatches, { getMatchesId } from '../Controllers/matche.controller';

const router = Router();

router.get('/', getMatches);
router.get('/:id', getMatchesId);

export default router;
