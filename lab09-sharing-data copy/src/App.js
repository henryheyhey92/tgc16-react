import React from 'react'
import Form from './Form'
import AlertBox from './AlertBox'

function App() {
  return (
    <React.Fragment>
      <AlertBox bgcolor="orange" msg="Please enter your email and name"/>
      <Form/>
    </React.Fragment>
  );
}

export default App;
