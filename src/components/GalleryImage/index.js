import React, { useContext, useCallback, useState } from 'react';

import { Container, Img } from './styles';

import imagesContext from '../../context/images'

function GalleryImage({ image, 'data-key': index }) {
  const ctx = useContext(imagesContext)
  const [entered, setEntered] = useState(null)
  const handleImage = useCallback(() => {
    ctx.setOpenedImage(index)
  }, [])

  const handleEnter = useCallback(() => {
    if(entered) return
    setEntered(true)
  },[])

  return (
    <Container
      onEnter={handleEnter} 
    >
      {
        entered && <Img image={image} onClick={handleImage} />
      }
    </Container>
  );
}

export default GalleryImage
