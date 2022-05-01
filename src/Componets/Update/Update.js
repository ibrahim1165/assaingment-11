import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const {id} = useParams()
    const [user,setuser] = useState({})
    useEffect(()=>{
        const url =`http://localhost:5000/product/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setuser(data))
    },[])
    return (
        <div>
            <h2>Update user:{user.id}</h2>
        </div>
    );
};

export default Update;