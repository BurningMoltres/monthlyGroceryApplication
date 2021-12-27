import React from 'react'

export default function SubHeader() {

    let currentmonthno=new Date().getMonth();
    let month=["January","Februray","March","April","May","June","August",
"September","October","November","December"];

let currentmonth=month[currentmonthno-1];
    return (
        <div className='container mt-5' >
            <h3>Plan for the month of {currentmonth}</h3>
        </div>
    )
}
//<!--For git commit-->
  //<!--For git commit-->