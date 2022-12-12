import { Router } from 'express';
import 'express-async-errors';
import verifyMatches from '../middlewares/MatchesVerification.middleware';
import getMatches, {
  getMatchesId,
  insertMatches,
  patchControlleMatche,
} from '../Controllers/matche.controller';

const router = Router();

router.get('/', getMatches);
router.post('/', verifyMatches, insertMatches);
router.patch('/:id/finish', patchControlleMatche);
router.get('/:id', getMatchesId);

export default router;
