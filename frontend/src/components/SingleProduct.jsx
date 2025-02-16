import { Link, useParams } from "react-router-dom";
import Rating from '../components/Rating';
import { useGetHouseDetailsQuery } from "../slices/houseApiSlice";
import Loader from "./Loader";
import Message from "./Message";


const SingleProduct = () => {
  
  const { id } = useParams();

  const { data: product, error, isLoading: loading } = useGetHouseDetailsQuery(id);



  

  

  

  // Handle no product found
  if (!product) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          House not found
        </h1>
      </div>
    );
  }

  return (
    <>

    {loading ? (
      <div className="">
      <Loader />
    </div>
    ) :  error ? (
      <Message variant='danger'>Hello</Message>
    ) : (
      <div className="p-6 bg-gray-100 min-h-screen">
        
      <div className="my-4">
        <Link to={"/"}>
          <span className="p-2 border rounded bg-gray-400 text-white shadow-xl">Go Back</span>
        </Link>
      </div>
      <div className="max-w-7xl mx-auto bg-white grid grid-cols-2 rounded-lg shadow-md">
        <img
          src={product.image || "https://via.placeholder.com/600"} // Use placeholder image if no image exists
          alt={product.name}
          className="rounded-t-lg w-full h-96 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <div className="mt-3">
              {product.available ? (
                <span className="bg-green-500 p-2 border rounded text-white">Available</span>
              ) : (
                <span className="text-white bg-red-500 p-2 border rounded">Not Available</span>
              )}
            </div>
          </div>
          <p className="mt-2">
            <Rating value={product.rating || 0} text={`${product.numReviews || 0} reviews`} />
          </p>
          <p className="text-gray-500 mt-2">{product.location}</p>
          <p className="text-lg font-bold text-gray-800 mt-4">${product.price} / month</p>
          <div className="mt-6 flex items-center sm:gap-8 text-xs">
            {/* Area */}
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <p className="font-medium">{product.area} sq ft</p>
            </div>
            {/* Bathroom */}
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <p className="font-medium">{product.bathrooms} Bathrooms</p>
            </div>
            {/* Bedroom */}
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <p className="font-medium">{product.bedrooms} Bedrooms</p>
            </div>
          </div>
          <p className="text-gray-600 mt-4">{product.description}</p>
          {product.available && (
            <div className="mt-4">
              <button className="p-2 bg-blue-500 text-white border rounded">Add to cart</button>
            </div>
          )}
        </div>
      </div>
    </div>

    )}


    
    </>
    
  );
};

export default SingleProduct;
