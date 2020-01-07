import { createContext } from 'react'

export default createContext({
  images: [],
  openedImage: null,
  setOpenedImage: () => {},
  next: () => {},
  prev: () => {}
})