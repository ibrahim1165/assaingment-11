import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.int';

const Myitem = () => {
   const [item , setitem] =useState([]);
   const [user] = useAuthState(auth);
   useEffect(()=>{
//    const email = user.email;
//   const url =`https://assaingment-11-server-.up.railway.app/product/${email}`
//   fetch(url,{
//       method: 'GET',
//   })
//   .then(res=>res.json())
//   .then(data =>{
//       console.log(data)
//   })

  
   },[user])
    return (
        <div>
           {item.map(items=> <div>
               <p>{items.name}</p>
           </div>)}
        </div>
    );
};

export default Myitem;