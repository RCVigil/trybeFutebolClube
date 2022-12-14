import { Request, Response } from 'express';
import getBoardService from '../service/leaderboard.service';

const getLeaderboardCont = async (_req: Request, res: Response) => {
  const getLeaderboard = await getBoardService();
  res.status(200).json(getLeaderboard);
};

export default getLeaderboardCont;
