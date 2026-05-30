import user from "../models/user.model.js";

const getUsers = async (req, res, next ) =>{
    try{
        const users = await user.find();
        res.status(200).json({
            success: true,
            data: users,  
        }) ; 
    }
    catch(error){
        next(error);
    }
}
const getUser = async (req, res, next) =>{
    try{
        const user = await user.findById(req.params.id).select('-password');

        if(!user){
            const error = new Error ("User not found");
            res.statusCode = 404;
            throw error;
        }
        res.status(200).json({
            success: true,
            data: user,  
        }) ;

    }
    catch(error){
        next(error);
    }
}

export {getUsers, getUser};