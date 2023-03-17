import { Router } from 'express';
import consultTransactionsController from '../controller/consultTransactions';
import validateUserId from '../middlewares/validateUserId';

const consultTransactionsRouter = Router();

consultTransactionsRouter
  .route('/:userId')
  .get(validateUserId, consultTransactionsController);

export default consultTransactionsRouter;
