import cors from 'cors';
import express from 'express';
import serverError from './src/middlewares/serverError';
import consultTransactionsRouter from './src/routers/consultTransactions';
import convertRouter from './src/routers/convert';
import loginRouter from './src/routers/login';
import userRouter from './src/routers/user';
require('dotenv/config');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/convert', convertRouter);
app.use('/consult', consultTransactionsRouter);
app.use('/user', userRouter);
app.use('/login', loginRouter);
app.get('/', (_req, res) => res.json({ message: 'active server' }));
app.use(serverError);

module.exports = app;
