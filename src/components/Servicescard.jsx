

function Servicescard(props) {
    
    return (
      <>
        <section>
          <div className="card mb-3 border-0 px-4 mycard" >
            <div className="row g-0 align-items-center">
              <div className="col-md-2 p-4 cardicon">{props.icon}</div>
              <div className="col-md-10">
                <div className="card-body">
                  <h5 className="card-title">{props.title}</h5>
                  <p className="card-text">{props.discription}</p>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}


export default Servicescard
