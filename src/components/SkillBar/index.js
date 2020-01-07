import React from 'react';

import { Container } from './styles';

function SkillBar({ skill, percent, color }) {
  return (
    <Container percent={percent} color={color}>
      <h4>
        {skill}<span>{percent+'%'}</span>
        <span className='is-2'>Hover Me</span>
      </h4>
      <div></div>
    </Container>
  );
}

export default SkillBar