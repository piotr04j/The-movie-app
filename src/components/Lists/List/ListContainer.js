import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import SortBar from './SortBar/SortBar';
import List from './List';
import Pagination from './Pagination';
import Modal from '../../Modal/Modal';

export class ListContainer extends Component {

    state = {
        dataAPI: [],
        lastPage: null,
        order: 'descending',
        totalPages: [],
        loading: true
    }

    componentDidMount(){   //get initial data
       this.getInitialData().then( movies => {
                this.setState({
                    dataAPI: movies.data.results,
                    lastPage: movies.data.total_pages,
                    loading: false
                });
            }).catch( err => {
                throw new Error('DB problem connection.');
            });
           
            this.handlePagination();//set initial pagination     
    };

    componentDidUpdate(prevProps, prevState){//if user changes page or order items set new order and pagination
        if(this.props.match.params.page !== prevProps.match.params.page || this.state.order !== prevState.order){
          this.handleSorting(this.getUpdatedData);// get new data
          this.handlePagination();
        }
    };


    getInitialData = () => {
        return axios.get(`${this.props.url}${this.props.match.params.page}`);
    }

    handleSetOrder = (value) => { //get sort value from Sort Component
        this.setState({ order: value});
    }
    
    handleSorting =  async (getData) => { // set items order 
        const movies = await getData();
        if(this.state.order === 'ascending'){ //if order = ascending get data from the end of the API 
            movies.data.results.sort((a, b) => a.vote_average - b.vote_average); //sort data
            this.setState({  dataAPI : movies.data.results  }); //set new array of items
        } else if( this.state.order === 'descending') {
            movies.data.results.sort((a, b) => b.vote_average - a.vote_average);
            this.setState({  dataAPI :  movies.data.results  });
        }
    };
    
    getUpdatedData = async () => {//get and return new item array
        this.setState({loading: true})
        if(this.state.order === 'ascending'){
            try {
                this.setState({loading: false})
                return await axios.get(`${this.props.url}${(this.state.lastPage + 1 ) - this.props.match.params.page}`);
            } catch {
                throw new Error('DB problem connection.');
            }
        }
        try {
            this.setState({loading: false})
            return await axios.get(`${this.props.url}${this.props.match.params.page}`);
        } catch {
            throw new Error('DB problem connection.');
        }
        
    }

    handlePagination = () => { //set pagination
        let currentPage = +this.props.match.params.page;// correction data type to number
        let lastPage = this.state.lastPage;
        let pagesArr = [];
        if( currentPage >= 3 && currentPage < lastPage - 2){ //if user chooses page greater than 2 
            for(let i = 1 ;i <= 5;i++){                      //or if user chooses page smaller than page - 2 from the end of array 
                pagesArr.push(currentPage-3+i);
            } 
        } else if ( currentPage === 1 || currentPage === 2  || currentPage === 3){//if user chooses page 1 or 2
            for(let i = 1 ;i <= 5;i++){
                pagesArr.push(i);
            } 
        } else {
            for(let i = 5; i >= 1 ;i--){//if user chooses page from the end of or from the end of array -1
                pagesArr.push(lastPage - i +1);
            } 
        }
        this.setState({totalPages: pagesArr}); //set new items array
    };

    handleFirstPage = () => {//show first page and set pagiantion
        this.props.history.push(`${this.props.match.path.replace(':page','')}1`);
        this.handlePagination();
    };

    handleLastPage = () => {//show last page and set pagiantion
        this.props.history.push(`${this.props.match.path.replace(':page','')}${this.state.lastPage}`);
        this.handlePagination();
    };

    handlePage = (page) => {//show page and set pagiantion
        this.props.history.push(`${this.props.match.path.replace(':page','')}${page}`)
        this.handlePagination();
    }

    render(){
        return (
            <div>
                {this.state.loading ===true ? <Modal /> : null}
                <SortBar handleSetOrder={this.handleSetOrder} />
                <List list={this.state.dataAPI} currentPage={this.props.match.params.page}/>
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