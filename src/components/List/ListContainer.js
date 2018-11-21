import React, { Component } from 'react';
import axios from 'axios';
import mdbAPI from '../../config/keys';
import SortBar from '../SortBar/SortBar';
import List from './List';
import Pagination from './Pagination';

class MoviesListContainer extends Component {

    state = {
        dataAPI: [],
        lastPage: null,
        order: 'descending',
        sortBy: 'vote_average',
        whatCheck: 'movie',
        currentPage: 1,
        totalPages: [1,2,3]
    }

    componentDidMount(){
        //get inital movies list
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${mdbAPI.key}&language=en-US&page=1`)
            .then( movies => {
                this.setState({
                    dataAPI: movies.data.results,
                    lastPage: movies.data.total_pages
                });
            });
        
    };

    componentDidUpdate(prevProps, prevState){

        //chandle sorting
        if(this.state.order !== prevState.order || this.state.sortBy !== prevState.sortBy ){
            this.handleSorting(this.state.order,this.state.sortBy,this.state.dataAPI)
        }  


        //get movies or tv shows list
        if(this.state.whatCheck !== prevState.whatCheck){
           
            axios.get(`https://api.themoviedb.org/3/${this.state.whatCheck}/top_rated?api_key=${mdbAPI.key}&language=en-US&page=$1`)
            .then( movies => {
                this.setState({
                    dataAPI: movies.data.results,
                    lastPage: movies.data.total_pages,
                    order: 'descending',
                    currentPage: 1
                }) 
            });
            this.handleSorting(this.state.order,this.state.sortBy,this.state.dataAPI)
            this.handleCurrentPage();
        }
    };

    handleSorting = (order,sortby,arr) => {

        let sortedDataAPI = [...arr];
        if(order === 'ascending'){
            sortedDataAPI.sort((a, b) => a[sortby] - (b[sortby]));
        } else if( order === 'descending') {
            sortedDataAPI.sort((a, b) => b[sortby] - a[sortby]);
        }

        this.setState({dataAPI: sortedDataAPI})
    };

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

    handleCurrentPage = () =>{
        const currentPage = this.state.currentPage;
        const lastPage = this.state.lastPage;
        let pagesArr = [];
        if( currentPage > 1 && currentPage < lastPage -1){
            for(let i = 0 ;i < 3;i++){
                pagesArr.push(i + currentPage);
            } 
        } else if ( currentPage === 1){
            for(let i = 1 ;i <= 3;i++){
                pagesArr.push(i);
            } 
        } else {
            for(let i = 2; i >= 0 ;i--){
                pagesArr.push(lastPage - i);
            } 
        }
       
        this.setState({totalPages: pagesArr});
    };

    handleFirstPage = () => {
        this.setState({currentPage: 1});
    };

    handleLastPage = () => {
        const lastPage = this.state.lastPage;
        this.setState({currentPage: lastPage});
    };

    render(){
        return (
            <div>
                <SortBar getOptionValue={ this.handleList} sorting={this.state.order} />
                <List list={this.state.dataAPI}/>
                <Pagination  
                    currentPage={this.state.currentPage}
                    lastPage={this.state.lastPage}
                    totalPages={this.state.totalPages}
                    handleFirstPage = {this.handleFirstPage}
                    handleLastPage = {this.handleLastPage}
                 />
            </div>
        )
    }
}

export default MoviesListContainer;