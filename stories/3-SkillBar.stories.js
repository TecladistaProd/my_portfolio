import React from 'react';
import styled from 'styled-components'
// import { action } from '@storybook/addon-actions';
import SkillBar from '../src/components/SkillBar'

export default {
  title: 'SkillBar Component',
  component: SkillBar,
};

const Container = styled.div`
  background-color: #333;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: .7rem 2rem;
  * {
    color: #fff;
  }
`

export const Normal = () => {
  return (
    <Container>
      <SkillBar
        color='#23b272'
        skill='React.JS'
        percent={90}
      />
    </Container>
  )
}