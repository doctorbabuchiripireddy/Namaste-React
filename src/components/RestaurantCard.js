const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="res-card">
      <img className="res-logo" alt="pic" src={"https:" + resData.imgId} />
      <h3>{resData.name} </h3>
      <h5> {resData.cuisines} </h5>
      <h4 className="rating">{resData.avgRating} star</h4>
      <h4>{resData.deliveryTime} min</h4>
    </div>
  );
};

export default RestaurantCard;
