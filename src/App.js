import './App.css';
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
          <div className='col-12 text-center fw-bold fs-1 p-3 bg-success text-white'>
            Pocket Dictionary
          </div>
        </div>
      </div>
    </>
  );
}

export default App;