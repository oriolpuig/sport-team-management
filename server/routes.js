import express from 'express';
import HelloCtrl from './controllers';

const router = express.Router();

// HelloCtrl - Say hello method
router.get('/hello', HelloCtrl.sayHello);

export default router;
