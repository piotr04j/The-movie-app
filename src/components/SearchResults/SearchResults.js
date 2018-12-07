import React from 'react';
import { connect } from 'react-redux';
import ResultItem from './ResultItem';
import Note from './Note';
import Modal from '../Modal/Modal';
import ErrorBoundary from '../Hoc/ErrorBoundary';

export const SearchResults = (props) => {

    if(props.dataApi.total_results  <= 0){
        return ( 
            <div className="container my-5">
                <p className="font-weight-bold">Please try another search. No results matched your search.</p>
            </div>
        )
    }

    return (   
        <ErrorBoundary>    
            <div className="container">
                {props.loading && props.dataApi.total_results > 0 ? <Modal /> : null}
                {props.dataApi.total_results > 1 ? <Note /> : null}
                {props.dataApi.results.map( item => {   
                    return <ResultItem key={item.id} {...item} />
                    })
                }
            </div>
        </ErrorBoundary>
    )
}

const mapStateToProps = state => {
    return {
        dataApi: state.dataApi,
        loading: state.loading
    }
}

export default connect(mapStateToProps)(SearchResults);