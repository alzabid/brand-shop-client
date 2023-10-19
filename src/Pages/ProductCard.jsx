/* eslint-disable react/prop-types */


const ProductCard = ({product,}) => {
    const { name, brand, price, photo, rating } =
      product;

      
    return (
      <div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src={photo}
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> {brand}</h2>
            <h2 className="card-title">{name}</h2>
            <p>Price: {price}$</p>
            <p>Rating: {rating}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductCard;