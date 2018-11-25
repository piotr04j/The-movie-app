import React from 'react';
import { Link } from 'react-router-dom';


const List =({list, currentPage, url,...props }) => {
  let type;
  url.includes('tv') ? type = 'tv' :  type = 'movie';
  return (
    <div className="container mt-3">
        <ul className="row justify-content-center">
          {list.map( (item, index) => {
              return (
                <div className="card card-width col-sm-12 col-md-5 my-3 mr-2 px-0 py-0" key={item.id}>
                    <p className="card-header">
                      <span className="font-weight-bold">{currentPage * 20 -19 + index}.</span> Rating: {item.vote_average}
                    </p>
                    <img className="card-img-top img-fluid" src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="Poster" />
                    <div className="card-body">
                    <h5 className="card-title text-center">{item.title || item.name}</h5>
                    <Link to={`/item/${type}/${item.id}`} className="btn btn-primary">See details</Link>
                  </div>
                </div>
              )
            })
          }
        </ul>
    </div>
  )
}


export default List;

