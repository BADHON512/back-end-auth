import  Express  from "express";
import dotenv from "dotenv";
import session from "express-session";
import  passport, { Passport }  from 'passport';
import  {connectPassport } from "./utils/Provider.js";
import cookieParser from "cookie-parser";
import { errorMiddleware } from './middlewares/errorMiddleware.js';


const app=Express()



export default app
dotenv.config({
    path:"./config/config.env"
})

//using middleware
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false
}))
app.use(cookieParser())
 app.use(passport.authenticate("session"));
 app.use(passport.initialize())
 app.use(passport.session())
connectPassport()
// importing routes//
import userRoute from "./routes/user.js"





app.use("/api/v1", userRoute)

// errorMiddelware
app.use(errorMiddleware)