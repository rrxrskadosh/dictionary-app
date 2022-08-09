//import './App.css';
import React, { useState, useEffect } from "react";

const App = () => {
  const [word, setWord] = useState();
  const [mean, setMean] = useState([]);
  const [main, setMain] = useState([]);
  const [audio, setAudio] = useState();

  const dataApi = async () => {
    const data = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}` //URL Api Base Syntax
    );
    const dataJson = await data.json();
    setMean(dataJson);
    console.log(dataJson);
    setMain(dataJson[0]);
    console.log(dataJson[0]);
    const url = dataJson[0].phonetics[0].audio;
    setAudio(url);
  }

  useEffect(() => {
    dataApi();
  }, []);

  const Search = () => {
    dataApi();
    setWord("");
  };

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='container-main-title col-12 text-center fw-bold fs-1 p-3 text-white'>
            <h1 className="main-title">Pocket Dictionary</h1>
          </div>
          
          <div className='container-search form-floating py-3 pb-5 d-flex justify-content-center'>
            <input
              type="text"
              className="form-control-sm border-0 px-2 col-md-5 col-sm-4"
              placeholder="Type your word"
              id="floatingInput"
              />
              <button className="btn btn-dark text-light col-md-1 col-sm-2 mx-2" 
                onClick={Search}>
                Search
              </button>
          </div>
        </div>
      </div>
      {word === "" ? (
        "Hello"
      ) : (
        <div className="container-text-box fs-1 text-capitalize text-center fw-bold text-white extra">
          <h2 className="subtitle">You can search in the BOX!</h2>
        </div>
      )}
    </>
  );
};

export default App;