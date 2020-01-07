import React from 'react';

import { Container } from './styles';

import SkillBar from '../../components/SkillBar'

function About() {
  return (
    <Container>
      <h2>About Me</h2>
      <div className='text-box'>
        <p>
          My name is Vitor da Silva Cruz, i was born in Araraquara SP in Brazil,
          i love technology and develop, always looking be updated and know more and more.
        </p>
        <p>
          Technologist in Internet System, graduated in 2019 by Technology State 
          College (Fatec) At Taquaritinga SP Brazil, an graduation course with 
          classes of algorithms, data structure, mathematics, front end development, 
          back end development, database development, mobile development and 
          among others, but focused in web development.
        </p>
      </div>
      <h2 className='is-2'>
        Skills and Knowledges
      </h2>
      <SkillBar
        skill='HTML'
        color='#ab47bc'
        percent='90'
      />
      <SkillBar
        skill='JavaScript'
        color='#ab47bc'
        percent='90'
      />
      <SkillBar
        skill='CSS'
        color='#ab47bc'
        percent='90'
      />
      <SkillBar
        skill='NodeJS'
        color='#5c6bc0'
        percent='90'
      />
      <SkillBar
        skill='NPM'
        color='#5c6bc0'
        percent='70'
      />
      <SkillBar
        skill='React'
        color='#ff9800'
        percent='75'
      />
      <SkillBar
        skill='React Native'
        color='#ff9800'
        percent='60'
      />
      <SkillBar
        skill='Vue'
        color='#ff9800'
        percent='45'
      />
      <SkillBar
        skill='SASS'
        color='#ff9800'
        percent='60'
      />
      <SkillBar
        skill='Docker'
        color='#00897b'
        percent='30'
      />
      <SkillBar
        skill='Firebase'
        color='#00897b'
        percent='45'
      />
      <SkillBar
        skill='Parcel'
        color='#00897b'
        percent='70'
      />
      <p>
        And other things like wepback, databases (MongoDB, MySQL, SQLite), Heroku...
      </p>
    </Container>
  );
}

export default About