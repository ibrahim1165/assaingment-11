import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Allinventory from '../Allinventory/Allinventory';
import useProduct from '../Useproduct/Useproduct';


const Managinv = () => {
    const [products,setproducts] = useProduct([]);
    const DeleteBtn=(id)=>{
        const proceed =window.confirm('Are you sure you want to delete')
        if(proceed){
            const url = `https://fierce-dawn-80523.herokuapp.com/product/${id}`
            fetch(url,{ 
                method: 'DELETE', 
            })
            .then(res=>res.json())
            .then(data =>{
                console.log(data)
            })
            const remaing = products.filter(product => product._id!==id) 
            setproducts(remaing)
        }
    }
    return (
        <div>
            <div className="text-center text-3xl text-bold-400 m-4 font-weight-bold" >Manage Inventory Product</div>
            <div className="flex justify-center m-8">
                    <Link to="/additem" className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">Add Product</Link>
                    </div>
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