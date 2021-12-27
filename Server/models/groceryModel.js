//our grocery list model and schema so as to map the required validators 
//and datatypes with the database

const mongoose=require('mongoose');

//preparing our schema
const groceryItemsSchema=new mongoose.Schema({
        groceryItem:{
            type:String,
            required:true
        },
        isPurchased:
        {
            type:Boolean,
            required:true
        }

})

//now export our schema
module.exports=mongoose.model("grocerySchema",groceryItemsSchema);