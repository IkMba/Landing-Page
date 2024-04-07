function Card({ imgNo, feature, date }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={`/images/blog-${imgNo}.jpg`} alt="" />
      </div>
      <div className="card-details">
        <h4>Lorem ipsum dolor sit amet.</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsa
          sunt tempora sed sint dolore!
        </p>
        <div className="card-footer">
          <p>{date}</p>
          <p>{feature}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
