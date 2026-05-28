const errorMiddleware = (err, req, res, next) => {

    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal Server Error";

    if (err.name === "CastError"){
        message = " INvalid ID format";
        statusCode = 400;
    }
    if (err.code === 11000){
        message = "Duplicate key error";
        statusCode = 400;
    }
    if (err.name === "ValidationError"){
        message = Object.values(err.errors).map(val => val.message).join(', ');
        statusCode = 404;
    }
    res.status(statusCode).json({
        success: false,
        message = message
    });
 
    
};
export default errorMiddleware;
