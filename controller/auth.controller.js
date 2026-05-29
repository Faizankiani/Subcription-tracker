import mongoose from 'mongoose';

import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {JWT_SECRET, JWT_EXPIRES_IN} from '../config/env.js';

const signUp = async (req, res, next) =>{
    const session = await mongoose.startSession();
    session.startTransaction(); 

    try{
        const {name, email, password} = req.body;

        const existingUser = await User.findOne({email}).session(session);

        if (existingUser){
            const error  = new Error ("User with email already exists");
            error.statusCode = 409;
            throw error;

        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUsers = await User.create ([{name, email, password: hashedPassword}], {session});

        const token = jwt.sign({id : newUsers[0]._id}, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN});

        await session.commitTransaction();
        session.endSession();

        res.status(201).json({
            success: true,
            message: "User succesfully registered",
            token,  

        })
            

    }
        catch (error){
            await session.abortTransaction();
            session.endSession();
            next(error);
        }
        
        
        


}
const signIn = async (req, res, next) =>{
    try{
        const {email, password} = req.body;
        const user = await.User.findOne({email});
        if (!user){
            const error = new Error ("Invalid email or password");
            error.statusCode = 401;
            throw error;
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch){
            const error = new Error ("Invalid email or password");
            error.statusCode = 401;
            throw error;
        }   
        const token = jwt.sign({id : user._id}, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN});
        res.status(200).json({
            success: true,
            message: "User successfully signed in",
            token,
        });
    }
    catch (error){
        next(error);
    }

}