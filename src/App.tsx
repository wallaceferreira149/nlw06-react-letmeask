import React, {useState} from 'react';

import './services/firebase'

function App() {
  const [num, setNum] = useState(0);
  return (
    
    <button onClick={() => {
      setNum(num + 1)}}>{num}</button>
  );
}

export default App;
