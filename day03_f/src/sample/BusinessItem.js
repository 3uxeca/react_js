import React from 'react';

const BusinessItem = ({ item }) => {
    const { imgurl, text, title1, title2  } = item 
    return (
        <li>
            <a href="#">
                <div>
                    <img src={imgurl} alt="" />                    
                </div>
                <h3>{title1} <span>{title2}</span> </h3>
                <p> {text} </p>
            </a>
        </li>
    );
};

export default BusinessItem;