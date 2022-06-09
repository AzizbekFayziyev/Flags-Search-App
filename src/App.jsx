import axios from "axios";
import { useEffect, useState } from "react"

export default function App() {

  const [countres, setCountres] = useState([]);
  const [search, setSearch] = useState("")

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/all`)
      .then(res => {
        console.log(res.data)
        setCountres(res.data)
      }).catch(console.error("api not"))
  }, []);

  const filteredCountry = countres.filter(country => (
    country.name.common.toLowerCase().includes(search.toLowerCase())
  ))


  return (
    <div className="container">

      <h1
        className="header text-center bg-success text-light p-3">
        Counters Info
      </h1>

      <input
        className="form-control my-3 p-2"
        autoFocus
        type="search"
        placeholder="Search Counters By Name"
        onChange={e => setSearch(e.target.value)}
      />

      {filteredCountry.length ? filteredCountry.map((i, idx) => (
        <div key={idx} className="card mb-5 bg-primary">

          <div className="card-header text-light text-center">
            <h2>Country: {i.name.common}<sup>{i.flag}</sup></h2>
          </div>

          <div className="card-body">
            <img src={i.flags.svg} alt="" />
          </div>

          <div className="card-footer text-light text-center">
            <h2>Continents: {i.continents}</h2>
          </div>
        </div>
      )) : <h1 className="m-5">Nothing Found...</h1>}

      <h1
        className="header text-center bg-success text-light p-3">
        Created By AVANCODER
      </h1>

    </div>
  )

}
