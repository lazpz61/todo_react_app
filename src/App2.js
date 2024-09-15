import React, { useRef, useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();

  }

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={inputRef}
      />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
}


export default App;