import { Link } from "react-router-dom";
import Cardfrontal from "./images/bg-card-front.png"
import Cardback  from "./images/bg-card-back.png"
function FormInt(){
    
    
    return(
        <div>
            <img src={Cardfrontal} alt="Card Frontal" />
            <img src={Cardback} alt="Cardback" />
            0000 0000 0000 0000
  Jane Appleseed
  00/00

  000

  Cardholder Name
  e.g. Jane Appleseed

  Card Number
  e.g. 1234 5678 9123 0000

  Exp. Date (MM/YY)
  MM
  YY

  CVC
  e.g. 123

  Confirm

  {/* <!-- Completed state start --> */}

  Thank you!
  We've added your card details
  Continue
  
  
  <div className="attribution">
    Challenge by <Link to="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</Link>. 
    Coded by <Link to="#">Michael Luis COndori Paye</Link>.
  </div>

        </div>
    )
}

export default FormInt;