import React from 'react';

const CoffeeItem = ({ item }) => {
    const { id , img , name , price, title , desc } = item 
    return (
        <li>
            <img src={img} alt="" />
            <h2>{name} </h2>
            <h3>{title}</h3>
            <p>가격:{ price} </p>
            <p>정보:{desc} </p>
        </li>
    );
};

export default CoffeeItem;