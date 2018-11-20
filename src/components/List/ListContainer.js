import React, { Component } from 'react';
import axios from 'axios';
import mdbAPI from '../../config/keys';
import SortBar from '../SortBar/SortBar';
import List from './List';

class MoviesListContainer extends Component {

    state = {
        dataAPI: [],
        total_pages: null,
        order: 'descending',
        sortBy: 'vote_average',
        whatCheck: 'movie'
    }

    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${mdbAPI.key}&language=en-US&page=1`)
            .then( movies => {
                this.setState({
                    dataAPI: movies.data.results,
                    total_pages: movies.data.total_pages
                }) 
            });
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.order !== prevState.order || this.state.sortBy !== prevState.sortBy ){
            this.handleSorting(this.state.order,this.state.sortBy,this.state.dataAPI)
        }  
        if(this.state.whatCheck !== prevState.whatCheck){
            axios.get(`https://api.themoviedb.org/3/${this.state.whatCheck}/top_rated?api_key=${mdbAPI.key}&language=en-US&page=1`)
                .then( movies => {
                    this.setState({
                        dataAPI: movies.data.results,
                        total_pages: movies.data.total_pages
                    }) 
                });
        }
    }

    handleSorting = (order,sortby,arr) => {

        let sortedDataAPI = [...arr];
        if(order === 'ascending'){
            sortedDataAPI.sort((a, b) => a[sortby] - (b[sortby]));
        } else if( order === 'descending') {
            sortedDataAPI.sort((a, b) => b[sortby] - a[sortby]);
        }

        this.setState({dataAPI: sortedDataAPI})
    }

    handleList = (formName, value) => {
        switch (formName) {
            case 'Check': 
                this.setState({whatCheck: value });
                break;
            case 'Sort by': 
                this.setState({sortBy: value });
                break;
            case 'Order': 
                this.setState({order: value });
                break;
            default:
                return 0
        }       
    };

    render(){
        console.log(this.state)
        return (
            <div>
                <SortBar getOptionValue={ this.handleList} />
                <List list={this.state.dataAPI}/>
            </div>
        )
    }
}

export default MoviesListContainer;