/* eslint-disable react/prop-types */
import Gender from "./Category/Gender"
import Species from "./Category/Species"
import Status from "./Category/Status"

const Filters = ({ setStatus, setPageNumber, setGender, setSpecies }) => {
  const clear = () =>{
    setStatus("");
    setPageNumber(1);
    setGender("");
    setSpecies("");
    window.location.reload(false);
  }
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fs-4 mb-2">Filter</div>
      <div onClick={clear} style={{cursor: "pointer"}} className="text-center text-primary text-decoration-underline mb-3">Clear Filters</div>
      <div className="accordion" id="accordionExample">
        <Status setStatus={setStatus} setPageNumber={setPageNumber} />
        <Gender setPageNumber={setPageNumber} setGender={setGender}/>
        <Species setPageNumber={setPageNumber} setSpecies={setSpecies}/>
      </div>
    </div>
  )
}

export default Filters