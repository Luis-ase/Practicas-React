
import { Link } from "react-router-dom";


function Home() {
  


    return (
      <div >
        <h2 className="text-3xl font-bold underline">HEllo</h2>
          {/* lista */}
          <ol>
            <Link to={"/Project/Bateri"}><li>Bateria</li></Link>
            <Link to={"/Project/CodigoQR"}><li>Codigo QR</li></Link>
            <Link to={"/Project/FormInt"}><li>Formulario Interactivo </li></Link>
            
          </ol>
      </div>
    );
  }
  
  export default Home;