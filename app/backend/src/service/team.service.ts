import HttpException from '../utils/HttpException';
import team from '../database/models/TeamsModel';

const getTeamsService = async () => {
  try {
    const getForTeams = await team.findAll();

    return getForTeams;
  } catch (error) {
    throw new HttpException(401, 'Incorrect Team');
  }
};

export default getTeamsService;
