import  Express  from "express";
import passport from "passport";
import { myProfile,logout,getAminUsers,getAdminStats } from './../controllers/user.js';
import { authorizeAdmin, isAthenticated } from './../middlewares/auth.js';

const router= Express.Router()

router.get("/googlelogin",passport.authenticate("google",{
    scope:["profile"]
}))

router.get("/login",passport.authenticate("google",{
successRedirect: process.env.FRONTEND_URL
}

))
   


router.get('/me',isAthenticated,myProfile)

router.get('/logout',logout)
router.get('/admin/users',isAthenticated,authorizeAdmin,getAminUsers)

router.get("/admin/status",isAthenticated,authorizeAdmin,getAdminStats)

export default router

// passport.authenticate("google",{
//     scope:["profile"],
//     successRedirect:process.env.FRONTEND_URL
// })
