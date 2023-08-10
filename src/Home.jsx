// import React from 'react'
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Search from './components/Search/Search';
import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';
import Pagination from './components/Pagination/Pagination';

const Home = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [fetchData, updateFetchedData] = useState([]);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");
    const [gender, setGender] = useState("");
    const [species, setSpecies] = useState("");
    let { info, results } = fetchData;
    // console.log(fetchData)
    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
    
    useEffect(() => {
      
      (async function(){
        let data = await fetch(api).then(res => res.json())
        updateFetchedData(data)
        // console.log(data.results)
      })()
    
    }, [api])
    
    return (
      <div className="App">
  
        {/* <Navbar /> */}
  
        <h1 className='text-center mb-4 mt-5'>
            Characters
          </h1>
        <Search setPageNumber={setPageNumber} setSearch={setSearch}/>
  
        <div className="container">
          <div className="row">
  
              <Filters setStatus={setStatus} setPageNumber={setPageNumber} setGender={setGender} setSpecies={setSpecies}/>
  
            <div className="col-lg-8 col-12">
              <div className="row">
                <Cards page="/" results={results}/>
                
              </div>
            </div>
          </div>
        </div>
  
        <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
      </div>
    )
  }

export default Home