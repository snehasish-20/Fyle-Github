import React,{useContext} from 'react'
import { Pagination } from 'react-bootstrap';
import {GithubContext} from "../helpers/context"

function PaginationComponent({totalRepositories}) {
  const{page,setPage,setLoading}=useContext(GithubContext)
  function handlePageChange(pageNo){
    setLoading(true)
    setPage(pageNo)
  }
  let items = [];  
  console.log(page);
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
          <Pagination.First disabled={page===1} onClick={()=>handlePageChange(page-1)} className="pagination-item"/>
          {items}
          <Pagination.Last disabled={page===Math.ceil(totalRepositories/10)} onClick={()=>handlePageChange(page+1)} className="pagination-item"/>
        </Pagination>
    </div>
  )
}

export default PaginationComponent