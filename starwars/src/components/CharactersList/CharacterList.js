import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Characters from '../Characters/Characters';

const Characterlist = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get('https://corsanywhere.herokuapp.com/https://lambda-swapi.herokuapp.com/api/people/')
      .then(res => {
        console.log('This is the data: ' + res.data.results);
        setCharacters(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>Hell from CharacterList</h2>
      {/* {characters.map((character, index) => {
        return <Characters key={index} char={character} />;
      })} */}
    </div>
  );
};

export default Characterlist;

//https://cors-anywhere.herokuapp.com/
