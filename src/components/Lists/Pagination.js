import React from 'react'

const Pagination = ({totalPages, currentPage, lastPage, handleFirstPage, handleLastPage, handlePage}) => {

    let activeItem = 1; 

    if( currentPage === '1' ){
       activeItem = 0;
    } else if (String(currentPage) === String(lastPage)) {
        activeItem = 2;
    } 


    return (
        <div className="container">
            <div className="row justify-content-center">
                <nav aria-label="...">
                    <ul className="pagination">
                        <li className={ currentPage === 1 ? "page-item disabled": "page-item"} onClick={handleFirstPage}>
                            <span className="page-link">First</span>
                        </li>
                        {
                            totalPages.map( (item,index) => {              
                                if(index === activeItem){
                                    return  (
                                        <li key={item} className="page-item page-item active" onClick={() => handlePage(item)}>
                                            <span className="page-link ">{item}</span>
                                            <span className="sr-only">(current)</span>
                                        </li>
                                    )
                                } else {
                                    return  (
                                        <li key={item} className="page-item" onClick={() => handlePage(item)}>
                                            <span className="page-link">{item}</span>
                                        </li>
                                    )
                                }
                            })
                        }
                        <li className={ currentPage === lastPage ? "page-item disabled" : "page-item"} onClick={handleLastPage}>
                            <span className="page-link">Last</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Pagination;


