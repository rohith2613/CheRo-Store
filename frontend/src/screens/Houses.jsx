
import { FaSpinner } from "react-icons/fa";
import Product from "../components/Product";
import { useGetHousesQuery } from "../slices/houseApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";




const Houses = () => {
  const { data: houses, error, isLoading } = useGetHousesQuery();

  




  return (
    <>

    {isLoading ? (
      <div>
        <Loader />
      </div>
    ) : error ? (
      // <div>Error: {error?.data?.message || error}</div>
      <Message variant='danger'>{error?.data?.message || error}</Message>

    ) :(
<div className="p-6 bg-gray-100 ">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 ">
        Latest Houses for Rent
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {houses.map((house) => (
          <Product key={house._id} product={house} />
        ))}
      </div>
    </div>
    )}


    </>
    
  );
};

export default Houses;
