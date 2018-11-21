import React from 'react'

const MovieList =({list}) => {
  return (
    <div className="container mt-3">
        <ul className="row justify-content-center">
          {list.map( item => {
              return (
                <div className="card card-width col-sm-12 col-md-5 my-3 mr-2 px-0 py-0" key={item.id}>
                    <p className="card-header">
                     
                    </p>
                    <img className="card-img-top img-fluid" src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="Poster" />
                    <div className="card-body">
                    <h5 className="card-title">{item.title || item.name}</h5>
                    <p className="card-text">{item.overview}.</p>
                    <a href="true" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              )
            })
          }
        </ul>
    </div>
  )
}

export default MovieList;

