import React, { useState, useCallback, useContext } from 'react'

import { IoIosArrowForward as ArrowIcon } from 'react-icons/io'

import { Container, FirstRow, InfoHeader, Title, Avatar, ContactButton } from './styles'

import avatarSrc from '../../assets/avatar.jpg'

import HomeInfos from '../../components/HomeInfos'

import { context as alertCtx } from '../../components/Alert'

function Home () {
  const [cClass, setCClass] = useState('')
  const ctx = useContext(alertCtx)
  const handleContact = useCallback(async () => {
    setCClass('active')
    setTimeout(() => {
      setCClass('')
    }, 3000)
    try {
      await navigator.clipboard.writeText('vitor.cruz@fatec.sp.gov.br')
      ctx.openAlert({
        title: 'E-mail for Contact',
        body: 'E-email Copied to your clipboard',
        time: 2000
      })
    } catch(err) {
      window.open('mailto:vitor.cruz@fatec.sp.gov.br','_blank')
      ctx.openAlert({
        title: 'E-mail for Contact',
        body: 'vitor.cruz@fatec.sp.gov.br',
        time: 10000
      })
    }
  }, [])
  return (
    <Container id="/home">
      <FirstRow>
        <InfoHeader>
          <Title>Next Level of Development</Title>
          <ContactButton onClick={handleContact} className={cClass} href='#'>
            Contact Me{'\u00a0'}{'\u00a0'}<ArrowIcon fontWeight='bold' fontSize='16px' />
          </ContactButton>
        </InfoHeader>
        <Avatar
          src={avatarSrc}
          alt="My Foto"
        />
      </FirstRow>
      <HomeInfos/>
    </Container>
  )
}

export default Home