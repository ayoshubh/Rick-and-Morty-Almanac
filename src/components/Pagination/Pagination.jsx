/* eslint-disable react/prop-types */
import {useState, useEffect} from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, pageNumber, setPageNumber }) => {
    
  const [width, setWidth] = useState();

  let updateDimension = () =>{
    setWidth(window.innerWidth);
  }

    
  useEffect(()=>{
    window.addEventListener("resize", updateDimension);

    return () => window.removeEventListener("resize", updateDimension);
  }, [])
  return (
    <>
    <style>
      {
        `
        @media (max-width:768px){
          .next, .prev{
            display: none;
          }

          .pagination{
            font-size:14px;
          }
        }`
      }
    </style>
    <ReactPaginate 
    forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
    className='pagination justify-content-center gap-4 my-4'
    nextLabel="Next"
    nextClassName="btn btn-primary next"
    nextLinkClassName="text-white text-decoration-none"
    previousLabel="Prev"
    previousClassName='btn btn-primary prev'
    previousLinkClassName='text-white text-decoration-none'
    pageClassName='page-item'
    pageLinkClassName='page-link'
    activeClassName='active'
    marginPagesDisplayed={width <576 ? 1 : 2}
    pageRangeDisplayed={width <576 ? 1 : 2}
    onPageChange={(data)=>{
      setPageNumber(data.selected+1)
    }}
    pageCount={info?.pages}/>

</>
  )
}

export default Pagination