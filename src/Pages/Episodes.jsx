import {useState, useEffect} from 'react'
import Cards from '../components/Cards/Cards';
import InputGroup from '../components/Filters/Category/InputGroup';


const Episodes = () => {

  const [id, setId] = useState(1);
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);
  const {air_date, name } = info;

  const api = `https://rickandmortyapi.com/api/episode/${id}`;

    useEffect(() => {
      (async function(){
        const data = await fetch(api).then((res)=>res.json());
        setInfo(data);

        let a = await Promise.all(
          data.characters.map((x)=>{
            return fetch(x).then((res)=> res.json());
          })
        );
        setResults(a);
      })()
    }, [api])
    
    return (
      <div className='container'>
        <div className="row mb-4">
          <h1 className='text-center mb-4 mt-5'>
            Episode : {" "}
            <span className='text-primary'>
            {name===""? "Unknown" : name}
            </span>
          </h1>
          <h5 className='text-center'> Air Date {air_date===""? "Unknown" : air_date}</h5>
        </div>
        <div className="row">
          <div className="col-lg-3 col-12">
            <h4 className="text-center mb-4">
            Pick Episodes
            <InputGroup setId={setId} total={51} name="Episode"/>
            </h4>
          </div>
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page = "/episodes/" results={results}/>
            </div>
          </div>
          </div>  
      </div>
    )
  }
  
  export default Episodes
