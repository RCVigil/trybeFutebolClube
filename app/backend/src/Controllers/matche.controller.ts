import { Request, Response } from 'express';
import getMatchesService, {
  getMatcheIdService,
  getMatcheQueryService,
} from '../service/matche.service';

const getMatches = async (req: Request, res: Response) => {
  const { inProgress } = req.query;

  if (inProgress) {
    const getMatcheQuery = await getMatcheQueryService(inProgress as string);
    return res.status(200).json(getMatcheQuery);
  }
  const getedMatche = await getMatchesService();
  return res.status(200).json(getedMatche);
};

export const getMatchesId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const getMatcheId = await getMatcheIdService(+id);
  return res.status(200).json(getMatcheId);
};

export default getMatches;
