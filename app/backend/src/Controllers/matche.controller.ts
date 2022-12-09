import { Request, Response } from 'express';
import getMatchesService from '../service/matche.service';

const getMatches = async (_req: Request, res: Response) => {
  const getedMatche = await getMatchesService();

  return res.status(200).json(getedMatche);
};

export default getMatches;
