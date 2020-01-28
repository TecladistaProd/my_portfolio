import React, { useCallback, useContext, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import LightBoxImage from '../src/components/LightBoxImage'
import imagesCtx from '../src/context/images'
import image from '../static/test.png'

export default {
  title: 'LightBoxImage Component',
  component: LightBoxImage,
};

export const Normal = () => {
  const images = [{photo: image, project: "portfolio", description: "none"},]
  const [openedImage, setOpenedImage] = useState(-1)
  const handleClick = useCallback(() => {
    setOpenedImage(0)
    action('Light')(images)
  }, [])
  return (
    <imagesCtx.Provider value={{ images, openedImage, setOpenedImage, next: () => {}, prev: () => {} }}>
      <h1>LightBoxImage with Zoom</h1>
      <Button onClick={handleClick}>
        Click me to open
      </Button>
      <LightBoxImage/>
    </imagesCtx.Provider>
  )
}