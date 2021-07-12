// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const smallBox = <div className="box box--small" style={{
  marginTop: 20,
  backgroundColor: 'lightblue',
  fontStyle: 'italic'
}}>small lightblue box</div>
const mediumBox = <div className="box box--medium" style={{
  marginTop: 20,
  backgroundColor: 'pink',
  fontStyle: 'italic'
}}>medium pink box</div>
const largeBox = <div className="box box--large" style={{
  marginTop: 20,
  backgroundColor: 'orange',
  fontStyle: 'italic'
}}>large orange box</div>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
