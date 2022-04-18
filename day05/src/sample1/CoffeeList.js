import React from 'react';
import CoffeeItem from './CoffeeItem';

const CoffeeList = ({ coffeeData }) => {
    return (
        <ul className="list">
            {
                coffeeData.map( item => <CoffeeItem  key={item.id} item={item} />)
            }
        </ul>
    );
};

export default CoffeeList;