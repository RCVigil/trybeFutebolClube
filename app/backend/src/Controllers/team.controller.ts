import { Request, Response } from 'express';
import getTeamsService from '../service/team.service';

const getTeams = async (_req: Request, res: Response) => {
  const getedTeams = await getTeamsService();

  return res.status(200).json(getedTeams);
};

export default getTeams;
