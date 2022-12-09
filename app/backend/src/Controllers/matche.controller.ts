import { Request, Response } from 'express';
import getMatchesService, { getMatcheIdService } from '../service/matche.service';

const getMatches = async (_req: Request, res: Response) => {
  const getedMatche = await getMatchesService();

  return res.status(200).json(getedMatche);
};

export const getMatchesId = async (req: Request, res: Response) => {
  const { id } = req.params;

  const getMatcheId = await getMatcheIdService(+id);

  return res.status(200).json(getMatcheId);
};

export default getMatches;
