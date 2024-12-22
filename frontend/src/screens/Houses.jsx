import { useEffect,useState } from "react";
import Product from "../components/Product";

import axios from "axios";
import { FaSpinner } from "react-icons/fa";

const Houses = () => {

  const [houses,setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
useEffect(() => {
  const fetchHouses = async () =>{
    
    try {
      
      const {data} = await axios.get('http://localhost:5000/houses');
      setHouses(data);
      setLoading(false)
    } catch (error) {
      console.error(error);
      
    }


  }
  
  fetchHouses();
}, [])

if (loading) {
  return <div>Loading...<FaSpinner className="text-4xl" /> </div>;
  
}


  return (
    <div className="p-6 bg-gray-100 ">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 ">
        Latest Houses for Rent
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {houses.map((house) => (
          <Product key={house.id} product={house} />
        ))}
      </div>
    </div>
  );
};

export default Houses;
