import { useEffect, useState } from "react";

const useProduct =()=>{
    const [products , setproducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(res=>res.json())
       .then(data => setproducts(data))
    },[products]);
    return [products ,setproducts]
}
export default useProduct;