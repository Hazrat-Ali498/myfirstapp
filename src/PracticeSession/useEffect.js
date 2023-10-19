import { useEffect } from "react";
import { useState } from "react";

const UseEffect=()=>{

    const [Count, setCount]=useState(0);
    useEffect(()=>
    {
        console.log("Its work")
    })
    
    return(
       <div>
         <h1>I am use Effect..</h1>
        <button className="btn" style={{backgroundColor:"blue",color:"white"}} onClick={()=>setCount(Count-1)}>Decrease</button>
        <h5>{Count}</h5>
        <button className="btn" style={{backgroundColor:"blue",color:"white"}} onClick={()=>setCount(Count+1)}>Increase</button>
       </div>
    );
}
export default UseEffect;