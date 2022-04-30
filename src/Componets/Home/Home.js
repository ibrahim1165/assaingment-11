import React from 'react';
import HomeDattils from '../HomeDettils/HomeDattils';
import Inventory from '../Inventiry/Inventory';
import Cerosel from './Cerosel';

const Home = () => {
    return (
        <div>
            <Cerosel></Cerosel>
           <HomeDattils></HomeDattils>
           <Inventory></Inventory>
        </div>
    );
};

export default Home;