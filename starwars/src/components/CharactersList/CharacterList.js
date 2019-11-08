import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Characters from '../Characters/Characters';

const Characterlist = () => {
  const [characters, setCharacters] = useState({});

  useEffect(() => {
    axios
      .get()
      .then()
      .catch();
  }, []);

  return (
    <div>
      <h2>Hell from CharacterList</h2>
      <Characters />
    </div>
  );
};

export default Characterlist;
