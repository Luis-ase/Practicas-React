import { useState } from "react"

import { Link } from "react-router-dom";
import "./Csgo.css"
import { FaBars, FaAngleDoubleDown } from "react-icons/fa";
import estilos from "../../styles/estilos";








function Csgo() {

    const [open, setOpen] = useState(false)

    type Allaudios = {
        id: number,
        name: string,
        audio: string,
    }
    const list_Audios: Array<Allaudios> = [
        {
            id: 1,
            name: "Wasa",
            audio: "./AudiosCs/Wasa.wav",
        },
        {
            id: 2,
            name: "Pimpam",
            audio: "./AudiosCs/pimpam.mp3",
        },
        {
            id: 3,
            name: "Me tiro",
            audio: "./AudiosCs/Metiro.mp3",
        },
        {
            id: 4,
            name: "Lo mato a cuchi",
            audio: "./AudiosCs/lomatocuchi.wav",
        },
        {
            id: 5,
            name: "Vengo a explotar",
            audio: "./AudiosCs/holavengo.wav",
        },
        {
            id: 6,
            name: "Team",
            audio: "./AudiosCs/Team.wav",
        },

    ];


    function handlePlayAudio(id: number) {
        if (id === 1) {
            const audio = new Audio(require("./AudiosCs/Wasa.wav"));
            return audio.play();        }
        if (id === 2) {
            const audio = new Audio(require("./AudiosCs/pimpam.mp3"));
           return audio.play();
        }
        if (id === 3) {
            const audio = new Audio(require("./AudiosCs/Metiro.mp3"));
            return audio.play();
        }
        if (id === 4) {
            const audio = new Audio(require("./AudiosCs/lomatocuchi.wav"));
            return audio.play();
        }
        if (id === 5) {
            const audio = new Audio(require("./AudiosCs/holavengo.wav"));
            return audio.play();
        }
        if (id === 6) {
            const audio = new Audio(require("./AudiosCs/Team.wav"));
            return audio.play();
        }
    };


    return (
        <div className="Container min-h-screen bg-cover text-white">
            <header className="px-4">
                <nav className="w-full h-40 max-w-[1200px] m-auto flex justify-between items-center">
                    <div>
                        <Link to={"#"} className="hover:text-orange-600 font-bold text-2xl">
                            Csgo
                        </Link>
                    </div>
                    <ul className="gap-x-4 hidden sm:flex ">
                        <li><Link to={"#Home"} className="hover:text-orange-600 text-lg">Home</Link></li>
                        <li><Link to={"#About"} className="hover:text-orange-600 text-lg">About</Link></li>
                        <li><Link to={"#Contact"} className="hover:text-orange-600 text-lg">Contact</Link></li>
                        <li><Link to={"#Service"} className="hover:text-orange-600 text-lg">Service</Link></li>
                    </ul>
                    <Link to={"#start"} className="hidden sm:block hover:text-orange-600 bg-orange-500  px-4 py-2 border-none rounded-full ">Get Start</Link>
                    <div className="block sm:hidden">

                        {open ? <FaAngleDoubleDown className="hover:text-orange-600 text-lg cursor-pointer" onClick={() => setOpen(true ? false : true)} /> :
                            <FaBars className="hover:text-orange-600 text-lg cursor-pointer" onClick={() => setOpen(false ? false : true)} />}
                    </div>
                </nav>
                {/* mobile */}
                <div className={`${open ? "hidden" : "block"} drop absolute right-10 top-16 bg-t blur-[0.6px] rounded-xl w-[300px] h-[] sm:hidden  `}>
                    <ul className="gap-4  p-4 ">
                        <li className="flex justify-center items-center"><Link to={"#Home"} className="hover:text-orange-600 text-lg ">Home</Link></li>
                        <li className="flex justify-center items-center"><Link to={"#About"} className="hover:text-orange-600 text-lg">About</Link></li>
                        <li className="flex justify-center items-center"><Link to={"#Contact"} className="hover:text-orange-600 text-lg">Contact</Link></li>
                        <li className="flex justify-center items-center"><Link to={"#Service"} className="hover:text-orange-600 text-lg">Service</Link></li>
                        <li className=" flex justify-center  p-4 w-full"><Link to={"#start"} className="  hover:text-orange-600 bg-orange-500  px-4 py-2 border-none rounded-full  w-full text-center" >Get Start</Link></li>
                    </ul>
                </div>
            </header>

            <main>
                <div className={`${estilos.flexCenter} ${estilos.padding} gap-4 `}>

                    {/* <button onClick={handlePlayAudio}>Play Audio</button> */}
                    {list_Audios?.map((e) =>
                       
                            <div className="hover:shadow-blue-300">

                            <button  key={e.id} onClick={() => handlePlayAudio(e.id)} className={`bg-pistola rounded-xl bg-cover w-[200px] h-[200px] blur-[0.6px] opacity-70 ${estilos.flexCenter} hover:shadow-sky-900 hover:shadow-md hover:scale-105 hover:duration-500 hover:rounded-lg`} >
                                <span className={` text-2xl font-bolt `}>
                                {e.name}
                                </span>
                            </button>
                            </div>
                            
                    )
                    }
                </div>
            </main>
        </div>
    )
}

export default Csgo;