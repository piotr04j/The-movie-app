import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import SortBar from '../SortBar/SortBar';
import List from './List';
import Pagination from './Pagination';

class ListContainer extends Component {

    state = {
        dataAPI: [],
        lastPage: null,
        order: 'descending',
        sortBy: 'vote_average',
        totalPages: []
    }

    componentDidMount(){
        
        axios.get(`${this.props.url}${this.props.match.params.page}`)
            .then( movies => {
                this.setState({
                    dataAPI: movies.data.results,
                    lastPage: movies.data.total_pages
                });
                this.handleTotalPages();
            });
           
    };

    componentDidUpdate(prevProps, prevState){
      

        if(this.props.match.params.page !== prevProps.match.params.page){
            axios.get(`${this.props.url}${this.props.match.params.page}`)
            .then( movies => {
                this.setState({
                    dataAPI: movies.data.results
                });
               
            });
            this.handleTotalPages();
        }

        if(this.state.order !== prevState.order || this.state.sortBy !== prevState.sortBy ){
            this.handleSorting();
        }  
    };

    handleSorting = () => {
        let sortedDataAPI = [...this.state.dataAPI];
        if(this.state.order === 'ascending'){
            sortedDataAPI.sort((a, b) => a[this.state.sortBy] - (b[this.state.sortBy]));
        } else if( this.state.order === 'descending') {
            sortedDataAPI.sort((a, b) => b[this.state.sortBy] - a[this.state.sortBy]);
        }
        this.setState({ dataAPI : sortedDataAPI });
       
    };

    handleList = (formName, value) => {
        switch (formName) {
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

    handleTotalPages = () => {
        const currentPage = +this.props.match.params.page;
        const lastPage = this.state.lastPage;
        let pagesArr = [];
        if( currentPage > 2 && currentPage < lastPage - 1){
            for(let i = 0 ;i < 3;i++){
                pagesArr.push(i + currentPage -1);
            } 
        } else if ( currentPage === 1 || currentPage === 2 ){
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
        this.props.history.push(`${this.props.match.path.replace(':page','')}1`);
    };

    handleLastPage = () => {
        this.props.history.push(`${this.props.match.path.replace(':page','')}${this.state.lastPage}`);
    };

    handlePage = (page) => {
        this.props.history.push(`${this.props.match.path.replace(':page','')}${page}`)
        console.log(page)
    }

    render(){
        console.log(this.state.order)
        return (
            <div>
                <SortBar getOptionValue={ this.handleList} />
                <List list={this.state.dataAPI}/>
                <Pagination  
                    currentPage={this.props.match.params.page}
                    lastPage={this.state.lastPage}
                    totalPages={this.state.totalPages}
                    handleFirstPage = {this.handleFirstPage}
                    handleLastPage = {this.handleLastPage}
                    handlePage = {this.handlePage}
                 />
            </div>
        )
    }
}

export default withRouter(ListContainer);

