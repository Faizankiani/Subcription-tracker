import {Router} from 'express';
const userRoutes = Router();

userRoutes.get('/',(req,res)=>{
    res.send('Get all Users');
});
userRoutes.get('/:id',(req,res)=>{
    res.send(`Get user with id ${req.params.id}`);
});

export default userRoutes;
