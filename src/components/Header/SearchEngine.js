import React, { Component } from 'react'
import { connect } from 'react-redux';
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
    }

    render () {
        return (
            <form className="form-inline" onSubmit={this.handleSubmit}>
                <input className="form-control mr-sm-2" type="text" placeholder="Search..." value={this.state.formValue} aria-label="Search" onChange={this.handleInputValue} />
                <input className="btn btn-outline-success my-2 my-sm-0" type="submit" value="Search" />
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSearchedData: (data) => dispatch(fetchSearchedData(data))
    }
}

export default connect(null,mapDispatchToProps)(SearchEngine);

