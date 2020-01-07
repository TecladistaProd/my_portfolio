import React, { useState, useEffect } from 'react';

import bound from 'react-bounds.js'

const Container = bound.div({ threshold: [.35] })

let PageComp = null

function Page() {
  const [loadPage, setLoadPage] = useState(false)
  const [entered, setEntered] = useState(false)

  function handleEnter() {
    location.hash = '/gallery'
    if(entered) return
    setEntered(true)
  }

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
      minHeight: '520px'
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