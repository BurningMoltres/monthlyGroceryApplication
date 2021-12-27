const express=require('express');
const router=express.Router();

//no we will import our schema

const grocerySchema=require('../models/groceryModel');

router.post("/grocery/add",async(req,res)=>{

    const{groceryItem,isPurchased}=req.body;
    console.log(groceryItem);
    console.log(isPurchased);
    try{
        const schemaInstance=new grocerySchema({groceryItem,isPurchased});
        await schemaInstance.save();
        res.json("Items added in database");
    }
    catch(error)
    {
        console.log(error.message);
    }
})


router.get("/grocery/getall",async(req,res)=>{


        try{
            const retrieveGroceryItems=await grocerySchema.find();
            res.json(retrieveGroceryItems);
        }
        catch(error)
        {
            console.log(error);
        }
})

//delete by id request
router.delete("/delete/:id",async(req,res)=>
{
    try{
            let id=req.params.id;
            const deletedItem=await grocerySchema.findByIdAndDelete(id,function(err,docs)
            {
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    console.log("Deleted:",docs);
                }

            }
            );
            res.json(deletedItem);

    }
    catch(error)
    {
        console.log(error.message);
    }
})

//update the prchaseDate
router.put("/update/:id/:value",async(req,res)=>
{

    try{
        let purchaseId=req.params.id;
        let booleanValue=req.params.value;
        console.log("id put "+purchaseId + "status" + booleanValue)

        //logic for udating the value in database
       await  grocerySchema.findByIdAndUpdate(purchaseId.toString(),{isPurchased:booleanValue},
        //checking error in callback
        function(err,docs)
        {
            if(err)
            {
                console.log(err);
            }
            else
            {
                res.json("UPdated");
            }
        }
        )

    }
    catch(error)
    {
        console.log(error.message);
    }





})







module.exports=router;
