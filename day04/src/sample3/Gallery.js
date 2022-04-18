import React, { useState } from 'react';
import GalleryView from './GalleryView';
import GalleryText from './GalleryText';
import imgCat from '../assets/api/catData'

import './style.css'

const Gallery = () => {
    const [data , setData] = useState(imgCat)
    const [catNum , setCatNum ] = useState( data[0] );
    // const [catNum , setCatNum ] = useState( imgCat[0] );

    const onView = ( id )  => {
        // setCatNum( data[id-1] )
        setCatNum( data.find( item  => item.id === id ) )
        //  data.findIndex( item  => item.id === id ) 
        //  findIndex
    }

    return (
        <div className="wrap">
            <GalleryView data={data} catNum={catNum} onView={onView} />
            <GalleryText  catNum={catNum} />
        </div>
    );
};

export default Gallery;