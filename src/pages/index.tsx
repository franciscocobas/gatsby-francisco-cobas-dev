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
  .desktop-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 1rem 2rem;
    @media (min-width: 576px) {
      padding: 0 0 0 4rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      max-width: 1440px;
    }
    .left-panel {
      @media (min-width: 576px) {
        margin-top: 2rem;
      }
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (min-width: 576px) {
          width: 100%;
        }
        .contact-links {
          @media (min-width: 576px) {
            display: none;
          }
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
        .content-text {
          @media (min-width: 576px) {
            margin-top: 2rem;
          }
          h1 {
            font-family: 'IBMPlex';
            text-align: center;
            margin-top: 1rem;
            @media (min-width: 576px) {
              font-size: 4rem;
              text-align: left;
            }
          }
          .text {
            font-family: 'Benne';
            @media (min-width: 576px) {
              width: 26rem;
            }
          }
        }
        .photo-mobile {
          position: relative;
          @media (min-width: 576px) {
            display: none;
          }
        }
      }
    }
  }

  .photo {
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
  .photo-desktop {
    display: none;
    @media (min-width: 576px) {
      display: block;
    }
  }
`;

const IndexPage = () => (
  <StyledIndexPageContainer>
    <div className='desktop-container'>
      <div className='left-panel'>
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
          <div className='content-text'>
            <h1>Welcome back</h1>
            <div className='photo photo-mobile'>
              <StaticImage
                src='../images/foto-perfil.webp'
                alt='Foto de perfil'
              />
            </div>
            <div className='text'>
              <p>
                Hello! I’m Francisco Cobas, I do web development writing
                Javascript & Typescript code.
              </p>
              <p>
                I have a considerable experience working with React in a wide
                range of projects.
              </p>
              <p>
                Also I have a background of Operating System experience wich
                combine perfectly with my front end abilities. I worked in many
                industries such as SAS products, Marketing, Healthcare,
                Education and more.
              </p>
              <p>
                Lately I’ve been working as a cooperative partener at SUBTE and
                doing freelancing jobs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='photo photo-desktop'>
        <StaticImage src='../images/foto-perfil.webp' alt='Foto de perfil' />
      </div>
    </div>
  </StyledIndexPageContainer>
);

export default IndexPage;
