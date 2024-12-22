import { Link, useParams } from "react-router-dom";

import Rating from '../components/Rating'
import axios from "axios";
import { useEffect, useState } from "react";

const SingleProduct = () => {
  const [product ,setProduct] = useState({});
  
  const { id } = useParams();

  useEffect(() => {
    console.log("Fetched ID:", id); // Debugging the id
    const fetchHouse = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/houses/${parseInt(id)}`);
        console.log("Fetched house data:", data); // Debugging the response
        setProduct(data);
      } catch (error) {
        console.error("Error fetching house details:", error);
      }
    };
    
    fetchHouse();
  }, [id]);
  
 
  
  
  

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
    <div className="p-6 bg-gray-100  min-h-screen">
      <div className="my-4">
        <Link to={"/"}>
        <span className="p-2 border rounded bg-gray-400 text-white shadow-xl">Go Back</span>
        </Link>
      </div>
      <div className="max-w-7xl mx-auto bg-white grid grid-cols-2  rounded-lg shadow-md">
        <img
          src={"https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"}
          alt={product.name}
          className="rounded-t-lg w-full h-96 object-cover"
        />
        <div className="p-6">
         <div className="flex items-center justify-between">
         <h1 className="text-3xl font-bold text-gray-800 ">
            {product.name}
          </h1>
         <div className="mt-3">
            {product.available === true ? 
          <span className="bg-green-500 p-2 border rounded text-white">Available</span> :
          <span className="text-white bg-red-500 p-2 border rounded">Not Available</span>  
          }
          </div>
         </div>
         
          <p className="mt-2"> <Rating value={product.rating} text={product.numReviews} /> </p>
          
          
          <p className="text-gray-500  mt-2">
            {product.location}
          </p>
          <p className="text-lg font-bold text-gray-800  mt-4">
            ${product.price} / month
          </p>
          <div className="mt-6 flex items-center sm gap-8 text-xs">
      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <svg
          className="size-4 text-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
          />
        </svg>

        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Area</p>

          <p className="font-medium">{product.area}</p>
        </div>
      </div>

      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <svg
          className="size-4 text-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>

        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Bathroom</p>

          <p className="font-medium">{product.bathrooms} Bathrooms</p>
        </div>
      </div>

      <div className="sm:inline-flex  sm:shrink-0 sm:items-center sm:gap-2">
        <svg
          className="size-4 text-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>

        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Bedroom</p>

          <p className="font-medium">{product.bedrooms} Bedrooms</p>
        </div>
      </div>
    </div>
          <p className="text-gray-600  mt-4">
            {product.description}
          </p>

          

          <div className="mt-4">
            {product.available && <span className="p-2 bg-blue-500 text-white border rounded border-white">Add to cart</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
