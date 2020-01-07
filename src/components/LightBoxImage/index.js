import React, { useContext, useState, useEffect, useCallback } from 'react';

import { Container, CloseBtn } from './styles';

import imagesContext from '../../context/images'

import Magnify from '../Magnify'

function LightBoxImage() {
  const ctx = useContext(imagesContext)
  const [cl, setCl] = useState('')
  
  useEffect(() => {
    if(ctx.openedImage > -1) {
      setCl('active')
    } else {
      setCl('')
    }
  }, [ctx.openedImage])


  const handleClose = useCallback(() => {
    ctx.setOpenedImage(-1)
  }, [])

  
  return (
    <Container className={cl}>
      <CloseBtn onClick={handleClose} className={cl}>X</CloseBtn>
      {
        (ctx.openedImage > -1 && ctx.images.length > 0) &&
          <Magnify
            className={cl}
            src={ctx.images[ctx.openedImage].full || ctx.images[ctx.openedImage].photo}
          />
      }
    </Container>
  );
}

export default LightBoxImage