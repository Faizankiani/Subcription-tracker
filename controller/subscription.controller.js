import Subscription from "../models/Subscription.model.js";

export const createSybscription = (req, res, next) =>{
    try{
        const subscription  =  await Subscription.create({
        ...req.body,
        user: req.user._id
    });
    res.status(201).json({success: true, data: subscription});
    }catch(err){
        next(err);
    }
};
const getSubscription = async (req, res, next) =>{
    try{
        if (req.params.id !== req.user._id){
            return res.status(403).json({message: "Forbidden"});
        }
        const subscription = await Subscription.find({user: req.params.id});
        if (!subscription){
            return res.status(404).json({message: "Subscription not found"});
        }
        res.status(200).json({success: true, data: subscription});
    }catch(err){
        next(err);
    }
}