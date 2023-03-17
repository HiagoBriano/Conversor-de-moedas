import { Router } from 'express';
import validateFromField from '../middlewares/validateFromField';
import validateToField from '../middlewares/validateToField';
import validateUserId from '../middlewares/validateUserId';

const routerConvert = Router();

routerConvert
  .route('/:userId')
  .get(validateUserId, validateToField, validateFromField);

export default routerConvert;