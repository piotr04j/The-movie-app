import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import mdbAPI from '../../config/keys';


class SearchResults extends Component {

    state = {
        lastPage: null,
        dataAPI: []
    }

    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${mdbAPI.key}&language=en-US&query=${this.props.query}&page=1&include_adult=false`)
            .then( res => {
                console.log(res.data)
            });
        
    }

    render () {
        if(this.state.dataAPI.length === 0){
            return (
                <div className="container my-5">
                    <p>Please try another search.No images matched your search.</p>
                </div>
            )
        }
        return (
            <div>
                
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