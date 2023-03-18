import { Router } from 'express';
import convertController from '../controller/convert';
import validateAmountField from '../middlewares/validateAmountField';
import validateFromField from '../middlewares/validateFromField';
import validateToField from '../middlewares/validateToField';
import validateToken from '../middlewares/validateToken';

const convertRouter = Router();

convertRouter
  .route('/')
  .post(
    validateToken,
    validateToField,
    validateFromField,
    validateAmountField,
    convertController
  );

export default convertRouter;
