import { Button } from "react-bootstrap"

function Checkout({q,inc,dec}){
    
    return(
        // <div>
        //     <h1>{prop.p}</h1>
        //     <h2>{prop.q}</h2>
        // </div>


        // <div>
        //      {/* Distruction */}
        //      <h1>{p}</h1>
        //     <h6>{q}</h6>
        // </div>
        


        // Button handling
        <div style={{display:"flex"}}> 
            <button className="btn" onClick={dec} style={{width:"4%",height:"30px",border:"1px solid black"}}>-</button>
                <h4>{q}</h4>
            <button className="btn" onClick={inc} style={{width:"4%",height:"30px",border:"1px solid black"}}>+</button>
        </div>



    );
}
export default Checkout;