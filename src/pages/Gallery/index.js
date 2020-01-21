import React, { useState, useCallback, useEffect } from 'react';

import bound from 'react-bounds.js'

let PageComp = null

import throttle from '../../helpers/throttle'

function Page({ rootContainer }) {
  const [loadPage, setLoadPage] = useState(false)
  const [entered, setEntered] = useState(false)
  const Container = bound.div({ root: rootContainer.current, margins: { top: 8 }, threshold: [.3, .7] })

  const handleEnter = useCallback(throttle((el, val) => {
    if(val > .6)
      location.hash = '/gallery' 
    if(entered) return
    setEntered(true)
  }, 100), [entered])

  async function renderPage() {
    const { default: df } = await import('./Gallery')

    PageComp = df
    setLoadPage(true)
  }

  useEffect(() => {
    if(entered)
      renderPage()
  }, [entered])

  return (
    <Container style={{
      width: '100%',
      minHeight: '520px',
      marginTop: '4rem'
    }}
      onEnter={handleEnter}      
      id="/gallery"
    >
      {
        loadPage && <PageComp/>
      }
    </Container>
  );
}

export default Page