import Servicescard from "./Servicescard";


function Services() {
  let servicescarddata = [
    {
      title: "Wedding",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aperiam repudiandae quis ipsa quod, reprehenderit iusto laudantium.",
      icon: <i class="ri-goblet-fill ri-xl"></i>,
    },
    {
      title: "Events",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aperiam repudiandae quis ipsa quod, reprehenderit iusto laudantium.",
      icon: <i class="ri-vidicon-fill ri-xl"></i>,
    },
    {
      title: "Conferences",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aperiam repudiandae quis ipsa quod, reprehenderit iusto laudantium.",
      icon: <i class="ri-team-fill ri-xl"></i>,
    },
    {
      title: "Culture",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aperiam repudiandae quis ipsa quod, reprehenderit iusto laudantium.",
      icon: <i class="ri-vuejs-fill ri-xl"></i>,
    },
  ];

  return (
    <>
      <div className="servicessection">
        <div className="container">
                  <h2 className="text-center mt-5 fw-normal mb-5">Services</h2>
                  <div className="row">
                      {
                          servicescarddata.map(function (carddata) {
                              return (
                                  <>
                                      <div className="col-md-6">
                                          <Servicescard  title= {carddata.title} discription= {carddata.discription} icon= {carddata.icon}/>
                                      </div>
                                 
                                </>
                              );
                          })
                      }
                  </div>
        </div>
      </div>
    </>
  );
}

export default Services;
