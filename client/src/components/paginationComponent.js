import React,{useContext} from 'react'
import { Pagination } from 'react-bootstrap';
import {GithubContext} from "../helpers/context"

//Component to paginate the repositories
function PaginationComponent({totalRepositories}) {
  const{page,setPage,setLoading}=useContext(GithubContext)

  //function to hangle the change in current page
  function handlePageChange(pageNo){
    setLoading(true)
    setPage(pageNo)
  }

  //forming an array of components with links to paginate
  let items = [];  
    for (let number = 1; number <= Math.ceil(totalRepositories/10); number++) {
     items.push(
    <Pagination.Item key={number} active={number === page} onClick={()=>handlePageChange(number)} className="pagination-item">
      {number}
    </Pagination.Item>,
    );
    }
  return (
    <div>
        <Pagination className="pagination-item">
          {/* to go to the previous page */}
          <Pagination.First disabled={page===1} onClick={()=>handlePageChange(page-1)} className="pagination-item"/>
          {items} {/*links to all the pages*/}
          {/* to go to the next page */}
          <Pagination.Last disabled={page===Math.ceil(totalRepositories/10)} onClick={()=>handlePageChange(page+1)} className="pagination-item"/>
        </Pagination>
    </div>
  )
}

export default PaginationComponent