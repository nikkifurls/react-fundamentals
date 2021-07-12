// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({className, style, children}) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

function App() {
  return (
    <div>
      <Box className="box box--small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box className="box box--medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box className="box box--large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
    </div>
  )
}

export default App
