import  Express  from "express";
import passport from "passport";
import { myProfile,logout } from './../controllers/user.js';
import { isAthenticated } from './../middlewares/auth.js';

const router= Express.Router()

router.get("/googlelogin",passport.authenticate("google",{
    scope:["profile"]
}))

router.get("/login",passport.authenticate("google"),(req,res)=>{
    res.send("your login");
})

router.get('/me',isAthenticated,myProfile)

router.get('/logout',logout)

export default router

// passport.authenticate("google",{
//     scope:["profile"],
//     successRedirect:process.env.FRONTEND_URL
// })