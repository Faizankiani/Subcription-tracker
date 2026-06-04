import {Router} from 'express';
import {signUp} from '../controller/auth.controller.js';
import {getUsers, getUser} from '../controller/user.controller.js';
import {authorize} from '../middleware/auth.middleware.js';
const userRoutes = Router();

userRoutes.get('/', getUsers);
userRoutes.get('/:id', authorize, getUser);
export default userRoutes;
