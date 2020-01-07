import React, { useContext, useCallback, useEffect } from 'react';

import { Container, Link, CloseBtn } from './styles';

import menuContext from '../../context/menu'

import { IoMdClose as CloseIcon } from 'react-icons/io'

function Menu() {
  const ctx = useContext(menuContext);
  const closeMenu = useCallback((e) => {
    ctx.setMenuOpened(false)
    
    if(!e.target && !e.target.href)
      return

    e.preventDefault()

    const { target: { href } } = e;
    let id = href.split('/#')[1] || '/home'
    let val = 0
    let el = document.getElementById(`${id}`)
    if(el && 'offsetTop' in el)
      val = document.getElementById(`${id}`).offsetTop
    location.hash = id
    window.scrollTo(0, val-69)
  }, [])

  useEffect(() => {
    setTimeout(() => closeMenu({ target:  { href: location.href }, preventDefault: () => null }), 5000)
  }, [])

  return (
    <Container className={!!ctx.menuOpened ? 'active' : '' }>
      <CloseBtn onClick={closeMenu}>
        <CloseIcon
          fontSize='2.5rem'
          color='#fff'
        />
      </CloseBtn>
      <Link onClick={closeMenu} href="/#/home">
        Home
      </Link>
      <Link onClick={closeMenu} href="/#/gallery">
        Gallery
      </Link>
      <Link onClick={closeMenu} href="/#/about">
        About
      </Link>
      <Link onClick={closeMenu} href="/#/contact">
        Contact
      </Link>
    </Container>
  );
}

export default Menu
