import mongoose from 'mongoose'
import {DATABASE_URL, NODE_ENV} from '../config/env.js'

if (!DATABASE_URL){
    throw new Error('Database URL is not defined in environment variables');
}

const connectToDb  = async () =>{
   try{
    await mongoose.connect(DATABASE_URL);
    console.log(`Connected in ${NODE_ENV} mode`);
   }
   catch(error){
    console.error('Error connecting to database', error.message);
    process.exit(1);
   }
}

export default connectToDb;
