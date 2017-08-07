import express from 'express';
import HelloCtrl, { CompetitionCtrl, GoalCtrl, LeagueCtrl, PlayerCtrl, SeasonCtrl, SquadCtrl, TeamCtrl } from './controllers';

const router = express.Router();

// CompetitionCtrl
router.get('/competition', CompetitionCtrl.getAll);
router.get('/competition/:id', CompetitionCtrl.getById);
router.post('/competition', CompetitionCtrl.save);
router.put('/competition/:id', CompetitionCtrl.update);
router.delete('/competition/:id', CompetitionCtrl.delete);

// GoalCtrl
router.get('/goal', GoalCtrl.getAll);
router.get('/goal/:id', GoalCtrl.getById);
router.post('/goal', GoalCtrl.save);
router.put('/goal/:id', GoalCtrl.update);
router.delete('/goal/:id', GoalCtrl.delete);

// HelloCtrl - Say hello method
router.get('/hello', HelloCtrl.sayHello);

// LeagueCtrl
router.get('/league', LeagueCtrl.getAll);
router.get('/league/:id', LeagueCtrl.getById);
router.post('/league', LeagueCtrl.save);
router.put('/league/:id', LeagueCtrl.update);
router.delete('/league/:id', LeagueCtrl.delete);

// PlayerCtrl
router.get('/player', PlayerCtrl.getAll);
router.get('/player/:id', PlayerCtrl.getById);
router.post('/player', PlayerCtrl.save);
router.put('/player/:id', PlayerCtrl.update);
router.delete('/player/:id', PlayerCtrl.delete);

// SeasonCtrl
router.get('/season', SeasonCtrl.getAll);
router.get('/season/:id', SeasonCtrl.getById);
router.post('/season', SeasonCtrl.save);
router.put('/season/:id', SeasonCtrl.update);
router.delete('/season/:id', SeasonCtrl.delete);

// SquadCtrl
router.get('/squad', SquadCtrl.getAll);
router.get('/squad/:id', SquadCtrl.getById);
router.post('/squad', SquadCtrl.save);
router.put('/squad/:id', SquadCtrl.update);
router.delete('/squad/:id', SquadCtrl.delete);

// TeamCtrl
router.get('/team', TeamCtrl.getAll);
router.get('/team/:id', TeamCtrl.getById);
router.post('/team', TeamCtrl.save);
router.put('/team/:id', TeamCtrl.update);
router.delete('/team/:id', TeamCtrl.delete);

export default router;
