import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Homeinventory from '../Homeinven/Homeinventory';

const Inventory = () => {
    const [products , setproducts] = useState([]);
    useEffect(()=>{
        fetch('https://assaingment-11-server-.up.railway.app/product')
        .then(res=>res.json())
       .then(data => setproducts(data))
    },[])
    return (
        <div>
            <h2 className="text-center text-xl text-bold-700 text-blue-700 m-3">Inventory Product</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 m-8">
           {
               products.slice(0,6).map(product =><Homeinventory key={product._id}
               
               product={product}
               
               ></Homeinventory>)
           }
           </div>
           <div className="flex justify-center m-8">
                    <Link to="/inventory" className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">All Inventory Product</Link>
                    </div>
        </div>
    );
};

export default Inventory;