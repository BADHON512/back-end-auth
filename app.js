import  Express, { urlencoded }  from "express";
import dotenv from "dotenv";
import session from "express-session";
import  passport, { Passport }  from 'passport';
import  {connectPassport } from "./utils/Provider.js";
import cookieParser from "cookie-parser";
import { errorMiddleware } from './middlewares/errorMiddleware.js';

import cors from "cors"


const app=Express()



export default app
dotenv.config({
    path:"./config/config.env"
})

//using middleware
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false,
    cookie:{
        secure:process.env.NODE_ENV==="Development"?false:true,
        httpOnly:process.env.NODE_ENV==="Development"?false:true,
        sameSite:process.env.NODE_ENV==="Development"?false:"none"
    }
}))

app.use(Express.json())
app.use(urlencoded({extended:true}))

app.use(cors({
    credentials:true,
    origin:"http://localhost:3000",
    methods:["GET","POST","PUT","DELETE"],
}))
app.use(cookieParser())
 app.use(passport.authenticate("session"));
 app.use(passport.initialize())
 app.use(passport.session())
 app.enable("trust proxy")
connectPassport()
// importing routes//
import userRoute from "./routes/user.js"
import orderRoute from "./routes/order.js"


app.use("/api/v1", userRoute)
app.use("/api/v1", orderRoute)

// errorMiddelware
app.use(errorMiddleware)
