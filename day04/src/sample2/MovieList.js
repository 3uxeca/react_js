import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({data, onDel }) => {
    return (
        <>
            { data.map( (item,index) => <MovieItem  key={index} item={item} 
                                         onDel={onDel} />   )}
        </>
    );
};

export default MovieList;