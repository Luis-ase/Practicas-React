import "./Csgo.css"









function Csgo() {

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


    function handlePlayAudio(id:any) {
        if (id === 1) {
            const audio = new Audio(require("./AudiosCs/Wasa.wav"));
            audio.play();
        }
        if (id === 2) {
            const audio = new Audio(require("./AudiosCs/pimpam.mp3"));
            audio.play();
        }
        if (id === 3) {
            const audio = new Audio(require("./AudiosCs/Metiro.mp3"));
            audio.play();
        }
        if (id === 4) {
            const audio = new Audio(require("./AudiosCs/lomatocuchi.wav"));
            audio.play();
        }
        if (id === 5) {
            const audio = new Audio(require("./AudiosCs/holavengo.wav"));
            audio.play();
        }
        if (id === 6) {
            const audio = new Audio(require("./AudiosCs/Team.wav"));
            audio.play();
        }
    };


    return (
        <div className="Container min-h-screen bg-cover text-white">
            {/* <button onClick={handlePlayAudio}>Play Audio</button> */}
            {list_Audios?.map((e)=>
            <div>
                <button onClick={()=>handlePlayAudio(e.id)}>{e.name}</button>
            </div>
            )
                
            }
               
          
            
        </div>
    )
}

export default Csgo;