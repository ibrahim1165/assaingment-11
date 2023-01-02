import { useEffect, useState } from "react";

const useProduct =()=>{
    const [products , setproducts] = useState([]);
    useEffect(()=>{
        fetch('https://assaingment-11-server-.up.railway.app/product')
        .then(res=>res.json())
       .then(data => setproducts(data))
    },[products]);
    return [products ,setproducts]
}
export default useProduct;