import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchSearchedData } from '../../store/actions';

export class SearchEngine extends Component {

    state = {
        formValue: ''
    }

    handleInputValue = (e) =>{
        this.setState({formValue: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.fetchSearchedData(this.state.formValue);
        this.setState({formValue: ''});
        this.props.history.push('/results');
    }

    render () {
        return (
            <form className="form-inline" onSubmit={this.handleSubmit}>
                <input className="form-control mr-sm-2" type="text" placeholder="Search..." min="3" value={this.state.formValue} aria-label="Search" onChange={this.handleInputValue} />
                <input className="btn btn-outline-success my-2 my-sm-0 btn-active-success" type="submit" value="Search" disabled={this.state.formValue.length > 4 ? false: true} />
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSearchedData: (data) => dispatch(fetchSearchedData(data))
    }
}

export default withRouter(connect(null,mapDispatchToProps)(SearchEngine));

