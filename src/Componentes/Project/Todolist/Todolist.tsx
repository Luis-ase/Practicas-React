import estilos from "../../styles/estilos"

export default function Todolist() {
    return (
        <>
            <div className={`${estilos.padding} ${estilos.paragraph} flex flex-col min-h-screen bg-slate-800 text-gray-400`}>

                <header className={`py-8 px-4 max-w-[800px] w-full my-0 mx-auto`}>
                    <h1 className="text-3xl text-center ">Todolist</h1>
                    <form action="" className={`flex justify-evenly ${estilos.paddingY}`}>
                        
                        <input
                            type="text"
                            id="new-task"
                            placeholder="Que tarea vas hacer hoy"
                            className={`
                            bg-gray-700
                            caret-pink-500
                            ${estilos.estilosnone} 
                            placeholder:text-gray-500 
                            placeholder:font-semibold 
                            ${estilos.paddingX}
                            py-1
                            text-xl
                            rounded-lg
                            `}
                        />
                        
                        
                        <button className={`
                        text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2
                        ${estilos.estilosnone} font-semibold`}>
                            Agregar tarea
                        </button>

                       
                    </form>
                </header>
                <main>
                    <section>
                        <h2>

                        </h2>
                        <div>
                            <div>
                                <input
                                    type="text"
                                    className={`
                                    bg-gray-700
                                    caret-pink-500
                                    ${estilos.estilosnone} 
                                    placeholder:text-gray-500 
                                    placeholder:font-semibold 
                                    ${estilos.paddingX}
                                    py-1
                                    text-xl
                                    rounded-lg
                                    `}
                                />
                            </div>
                            {/* Button */}
                            <div className={``}>
                                <button className={`
                                
                                ${estilos.estilosnone}`}>
                                    Editar
                                </button>
                                <button className={`${estilos.estilosnone}`}>
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </section>

                </main>


            </div>

        </>)
}