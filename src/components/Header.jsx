
import Navbar from "./Navbar";  
import bgImage from "../images/bg.jpg";
import HeroText from "./HeroText";

function Header() {
    return(
        <>
            <section id="header" style={{ backgroundImage: `url(${bgImage})`}}>
                <div className="container h-100">
                    <Navbar />
                    <div className="h-100 heroText ps-5">
                        <HeroText />  
                    </div>
                       
                </div>
            </section>

        </>
    )   
}

export default Header