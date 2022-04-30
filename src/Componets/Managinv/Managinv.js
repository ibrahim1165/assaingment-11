import React, { useEffect, useState } from 'react';
import Allinventory from '../Allinventory/Allinventory';

const Managinv = () => {
    const [products,setproducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
        .then((response) =>response.json())
        .then(data=>setproducts(data))
    },[])
    return (
        <div>
            <div className="text-center text-2xl text-bold-400 m-4 " >All Leptop</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 m-8">
                {
                    products.map(product =><Allinventory
                    key={product.id}
                    product={product}
                    
                    ></Allinventory>)
                }
            </div>
        </div>
    );
};

export default Managinv;