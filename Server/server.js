const express=require('express');
const connectDB = require('./config/dbConfig');
//importing our routes file
const defaultRoutes=require('./routes/routes');

const app=express();
connectDB();
app.use(express.json());

app.use("/myGrocery",defaultRoutes);


app.listen(4321,(error)=>
{
    app.get("/",(req,res)=>{
        res.send("Hello from api")
    })

    if(error){console.log(error.message)}
    else
    {
        console.log("Server is running");
    }
})