/* eslint-disable react/prop-types */
// import React from 'react'

import FilterBtn from "../FilterBtn"

const Status = ({ setStatus, setPageNumber }) => {
  let status = ["Alive", "Dead", "Unknown"]
  return (
    // <div>Status</div>
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Status
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap">
        {status.map((items, index)=>[
        <FilterBtn
         key={index}
         task={setStatus}
         setPageNumber = {setPageNumber}
         name="status" 
         index={index} 
         items={items}/>])}
        
      </div>
    </div>
  </div>
  )
}

export default Status