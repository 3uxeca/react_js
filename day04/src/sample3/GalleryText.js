import React from 'react';

const GalleryText = ({catNum}) => {
    const { title , desc } = catNum

    return (
        <div className="text">
            <strong> {title} </strong>
            <p>{desc} </p>
        </div>
    );
};

export default GalleryText;