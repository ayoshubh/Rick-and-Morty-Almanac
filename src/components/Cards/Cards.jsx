/* eslint-disable react/prop-types */
// import React from 'react'
import styles from './Cards.module.scss';
import { Link } from 'react-router-dom';


function Cards({ results, page }) {

  let display;

  // console.log(Array.isArray(results));
  //  let newResult = results
  //  console.log(newResult);
  if(results){
    display = results.map((x) => {
      let { id, name, image, location, status } = x;
      return(
        <Link 
        to={`${page}${id}`} 
        key={id} 
        className="col-lg-4 col-md-6 col-12 position-relative text-dark"
        style={{textDecoration: "none"}}>
          <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
            <img src={image} alt="" className={`${styles.img} img-fluid`}/>
            <div className="content">
              <div className="fs-4 fs-bold mb-4">{name}</div>
            </div>
            <div className="">
              <div className="fs-6">Last Location</div>
              <div className="fs-5">{location.name}</div>
            </div>
          </div>
          {(() =>{
            if (status==="Dead"){
              return (
                <div className={`${styles.badge} position-absolute badge bg-danger`}>
                  {status}
                  </div>
              )
            } else if( status=== "Alive"){
              return (
                <div className={`${styles.badge} position-absolute badge bg-success`}>
                  {status}
                  </div>
              )
            } else{
              return (
                <div className={`${styles.badge} position-absolute badge bg-secondary`}>
                  {status}
                  </div>
              )
            }
          })()}
          {/* <div className={` ${styles.badge } position-absolute badge bg-danger`}>{status}</div> */}
        </Link>
        // <>hello</>
      )
    })
  }else{
    display = <h5 className='text-center mt-5 '>No Characters found </h5>;
  }
  return (  
    <>{display}</>
  )
}

export default Cards