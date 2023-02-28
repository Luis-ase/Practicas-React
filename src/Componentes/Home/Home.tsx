
import { Link } from "react-router-dom";


function Home() {
  


    return (
      <div >
        <h2 className="text-3xl font-bold underline">HEllo</h2>
          {/* lista */}
          <ol>
            <Link to={"/Project/Bateri"}><li>Bateria</li></Link>
            <Link to={"/"}><li>Projecto 2</li></Link>
            <Link to={"/"}><li>Projecto 3</li></Link>
            
            
          </ol>
      </div>
    );
  }
  
  export default Home;