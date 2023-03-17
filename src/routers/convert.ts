import { Router } from 'express';
import convertController from '../controller/convert';
import validateAmountField from '../middlewares/validateAmountField';
import validateFromField from '../middlewares/validateFromField';
import validateToField from '../middlewares/validateToField';
import validateUserId from '../middlewares/validateUserId';

const routerConvert = Router();

routerConvert
  .route('/:userId')
  .get(validateUserId, validateToField, validateFromField, validateAmountField, convertController);

export default routerConvert;