import { NextFunction, Request, Response } from 'express';
import { bcrypt, createToken } from '../services/safety';
import createUserService from '../services/CreateUser';

const CreateUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password } = req.body;
    const passwordHash: string = await bcrypt(password);
    const response = await createUserService(name, email, passwordHash);
    if (response === 'E-mail already registered') {
      return res.status(401).json({ message: response });
    }
    if (response) {
      const token = await createToken(response.insertId, email);
      return res.status(201).json({
        id: response.insertId,
        name: name,
        email: email,
        token: token,
      });
    }
  } catch (error) {
    next(error);
  }
};

export default CreateUserController;
