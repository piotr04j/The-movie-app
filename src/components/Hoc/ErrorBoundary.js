import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch(error,info){
        this.setState({ hasError: true, errorMessage: info});
    }

    render(){
        if (this.state.hasError){
            return (
                <div className="container my-3">
                    <p className="text-center font-weight-bold">Error: {this.state.errorMessage}</p>
                    <p>Back to home page:</p>
                    <Link to='/' className="btn btn-primary">Home Page</Link>
                </div>

            )
        } else {
            return this.props.children
        }
    }

}

export default ErrorBoundary;