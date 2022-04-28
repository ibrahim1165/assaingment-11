import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.int';
import { useAuthState } from 'react-firebase-hooks/auth';
import header from "../../img/header.png"
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)
    const SingOut =()=>{
        signOut(auth)
    }
    return (
        <header>
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                <p className="h-10 w-10 mr-2">
                    <img src={header} alt="" />
                </p>
                    <span className="font-semibold text-xl tracking-tight">Laptop Warehouse</span>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20"
                        xmlns="https://seekicon.com/free-icon-download/laptop_8.svg" ><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Home
                        </Link>
                        <Link to="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Examples
                        </Link>
                        <Link to="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                            Blog
                        </Link>
                    </div>
                    <div>
                       { user? <Link to="/" onClick={SingOut}>Logout</Link> : <Link to="/login" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Login</Link>
                       }
                    </div>
                </div>
            </nav>

        </header>
    );
};

export default Header;