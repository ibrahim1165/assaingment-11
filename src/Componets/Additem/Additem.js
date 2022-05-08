import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.int';

const Additem = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = data => {
        const added ={
            email:user.email
        }
        const url = `https://fierce-dawn-80523.herokuapp.com/product?/${added}`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);

            })
    }
    return (
        <div className="">
            <h2 className="text-center m-4 mt-4 d-block text-2xl text-bold ">Please add a Product</h2>
            <div className="bg-red-300 block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto m-12">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-6">
                        <input type="text" className="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                            placeholder="Name"  {...register("name", { required: true, maxLength: 20 })} />
                    </div>
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  placeholder="price" {...register('price')} />
                    </div>
                    <div className="form-group mb-6">
                        <input type="text" className="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Photo URL" {...register("img")} />
                    </div>
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="quenty" {...register("quentity")} />
                    </div>
                    <div className="form-group mb-6">
                        <input type="Name" className="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="supplire" {...register("supplire")} />
                    </div>

                    <div className="form-group mb-6">
                        <textarea
                            className="
                                form-control
                                block
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
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="text"
                            rows="3"
                            placeholder="Discreption" {...register('Discreption')}
                        ></textarea>
                    </div>
                    <div className="form-group form-check text-center mb-6">
                    </div>
                 
                 <input type="submit"  className="
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
    );
};

export default Additem;