import { Router } from 'express';
import CreateUserController from '../controller/CreateUser';
import validateEmail from '../middlewares/validateEmail';
import validateName from '../middlewares/validateName';
import validatePassword from '../middlewares/validatePassword';


const userRouter = Router();

userRouter
  .route('/')
  .post(validateName, validateEmail, validatePassword, CreateUserController)

export default userRouter;
