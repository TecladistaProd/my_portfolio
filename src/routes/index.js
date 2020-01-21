import React, { useState, useRef } from 'react'

import Header from '../components/Header'

import { Container, Content } from './styles'

import Home from '../pages/Home'
import Gallery from '../pages/Gallery'
import About from '../pages/About'
import Contact from '../pages/Contact'

import Menu from '../components/Menu'
import Footer from '../components/Footer'

import menuContext from '../context/menu'

function Routes () {
  const contentRef = useRef()
  const [ menuOpened, setMenuOpened ] = useState(false)
  return (
    <menuContext.Provider value={{menuOpened, setMenuOpened}}>
      <Menu/>
      <Container>
        <Header/>
        
        <Content ref={contentRef}>
          <Home rootContainer={contentRef}/>
          <Gallery rootContainer={contentRef}/>
          <About rootContainer={contentRef}/>
          <Contact rootContainer={contentRef}/>
        </Content>
        
        <Footer/>
      </Container>
    </menuContext.Provider>
  )
}

export default Routes