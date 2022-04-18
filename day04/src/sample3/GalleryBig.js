import React from 'react';

const GalleryBig = ({catNum}) => {
    const {image, title} = catNum 
    return (
        <div className="bigimg">
            <img src={image} alt={title} />
            <h2>{title}</h2>
        </div>
    );
};

export default GalleryBig;