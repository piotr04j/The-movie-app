import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import mdbAPI from '../../config/keys';
import ResultItem from './ResultItem';
import Note from './Note';
import Modal from '../Modal/Modal';
import ErrorBoundary from '../Hoc/ErrorBoundary';

export class SearchResults extends Component {

    state = {
        dataAPI: [],
        totalResult: -1,
        loading: true
    }

    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${mdbAPI.key}&language=en-US&query=${this.props.query}&page=1&include_adult=false`)
            .then( res => {
                this.setState({dataAPI: res.data.results, totalResult: res.data.total_results, loading: false});         
            }).catch( err => {
                throw new Error('DB problem connection.');
            });  
    }

    componentDidUpdate(prevProps){
       
        if(this.props.query !== prevProps.query ){
            this.setState({ loading: true});
            axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${mdbAPI.key}&language=en-US&query=${this.props.query}&page=1&include_adult=false`)
            .then( res => {
                this.setState({dataAPI: res.data.results, totalResult: res.data.total_results, loading: false});
            }).catch( err => {
                throw new Error('DB problem connection.');
            });
        }
    }
     

    render () {
       
        if(this.state.totalResult === 0){
            return (
                <ErrorBoundary>
                    <div className="container my-5">
                        {this.state.loading ? <Modal /> : null}
                        <p className="font-weight-bold">Please try another search. No results matched your search.</p>
                    </div>
                </ErrorBoundary>
            )
        }
      
        return (   
            <ErrorBoundary>    
                <div className="container">
                    {this.state.loading ? <Modal /> : null}
                    {this.state.totalResult > 1 ? <Note /> : null}
                    {this.state.dataAPI.map( item => {   
                        return <ResultItem key={item.id} {...item} />
                        })
                    }
                </div>
            </ErrorBoundary>
        )
    }
}

const mapStateToProps = state => {
    return {
        query: state.query
    }
}

export default connect(mapStateToProps)(SearchResults);