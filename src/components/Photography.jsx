import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import img1 from "../assets/images/img_1.jpg";
import img2 from "../assets//images/img-2.jpg";
import img3 from "../assets/images/img-3.jpg";
import img4 from "../assets/images/img-4.jpg";
import img5 from "../assets/images/img_5.jpg";
import img6 from "../assets/images/img-6.jpg";
import img7 from "../assets/images/img-7.jpg";
import img8 from "../assets/images/img_8.jpg";
import img9 from "../assets/images/img_9.jpg";
import img10 from "../assets/images/img_10.jpg";

function Photography() {
  // let imges = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  return (
    <>
      <section className="photography">
        <LightGallery
          onInit={() => { }}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
        >
          <a href={img1}>
            <img alt="img1" src={img1} />
          </a>
          <a href={img2}>
            <img alt="img1" src={img2} />
          </a>
        </LightGallery>


        {/* <div className="container">
          <h2 className="mt-5 text-center mb-5 fw-normal">My Photography</h2>
          <div className="row ">
          

            <div className="col-md-4">
              <img className="img-fluid" src={img1} alt="" />
            </div>
            <div className="col-md-4">
              {" "}
              <img className="img-fluid" src={img2} alt="" />
            </div>
            <div className="col-md-4">
              <img className="img-fluid" src={img3} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <img
                className="img-fluid position-relative img6-position"
                src={img4}
                alt=""
              />
            </div>
            <div className="col-md-4">
              <img
                className="img-fluid position-relative top-5 img-position"
                src={img5}
                alt=""
              />
            </div>
            <div className="col-md-4">
              <img
                className="img-fluid position-relative img6-position"
                src={img6}
                alt=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <img
                className="img-fluid position-relative img7-position"
                src={img7}
                alt=""
              />
            </div>
            <div className="col-md-4">
              <img
                className="img-fluid position-relative img8-position"
                src={img8}
                alt=""
              />
            </div>
            <div className="col-md-4">
              {" "}
              <img
                className="img-fluid position-relative img9-position"
                src={img9}
                alt=""
              />
            </div>
            <div className="col-md-4">
              <img
                className="img-fluid position-relative img10-position"
                src={img10}
                alt=""
              />
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
}

export default Photography;
