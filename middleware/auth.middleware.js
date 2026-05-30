import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import {JWT_SECRET} from '../config/env.js';

const authorize = async (req, res, next) =>{
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(401).json({message : "Unauthorized"});
    }
    const token = authHeader.split(' ')[1];
    try{
        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await User.findByID(decoded.userID);

        if (!user){
            return res.status(401).json({message : "Unauthorized"});
        }
        req.user = user;
        next();
    }
    catch(error){   
        return res.status(401).json({message : "Unauthorized", error: error.message});
    };

}

export default authorize;