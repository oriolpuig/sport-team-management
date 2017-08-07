import express from 'express';
import HelloCtrl, { SeasonCtrl } from './controllers';

const router = express.Router();

// HelloCtrl - Say hello method
router.get('/hello', HelloCtrl.sayHello);

// SeasonCtrl - getAll
router.get('/season', SeasonCtrl.getAll);
router.get('/season/:id', SeasonCtrl.getById);
router.post('/season', SeasonCtrl.save);
router.put('/season/:id', SeasonCtrl.update);
router.delete('/season/:id', SeasonCtrl.delete);

export default router;
