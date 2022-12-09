import HttpException from '../utils/HttpException';
import matches from '../database/models/matchesModel';

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
