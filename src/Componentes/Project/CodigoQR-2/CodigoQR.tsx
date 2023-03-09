import { Link } from "react-router-dom"
import  estilos  from "../../styles/estilos"
import QR from "./images/image-qr-code.png"
function CodigoQR() {
   
    return (
        <div className={`bg-[#D6E1F0] min-h-screen h-full`}>
            <div className={`${estilos.marginX} pt-20`}>
                <div className={`${estilos.flexCenter}`}>
                    <div className={` bg-[#FCFFFD] border-[#FCFFFD] border-[1rem] rounded-lg sm:w-80`}>
                        <div className={`${estilos.flexCenter}`}>
                            <img className="rounded-lg" src={QR} alt="CodigoQR"/> 
                        </div>
                        <h3 className={`text-[#343F52] text-xl font-[sans-serif] pt-6 text-center`}>
                        Improve your front-end skills by building projects
                        </h3>
                        <div className="text-lg text-[#A6A8AA] font-[sans-serif]">
                        <p className="text-center">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                        <p className="text-center">
                         Challenge by <Link to="https://www.frontendmentor.io?ref=challenge" target="_blank"rel="noreferrer" >Frontend Mentor</Link>.
                         Coded by Michael Luis Condori Paye
                        </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
//#FCFFFD #3785FF #343F52 #A6A8AA
export default CodigoQR