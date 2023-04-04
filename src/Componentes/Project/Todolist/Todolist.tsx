import { useState } from "react";
import estilos from "../../styles/estilos"
import Cardlist from "./Cardlist/Cardlist";
export default function Todolist() {
    interface data {
        id: number,
        name: string,
        complet:boolean,
    }


    const [lista, setLista] = useState<Array<data>>([])
    const [tareas, setTareas] = useState<data>({
        id: 0,
        name: "",
        complet:false,
    })

    const createTarea = (event: any) => {
        event.preventDefault();
        setTareas({ id: lista.length, name: event.target.value,complet:false })
    }

    const submitTareas = (event: any) => {
        event.preventDefault();
        setLista([...lista, tareas])
        setTareas({
            id: 0,
            name: "",
            complet:false
        })
        return alert("tarea creada")
    }
    
    const onChageComplet =(id:number)=>{
        setLista(lista.map((task)=>{
            if(task.id === id){
                return {...task,complet:true}
            }
            return task
        }))
       
        console.log(lista)
        
    }
    const deleteTask =(id:number)=>{
        const eliminar = lista.filter((e)=> e.id !== id )
        return setLista(eliminar)
    }

    return (
        <>
            <div className={`${estilos.padding} ${estilos.paragraph} flex flex-col min-h-screen bg-slate-800 text-gray-400`}>

                <header className={`py-8 px-4 max-w-[800px] w-full my-0 mx-auto`}>
                    <h1 className="text-3xl text-center ">Todolist</h1>
                    <form onSubmit={submitTareas} className={`flex justify-evenly ${estilos.paddingY}`}>

                        <input
                            type="text"
                            name="name"
                            id="new-task"
                            value={tareas.name}
                            placeholder="Que tarea vas hacer hoy"
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
                            required
                            onChange={createTarea}
                        />


                        <button type="submit"

                            className={`
                        text-white bg-gradient-to-r from-purple-800 to-pink-700 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2
                        ${estilos.estilosnone} font-semibold`}>
                            Agregar tarea
                        </button>


                    </form>
                </header>
                <main className={`py-8 px-4 max-w-[800px] w-full my-0 mx-auto`}>
                    <section>
                        <h2>
                            Tareas
                        </h2>
                       <Cardlist elemetos={lista} eliminar={deleteTask} completado={onChageComplet}/>
                    </section>
                </main>


            </div>

        </>)
}