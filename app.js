import express from 'express';
import {PORT} from './config/env.js'
const app = express();
import authRouter from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';   

app.use(express.json());

app.use('/auth', authRouter);
app.use('/users', userRoutes);  

app.get('/',(req,res)=>{
    res.send("Welcome to my API");
});

app.listen(PORT, ()=>{
    console.log(`My api running on http://localhost:${PORT}`);
});

export default app;

