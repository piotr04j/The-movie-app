import React, { Component } from 'react';
import axios from 'axios';
import mdbAPI from '../config/keys';

class MovieList extends Component {

    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${mdbAPI.key}&language=en-US&page=1`).then( data => console.log(data.data)) 
    }

    render(){
        return (
            <div>
                Movie List
            </div>
        )
    }
}

export default MovieList;