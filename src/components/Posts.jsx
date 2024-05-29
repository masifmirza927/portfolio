import img1 from "../assets/images/credo_img_1.jpg";
import img2 from "../assets/images/img-4.jpg";
import img3 from "../assets/images/img-7.jpg";

import PostCard from "./PostCard";

function Posts(props) {
  let postdata = [
    {
      img: img1,
      title: "Why Photography Is Good For Business",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reprehenderit adipisci sed perferendis quia iure, aperiam ab?.",
    },
    {
      img: img2,
      title: "Why Photography Is Good For Business",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reprehenderit adipisci sed perferendis quia iure, aperiam ab?.",
    },
    {
      img: img3,
      title: "Why Photography Is Good For Business",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reprehenderit adipisci sed perferendis quia iure, aperiam ab?.",
    },
  ];
  return (
    <>
      <section id="Blog">
        <div className="container">
          <h2 className="text-center blog-heading">Blog Posts</h2>
          <div className="row">
            {postdata.map(function (carddata) {
              return (
                <>
                  <div className="col-md-4">
                    <PostCard
                      cardimg={carddata.img}
                      cardtitle={carddata.title}
                      carddiscription={carddata.discription}
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
export default Posts;
