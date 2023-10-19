import { useState } from "react";
import Checkout from "./Checkout";

function Practice(){
    // const [Price, setPrice]= useState(200);
    // const [Quantity, setQuantity] = useState(15);

    const [Quantity, setQuantity]= useState(0);
    function handleincrese(){setQuantity(Quantity + 1)}
    function handledecrease(){setQuantity(Quantity - 1)}

  



    return(
        // <Checkout p={Price} q={Quantity}  />
        <div>
           <Checkout q={Quantity} inc={handleincrese} dec={handledecrease} />
        </div>

     
    );
}
export default Practice;
