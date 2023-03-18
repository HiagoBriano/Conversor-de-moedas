import { Router } from 'express';
import loginController from '../controller/login';
import validateEmail from '../middlewares/validateEmail';
import validatePassword from '../middlewares/validatePassword';

const loginRouter = Router();

loginRouter.route('/').post(validateEmail, validatePassword, loginController);

export default loginRouter;
