import app from './app.js';
import { connectDB } from './config/database.js';



connectDB()
app.get("/",(req,res,next)=>res.send("<h1 style={text-align=center}>Server Working</h1>"))
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on ${process.env.PORT} in ${process.env.NODE_ENV}MODE`);
})