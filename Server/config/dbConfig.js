const mongoose=require('mongoose');

const connectDB=async()=>
{
    try{
        //connect to our mongodb url
        await mongoose.connect("mongodb+srv://omkar:alpha123@notescollectiondata.4ytgk.mongodb.net/Grocery?retryWrites=true&w=majority");
        console.log("database connection is successfull");

    }
    catch(error)
    {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports=connectDB;