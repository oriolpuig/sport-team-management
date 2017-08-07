import express from 'express';
import HelloCtrl, { CompetitionCtrl, LeagueCtrl, SeasonCtrl } from './controllers';

const router = express.Router();

// CompetitionCtrl
router.get('/competition', CompetitionCtrl.getAll);
router.get('/competition/:id', CompetitionCtrl.getById);
router.post('/competition', CompetitionCtrl.save);
router.put('/competition/:id', CompetitionCtrl.update);
router.delete('/competition/:id', CompetitionCtrl.delete);

// HelloCtrl - Say hello method
router.get('/hello', HelloCtrl.sayHello);

// LeagueCtrl
router.get('/league', LeagueCtrl.getAll);
router.get('/league/:id', LeagueCtrl.getById);
router.post('/league', LeagueCtrl.save);
router.put('/league/:id', LeagueCtrl.update);
router.delete('/league/:id', LeagueCtrl.delete);

// SeasonCtrl
router.get('/season', SeasonCtrl.getAll);
router.get('/season/:id', SeasonCtrl.getById);
router.post('/season', SeasonCtrl.save);
router.put('/season/:id', SeasonCtrl.update);
router.delete('/season/:id', SeasonCtrl.delete);

export default router;
