import  Express  from "express";
import { placeOrder,getMyOrder,getOrderDetails,getAdminMyOrder,processOrder,placeOrderOnline, } from "../controllers/order.js";
import { isAthenticated ,authorizeAdmin } from './../middlewares/auth.js';


const router= Express.Router() 

router.post('/createorder',placeOrder)

router.post('/createorderonline',placeOrderOnline)


router.get("/myorder",isAthenticated,getMyOrder)
router.get("/order/:id",isAthenticated,getOrderDetails)
// add admin middleware
router.get("/admin/orders",isAthenticated,authorizeAdmin,getAdminMyOrder)



router.get("/admin/order/:id",isAthenticated,authorizeAdmin,processOrder)


export default router