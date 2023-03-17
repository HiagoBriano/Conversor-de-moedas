import cors from 'cors';
import express from 'express';
import serverError from './src/middlewares/serverError';
import routerConvert from './src/routers/convert';
require('dotenv/config');

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT ? parseInt(process.env.PORT) : 3001;

app.use('/convert', routerConvert);
app.get('/', (_req, res) => res.json({ message: 'active server' }));
app.use(serverError);

app.listen(port, () => console.log(`Server is running on port ${port}`));
