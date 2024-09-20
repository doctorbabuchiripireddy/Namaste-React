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

/*export const withPromotedLabel = () => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};*/

export default RestaurantCard;
