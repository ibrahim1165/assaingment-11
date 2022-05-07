import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.int';

const Myitem = () => {
   const [item , setitem] =useState([]);
   const [user] = useAuthState(auth);
   useEffect(()=>{
       const email = user.email
        const url= `http://localhost:5000/product?email=${email}`;
     fetch(url)
     .then(res=>res.json())
     .then(data=>setitem(data))
  
   })
    return (
        <div>
            <h2>My Item:{item.length}</h2>
        </div>
    );
};

export default Myitem;