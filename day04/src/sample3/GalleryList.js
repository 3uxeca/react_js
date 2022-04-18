import React from 'react';
import GalleryItem from './GalleryItem';

const GalleryList = ({ data , onView}) => {
    return (
        <ul className="list">
            {
                data.map( (item , index) => <GalleryItem key={index} item={item} onView={onView} />)
            }
        </ul>
    );
};

export default GalleryList;