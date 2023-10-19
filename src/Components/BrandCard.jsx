/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";


const BrandCard = ({ element }) => {
  const { brand, img } = element;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${brand}`);
  };
  return (
    <div>
      <div
        onClick={handleClick}
        className="card card-compact bg-base-100 shadow-xl"
      >
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-semibold text-center">{brand}</h2>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;