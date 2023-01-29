export const myProfile= (req,res, nex)=>{
    res.status(200).json({
        success:true,
        user:req.user
    })
}

export const logout= (req,res,next)=>{
    req.session.destroy((err)=>{
        if(err)return next(err)
        res.clearCookie("connect.sid");
        res.status(200).json({
            message:"LOGGED OUT"
        })
    })
}

