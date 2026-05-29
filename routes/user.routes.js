import {Router} from 'express';
import {signUp} from '../controller/auth.controller.js';
const userRoutes = Router();

userRoutes.get('/',(req,res)=>{
    res.send('Get all Users');
});
userRoutes.post('/signup', signUp);
userRoutes.get('/:id',(req,res)=>{
    res.send(`Get user with id ${req.params.id}`);
});

export default userRoutes;
