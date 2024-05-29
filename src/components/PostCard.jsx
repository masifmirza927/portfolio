function PostCard(props) {
  return (
    <>
      <div className="card">
        <img src={props.cardimg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.cardtitle}</h5>
          <p className="card-text">{props.carddiscription}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

export default PostCard;
