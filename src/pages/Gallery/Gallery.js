import React, { useState, useEffect, useCallback } from 'react';

import { Container, Title, GalleryList } from './styles';

import GalleryImage from '../../components/GalleryImage'
import LightBoxImage from '../../components/LightBoxImage'

import imagesContext from '../../context/images'

function Gallery() {
  const [images, setImages] = useState([])
  const [openedImage, setOpenedImage] = useState(-1)
  
  const getImages = useCallback(async () => {
    const { default: data } = await import('../../service/gallery')
    setImages(data)
  })

  function next() {
    // 
  }

  function prev() {
    // 
  }

  useEffect(() => {
    getImages()
  }, [])
  return (
    <Container>
      <Title>Gallery of Projects</Title>
      <imagesContext.Provider value={{
        images,
        openedImage,
        setOpenedImage,
        next,
        prev
      }}>
        <LightBoxImage/>
        <GalleryList>
          {
            images.map((i, k) => (
              <GalleryImage data-key={k} key={k} image={i.photo}/>
            ))
          }
        </GalleryList>
      </imagesContext.Provider>
    </Container>
  );
}

export default Gallery