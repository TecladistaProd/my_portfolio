import React from 'react'

import { createGlobalStyle } from 'styled-components'

import Routes from './routes/'

import Alert from './components/Alert'

function App() {
  return (
    <Alert>
      <GStyle/>
      <Routes/>
    </Alert>
  )
}

const GStyle = createGlobalStyle`
@import url(https://fonts.googleapis.com/css?family=Roboto&display=swap);
* {
  padding: 0;
  margin: 0;
  border: none;
  box-sizing: border-box;
  outline: 0;
  background: none;
  scroll-behavior: smooth;
}
html, body, #app {
  position: relative;
  width: 100%;
  min-height: 100vh;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  color: #fff;
}
`

export default App