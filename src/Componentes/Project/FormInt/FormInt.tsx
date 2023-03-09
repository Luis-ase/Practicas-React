import { Link } from "react-router-dom";
import Cardfrontal from "./images/bg-card-front.png"
import Cardback from "./images/bg-card-back.png"
import favicon from "./images/favicon-32x32.png"
import icon from "./images/icon-complete.svg"
import Cardlogo from "./images/card-logo.svg"
import { useState } from "react";
import mobil from "./images/bg-main-mobile.png"
interface Formulario {
    usuario: string,
    codigo: number,
    fecha: number,
    cvc: number,
}

function FormInt() {
    const [data, setData] = useState<Formulario[]>([])

    return (
        <div className="font-mono">
            <img src={mobil} alt="background mobil" />
            <img src={Cardfrontal} alt="Card Frontal" />
            <img src={Cardback} alt="Cardback" />
            <img src={favicon} alt="Cardback" />
            <img src={icon} alt="Cardback" />
            <div className="bg-red-900">

            <img src={Cardlogo} alt="CardLogo" />
            </div>


            <div>
                <h2>Thank you!</h2>
                <p>We've added  your card details</p>
            </div>
            {/* 0000 0000 0000 0000
            Jane Appleseed
            00/00

            000 */}
            {/* <!-- Completed state start --> */}
          {/* succes */}
            {/* Thank you!
            We've added your card details
            Continue */}
            
            <form action="">
                <div>
                    <div>
                        <label htmlFor="">Cardholder Name</label>
                        <input type="text" placeholder="e.g. Jane Appleseed" className="border-slate-500 border rounded-lg"/>
                    </div>
                    <div>
                        <label htmlFor=""> Card Number</label>
                        <input type={"number"} placeholder="e.g. 1234 5678 9123 0000" className="border-slate-500 border rounded-lg"/>
                    </div>
                    <div>
                        <label htmlFor=""> Exp. Date (MM/YY)</label>
                        <input type={"number"} placeholder="MM" className="border-slate-500 border rounded-lg"/>
                        <input type={"number"} placeholder="YY"  className="border-slate-500 border rounded-lg"/>
                        <div>
                            <label htmlFor="">CVC</label>
                        <input type={"number"} placeholder="e.g. 123" className="border-slate-500 border rounded-lg"/>
                        </div>
                    </div>
                <button>Confirm</button>
                </div>
            </form>

            <div className="attribution">
                Challenge by <Link to="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</Link>.
                Coded by <Link to="#">Michael Luis COndori Paye</Link>.
            </div>

        </div>
    )
}

export default FormInt;