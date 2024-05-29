


function Aboutprogressa() {
    
    return (
      <>
        <div className="progress1 mb-4">
          <h5>HTML</h5>
          <div
            className="progress"
            role="progressbar"
            aria-label="Animated striped example"
            aria-valuenow={75}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              style={{ width: "80%" }}
            />
          </div>
        </div>
        <div className="progress1 mb-4">
          <h5>CSS</h5>
          <div
            className="progress"
            role="progressbar"
            aria-label="Animated striped example"
            aria-valuenow={75}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
              style={{ width: "85%" }}
            />
          </div>
        </div>
        <div className="progress1 mb-4">
          <h5>Bootstrap</h5>
          <div
            className="progress"
            role="progressbar"
            aria-label="Animated striped example"
            aria-valuenow={75}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-success"
              style={{ width: "80%" }}
            />
          </div>
        </div>
        <div className="progress1 mb-4">
          <h5>React JS</h5>
          <div
            className="progress"
            role="progressbar"
            aria-label="Animated striped example"
            aria-valuenow={75}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
              style={{ width: "50%" }}
            />
          </div>
        </div>
      </>
    );
}



export default Aboutprogressa;