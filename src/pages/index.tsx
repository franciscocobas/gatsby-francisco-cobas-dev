import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

import '../global.scss';

import FCLogo from '../images/fc-logo.svg';
import MailLogo from '../images/mail.svg';
import GithubLogo from '../images/github.svg';
import LinkedinLogo from '../images/linkedin-logo.svg';

const StyledIndexPageContainer = styled.div`
  background-color: var(--background-black);
  min-height: 100vh;
  padding: 1rem 2rem;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .contact-links {
      img {
        width: 1.5rem;
        height: 1.5rem;
        margin-left: 0.5rem;
      }
    }
  }
  .content {
    color: white;
    display: flex;
    flex-direction: column;
    h1 {
      font-family: 'IBMPlex';
      text-align: center;
      margin-top: 1rem;
    }
    .text {
      order: 1;
      font-family: 'Benne';
    }
    .photo {
      order: 0;
      position: relative;
      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 3rem;
        background: linear-gradient(transparent, var(--background-black));
        left: 0;
        bottom: 0;
      }
    }
  }
`;

const IndexPage = () => (
  <StyledIndexPageContainer>
    <div className='header'>
      <div className='logo'>
        <img src={FCLogo} width={50} height={50} />
      </div>
      <div className='contact-links'>
        <a href='mailto:fcarocena@gmail.com' target='_blank'>
          <img src={MailLogo} />
        </a>
        <a
          href='https://github.com/franciscocobas'
          target='_blank'
          rel='noreferrer'
        >
          <img src={GithubLogo} />
        </a>
        <a
          href='https://www.linkedin.com/in/franciscocobas/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={LinkedinLogo} />
        </a>
      </div>
    </div>
    <div className='content'>
      <h1>Welcome back!</h1>
      <div className='text'>
        <p>
          Hello! I’m Francisco Cobas, I do web development writing Javascript &
          Typescript code.
        </p>
        <p>
          I have a considerable experience working with React in a wide range of
          projects.
        </p>
        <p>
          Also I have a background of Operating System experience wich combine
          perfectly with my front end abilities. I worked in many industries
          such as SAS products, Marketing, Healthcare, Education and more.
        </p>
        <p>
          Lately I’ve been working as a cooperative partener at SUBTE and doing
          freelancing jobs.
        </p>
      </div>
      <div className='photo'>
        <StaticImage src='../images/foto-perfil.webp' alt='Foto de perfil' />
      </div>
    </div>
  </StyledIndexPageContainer>
);

export default IndexPage;
