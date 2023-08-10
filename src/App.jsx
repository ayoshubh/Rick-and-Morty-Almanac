// import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home';
// import Search from './components/Search/Search';
// import Filters from './components/Filters/Filters';
// import Cards from './components/Cards/Cards';
// import Pagination from './components/Pagination/Pagination';
import Navbar from './components/Navbar/Navbar';
import  Episodes  from './Pages/Episodes';
import Location from './Pages/Location';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CardDetails from './components/Cards/CardDetails';


export default function App(){
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<CardDetails />} />

        <Route path='/episodes' element={<Episodes />} />
        <Route path='/episodes/:id' element={<CardDetails />} />
        
        <Route path='/location' element={<Location />} />
        <Route path='/location/:id' element={<CardDetails />} />
      </Routes>
    </Router>
  )
}

// const Home = () => {
//   const [pageNumber, setPageNumber] = useState(1);
//   const [fetchData, updateFetchedData] = useState([]);
//   const [search, setSearch] = useState("");
//   const [status, setStatus] = useState("");
//   const [gender, setGender] = useState("");
//   const [species, setSpecies] = useState("");
//   let { info, results } = fetchData;
//   console.log(fetchData)
//   let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  
//   useEffect(() => {
    
//     (async function(){
//       let data = await fetch(api).then(res => res.json())
//       updateFetchedData(data)
//       // console.log(data.results)
//     })()
  
//   }, [api])
  
//   return (
//     <div className="App">

//       {/* <Navbar /> */}
//       <h1 className="text-center my-5">Rick & Morty
//         <span className="text-primary"> Almanac</span>      
//       </h1>

//       <Search setPageNumber={setPageNumber} setSearch={setSearch}/>

//       <div className="container">
//         <div className="row">

//             <Filters setStatus={setStatus} setPageNumber={setPageNumber} setGender={setGender} setSpecies={setSpecies}/>

//           <div className="col-8">
//             <div className="row">
//               <Cards results={results}/>
              
//             </div>
//           </div>
//         </div>
//       </div>

//       <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
//     </div>
//   )
// }

// export default App;
