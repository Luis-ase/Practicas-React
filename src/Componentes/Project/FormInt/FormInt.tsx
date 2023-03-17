import { Link } from "react-router-dom";
import Cardfrontal from "./images/bg-card-front.png"
import Cardback from "./images/bg-card-back.png"
import favicon from "./images/favicon-32x32.png"
import icon from "./images/icon-complete.svg"
import Cardlogo from "./images/card-logo.svg"
import { useState } from "react";
import mobil from "./images/bg-main-mobile.png"
import estilos from "../../styles/estilos";
interface Formulario {
    usuario: string,
    codigo: number,
    fechaMes: number,
    fechaAño: number,
    cvc: number,
}

function FormInt() {

    const [succes,setSucces]= useState(false)
    const [data, setData] = useState<Formulario>({
        usuario: "",
        codigo: 0,
        fechaMes: 0,
        fechaAño: 0,
        cvc: 0,
    })

    function followingChanges (e:any){
        e.preventDefault();
        
        let newState:any = {...data,[e.target.name]:e.target.value}
        setData(newState)

        return newState
    }

    function chamgeState(){
        return setTimeout(()=>setSucces(true),3000)
    }


    return (
        <div className="font-mono">
            {/* <img src={mobil} alt="background mobil" />
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
            </div> */}
            {/* 0000 0000 0000 0000
            Jane Appleseed
            00/00

            000 */}
            {/* <!-- Completed state start --> */}
            {/* succes */}
            {/* Thank you!
            We've added your card details
            Continue */}
            <div className="flex justify-center">
               { <form onSubmit={chamgeState}>
                    <div className={`flex justify-center flex-col`}>
                        <div className="flex flex-col p-4">
                            <label htmlFor="" className="text-[#4c1d95]">Cardholder Name</label>
                            <input type="text" id="small-input" placeholder="JaneAppleseed"
                            name="usuario"
                            value={data.usuario}
                            onChange={followingChanges}
                            className=" p-2  border border-[#a21caf] rounded-lg bg-gray-50 sm:text-xs focus:border-[#a21caf] "/>
                        </div>
                        <div className="flex flex-col p-4">
                            <label htmlFor="" className="text-[#4c1d95]"> Card Number</label>
                            <input type={"number"} placeholder="e.g. 1234 5678 9123 0000" 
                            name="codigo"
                            value={data.codigo}
                            onChange={followingChanges}
                            className="p-2  border border-[#a21caf] rounded-lg bg-gray-50 sm:text-xs focus:border-[#a21caf]" />
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="flex flex-col p-2  ">
                                <label htmlFor="" className="text-[#4c1d95]"> Exp. Date (MM/YY)</label>
                                <div className="flex items-center justify-center">
                                    <div className="px-2">
                                    <input type={"number"} placeholder="MM" 
                                    name="fechaMes"
                                    value={data.fechaMes}
                                    onChange={followingChanges}
                                    className="p-2  border border-[#a21caf] rounded-lg bg-gray-50 sm:text-xs focus:border-[#a21caf] w-12 " />
                                    </div>
                                    <div className="px-2">
                                    <input type={"number"} placeholder="YY" 
                                    name="fechaAño"
                                    value={data.fechaAño}
                                    onChange={followingChanges}
                                    className="p-2  border border-[#a21caf] rounded-lg bg-gray-50 sm:text-xs focus:border-[#a21caf] w-12" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex  flex-col p-3">
                                <label htmlFor="" className="text-[#4c1d95]">CVC</label>
                                <input type={"number"} placeholder="e.g. 123"
                                name="cvc" 
                                value={data.cvc}
                                onChange={followingChanges}
                                className="p-2  border border-[#a21caf] rounded-lg bg-gray-50 sm:text-xs focus:border-[#a21caf]" />
                            </div>
                        </div>
                        <button type="submit" className={`text-white bg-[#581c87] rounded-lg h-10 font-bold`}>Confirm</button>
                    </div>
                </form>}
            </div>
            {/* 
            <div className="attribution">
                Challenge by <Link to="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</Link>.
                Coded by <Link to="#">Michael Luis COndori Paye</Link>.
            </div> */}

        </div>
    )
}

export default FormInt;




// <form>
//   <div class="mb-6">
//     <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//     <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required>
//   </div>
//   <div class="mb-6">
//     <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
//     <input type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
//   </div>
//   <div class="mb-6">
//     <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
//     <input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
//   </div>
//   <div class="flex items-start mb-6">
//     <div class="flex items-center h-5">
//       <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required>
//     </div>
//     <label for="terms" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
//   </div>
//   <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
// </form>
