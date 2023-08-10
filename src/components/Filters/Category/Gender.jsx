/* eslint-disable react/prop-types */
// import React from 'react'

import FilterBtn from "../FilterBtn"

const Gender = ({ setGender, setPageNumber}) => {
  let genders = ["female", "male", "genderless", "unknown"]
  return (
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
        Gender
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap">
        {genders.map((items, index)=>(
          <FilterBtn 
          key={index} 
          task = {setGender}
          setPageNumber={setPageNumber}
          index={index} 
          name="gender" 
          items={items}/>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Gender