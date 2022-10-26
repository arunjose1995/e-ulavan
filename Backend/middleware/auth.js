const jwt=require('jsonwebtoken')
const config=require('../config/config.json')
const auth=async(req,res,next)=>{
    const token=req.header('x-auth-token')
    if (!token)
    return res.status(401).send('access denied.No token process')
    try{
        const decoded=jwt.verify(token,config.JWTSCREAREKEY)
        req.user=decoded;
        next();
    }
    catch(err){
        res.status(404).send('Invalid TOKEN')
    }
}