import Subscription from "../models/Subscription.model.js";

export const createSybscription = (req, res, next) =>{
    try{
        const subscription  =  await Subscription.create({
        ...req.body,
        user: req.user._id
    })
    }catch(err){
        next(err);
    }
}