import React, { Component } from 'react';
import axios from 'axios';
import mdbAPI from '../../../config/keys';
import Modal from '../../Modal/Modal';
import { Link } from 'react-router-dom'; 

class Item extends Component {

    state = {
        item: {},
        loading: true,
        error: false
    }

    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/${this.props.match.params.type}/${this.props.match.params.id}?api_key=${mdbAPI.key}&language=en-US`)
            .then( res => {
                this.setState({ item: res.data, loading: false, error: false})
            }).catch( err => {
                this.setState({ error: true})
            });
    }

    render(){
        if(this.state.error){
            return (
                <div className="container my-3">
                    <p>We have problem with data base connection</p>
                    <p>Back to home page:</p>
                    <Link to='/' className="btn btn-primary">Home page</Link>
                </div>
            )
        }
        return (
            <div className="container">
                {this.state.loading ===true ? <Modal /> : null}
                <div className="row">
                    <div className="col-md-6 cols-sm-12">
                        <img className="card-img-top img-fluid" src={`http://image.tmdb.org/t/p/w500/${this.state.item.poster_path}`} alt="Poster" />
                    </div>
                    <div className="col-md-6 cols-sm-12">
                        <h2>{this.state.item.name || this.state.item.title }</h2>
                        <p><span className="font-weight-bold my-3">Overview: </span>{this.state.item.overview}</p>
                        <ul className="list-group">
                            <li className="list-group-item active">Genres</li>
                            {this.state.item.genres && this.state.item.genres.map( item => {
                                return <li className="list-group-item" key={item.id}>{item.name}</li>
                            })}
                        </ul>
                        <button className="btn btn-primary bold my-3" onClick={() => this.props.history.goBack()}>Back</button>
                    </div>       
                </div>
            </div>
        )    
    }
}

export default Item;

