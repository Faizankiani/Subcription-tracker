import {Router} from 'express';
const authRouter = Router();

authRouter.post('/sign-up',(req,res)=>{
    res.send('Sign-up')
});
authRouter.post('/sign-in',(req,res)=>{
    res.send('Sign-in')
});
authRouter.post('/logout',(req,res)=>{
    res.send('Logout')
});
export default authRouter;