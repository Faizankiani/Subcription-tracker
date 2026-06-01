import aj from "../config/arcjet.js";

const arjectMiddleware = (req, res, next) =>{
    try{
        const decision = await aj.protect(req);
        if (decision.isDenied){
            if (decision.reason.isRateLimit()){
                res.status(429).json ({error: "Too many requests"});
            }
            if (decision.reason.isBot()){
                res.status(403).json({error: "No bots allowed"});
            }
        }
        next();

    }
    catch(error){
        console.log(`Arject middleware error: ${error.message}`);
        next(error);
    }
}

export default arjectMiddleware;