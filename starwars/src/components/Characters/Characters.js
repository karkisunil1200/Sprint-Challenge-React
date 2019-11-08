import React from 'react';

import {Chara} from './CharactersStyled';

const Characters = props => {
  console.log(props.result);

  return (
    <Chara>
      <h2 className Heading>
        Hello, I am
      </h2>
      <div className='person'>
        {/* <p> {props.result.name}</p> */}
        <p> Name: 'Luke Skywalker'</p>
        <p> Height: 162</p>
        <p> Birth Year: 19BBY</p>
        {/* <h5> {props.results.height}</h5>
        <h6> {props.results.hairColor}</h6> */}
      </div>
    </Chara>
  );
};

export default Characters;
