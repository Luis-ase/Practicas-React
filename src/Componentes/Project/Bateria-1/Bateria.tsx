import "./Bateria.css"

function Bateri() {
 
  

  
  
  
  return (
    <div className={`BG min-h-screen bg-cover text-white`} >
      <div className={` flex justify-center`}>
        <h3 className="text-3xl font-bold  text-white">Bateria</h3>
      </div>
      <button onClick={()=> console.log("hola")}>play</button>
    </div>
  );
}

export default Bateri;