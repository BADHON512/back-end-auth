import ErrorHandler from './../utils/ErrorHandelar.js';


export const isAthenticated = (req,res,next)=>{

    const token= req.cookies["connect.sid"]

   if(!token){
    return next(new ErrorHandler("NOt LOGGED IN",401))
   }next()
}
ErrorHandler