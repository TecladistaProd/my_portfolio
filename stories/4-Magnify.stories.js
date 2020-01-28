import React, { useCallback, useContext } from 'react';
import styled from 'styled-components'
// import { action } from '@storybook/addon-actions';

import Magnify from '../src/components/Magnify'

import image from '../static/test.png'

export default {
  title: 'Magnify Component',
  component: Magnify,
};

const Container = styled.div`
  background-color: #333;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: .7rem 2rem;
  .content {

  }
`

export const Normal = () => {
  return (
    <Container>
      <Magnify
        className='active'
        src={image}
      />
    </Container>
  )
}