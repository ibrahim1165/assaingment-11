import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const Update = () => {
    const { id } = useParams()
    const [user,setuser] = useState(id)
    const { register} = useForm();

    const handleDelevir= ()=>{
        const { quentity } = user;
      let newQuentity = parseFloat(quentity - 1);
        const newProduct = {...user,quentity: newQuentity};
        setuser(newProduct)
        const url = `http://localhost:5000/product${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(newQuentity),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data?.newQuentity);
                alert('update Quentity')
            })
            
    }
    const handleSubmit=e=>{
        e.preventDefault()
        const { quentity } = user;
       let newQuentity = parseFloat(quentity+1);
          const newProduct = {...user,quentity: newQuentity};
          setuser(newProduct)
    }
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data =>
                setuser(data))
    }, [])
    return (
        <div>
            <div className="flex justify-center m-12 mx-auto">
                <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                    <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={user.img} alt="" />
                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">Name:{user.name}</h5>
                        <p className="text-gray-600 text-xs">Price: {user.price}</p>
                        <p className="text-gray-700 text-base mb-4">
                            Discreption: {user.Discreption}
                        </p>
                        <p className="text-gray-600 text-xs">Quantity: {user.quentity}</p>
                        <p className="text-gray-600 text-xs">supplire: {user.supplire}</p>
                        <div>
                            <div className="flex space-x-2 justify-center">
                                <button onClick={handleDelevir}
                                    type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                >Deliver</button>
                            </div>
                            <div>
                                <form className="form-group mb-6 mt-6 w-48 mx-auto">
                                    <div className="form-group mb-6">
                                        <input type="number" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="quentity" {...register("quentity")} />
                                    </div>
                                    <input onClick={handleSubmit} type="submit" className="
                                     w-full
                                    px-6
                                    py-2.5
                                    bg-blue-600
                                    text-white
                                    font-medium
                                    text-xs
                                    leading-tight
                                    uppercase
                                    rounded
                                    shadow-md
                                    hover:bg-blue-700 hover:shadow-lg
                                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                    active:bg-blue-800 active:shadow-lg
                                    transition
                                    duration-150
                                    ease-in-out" value="Add" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Update;