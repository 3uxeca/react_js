import React from 'react';

const GalleryItem = ({item , onView }) => {
    const { image , id , title } = item 
    return (
        <li onClick={() => onView(id)}>
           <img src={image} alt={title} />
        </li>
    );
};

export default GalleryItem;