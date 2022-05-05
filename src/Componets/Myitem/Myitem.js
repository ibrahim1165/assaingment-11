import React, { useEffect, useState } from 'react';

const Myitem = () => {
   const [item , setitem] =useState([]);
   useEffect(()=>{
        const url= `http://localhost:5000/myitem`;
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