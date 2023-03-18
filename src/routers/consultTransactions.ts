import { Router } from 'express';
import consultTransactionsController from '../controller/consultTransactions';
import validateToken from '../middlewares/validateToken';

const consultTransactionsRouter = Router();

consultTransactionsRouter
  .route('/')
  .get(validateToken, consultTransactionsController);

export default consultTransactionsRouter;
