

import Navebar from "./Navebar";
import bgimg from "../assets/images/credo_img_1.jpg"
import Headertext from "./Headertext";

    function Head() {
    


    
    return (
      <>
        <section id="header" style={{backgroundImage:`url(${bgimg})`}}>
          <div className="container">
            <Navebar />
            <Headertext/>
          </div>
        </section>
      </>
    );
}



export default Head;