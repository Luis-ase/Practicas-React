import estilos from "../../../styles/estilos"
import { HiCheck } from "react-icons/hi2";
import { useState } from "react";

interface Props {
    elemetos: any,
    completado: (id: number) => void,
    eliminar: (id: number) => void,
}

export default function Cardlist(props: Props) {


    return (
        <div className={`${estilos.flexCenter} flex-col gap-2`}>
            {props.elemetos?.map((e: any) => {
                return (
                    <div key={e.id} className={`py-2 flex justify-between items-center`}>
                        <div className="bg-gray-900 rounded-lg w-[20rem] ">
                            {/* <input
                                name={e.id}
                                value={e.name}
                                className={`
                                    bg-gray-900
                                    caret-pink-500
                                    ${estilos.estilosnone} 
                                    placeholder:text-gray-500 
                                    placeholder:font-semibold 
                                    ${estilos.paddingX}
                                    py-1
                                    text-xl
                                    rounded-lg
                                    `}
                            /> */}
                            <p className={` 
                               
                                ${estilos.paddingX} py-1
                                    text-xl
                                    ${e.complet === true ? "text-[green]" : ""}
                                    `}>
                                {e.name}
                            </p>
                        </div>
                        {/* Button */}
                        <div className={`flex justify-between  `}>

                            <button
                                onClick={() => props.eliminar(e.id)}
                                className={`
                                text-white bg-gradient-to-br from-red-600 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2
                                ${estilos.estilosnone}
                                ${estilos.marginX}
                                `}>
                                Eliminar
                            </button>
                            <button
                                onClick={() => props.completado(e.id)}
                                className={`
                                text-white bg-gradient-to-br from-red-600 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2
                                ${estilos.estilosnone}
                                `}>
                                Estado
                            </button>
                            <figure className={`${estilos.flexCenter}`}>
                                <i className={`${estilos.flexCenter} ${e.complet ? "text-[green]": ""} text-4xl`}>
                                    <HiCheck />
                                </i>
                            </figure>

                        </div>
                    </div>
                )
            })}


        </div>

    )
}


