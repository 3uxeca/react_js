import React, { useState } from 'react';
import Modal from './Modal';
import MovieList from './MovieList';
import MovieView from './MovieView';
// import dataList from '../assets/api/movie.json'
import data from '../assets/api/movie.json'
import './style.css'

const Movies = () => {
    // const [ data ,setData ] = useState( dataList )
    // const [ data ] = useState( dataList )
    const [ movie , setMovie ] = useState( data[0] )
    const [ isOpen  , setIsOpen ] = useState( false )

    const onOver  = ( id )  => {
        // setMovie( data[id-1] )
        //find / findIndex
        setMovie( data.find( item => item.rank  === id ))
    }
    const onOpen  = () => {
        setIsOpen( true )
    }

    return (
        <div className="gallery">            
            <MovieView movie={movie} onOpen={onOpen} />
            <MovieList data={data} onOver={onOver} />
            {
                isOpen &&  <Modal movie={movie} setIsOpen={setIsOpen} />
            }
           
        </div>
    );
};

export default Movies;