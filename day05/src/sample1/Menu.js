import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ data , onView }) => {
    return (
        <ul className="menu">
            {
                data.map( (item, index)=> <MenuItem key={index} item={item} onView={onView} />)
            }
        </ul>
    );
};

export default Menu;