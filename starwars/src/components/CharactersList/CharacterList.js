import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {list} from '../../data';
import Characters from '../Characters/Characters';
import {Container, Figures} from './CharacterStyled';

const Characterlist = () => {
  const [characters, setCharacters] = useState([]);
  const [charList, setCharList] = useState(list.results);

  console.log(charList);

  //   useEffect(() => {
  //     axios
  //       .get('https://corsanywhere.herokuapp.com/https://lambda-swapi.herokuapp.com/api/people/')
  //       .then(res => {
  //         console.log('This is the data: ' + res.data.results);
  //         setCharacters(res.data.results);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   }, []);

  return (
    <Container>
      {/* {characters.map((character, index) => {
        return <Characters key={index} char={character} />;
      })} */}

      {charList.map((char, index) => {
        return <Characters result={char.results} key={index} />;
      })}
    </Container>
  );
};

export default Characterlist;

//https://cors-anywhere.herokuapp.com/
