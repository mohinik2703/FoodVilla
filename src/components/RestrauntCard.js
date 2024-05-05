import { IMG_CDN_URL } from "../config";

const RestrauntCard = ({
  id,
  name,
  cloudinaryImageId,
  locality,
  areaName,
  costForTwo,
  cuisines,
  avgRating,
}) => (
  <div className="card">
    <img className="img-card" src={IMG_CDN_URL + cloudinaryImageId}></img>
    <h2>{name}</h2>
    <h3>{cuisines.join(", ")}</h3>
    <h4>{avgRating}</h4>
  </div>
);

export default RestrauntCard;
