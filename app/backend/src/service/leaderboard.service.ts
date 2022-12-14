import matches from '../database/models/matchesModel';
import teams from '../database/models/TeamsModel';

// TODAS PARTIDAS FINALIZADAS
const forAllMatches = async () => {
  const partidas = await matches.findAll({ where: { inProgress: false } });
  // console.log('TOTPart na func forAllMatches => ', partidas[0].dataValues);

  return partidas;
};
const gamesFullHome = (totPart: any[], id: number) =>
  totPart.filter((match) => match.homeTeam === id).length;

const goalsAddHome = (totPart: any[], id: number) =>
  totPart.filter((match) => match.homeTeam === id).reduce((ac, cur) => ac + cur.homeTeamGoals, 0);

const goalsAgainHome = (totPart: any[], id: number) =>
  totPart.filter((match) => match.homeTeam === id).reduce((ac, cur) => ac + cur.awayTeamGoals, 0);

const gamesVictHome = (totPart: any[], id: number) =>
  totPart.filter((match) => match.homeTeam === id
  && match.homeTeamGoals > match.awayTeamGoals).length;

const gamesEmpHome = (totPart: any[], id: number) =>
  totPart.filter((match) => match.homeTeam === id
  && match.homeTeamGoals === match.awayTeamGoals).length;

const gamesDerHome = (totPart: any[], id: number) =>
  totPart.filter((match) => match.homeTeam === id
  && match.homeTeamGoals < match.awayTeamGoals).length;

const gamesPointHome = (totPart: any[], id: number) => {
  const vitoria = gamesVictHome(totPart, id);
  const empate = gamesEmpHome(totPart, id);

  return (vitoria * 3) + empate;
};
const goalDifference = (totPart: any[], id: number) => {
  const golsPro = goalsAddHome(totPart, id);
  const golsContra = goalsAgainHome(totPart, id);
  return golsPro - golsContra;
};

const aproveitamentoHome = (totPart: any[], id: number) => {
  const totJogos = gamesFullHome(totPart, id);
  const totPontos = gamesPointHome(totPart, id);
  return ((totPontos / (totJogos * 3)) * 100).toFixed(2);
};

// TODOS OS TIMES COM AS CHAVES INICIADAS ABAIXO
const amountDataMatches = async (totPart: []) => {
  const teamsAll = await teams.findAll();
  const valueInit = teamsAll.map(({ id, teamName }) => ({
    name: teamName,
    totalPoints: gamesPointHome(totPart, id),
    totalGames: gamesFullHome(totPart, id),
    totalVictories: gamesVictHome(totPart, id),
    totalDraws: gamesEmpHome(totPart, id),
    totalLosses: gamesDerHome(totPart, id),
    goalsFavor: goalsAddHome(totPart, id),
    goalsOwn: goalsAgainHome(totPart, id),
    goalsBalance: goalDifference(totPart, id),
    efficiency: aproveitamentoHome(totPart, id),
  }));
  console.log(valueInit);
  return valueInit;
};

// principal
const getBoardService = async () => {
  const totPart = await forAllMatches();
  const partidasData = await amountDataMatches(totPart as []);
  return partidasData.sort((a, b) => b.totalPoints - a.totalPoints
  || b.totalVictories - a.totalVictories
  || b.goalsBalance - a.goalsBalance
  || b.goalsFavor - a.goalsFavor
  || a.goalsOwn - b.goalsOwn);
};

export default getBoardService;
