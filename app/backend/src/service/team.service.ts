import HttpException from '../utils/HttpException';
import team from '../database/models/TeamsModel';

const getTeamsService = async () => {
  try {
    const getForTeams = await team.findAll();

    return getForTeams;
  } catch (error) {
    console.log(error);
    throw new HttpException(401, 'Incorrect Team');
  }
};

export const getTeamIdService = async (id: number) => {
  try {
    const getForTeamId = await team.findByPk(id);

    return getForTeamId;
  } catch (error) {
    throw new HttpException(401, 'Incorrect Id');
  }
};

export default getTeamsService;
