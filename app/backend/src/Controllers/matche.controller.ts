import { Request, Response } from 'express';
import getMatchesService, {
  addMatcheService,
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

export const insertMatches = async (req: Request, res: Response) => {
  const { inProgress } = req.query;
  const addingMatche = req.body;

  if (inProgress) {
    const id = await addMatcheService(addingMatche);

    const inMatche = {
      id: id.id,
      homeTeam: id.homeTeam,
      awayTeam: id.awayTeam,
      homeTeamGoals: id.homeTeamGoals,
      awayTeamGoals: id.awayTeamGoals,
      inProgress: id.inProgress };
    console.log('INMATCHE É AQUI === >   ', inMatche);

    return res.status(201).json(inMatche);
  }
};

export const getMatchesId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const getMatcheId = await getMatcheIdService(+id);
  return res.status(200).json(getMatcheId);
};

export default getMatches;
