import ErrorHandler from './../utils/ErrorHandelar.js';


export const isAthenticated = (req,res,next)=>{

    const token= req.cookies["connect.sid"]

   if(!token){
    return next(new ErrorHandler("NOt LOGGED IN",401))
   }next()
}

export const authorizeAdmin= (req,res,next)=>{

    

   if(req.user.role !== "admin"){
    return next(new ErrorHandler("Only admin Allowed",401))
   }next()
}
