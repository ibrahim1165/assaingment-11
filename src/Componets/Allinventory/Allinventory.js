import React from 'react';
import { Link } from 'react-router-dom';

const Allinventory = ({ product}) => {
    const { name, price, Discreption, supplire, img } = product
    return (
        <div>
             <div class="flex justify-center mx-auto">
                <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <Link to="">
                        <img class="rounded-t-lg h-48 w-full" src={img} alt="" />
                    </Link>
                    <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">Name:{name}</h5>
                        <p><small>Price:${price}</small></p>
                        <p class="text-gray-700 text-base mb-4">Discreption: {Discreption}
                        </p>
                        <p className="m-2">supplire: {supplire}</p>
                        <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Update</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Allinventory;