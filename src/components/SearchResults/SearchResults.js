import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResultItem from './ResultItem';
import Note from './Note';
import Modal from '../Modal/Modal';
import ErrorBoundary from '../Hoc/ErrorBoundary';

export class SearchResults extends Component {

    state = {
        loading: false
    }

    render () {
        if(this.props.dataApi.total_results === 0){
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
                    {this.props.dataApi.total_results > 1 ? <Note /> : null}
                    {this.props.dataApi.results.map( item => {   
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
        dataApi: state.dataApi
    }
}

export default connect(mapStateToProps)(SearchResults);
