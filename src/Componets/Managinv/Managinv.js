import React, { useEffect, useState } from 'react';
import Allinventory from '../Allinventory/Allinventory';
import useProduct from '../Useproduct/Useproduct';


const Managinv = () => {
    const [products,setproducts] = useProduct();
    const DeleteBtn=(id)=>{
        const proceed =window.confirm('Are you sure you want to delete')
        if(proceed){
            const url = `http://localhost:5000/product/${id}`
            fetch(url,{ 
                method: 'DELETE', 
            })
            .then(res=>res.json())
            .then(data =>{
            })
            const remaing = products.filter(product => product._id!==id) 
            setproducts(remaing)
        }
    }
    return (
        <div>
            <div className="text-center text-2xl text-bold-400 m-4 " >All Leptop</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 m-8">
                {
                    products.map(product =><Allinventory
                    key={product.id}
                    product={product}
                    DeleteBtn={DeleteBtn}
                  
                    ></Allinventory>)
                }
            </div>
        </div>
    );
};

export default Managinv;