
import Navbar from "./Navbar"
import bg from "../images/bg.jpg"

function Header() {
    return(
        <>
            <section id="header" style={{ backgroundImage:`url(${bg})` }}>
                <div className="container">
                    <Navbar />
                </div>
            </section>

        </>
    )   
}

export default Header