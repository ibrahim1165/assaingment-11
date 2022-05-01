import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div class="p-4 bg-gray-700 h-48 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-700">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com" class="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link to="#" class="mr-4 hover:underline md:mr-6 ">About</Link>
        </li>
        <li>
            <Link to="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
        </li>
        <li>
            <Link to="#" class="mr-4 hover:underline md:mr-6">Licensing</Link>
        </li>
        <li>
            <Link to="#" class="hover:underline">Contact</Link>
        </li>
    </ul>
</div>
    );
};

export default Footer;