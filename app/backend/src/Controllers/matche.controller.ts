import { Request, Response } from 'express';
import { getToken } from '../utils/jwToken';
import getMatchesService, {
  addMatcheService,
  getMatcheIdService,
  getMatcheQueryService,
  patchMatcheIdService,
  patchMatchIdService,
} from '../service/matche.service';
import HttpException from '../utils/HttpException';

const getMatches = async (req: Request, res: Response) => {
  const { inProgress } = req.query;

  if (inProgress) {
    const getMatcheQuery = await getMatcheQueryService(inProgress as string);
    return res.status(200).json(getMatcheQuery);
  }
  const getedMatche = await getMatchesService();
  return res.status(200).json(getedMatche);
};

const matcheAddFunc = (authorization: string) => {
  if (!authorization) {
    throw new HttpException(401, 'Token must be a valid token');
  } else {
    return getToken(authorization);
  }
};

const authInProgress = async (requeriment: Request) => {
  const addingMatche = requeriment.body;
  const { authorization } = requeriment.headers;

  if (authorization) {
    matcheAddFunc(authorization);
    const id = await addMatcheService(addingMatche);
    const inMatche = { id: id.id,
      homeTeam: id.homeTeam,
      awayTeam: id.awayTeam,
      homeTeamGoals: id.homeTeamGoals,
      awayTeamGoals: id.awayTeamGoals,
      inProgress: id.inProgress };

    return inMatche;
  }
};

export const insertMatches = async (req: Request, res: Response) => {
  const requeriment = req;

  const inMatche = await authInProgress(requeriment);

  return res.status(201).json(inMatche);
};

export const getMatchesId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const getMatcheId = await getMatcheIdService(+id);
  return res.status(200).json(getMatcheId);
};

export const patchControlleMatche = async (req: Request, res: Response) => {
  const { id } = req.params;

  await patchMatchIdService(id);

  return res.status(200).json({ message: 'Finished' });
};

export const patchMatcheId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { homeTeamGoals, awayTeamGoals } = req.body;

  await patchMatcheIdService(id, homeTeamGoals, awayTeamGoals);

  return res.status(200).json({ message: 'updated' });
};

export default getMatches;
