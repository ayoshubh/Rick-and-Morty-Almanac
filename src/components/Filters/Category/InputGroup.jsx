/* eslint-disable react/prop-types */
// import React from 'react'

const InputGroup = ({total, name , setId}) => {

  return (
    <div className="input-group mb-4">
  {/* <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label> */}
  <select 
  onChange={(e)=>setId(e.target.value)}
  className="form-select" 
  id={name}>
    <option selected value={1}>Choose...</option>

    {[...Array(total).keys()].map((elem,index)=>{
        return <option key={index} value={elem+1}>{name} - {elem + 1}</option>
    })}
    
  </select>
</div>
  )
}

export default InputGroup