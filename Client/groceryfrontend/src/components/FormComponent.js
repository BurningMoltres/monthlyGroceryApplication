import React from 'react'
import { useState,useEffect } from 'react';
export default  function FormComponent() {
var data=[];
var collectionArray=[];
var collectionArray2=[];
const [collectionState,changeCollectionState]=useState([]);
const[dummyState,changeDummyState]=useState([]);
let dummycounter=0;
const[itemaddedState,changeItemAddedState]=useState(false);

let beta;

useEffect(()=>{
  async function getdetails()
{
          const getResponse=await fetch("grocery/getAll",{

            method:"GET",
          

          }
          ).then(response=>response.json())
          
          .then(value=>changeCollectionState([...value,{"id":value._id,"item":value.groceryItem,"isPurchased":value.isPurchased}]));

         

        
          
}

getdetails();
},[]);
      
          
        
          
      
            

          
          
              async function handleEnter (e)
            {
              
              changeItemAddedState(true);
              let   detail=e.target.value;
              //e.preventDefault();
                if(e.code==='Space')
                {
             
                console.log(detail);
                

              const response= await fetch("grocery/add",
              {
                
                  method:"POST",
                  headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({groceryItem:detail,
                  isPurchased:false})
                  
              });

              const ourresponse=await response.json();

              if(ourresponse===422)
              {
                  window.alert("Invalid details");
              }
              else
              {
                window.alert("details added");
              }
                  
                }
              
                //firing a get request to rerender my array
            
                async function getdetails()
                {
                          const getResponse=await fetch("grocery/getAll",{
                
                            method:"GET",
                          
                
                          }
                          ).then(response=>response.json())
                          
                          .then(value=>changeCollectionState([...value,{"id":value._id,"item":value.groceryItem,"isPurchased":value.isPurchased}]));
                
                         
                
                        
                          
                }
                getdetails();
            }
          
         
              async function handlePurchaseState(e)
              {
                e.preventDefault();
               
                let key=e.target.id;
                let itemid=collectionState[key]._id;
                let item=collectionState[key].groceryItem;
                let status=collectionState[key].isPurchased;

             
                  console.log(typeof itemid);
                if(status===true)
                {
                  status=false;
                }
                else if(status===false)
                {
                  status=true;
                }

                console.log(itemid,item);
                let sam=JSON.stringify(itemid);
                console.log(sam);

                  //changing the status code

                 const response= await fetch(`/update/${itemid}/${status}`,
              {
                
                  method:"PUT",
                  headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                  },
                  body:JSON.stringify({id:itemid})
                 
                  
              });

              const ourresponse=await response.json();

              if(ourresponse===422)
              {
                  window.alert("Invalid details");
              }
              else
              {
                window.alert("purchase details updated");
              }
               
      

                }
              


               async  function handleDeleteState(e)
                {
                  e.preventDefault();
                  let key=e.target.id;
                  let myitemid=collectionState[key]._id;
                  
                const response= await fetch(`/delete/${myitemid}/`,
                {
                  
                    method:"DELETE",
                    headers: {
                      'Accept': 'application/json, text/plain, */*',
                      'Content-Type': 'application/json'
                    },
                    body:JSON.stringify({id:myitemid})
                   
                    
                });
  
                const ourresponse=await response.json();
  
                if(ourresponse===422)
                {
                    window.alert("sorry couldnt delete");
                }
                else
                {
                  window.alert("Item deleted");
                }
                changeDummyState(dummyState.concat(...collectionArray,dummycounter+1));
                console.log(dummyState);
                
                  } 

                














              



                let counter=0;
                let counter2=0;

            return (
              
              
                <div className='container'>
              
              
              
                <form method="POST">
                <div class="form-floating mb-3 w-50">
          <input type="text" className="form-control" id="shoppingInput" placeholder="Add shopping item" onKeyPress={(e)=>handleEnter(e)}/>
          <label for="floatingInput">Shopping Item</label>

          <ul className="list-group w-100 mt-2">
        
          {
            collectionState.map((e)=>(
              <div>
          
          <li id={e._id} className="list-group-item">{e.groceryItem}

          <button id={counter2++} className="btn btn-danger ms-3 btn-sm float-end" type="submit" onClick={(e)=>handleDeleteState(e)}>X</button>
          <button id={counter++} className='btn ms-3 btn-light btn-sm float-end' onClick={(e)=>handlePurchaseState(e)} type="submit">Purchased</button>
          </li>

          </div>


            ))

          }
           
          </ul>
        </div>
              </form>
                </div>
            )
        }
      //<!--For git commit-->
      //<!--For git commit-->