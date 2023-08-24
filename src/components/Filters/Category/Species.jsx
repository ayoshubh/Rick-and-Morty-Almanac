/* eslint-disable react/prop-types */
// import React from 'react'

import FilterBtn from "../FilterBtn";

const Species = ({setPageNumber, setSpecies}) => {

  let species = ["Human", "Alien", "Humanoid", "Poopybutthole", "Mythological", "Unknown", "Animal", "Disease", "Robot", "Cronenberg", "Planet"];
  return (
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
        Species
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap flex-column">
      {species.map((items, index)=>[
      <FilterBtn 
      key={index}
      setPageNumber={setPageNumber}
      task = {setSpecies}
      name="species" 
      index={index} 
      items={items}/>])}
      </div>
    </div>
  </div>
  )
}

export default Species