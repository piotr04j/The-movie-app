import React from 'react'

const ResultItem = (props) => {
    let url ="http://image.tmdb.org/t/p/w500/";
    if(props.poster_path){
        url += props.poster_path;
    } else if (props.profile_path){
        url += props.profile_path;
    } else {
        url = "/images/example.jpg";
    }

    return (
        <div className="row align-items-center border-bottom mb-5">
            <div className="col text-center">
                <img src={ `${url}`} alt="poster" className="img-fluid" />
                <p><span className="text-uppercase">{props.media_type}</span>: <span className="font-weight-bold">{props.name || props.title}</span></p>
                <p>{props.overview}</p>
            </div>
        </div>
    )
}

export default ResultItem;

