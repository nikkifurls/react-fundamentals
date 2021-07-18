// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, { useRef, useState } from 'react';

function UsernameForm({onSubmitUsername}) {
  const usernameRef = useRef(null);
  const [ error, setError ] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    const username = usernameRef.current.value;
    onSubmitUsername(username);
  }

  // If value is not lowercase, show error
  function handleChange(event) {
    // Get the value
    const username = event.target.value;
    if (username !== username.toLowerCase()) {
      // Update error state
      setError('Username must be lower case');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" ref={usernameRef} type="text" onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
