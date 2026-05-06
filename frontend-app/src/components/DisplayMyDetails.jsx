import { useState } from "react";
 const DisplayMyDetails = (props)=> {
    return(
        <>
        <h1>My details </h1>
        <ul>
            <li>Name:{props.mydata.Name}</li>
            <li>RollNo:{props.mydata.RollNo}</li>
            <li>Course:{props.mydata.Course}</li>
            <li>Collage:{props.mydata.Collage}</li>
        </ul>
        
        </>
    )
}
export default DisplayMyDetails;


