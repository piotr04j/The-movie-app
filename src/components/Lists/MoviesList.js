import React from 'react';
import ListContainer from './List/ListContainer';
import mdbAPI from '../../config/keys';
import ErrorBoundary from '../Hoc/ErrorBoundary';


const MoviesList = () => {

    const url= `https://api.themoviedb.org/3/movie/top_rated?api_key=${mdbAPI.key}&language=en-US&page=`;
    return (
        <ErrorBoundary>
            <ListContainer url={url} />
        </ErrorBoundary>  
    )
}

export default  MoviesList;