import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import mdbAPI from '../../config/keys';
import ResultItem from './ResultItem';
import Note from './Note';


class SearchResults extends Component {

    state = {
        lastPage: null,
        dataAPI: []
    }

    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${mdbAPI.key}&language=en-US&query=${this.props.query}&page=1&include_adult=false`)
            .then( res => {
                this.setState({dataAPI: res.data.results, lastPage: res.data.total_pages});
            });  
    }

    componentDidUpdate(prevProps){
        if(this.props.query !== prevProps.query ){
            axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${mdbAPI.key}&language=en-US&query=${this.props.query}&page=1&include_adult=false`)
            .then( res => {
                this.setState({dataAPI: res.data.results, lastPage: res.data.total_pages});
            });  
        }
    }
     

    render () {
   
        if(this.state.dataAPI.length === 0){
            return (
                <div className="container my-5">
                    <p className="font-weight-bold">Please try another search. No results matched your search.</p>
                </div>
            )
        }
      
        return (       
            <div className="container">
                {this.state.lastPage > 1 ? <Note /> : null}
                {this.state.dataAPI.map( item => {   
                    return <ResultItem key={item.id} {...item} />
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        query: state.query
    }
}

export default connect(mapStateToProps)(SearchResults);