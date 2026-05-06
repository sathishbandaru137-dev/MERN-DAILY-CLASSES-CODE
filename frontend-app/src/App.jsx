import React  from "react";
import DisplayMyDetails from "./Components/DisplayMyDetails";

const App=()=>{
 
  let DisplayMyDetail={
    Name : "Bandaru satish",
    RollNo : "23NR1A0517",
    Course : "CSE",
    Collage : "BITS Vizag",

  }
 
  return(
    <p>
      <DisplayMyDetails mydata={DisplayMyDetail}/>
    </p>
  );
};
export default App;