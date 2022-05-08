import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.int';

const Myitem = () => {
   const [item , setitem] =useState([]);
   const [user] = useAuthState(auth);
   useEffect(()=>{
       const email = user.email;
        const url= `https://fierce-dawn-80523.herokuapp.com/product?email=${email}`;
     fetch(url)
     .then(res=>res.json())
     .then(data=>setitem(data))
  
   },[])
    return (
        <div>
           {item.map(items=> <div>
               <p>{items.name}</p>
           </div>)}
        </div>
    );
};

export default Myitem;