import { Request, Response } from 'express';
import getTeamsService, { getTeamIdService } from '../service/team.service';

const getTeams = async (_req: Request, res: Response) => {
  const getedTeams = await getTeamsService();

  return res.status(200).json(getedTeams);
};

export const getTeamId = async (req: Request, res: Response) => {
  console.log('getTeamsId');
  const { id } = req.params;

  const getTeamsId = await getTeamIdService(+id);
  console.log(getTeamsId);

  return res.status(200).json(getTeamsId);
};

export default getTeams;
