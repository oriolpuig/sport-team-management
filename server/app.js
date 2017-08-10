import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import cors from 'cors';

import config from './config';
import ApiRoutes from './routes';

// =======================
// configuration =========
// =======================
const app = express();
const PORT = process.env.PORT || 8000;

app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({ extended: 'true' })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(cors());

// == DB Configuration
mongoose.connect(config.DATABASE_ENDPOINT);

mongoose.connection.on('connected', () => {
  console.log(`Mongoose default connection open to: ${config.DATABASE_ENDPOINT}`);
});

// =======================
// routes ================
// =======================
// basic route
app.get('/', (req, res) => {
  res.send(`Hello! The API is at http://localhost:${PORT}/api`);
});

// API routes: apply the routes to our application with the prefix /api
app.use('/api', ApiRoutes);

// =======================
// start the server ======
// =======================
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`App listening on port ${PORT}`);
});
