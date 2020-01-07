import React from 'react';

import { Container } from './styles';

import {
  IoLogoLinkedin as LinkedinIcon,
  IoLogoGithub as GithubIcon
} from 'react-icons/io'

import {
  FaMedium as MediumIcon,
  FaNpm as NpmIcon,
  FaEnvelope as MailIcon
} from 'react-icons/fa'

function Contact() {
  return (
    <Container>
      <div>
        <a href='https://www.linkedin.com/in/vitor-s-1403b4134' target='_blank' rel='noopener'>
          <LinkedinIcon
            size='40'
          />
        </a>
        <a href='https://medium.com/@vitor.cruz' target='_blank' rel='noopener'>
          <MediumIcon
            size='40'
          />
        </a>
        <a href='https://www.npmjs.com/~tecladistaprod' target='_blank' rel='noopener'>
          <NpmIcon
            size='40'
          />
        </a>
        <a href='https://www.github.com/tecladistaprod' target='_blank' rel='noopener'>
          <GithubIcon
            size='40'
          />
        </a>
        <a href='mailto:vitor.cruz@fatec.sp.gov.br'>
          <MailIcon
            size='40'
          />
        </a>
      </div>
    </Container>
  );
}

export default Contact
