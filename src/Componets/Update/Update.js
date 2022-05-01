import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const {id} = useParams()
    const [user, setuser] = useState({})
    useEffect(()=>{
        const url=`http://localhost:5000/product/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>
            setuser(data))
    },[])
    return (
        <div>
             <div class="flex justify-center m-12 mx-auto">
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={user.img} alt="" />
    <div class="p-6 flex flex-col justify-start">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Name:{user.name}</h5>
      <p class="text-gray-600 text-xs">Price: {user.price}</p>
      <p class="text-gray-700 text-base mb-4">
          Discreption: {user.Discreption}
      </p>
      <p class="text-gray-600 text-xs">Quantity: {user.quenty}</p>
      <p class="text-gray-600 text-xs">supplire: {user.supplire}</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Update;