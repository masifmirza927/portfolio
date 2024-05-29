
import Abouttext from "./Abouttext";

function About() {
    return (
      <>
        <section className="aboutsection" id="About">
          <div className="container">
            <h2 className="mt-5">About Me</h2>
            <div className="row  mt-5">
              <Abouttext />
            </div>
          </div>
        </section>
      </>
    );
}


export default About;
