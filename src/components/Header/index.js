import React, { useContext, useCallback, useEffect, useState } from 'react'

import { Container, Title, IconBtn, NullableItem } from './styles'

import { AiOutlineAlignCenter as CenterIcon } from 'react-icons/ai'

import { FaUserAstronaut as UserIcon } from 'react-icons/fa'

import menuContext from '../../context/menu'

import throttle from '../../helpers/throttle'

function Header () {
  const ctx = useContext(menuContext);
  const openMenu = useCallback(() => {
    ctx.setMenuOpened(true)
  }, [])
  
  const [fixed, setFixed] = useState(false)

  const handleScroll = useCallback(throttle(() => {
    if(window.scrollY > 20)
      setFixed(true)
    else
      setFixed(false)
  }, 10), [])

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Container className={fixed ? 'active' : ''}>
        <Title>
          <UserIcon
          color='#fff'
          />
          {' '}
          Vitor Cruz
        </Title>
        <IconBtn onClick={openMenu}>
          <CenterIcon
            color="#fff"
            fontSize='1.2rem'
          />
        </IconBtn>
      </Container>
      {
        fixed && <NullableItem/>
      }
    </>
  )
}

export default Header