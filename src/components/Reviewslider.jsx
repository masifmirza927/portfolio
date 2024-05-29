function Reviewslider() {
  return (
    <>
      <div
        id="carouselExampleDark"
        className="carousel carousel-white slide my-slider "
      >
        <h2 className="text-center pb-5 mb-5x fw-normal">
          What Client Are Sayings
        </h2>
        <div className="carousel-indicators d-none">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button t"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner ">
          <div className="carousel-item active" data-bs-interval={10000}>
            <p className="paragraf-size fs-5">
              <i class="ri-double-quotes-r ri-2x quits-icon"></i>
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequuntur tenetur eveniet odio aliquam atque facilis nemo
              placeat aperiam perspiciatis in blanditiis voluptatibus fugit sed
              delectus adipisci.
            </p>
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <p className="paragraf-size fs-5">
              <i class="ri-double-quotes-r ri-2x quits-icon"></i>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis at aspernatur sunt dolorum assumenda, exercitationem
              est repellendus? Tenetur perferendis impedit odit dignissimos,
              adipisci voluptas provident.
            </p>
          </div>
          <div className="carousel-item">
            <p className="paragraf-size fs-5">
              <i class="ri-double-quotes-r ri-2x quits-icon"></i>
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, doloribus ratione? Sequi nesciunt enim sapiente.
              Corporis omnis, reprehenderit et possimus soluta tempore odio? Cum
              quas ipsum accusantium eaque maiores.
            </p>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Reviewslider;
