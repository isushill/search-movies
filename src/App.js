import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [text, setText] = useState("")
  const [movie, setMovie] = useState([])
  const submitHandler = e => {
    e.preventDefault()
    axios.get(`https://www.omdbapi.com/?s=${text}&apikey=b557c94b`)
      .then((res) => {
        console.log(res.data)
        setMovie(res.data.Search)
      })
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">
            Search for movies
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            </ul>
            <form className="d-flex" role="search" onSubmit={submitHandler}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container my-3">
        <div className="row">
          {
            movie.map((value, index) => {
              return (
                <div className="col-3 mt-3">
                  <div className="card" style={{ width: "15rem" }}>
                    <img src={value.Poster} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h6 className="card-title">{value.Year}</h6>
                      <h3 className="card-text">{value.Title}</h3>
                      <a href="https://www.imdb.com" target='_blank' className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

    </>
  );
}

export default App;
