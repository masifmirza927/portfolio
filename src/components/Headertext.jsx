import Button from "./Button";

function Headertext() {
    
    return (
      <>
        <div className="headertext d-flex d">
          <h1 className="text-white fw-normal mb-3">I'm Muhammad Irfan</h1>
          <h4 className="text-white-50 fw-normal fs-4 mb-4">Full Stack Developer</h4>
          <p className="text-white fs-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Quas officiis dignissimos numquam, beatae odit non
            exercitationem!
            <br /> Quidem, illum excepturi?
          </p>
          <Button />
        </div>
      </>
    );
    
}


export default Headertext;