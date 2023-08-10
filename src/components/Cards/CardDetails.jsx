import { useState , useEffect} from  'react'

import { useParams } from "react-router-dom"

const CardDetails = () => {
  let { id } = useParams()
  const [fetchData, updateFetchedData] = useState([]);
  let {name, image, location, origin, species, status, gender} = fetchData

  let api = `https://rickandmortyapi.com/api/character/${id}`;
    
    useEffect(() => {
      
      (async function(){
        let data = await fetch(api).then(res => res.json())
        updateFetchedData(data)
        // console.log(data.results)
      })()
    
    }, [api])

    console.log(fetchData)

    
  return (
    <div className='container d-flex justify-content-center'>
      <div className="d-flex flex-column gap-3">
        <h1 className='text-center mt-3'>{name}</h1>
        <img src={image} alt="" className='img-fluid'/>
        {(() =>{
            if (status==="Dead"){
              return (
                <div className={`badge bg-danger fs-5`}>
                  {status}
                  </div>
              )
            } else if( status=== "Alive"){
              return (
                <div className={`badge bg-success fs-5`}>
                  {status}
                  </div>
              )
            } else{
              return (
                <div className={` bg-secondary fs-5`}>
                  {status}
                  </div>
              )
            }
          })()}

          <div className="content">
            <div className="">
              <span className='fw-bold'>Gender : </span>{gender}
            </div>
            <div className="">
              <span className='fw-bold'>Origin : </span>{origin?.name}
            </div>
            <div className="">
              <span className='fw-bold'>Species : </span>{species}
            </div>
            <div className="">
              <span className='fw-bold'>Location : </span>{location?.name}
            </div>

          </div>
      </div>
    </div>
  )
}

export default CardDetails