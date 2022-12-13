import HttpException from '../utils/HttpException';
import matches from '../database/models/matchesModel';
import { IAddMatche } from '../interfaces/Matche.interface';
import TeamModel from '../database/models/TeamsModel';

const getMatchesService = async () => {
  try {
    const getForMatches = await matches.findAll({
      include: [
        { association: 'teamHome', as: 'teamHome', attributes: ['teamName'] },
        { association: 'teamAway', as: 'teamAway', attributes: ['teamName'] },
      ],
    });

    return getForMatches;
  } catch (error) {
    throw new HttpException(401, 'Incorrect Matches');
  }
};

export const addMatcheService = async (addingMatche: IAddMatche) => {
  const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = addingMatche;

  const getForMatcheIdHome = await TeamModel.findByPk(homeTeam);
  const getForMatcheIdAway = await TeamModel.findByPk(awayTeam);

  if (!getForMatcheIdHome || !getForMatcheIdAway) {
    throw new HttpException(404, 'There is no team with such id!');
  }

  const insertForMatches = await matches.create({
    homeTeam,
    awayTeam,
    homeTeamGoals,
    awayTeamGoals,
    inProgress: true,
  });
  return insertForMatches;
};

const validatedInProgress = async (inProgress: string) => {
  const progressBoo = JSON.parse(inProgress as string);
  const getForMatcheQuery = await matches.findAll({
    where: { inProgress: progressBoo },
    include: [
      { association: 'teamHome', as: 'teamHome', attributes: ['teamName'] },
      { association: 'teamAway', as: 'teamAway', attributes: ['teamName'] },
    ],
  });
  return getForMatcheQuery;
};

export const getMatcheQueryService = async (inProgress: string) => {
  try {
    const retProgress = await validatedInProgress(inProgress);
    return retProgress;
  } catch (error) {
    console.log(error);
    throw new HttpException(401, 'Incorrect Team');
  }
};

export const patchMatchIdService = async (id: string) => matches
  .update(
    { inProgress: false },
    { where: { id } },
  );

export const patchMatcheIdService = async (
  id: string,
  homeTeamGoals: string,
  awayTeamGoals: string,
) => {
  if (homeTeamGoals) {
    await matches.update(
      { homeTeamGoals },
      { where: { id } },
    );
  }
  if (awayTeamGoals) {
    await matches.update(
      { awayTeamGoals },
      { where: { id } },
    );
  }
};

export const getMatcheIdService = async (id: number) => {
  try {
    const getForMatcheId = await matches.findByPk(id, {
      include: [
        { association: 'teamHome', as: 'teamHome', attributes: ['teamName'] },
        { association: 'teamAway', as: 'teamAway', attributes: ['teamName'] },
      ],
    });

    return getForMatcheId;
  } catch (error) {
    throw new HttpException(401, 'Incorrect Team');
  }
};

export default getMatchesService;
