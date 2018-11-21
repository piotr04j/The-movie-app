import React from 'react';
import ListContainer from './ListContainer';
import mdbAPI from '../../config/keys';

const MoviesList = () => {

    const url= `https://api.themoviedb.org/3/movie/top_rated?api_key=${mdbAPI.key}&language=en-US&page=`

    return (
        <ListContainer url={url} />
    )
}

export default MoviesList;