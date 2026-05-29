import express from 'express';
import {PORT} from './config/env.js'
const app = express();
import authRouter from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';   
import connectToDb from './database/mongodb.js';
import errorMiddleware from './middlewares/error.middleware.js';

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));

app.use('/auth', authRouter);
app.use('/users', userRoutes);  

app.use (errorMiddleware);
app.get('/',(req,res)=>{
    res.send("Welcome to my API");
});

app.listen(PORT, async ()=>{
    console.log(`My api running on http://localhost:${PORT}`);

    await connectToDb();
});

export default app;

