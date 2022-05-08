import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="p-4 bg-gray-700 h-48 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-700">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://laptop-warehouse-f81ef.web.app/" className="hover:underline">Laptop Warehouse
™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link to="/inventory" className="mr-4 hover:text-orange-500 md:mr-6 ">Inventory</Link>
        </li>
        <li>
            <Link to="/" className="mr-4 hover:text-orange-500 md:mr-6">Home</Link>
        </li>
        <li>
            <Link to="/login" className="mr-4 hover:text-orange-500 md:mr-6">Login</Link>
        </li>
        <li>
            <Link to="/additem" className="hover:text-orange-500">Add Item</Link>
        </li>
    </ul>
</div>
    );
};

export default Footer;