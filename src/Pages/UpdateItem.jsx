import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";



const UpdateItem = () => {
    const loadedProduct = useLoaderData()
    const{_id, name,brand, category, price, details,rating, photo }= loadedProduct

  const handleUpdateProduct = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const category = form.category.value;
    const price = form.price.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const rating = form.rating.value;

    const newUpdateProduct = {
      name,
      brand,
      category,
      price,
      details,
      photo,
      rating,
    };
    console.log(newUpdateProduct);

    // send data to server
    fetch(`http://localhost:5000/updateProduct/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUpdateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          swal("Good job!", "successfully Update product!", "success");
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] px-6 md:px-10 lg:px-52 py-10">
      <h2 className="text-3xl text-center font-extrabold mb-5">
        Update Product
      </h2>
      <form onSubmit={handleUpdateProduct}>
        {/* product and brand name */}
        <div className="md:flex gap-4 mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={name}
                type="text"
                name="name"
                placeholder="Product Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={brand}
                type="text"
                name="brand"
                placeholder="Brand Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* Category and price */}
        <div className="md:flex gap-4 mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={category}
                type="text"
                name="category"
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={price}
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* details and rating */}
        <div className="md:flex gap-4 mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={details}
                type="text"
                name="details"
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={rating}
                type="text"
                name="rating"
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form Photo url row */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
              defaultValue={photo}
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className=" flex justify-center items-center mb-8">
          <input
            type="submit"
            value="Update"
            className="btn btn-outline w-44"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateItem;
