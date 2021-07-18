// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, { useRef } from 'react';

function UsernameForm({onSubmitUsername}) {
  const usernameRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const username = usernameRef.current.value;
    onSubmitUsername(username);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" ref={usernameRef} type="text" />
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
