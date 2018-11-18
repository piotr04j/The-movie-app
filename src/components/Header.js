import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSearchedData } from '../store/actions';

class Header extends Component {

    state = {
        formValue: null
    }

    handleInputValue = (e) =>{
        const value = e.target.value;
        this.setState({formValue: value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.fetchSearchedData(this.state.formValue)
    }

    render () {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <NavLink activeStyle={{fontWeight: "bold"}} className="nav-link" exact to="/">Home<span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item active">
                                <NavLink activeStyle={{fontWeight: "bold"}} className="nav-link" to="/movies-list">Movies<span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item active">
                                <NavLink activeStyle={{fontWeight: "bold"}} className="nav-link" to="/random">TV series</NavLink>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            <form className="form-inline" onSubmit={this.handleSubmit}>
                                <input className="form-control mr-sm-2" type="text" placeholder="Search..." aria-label="Search" onChange={this.handleInputValue} />
                                <input className="btn btn-outline-success my-2 my-sm-0" type="submit" value="Search" />
                            </form>
                        </span>
                    </div>
                </div>
            </nav>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSearchedData: (data) => dispatch(fetchSearchedData(data))
    }
}

export default connect(null,mapDispatchToProps)(Header);
