import React, { useState } from 'react';
import MovieList from './MovieList';
import datalist  from '../assets/api/cat'
import './style.css'

const Movie = () => {
    const [data , setData] = useState( datalist )

    const onDel = (id)  => {      
        setData( data.filter( item  => item.no !== id ))
    }

    return (
        <div className="wrap">
             <MovieList data={data} onDel={onDel} />   
        </div>
    );
};

export default Movie;