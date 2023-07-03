import React from 'react'
import Button from './Button';
const App = () => {
  return (
    <div>
      <div>
        <Button success rounded outline>Click Here</Button>
      </div>
      <div>
        <Button warning>Hello</Button>
      </div>
      <div>
        <Button secondary outline>Good Morning</Button>
      </div>
      <div>
        <Button primary rounded >How are you ?</Button>
      </div>
    </div>
  )
}

export default App;
